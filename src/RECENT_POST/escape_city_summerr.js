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
import ConnectWithUs from '../COMPONENTS/connectWithUs';
import BottomView from '../COMPONENTS/BottomView';
import Icon from 'react-native-vector-icons/Entypo';

import Randompost from '../homescreens/randompost';
import Prev_Newer from '../COMPONENTS/prev_Newer';
import Imgcomp from '../COMPONENTS/imgcomp';

const Escape_city_summerr = () => {
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
              source={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/Affinity-Luxury-Logo.jpg')}
            />
            <View className="flex-row">
              <TouchableOpacity onPress={opendrower}>
                <Image
                  style={{width: wp(8), height: hp(5), tintColor: 'black'}}
                  source={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/bars.png')}
                />
              </TouchableOpacity>

              <Text
                className="text-xl"
                style={{
                  color: 'rgb(199, 167, 112)',
                  alignSelf: 'center',
                  fontFamily: 'OpenSans_Condensed-Medium',
                  letterSpacing: 1.5,
                  textAlign: 'center',
                  width: wp(80),
                }}>
                Escape The City For A Summer At Champneys
              </Text>
            </View>
          </View>
          <View style={{marginTop: hp(2)}}>
            <View>
              <TouchableOpacity>
                <Imgcomp
                  url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/postcopy1.jpg')}
                />
              </TouchableOpacity>

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
                      marginHorizontal: wp(3),
                    }}>
                    - TRAVEL, LATEST TRAVEL NEWS
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
                Escape the City for a Summer at Champneys
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
                / June 20, 2024
              </Text>
              <Text style={[styles.description, {marginTop: hp(4)}]}>
                Escape the hustle and bustle of London and embark on a journey
                of tranquillity and rejuvenation at Champneys Spa Resorts. With
                a legacy of luxury and wellness, Champneys offers the perfect
                retreat at three stunning locations: Tring, Henlow Grange, and
                Eastwell Manor, all within 90 minutes drive of London.
              </Text>
              <Text style={styles.description}>
                Champneys Tring | Hertfordshire
              </Text>
              <Text style={styles.description}>
                Set in the rolling Hertfordshire hills, Champneys Tring is a
                historic manor house renowned for pioneering and perfecting
                health and wellbeing treatments since 1925.
              </Text>

              <Imgcomp
                url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/postcopy2.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />

              <Text style={[styles.description, {marginTop: hp(4)}]}>
                Surrounded by 170 acres of picturesque countryside and is hailed
                as the UK’s first health spa. The iconic destination provides an
                idyllic setting for a relaxing getaway. Guests can enjoy a range
                of world-class spa treatments, state-of-the-art fitness
                facilities, and delicious, health-conscious cuisine.
              </Text>

              <Imgcomp
                url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/postcopy3.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                Champneys Henlow Grange | Bedfordshire
              </Text>
              <Text style={styles.description}>
                Located in the scenic Bedfordshire countryside, Champneys Henlow
                Grange combines historic charm with modern luxury. The Georgian
                manor house, set on the banks of the River Hiz, offers a serene
                and sophisticated atmosphere
              </Text>
              <Imgcomp
                url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/postcopy5.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                With therapeutic treatments available on the spa menu including
                hydrotherapy pools, saunas, and expert-led fitness classes,
                Henlow Grange is ideal for those seeking to rejuvenate their
                mind, body, and spirit.
              </Text>

              <Imgcomp
                url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/postcopy6.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                Champneys Eastwell Manor | Kent
              </Text>
              <Text style={styles.description}>
                Nestled in the beautiful Kent countryside, Champneys Eastwell
                Manor is a breathtakingly beautiful estate that promises an
                unforgettable spa experience. The Neo-Elizabethan manor house
                exudes elegance and offers a variety of wellness programs
                tailored to your needs.
              </Text>

              <Imgcomp
                url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/postcopy7.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                Guests can enjoy exquisite dining, holistic treatments, and
                invigorating activities in a tranquil, rural setting. Eastwell
                Manor’s opulent surroundings and exceptional service make it the
                ideal spot for a luxurious spa break. 
                     
              </Text>
              <Imgcomp
                url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/postcopy8.jpg')}
                resizeMode={'cover'}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                Champneys Day Spa packages start from £180 per person.
              </Text>

              <View className="mb-14">
                <View
                  style={{marginTop: hp(3)}}
                  className="flex-row justify-around">
                  <CustomBTN
                    height={3}
                    width={5}
                    image={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/facebook-app-symbol.png')}
                  />
                  <CustomBTN
                    height={3}
                    width={6}
                    image={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/twitter.png')}
                  />
                  <CustomBTN
                    height={3}
                    width={6}
                    image={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/google-plus-logo.png')}
                  />
                  <CustomBTN
                    height={3}
                    width={5}
                    image={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/linkedin.png')}
                  />
                </View>
                <CustomBTN
                  self={'center'}
                  height={3}
                  width={5}
                  image={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/tumblr.png')}
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
                    source={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/star(2).png')}
                  />
                ) : (
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: 'rgb(199, 167, 112)',
                    }}
                    source={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/star(1).png')}
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
            source={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/MAIN-IMAGE-Affinity-Magazine-April-2024.jpg')}
          />

          <ConnectWithUs />
        </View>
        <BottomView scrollToTop={scrollToTop} />
      </View>
    </ScrollView>
  );
};

export default Escape_city_summerr;

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
  description: {
    color: 'black',
    fontSize: 22,
    lineHeight: hp(4),
    letterSpacing: 0,
    marginVertical: hp(1.5),
    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
    fontFamily: 'OpenSans-Regular',
  },
});
