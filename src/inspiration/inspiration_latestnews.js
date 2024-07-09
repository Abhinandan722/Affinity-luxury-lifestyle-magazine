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
import {BEAUTY, FASHION, Products, fashionANDBeauty} from '../products';

import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomView from '../COMPONENTS/BottomView';

import CustomBTN from '../COMPONENTS/customBTN';
import Header from '../COMPONENTS/headers/header';

const Inspiration_latestnews = () => {
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
      const newItems = BEAUTY.slice((currentPage - 1) * 5, currentPage * 5);
      setHomescreendata([...homescreendata, ...newItems]);
      setCurrentPage(currentPage + 1);

      if (homescreendata.length + newItems.length >= BEAUTY.length) {
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
        <Header category={'Latest News'}/>
        
          <Text
              className="text-7xl  my-10"
              style={{
                alignItems: 'center',
                color: 'black',
                lineHeight: hp(10),
                fontFamily: 'PlayfairDisplay-Medium',
                textAlign: 'center',
              }}>
       Latest News
            </Text>

          <View className="mb-6 mt-6 ">
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
        <BottomView scrollToTop={scrollToTop} />
      </View>
    </ScrollView>
  );
};

export default Inspiration_latestnews;

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
