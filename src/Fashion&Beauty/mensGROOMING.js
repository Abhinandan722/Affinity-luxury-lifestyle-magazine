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
import {BEAUTY} from '../products';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomView from '../COMPONENTS/BottomView';
import ConnectWithUs from '../COMPONENTS/connectWithUs';
import Header from '../COMPONENTS/headers/header';

const MensGROOMING = () => {
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
        <Header category={'MEN’S GROOMING'}/>
         

          <Image
            style={{
              width: wp(90),
              height: hp(70),
              resizeMode: 'cover',
              marginVertical: hp(5),
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

export default MensGROOMING;

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
