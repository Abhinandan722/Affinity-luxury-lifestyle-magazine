import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  useNavigation,
  DrawerActions,
  DrawerRouter,
} from '@react-navigation/native';
import {Products, fashionANDBeauty} from '../products';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomBTN from '../COMPONENTS/customBTN';
import BottomView from '../COMPONENTS/BottomView';
import ConnectWithUs from '../COMPONENTS/connectWithUs';
import Card from '../COMPONENTS/Card/card';
import Header from '../COMPONENTS/headers/header';
import { getData } from '../API/api';

const Fashion$beauty = () => {
  const drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [allitem, setAllitem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false); // State to track if all items are loaded
  useEffect(() => {
    loadMoreData();
    
  }, []);
  const loadMoreData = async () => {
    if (isLoading ) return; // Prevent further calls if all data is loaded or already loading
    setIsLoading(true);
    console.log('fashion age  red');
    console.log(' fashion page num', currentPage);
               
    try {
      const result = await getData(`/custom/v1/content?categories=8&per_page=100&page=${currentPage}`); // Updated API call for pagination
      setAllitem(prevData => [...prevData, ...result]);
      setCurrentPage(prevPage => prevPage + 1); // Move this inside the successful data fetch block
    } catch (error) {
      console.error('Error in All data fetching in home screen:', error);
    } finally {
      setIsLoading(false);
    }
  };

 
  const handleEndReached = () => {
    loadMoreData();
  };

 
  

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({y: 0, animated: true, duration: 1000});
  };

  const opendrower = () => {
    navigation.openDrawer();
  };

  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: wp(5), backgroundColor: 'white'}}>
          <Header category={'FASHION AND BEAUTY'}/>
          
          <View style={{marginTop: hp(2)}}>
            <FlatList
              scrollEnabled={false}
              data={allitem}
              style={{marginBottom: 15}}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <Card
                      item={item}
                      navigationn={() =>
                        navigation.navigate('detialpage', {item})
                      }
                    />
                    <View
                      style={{marginVertical: hp(5)}}
                      className="flex-row justify-around mb-20">
                      <CustomBTN
                        height={3}
                        width={5}
                        image={require('../img/facebook-app-symbol.png')}
                      />
                      <CustomBTN
                        height={3}
                        width={6}
                        image={require('../img/twitter.png')}
                      />
                      <CustomBTN
                        height={3}
                        width={5}
                        image={require('../img/linkedin.png')}
                      />
                      <CustomBTN
                        height={3}
                        width={5}
                        image={require('../img/tumblr.png')}
                      />
                    </View>
                  </View>
                );
              }}
              onEndReached={loadMoreData}
              onEndReachedThreshold={0.5}
              ListFooterComponent={
                isLoading ? (
                  <ActivityIndicator size="large" color="rgb(199, 167, 112)" />
                ) : null
              }
            />
          </View>

          <Image
            style={{
              width: wp(90),
              height: hp(70),
              resizeMode: 'cover',
              marginVertical: hp(8),
            }}
            source={require('../img/MAIN-IMAGE-Affinity-Magazine-April-2024.jpg')}
          />

          <ConnectWithUs />
        </View>
        <BottomView scrollToTop={scrollToTop} />
      </View>
    </ScrollView>
  );
};

export default Fashion$beauty;

const styles = StyleSheet.create({
  mainTextView: {
    position: 'relative',
  },
  mainlogo: {
    height: hp(12),
    width: wp(90),
    resizeMode: 'contain',
  },
});

// -----+--
