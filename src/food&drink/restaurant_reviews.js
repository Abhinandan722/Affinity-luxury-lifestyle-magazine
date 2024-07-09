import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {LATEST_TRAVEL_of_drink_food, LIFE_STYLE, Products, TRAVEL, restaurant_reviews} from '../products';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomBTN from '../COMPONENTS/customBTN';
import BottomView from '../COMPONENTS/BottomView';
import ConnectWithUs from '../COMPONENTS/connectWithUs';
import Card from '../COMPONENTS/Card/card';
import Header from '../COMPONENTS/headers/header';

const Restaurant_reviews = () => {
  const drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [homescreendata, setHomescreendata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false); // State to track if all items are loaded
  useEffect(() => {
    loadMoreData();
    
    
  }, []);

  const loadMoreData = () => {
    if (isLoading || allLoaded) return; // Stop loading if already loading or all items are loaded

    setIsLoading(true);
    // Simulating an API call with a timeout
    setTimeout(() => {
      const newItems = restaurant_reviews.slice((currentPage - 1) * 5, currentPage * 5);
      setHomescreendata([...homescreendata, ...newItems]);
      setCurrentPage(currentPage + 1);

      if (homescreendata.length + newItems.length >= restaurant_reviews.length) {
        setAllLoaded(true); // Set allLoaded to true if all items are loaded
      }
      setIsLoading(false);
    }, 1000);
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
        <Header category={'Restaurant and Reviews'}/>
        
          <View style={{marginTop: hp(2)}}>
            <FlatList
              scrollEnabled={false}
              data={homescreendata}
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

<View className="mb-14">
                <View
                  style={{marginTop: hp(3)}}
                  className="flex-row justify-around">
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
                    width={6}
                    image={require('../img/google-plus-logo.png')}
                  />
                  <CustomBTN
                    height={3}
                    width={5}
                    image={require('../img/linkedin.png')}
                  />
                </View>
                <CustomBTN
                  self={'center'}
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

export default Restaurant_reviews;

const styles = StyleSheet.create({
  mainTextView: {
    position: 'relative',
  },
  mainlogo: {
    height: hp(12),
    width: wp(90),
    resizeMode: 'contain',
  },
  line: {
    height: 0.5,
    width: wp(5),
    backgroundColor: 'rgb(199, 167, 112)',
  },
});

// -----+--
