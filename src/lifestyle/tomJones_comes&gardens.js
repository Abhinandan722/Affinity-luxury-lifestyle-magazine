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
import Imgcomp from '../COMPONENTS/imgcomp';
import Randompost from '../homescreens/randompost';
import Prev_Newer from '../COMPONENTS/prev_Newer';
import Header from '../COMPONENTS/headers/header';

const TomJones_comes_gardens = () => {
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
        <Header category={'TOM JONES COMES TO AUDLEY END HOUSE & GARDENS'}/>
         
          <View style={{marginTop: hp(2)}}>
            <View>
              <TouchableOpacity className="mt-5">
                <Imgcomp url={require('../img/tomjams.jpg')} />
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <View style={{flexDirection: "row", alignItems: "center", marginVertical: hp(1)}}>
          <View style={{   backgroundColor: 'rgb(199, 167, 112)', height: 2, flex: 0.6,}} />
          <Text style={{
            textAlign: 'center',
            color: 'black',
            fontSize: 22,
            fontWeight: '600',
            letterSpacing: 1.5,
            fontFamily: 'OpenSans_Condensed-Medium',
            marginHorizontal:wp(3)
          }}>- LIFESTYLE, ENTERTAINMENT, UNCATEGORIZED</Text>
          <View style={{   backgroundColor: 'rgb(199, 167, 112)', height: 2, flex: 0.6}} />

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
                TOM JONES COMES TO AUDLEY END HOUSE & GARDENS
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
                / January 26, 2022
              </Text>
              <Text style={[styles.description, {marginTop: hp(4)}]}>
                The legendary Tom Jones has been announced to perform a special
                outdoor show in the grounds of English Heritage’s Audley End
                House & Gardens, as part of this summer’s Heritage Live concert
                series.
              </Text>
              <Text style={styles.description}>
                Sir Tom will take to the stage on Sunday 14th August 2022, set
                to the stunning backdrop of one of England’s grandest mansions
                in the heart of the stunning Essex countryside. Special guests
                for the evening will be announced.
              </Text>

              <Text style={[styles.description, {marginTop: hp(4)}]}>
                With a career spanning over 50 years, Tom Jones has gone from
                strength to strength, with his seminal and ubiquitous hits such
                as ‘It’s Not Unusual’, ‘Kiss’, ‘Delilah’, ‘What’s New Pussycat’,
                ‘I’ll Never Fall In Love Again’, ‘Sex Bomb’, and more.
              </Text>
              <Text style={styles.description}>
                Along with sustaining his popularity as a live performer and
                recording artist for more than five decades, he continues to
                garner critical acclaim, including with the release of his most
                recent number 1 album, last year’s ‘Surrounded By Time’.
              </Text>
              {/* images  */}
              <Imgcomp url={require('../img/tomjamesss.jpg')} 
               height={hp(65)}
               resizeMode={'contain'}
               marginVertical={hp(5)}

              />

              <Text style={styles.description}>
                The album, the latest in his series of collaborations with
                producer Ethan Johns, again saw Sir Tom delve further into his
                love of Blues & Soul, featuring his versions of songs by the
                likes of Bob Dylan, The Waterboys, Cat Stevens & more.
              </Text>

              <Text style={styles.description}>
                It is the most recent high point in a career full of highlights,
                including being knighted by Her Majesty the Queen in 2006. Other
                highlights of his long career include receiving BRIT Awards for
                Best Male and Outstanding Contribution to Music, a Silver Clef
                Award for Lifetime Achievement, the Hitmaker Award from the [US]
                Songwriters Hall of Fame, GQ Man Of The Year, and the
                prestigious [UK] Music Industry Trust Award.
              </Text>
              <Text style={styles.description}>
                Sir Tom will bring his irresistible live show to Audley End,
                featuring a musical mix that traverses eras and genres.
              </Text>
              <Text style={[styles.description,{fontFamily:'OpenSans-Bold'}]} >
              Book it
              </Text>
              {/* bold texr here */}

              <Text style={styles.description}>
                Tickets for the show will be available on pre-sale on Wednesday
                26th January at 9am, and on general sale on Friday 28th January
                at 9am from 
                <Text style={{color:'rgb(199, 167, 112)'}}> Ticketmaster.</Text>
              </Text>
              <Text style={styles.description}>
                Pre-sale tickets can be accessed by registering in advance at
                <Text
                 style={{color:'rgb(199, 167, 112)'}}
                > Heritagelive.net.</Text>
              </Text>

              <View className="mb-6 mt-8">
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
              <Prev_Newer/>
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

export default TomJones_comes_gardens;

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
