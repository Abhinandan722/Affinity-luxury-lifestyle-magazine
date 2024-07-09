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

import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomBTN from '../COMPONENTS/customBTN';
import BottomView from '../COMPONENTS/BottomView';
import ConnectWithUs from '../COMPONENTS/connectWithUs';
import Icon from 'react-native-vector-icons/Entypo';
import Imgcomp from '../COMPONENTS/imgcomp';
import Randompost from '../homescreens/randompost';
import Prev_Newer from '../COMPONENTS/prev_Newer';

const FashionDetialpage = ({route}) => {
  const {item} = route.params;
  const drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [toggle, setToggle] = useState(0);

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
          <View style={styles.mainTextView}>
            <Image
              style={styles.mainlogo}
              source={require('../img/Affinity-Luxury-Logo.jpg')}
            />
          </View>
          <View style={{marginTop: hp(2)}}>
            <View>
              <View className="my-4">
                <Imgcomp height={hp(40)} url={item.image} />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: hp(1),
                  }}>
                  <View
                    style={{
                      backgroundColor: 'rgb(199, 167, 112)',
                      height: 2,
                      flex: 1,
                    }}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: 22,
                      fontWeight: '600',
                      letterSpacing: 1.5,
                      fontFamily: 'OpenSans_Condensed-Medium',
                      marginHorizontal: wp(1),
                    }}>
                    {' '}
                    {item.name}
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'rgb(199, 167, 112)',
                      height: 2,
                      flex: 1,
                    }}
                  />
                </View>
              </View>

              <Text
                style={{
                  alignItems: 'center',
                  color: 'black',
                  fontSize: 40,
                  fontFamily: 'PlayfairDisplay-Medium',
                  textAlign: 'center',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 23,
                  color: 'rgb(170, 170, 170)',
                  fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                  marginTop: hp(1),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 22,
                    color: 'rgb(199, 167, 112)',
                  }}>
                  Admin
                </Text>
                {item.date}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 22,
                  lineHeight: hp(3.6),
                  letterSpacing: 1,
                  marginVertical: hp(1.5),
                  fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                  fontFamily: 'OpenSans-Regular',
                  opacity: 0.9,
                  marginTop: hp(5),
                }}>
                {item.description.slice(0, 74)}
              </Text>
              <View className="gap-14">
                <View>
                  <Imgcomp
                    width={wp(90)}
                    height={hp(42)}
                    marginVertical={hp(2)}
                    resizeMode={'contain'}
                    url={item.descriptionONE.image}
                    overflow={'hidden'}
                  />

                  <View className="items-center">
                    <Text
                      style={[styles.description, {marginVertical: hp(0.3)}]}>
                      {item.descriptionONE.paramone}
                    </Text>
                    <Text
                      style={[
                        styles.description,
                        {marginVertical: hp(0.3), color: 'rgb(199, 167, 112)'},
                      ]}>
                      {item.descriptionONE.paramtwo}
                    </Text>
                  </View>
                </View>
                <View>
                  <Imgcomp
                    width={wp(90)}
                    height={hp(42)}
                    marginVertical={hp(2)}
                    resizeMode={'contain'}
                    url={item.descriptionTWO.image}
                    overflow={'hidden'}
                  />

                  <View className="items-center">
                    <Text
                      style={[styles.description, {marginVertical: hp(0.3)}]}>
                      {item.descriptionONE.paramone}
                    </Text>
                    <Text
                      style={[
                        styles.description,
                        {marginVertical: hp(0.3), color: 'rgb(199, 167, 112)'},
                      ]}>
                      {item.descriptionONE.paramtwo}
                    </Text>
                  </View>
                </View>
                <View>
                  <Imgcomp
                    width={wp(90)}
                    height={hp(42)}
                    marginVertical={hp(2)}
                    resizeMode={'contain'}
                    url={item.descriptionTHREE.image}
                    overflow={'hidden'}
                  />

                  <View className="items-center">
                    <Text
                      style={[styles.description, {marginVertical: hp(0.3)}]}>
                      {item.descriptionONE.paramone}
                    </Text>
                    <Text
                      style={[
                        styles.description,
                        {marginVertical: hp(0.3), color: 'rgb(199, 167, 112)'},
                      ]}>
                      {item.descriptionONE.paramtwo}
                    </Text>
                  </View>
                </View>
                <View>
                  <Imgcomp
                    width={wp(90)}
                    height={hp(42)}
                    marginVertical={hp(2)}
                    resizeMode={'contain'}
                    url={item.descriptionFOUR.image}
                    overflow={'hidden'}
                  />

                  <View className="items-center">
                    <Text
                      style={[styles.description, {marginVertical: hp(0.3)}]}>
                      {item.descriptionONE.paramone}
                    </Text>
                    <Text
                      style={[
                        styles.description,
                        {marginVertical: hp(0.3), color: 'rgb(199, 167, 112)'},
                      ]}>
                      {item.descriptionONE.paramtwo}
                    </Text>
                  </View>
                </View>
                <View>
                  <Imgcomp
                    width={wp(90)}
                    height={hp(42)}
                    marginVertical={hp(2)}
                    resizeMode={'contain'}
                    url={item.descriptionFIVE.image}
                    overflow={'hidden'}
                  />

                  <View className="items-center">
                    <Text
                      style={[styles.description, {marginVertical: hp(0.3)}]}>
                      {item.descriptionONE.paramone}
                    </Text>
                    <Text
                      style={[
                        styles.description,
                        {marginVertical: hp(0.3), color: 'rgb(199, 167, 112)'},
                      ]}>
                      {item.descriptionONE.paramtwo}
                    </Text>
                  </View>
                </View>
                <View>
                  <Imgcomp
                    width={wp(90)}
                    height={hp(42)}
                    marginVertical={hp(2)}
                    resizeMode={'contain'}
                    url={item.descriptionSIX.image}
                    overflow={'hidden'}
                  />

                  <View className="items-center">
                    <Text
                      style={[styles.description, {marginVertical: hp(0.3)}]}>
                      {item.descriptionONE.paramone}
                    </Text>
                    <Text
                      style={[
                        styles.description,
                        {marginVertical: hp(0.3), color: 'rgb(199, 167, 112)'},
                      ]}>
                      {item.descriptionONE.paramtwo}
                    </Text>
                  </View>
                </View>
                <View>
                  <Imgcomp
                    width={wp(90)}
                    height={hp(42)}
                    marginVertical={hp(2)}
                    resizeMode={'contain'}
                    url={item.descriptionSEVEN.image}
                    overflow={'hidden'}
                  />

                  <View className="items-center">
                    <Text
                      style={[styles.description, {marginVertical: hp(0.3)}]}>
                      {item.descriptionONE.paramone}
                    </Text>
                    <Text
                      style={[
                        styles.description,
                        {marginVertical: hp(0.3), color: 'rgb(199, 167, 112)'},
                      ]}>
                      {item.descriptionONE.paramtwo}
                    </Text>
                  </View>
                </View>
                <View>
                  <Imgcomp
                    width={wp(90)}
                    height={hp(42)}
                    marginVertical={hp(2)}
                    resizeMode={'contain'}
                    url={item.descriptionEAT.image}
                    overflow={'hidden'}
                  />

                  <View className="items-center">
                    <Text
                      style={[styles.description, {marginVertical: hp(0.3)}]}>
                      {item.descriptionONE.paramone}
                    </Text>
                    <Text
                      style={[
                        styles.description,
                        {marginVertical: hp(0.3), color: 'rgb(199, 167, 112)'},
                      ]}>
                      {item.descriptionONE.paramtwo}
                    </Text>
                  </View>
                </View>
                <View>
                  <Imgcomp
                    width={wp(90)}
                    height={hp(42)}
                    marginVertical={hp(2)}
                    resizeMode={'contain'}
                    url={item.descriptionNINE.image}
                    overflow={'hidden'}
                  />

                  <View className="items-center">
                    <Text
                      style={[styles.description, {marginVertical: hp(0.3)}]}>
                      {item.descriptionONE.paramone}
                    </Text>
                    <Text
                      style={[
                        styles.description,
                        {marginVertical: hp(0.3), color: 'rgb(199, 167, 112)'},
                      ]}>
                      {item.descriptionONE.paramtwo}
                    </Text>
                  </View>
                </View>
              </View>
              <View className="mb-7">
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
              <TouchableOpacity
                onPress={() => {
                  if (toggle == 0) {
                    setToggle('1');
                  }
                  if (toggle == 1) {
                    setToggle('0');
                  }
                }}
                className="flex-row gap-1  border-[0.5px] w-16 h-10  justify-center items-center self-end mt-2 "
                style={{
                  borderColor:
                    toggle == 0 ? 'rgb(170, 170, 170)' : 'rgb(199, 167, 112)',
                }}>
                <Text
                  className="text-xl"
                  style={{
                    color:
                      toggle == 1 ? 'rgb(199, 167, 112)' : 'rgb(170, 170, 170)',
                  }}>
                  {toggle}
                </Text>
                {toggle == 0 ? (
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: 'rgb(170, 170, 170)',
                    }}
                    source={require('../img/star(2).png')}
                  />
                ) : (
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: 'rgb(199, 167, 112)',
                    }}
                    source={require('../img/star(1).png')}
                  />
                )}
              </TouchableOpacity>
              {/* this is a prev and next view  */}
              <Prev_Newer />
              {/* random  post view */}
              <Randompost />
            </View>
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

export default FashionDetialpage;

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
  lineone: {
    height: 0.5,
    width: wp(6),
    backgroundColor: 'rgb(170, 170, 170)',
  },
  randomView: {},
  description: {
    color: 'black',
    fontSize: 22,
    lineHeight: hp(4),
    letterSpacing: 0,
    marginVertical: hp(1.5),

    fontFamily: 'OpenSans-Regular',
  },
});
