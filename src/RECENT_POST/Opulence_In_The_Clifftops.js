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
  
  const Opulence_In_The_Clifftops = () => {
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
           Opulence In The Clifftops
                </Text>
              </View>
            </View>
            <View style={{marginTop: hp(2)}}>
              <View>
                <TouchableOpacity>
                  <Imgcomp
                    url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpost_opulence1.jpg')}
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
            Opulence In The Clifftops
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
                  /  June 14, 2024
                </Text>
                <Text style={[styles.description, {marginTop: hp(4)}]}>
                Escape to Pennsylvania Castle Estate in Dorset this summer, a secluded haven on the Jurassic Coastline. The Estate offers an array of accommodation and services, carefully catering to the varying needs of its guests. From those chasing the thrill of outdoor activities staying in “The Front Rows” to those looking for the height of luxury at The Penn and Clifftops, the Estate is the perfect place to do as much or as little as you want.
                </Text>
              
  
                <Imgcomp
                  url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpost_opulence2.jpg')}
                
                  marginVertical={hp(5)}
                />
  
                <Text style={[styles.description, {marginTop: hp(4)}]}>
                Clifftops consists of 5 beautiful self-catering apartments, each with a unique design focus, nestled into the cliffs just below the Estate and Pennsylvania Castle.  Providing uninterrupted panoramas of the English Channel, each lodge is angled out to face the natural environment.  Waking up in each apartment is a truly unique and atmospheric experience throughout the year.  The lodges are individually named and styled to reflect the surrounding environment that created Clifftops: Blue, Stone, Copper, Silva and Ope.
                </Text>
  
                <Imgcomp
                  url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpost_opulence3.jpg')}
                
                  marginVertical={hp(5)}
                />
                <Text style={styles.description}>
                The lodges are built from stone selected from Portland’s Albion Stone Mines and cut just minutes away from Penn Estate. Outside, the clifftop flora has been recreated to attract the local butterflies and visiting birds. The copper wrapped lodges will sustainably age to retreat into the natural landscape over time. 
                </Text>
              
                <Imgcomp
                  url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpost_opulence4.jpg')}
            
                  marginVertical={hp(5)}
                />
                <Text style={styles.description}>
                Guests will be drawn to the ancient fossilised sea creatures, captured within the stone walls.  Each extraordinary reception room brings together timber and stone that flows through into the hand planted cliff-edge gardens.
                </Text>
  
                <Imgcomp
                  url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpost_opulence5.jpg')}
                
                  marginVertical={hp(5)}
                />
                
                <Text style={styles.description}>
                With free WiFi throughout, every lodge includes a Bose portable sound system, a Samsung smart TV and its own iPad for guest information and lodge management. Bespoke fires have been designed for both warmth and visual impact in addition to underfloor heating. Fully fitted kitchens and modern living spaces include high- quality fixtures and furnishings, handpicked for each lodge to create variation to the overall design theme.
                </Text>
  
                <Imgcomp
                  url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpost_opulence6.jpg')}
                 
                  marginVertical={hp(5)}
                />
                <Text style={styles.description}>
                Additional luxuries include an outdoor hot tub and outdoor kitchen at ‘Ope’, perfect for entertaining larger groups.  Clifftops can be hired as a single hire, offering a unique corporate retreat experience, a spectacular events space or intimate wedding location.  Clifftops can also be hired in conjunction with the Castle, providing additional luxury accommodation.
                       
                </Text>
                <Imgcomp
                  url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpost_opulence7.jpg')}
                  resizeMode={'cover'}
                  marginVertical={hp(5)}
                />
                <Text style={styles.description}>
                BOOK IT
                       
                </Text>

                <Text style={[styles.description]}>
                For more information or to book, visit
                <Text style={{color: 'rgb(199, 167, 112)'}}
                > The Penn Estate here.
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
  
  export default Opulence_In_The_Clifftops;
  
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
  