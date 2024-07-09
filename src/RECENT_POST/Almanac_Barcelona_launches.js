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

const Almanac_Barcelona_launches = () => {
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
                Almanac Barcelona Launches America’s Cup Package
              </Text>
            </View>
          </View>
          <View style={{marginTop: hp(2)}}>
            <View>
              <TouchableOpacity>
                <Imgcomp
                  url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpostTWO1.jpg')}
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
                Almanac Barcelona launches America’s Cup Package
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
                To mark the arrival of the 37th Louis Vuitton America’s Cup,
                Almanac Barcelona has created a bespoke America’s Cup Package
                running from August – October 2024. Bringing the boutique
                Almanac touch, the package offers a unique opportunity to
                experience the thrill of the world’s oldest and most prestigious
                yachting contest, set against the backdrop of Barcelona’s
                end-of-summer buzz. From specially curated menus to private
                ferry transfers for front-row access to the regatta, the
                America’s Package carries all the fixings of quiet luxury,
                offering a dip into the discreet world of legacy sailing.
              </Text>

              <Imgcomp
                url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpostTWO2.jpg')}
                marginVertical={hp(5)}
              />

              <Text style={[styles.description, {marginTop: hp(4)}]}>
                Guests can expect on-deck facilities that have been customised
                to replicate Almanac Barcelona itself: hotel slippers and
                bathrobes in the cabins, and special edition amenities by Jimmy
                Boyd – Barcelona’s leading family-owned perfume house – in the
                bathrooms: all characteristic of Almanac’s signature nod to
                history and nostalgia.
              </Text>

              <Imgcomp
                url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpostTWO3.jpg')}
                marginVertical={hp(5)}
              />

              <Text style={styles.description}>
                Adding a more contemporary edge, the on-board Almanac Barcelona
                team bring the hotel’s acclaimed restaurant, Virens off-shore
                with a delicious, seasonal plant-forward menu designed by
                Michelin-starred chef, Rodrigo de la Calle. Expect osmotized
                melon with lime and ham, fish and fennel ceviche, shrimp salad
                with coloured caviar and pumpkin and strawberry mini crema
                catalana with yogurt foam: all paired with local natural wines.
                Meanwhile, the on-board Almanac team will serve onboard craft
                cocktails and a special edition homemade celery and passion
                fruit kombucha cava from Almanac Barcelona’s rooftop bar and
                well-known city hotspot, Azimuth.
              </Text>
              <Imgcomp
                url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpostTWO4.jpg')}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                Late summer into early autumn is the perfect time of year to
                visit Barcelona, and Almanac Barcelona’s America’s Cup package
                is a must for those keen to experience this legendary event away
                from the crowds, yet in the heart of the action.
              </Text>
              <Text style={styles.description}>
                The Almanac Barcelona America’s Cup package includes:
              </Text>

              <View style={styles.bullet}
               className="gap-1 mt-10"
              >

              
                    <Text style={{alignItems:'center'}} >
                    <View 
                     style={{height:hp(1),width:wp(2),backgroundColor:'black',borderRadius:100}}/>
                    <Text style={styles.description}>  Two nights in a suite, including breakfast</Text> 
                    </Text>

                    <Text >
                    <View 
                     style={{height:hp(1),width:wp(2),backgroundColor:'black',borderRadius:100}}/>
                    <Text style={styles.description}
                    >   Limited edition welcome pack, including Almanac beach bag, towel and branded cap
                    </Text> 
                    </Text>

              <Text >
                    <View 
                     style={{height:hp(1),width:wp(2),backgroundColor:'black',borderRadius:100}}/>
                    <Text style={styles.description}
                    >   Private transfer to and from the Almanac Barcelona yacht at the port
                    </Text> 
                    </Text>

                    <Text >
                    <View 
                     style={{height:hp(1),width:wp(2),backgroundColor:'black',borderRadius:100}}/>
                    <Text style={styles.description}
                    >   Almanac Barcelona America’s Cup boat experience including all F&B
                    </Text> 
                    </Text>

                    <Text >
                    <View 
                     style={{height:hp(1),width:wp(2),backgroundColor:'black',borderRadius:100}}/>
                    <Text style={styles.description}
                    >   Front row spot to watch the America’s Cup
                    </Text> 
                    </Text>

                    <Text >
                    <View 
                     style={{height:hp(1),width:wp(2),backgroundColor:'black',borderRadius:100}}/>
                    <Text style={styles.description}
                    >   Swimming off the yacht as and when guests fancy: a unique take on Barcelona from the sea, away from the beach crowds
                    </Text> 
                    </Text>

                  
               
              

              </View>
























              <Imgcomp
                url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpostTWO5.jpg')}
                marginVertical={hp(5)}
              />

              <Text style={styles.description}>
                Situated around Port Vell and along the beach to Port Olímpic,
                37th Louis Vuitton America’s Cup promises to be one of the most
                intense America’s Cups in the event’s 174-year history. Every
                Saturday from 31st August to 26th October, Almanac Barcelona
                guests can enjoy privileged access throughout the full two
                months of racing.
              </Text>

              <Imgcomp
                url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpostTWO6.jpg')}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>BOOK IT</Text>

              <Text style={styles.description}>
                Almanac Barcelona’s America’s Cup package starts from €2,700 for
                two people, based on two nights sharing in an Almanac Junior
                Suite.
              </Text>
              <Text style={styles.description}>
                Package / Boat departure dates: 31st August, 7th September, 14th
                September, 21st September, 5th October, 12th October, 19th
                October, 26th October 2024.
              </Text>

              <Text style={[styles.description]}>
                For more information or to book, visit
                <Text style={{color: 'rgb(199, 167, 112)'}}
                >  Almanac Barcelona.
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

export default Almanac_Barcelona_launches;

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
