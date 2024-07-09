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

const An_Italian_Film_Weekend = () => {
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
             An Italian Film Takeover Weekend
              </Text>
            </View>
          </View>
          <View style={{marginTop: hp(2)}}>
            <View>
              <TouchableOpacity>
                <Imgcomp
                  url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/ee1.jpg')}
                />
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginTop:hp(2)
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
                    - LIFESTYLE, LATEST NEWS
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
         An Italian Film Takeover Weekend
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
              Disaronno, the world’s favourite Italian liqueur, is bringing Italian Dolce Vita glamour to London with an Italian Film Takeover Weekend, at Rooftop Film Club, the original outdoor cinema in the sky, at the Bussey Building in Peckham.
              </Text>
              <Text style={[styles.description, {marginTop: hp(4)}]}>
              Over the course of the weekend, guests will be able to enjoy views of London’s iconic skyline, whilst being transported to the Italian Rivera, as they enjoy a bespoke programme of eight Italian-themed films, including The Talented Mr Ripley and Call Me By Your Name.
              </Text>

              <Imgcomp
                url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/ee2.jpg')}
               height={hp(70)}
               resizeMode={'cover'}
                marginVertical={hp(5)}
              />

              <Text style={[styles.description, {marginTop: hp(0)}]}>
              Each film has been expertly chosen to be enjoyed with silky smooth Velvet Batida’s, Disaronno Velvet on the rocks, and a perfect one-off pizza pairing from Share a Slice. Disaronno Velvet and Rooftop Film Club are truly revelling in an Italian Dolce Vita summer.
              </Text>

             

              <Text style={styles.description}>
              Friday 28th June 2024
              </Text>
             
              <Text style={styles.description}>
              1pm – Under The Tuscan Sun | 8.30pm – The Godfather
              </Text>
              <Text style={styles.description}>
              Saturday 29th June 2024
              </Text>
          
              <Text style={styles.description}>
              1pm – Call Me By Your Name |  5pm – Cinema Paradiso | 8.45pm – Romeo & Juliet by Baz Luhrmann
              </Text>
             
              <Text style={styles.description}>
              Sunday 30th June 2024
              </Text>
            
             
              <Text style={styles.description}>
              1pm – Roman Holiday | 4.45pm – Gladiator | 8.30pm – The Talented Mr. Ripley
              </Text>
             

            

            

             
              <Text style={[styles.description,]} className="my-5">
                BOOK IT</Text>

              <Text style={styles.description}>
              Adult tickets start from £12.95 (Rooftop Film Club is an 18+ venue after 5pm).
              </Text>
            

              <Text style={[styles.description]}>
              Film programming and consumer tickets are available at
                <Text style={{color: 'rgb(199, 167, 112)'}}
                > rooftopfilmclub.com.
                </Text>
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

export default An_Italian_Film_Weekend;

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
