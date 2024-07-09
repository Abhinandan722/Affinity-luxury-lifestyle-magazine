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

const LearningNotToSettle = () => {
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
        <Header category={'Learning Not To Settle'}/>
        
          <View style={{marginTop: hp(2)}}>
            <View>
              <TouchableOpacity className="mt-5" >
                <Imgcomp url={require('../img/rrrr.jpg')} />
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
          }}>- LIFESTYLE ,  HEALTH  AND WELLBEING</Text>
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
                Learning Not to Settle
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
                / January 31, 2022
              </Text>
              <Text style={[styles.description, {marginTop: hp(4)}]}>
                The word settle has a couple of different meanings – paying a
                debt or due OR reaching an agreement of some sort. I’m referring
                to the latter but with a very specific content in mind namely
                the agreements we reach with ourselves.
              </Text>
              <Text style={styles.description}>
                I started thinking about this after I read a particular quote
                
                <Text 
                 style={{fontFamily: 'OpenSans-Italic',}}
                 > ‘You get what you settle for!’
                </Text>
               
              </Text>

              <Text style={[styles.description, {marginTop: hp(4)}]}>
                It leapt off the page at me as it seemed so very true. I’ve
                often talked before about mindset and I straight away saw this
                quote in the context of our mindsets. You see we so often settle
                for what we
              </Text>
              <Text style={styles.description}>
                think we deserve but our view can be distorted.
              </Text>

              <Text style={styles.description}>
                Many of us, as we have gone through life gather unhelpful
                mindsets – two very common ones are that we deserve what we get
                (especially if it is negative) and we are limited in what we can
                change.
              </Text>

              <Text style={styles.description}>
                Obviously, we’ll have to talk in a generalised way but the fact
                is that every single person deserves happiness.
              </Text>
              <Text style={styles.description}>
                If we accept that, and if I’m honest that is often something
                that people have to do quite a bit of work on before they can
                honestly say they believe it, it can be life changing. Sadly,
                some people may have had all sorts of, often unhelpful ideas,
                given to them about what they do and don’t deserve or what they
                can expect from life. Of course, it doesn’t mean you will be
                happy all of the time, life can be unfair, challenging and
                difficult but if we can believe that we deserve to be happy that
                is a good start.
              </Text>

              <Text style={styles.description}>
                So, our underlying, subconscious mindsets exert a powerful
                influence on our lives and if any aspect of our lives is not as
                we wish then taking time to examine and in some ways unearth
                (the problem is
              </Text>

              <View className="mb-6 mt-14">
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

export default LearningNotToSettle;

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
