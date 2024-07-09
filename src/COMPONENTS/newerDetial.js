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

import Icon from 'react-native-vector-icons/Entypo';
import Prev_Newer from './prev_Newer';
import Randompost from '../homescreens/randompost';
import Imgcomp from './imgcomp';
import CustomBTN from './customBTN';
import ConnectWithUs from './connectWithUs';
import BottomView from './BottomView';

const NewerDetial = () => {
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
            <View className="flex-row">
              <TouchableOpacity onPress={opendrower}>
                <Image
                  style={{width: wp(8), height: hp(5), tintColor: 'black'}}
                  source={require('../img/bars.png')}
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
                Courgette, Feta and Mint Fritters
              </Text>
            </View>
          </View>
          <View style={{marginTop: hp(2)}}>
            <View>
              <TouchableOpacity>
                <Imgcomp
                  url={require('../img/newer.jpg')}
                  width={wp(90)}
                  height={hp(60)}
                  resizeMode={'cover'}
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
                      marginTop: hp(3),
                    }}>
                    - FOOD AND DRINK, RECIPES AND TIPS
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
                Courgette, Feta and Mint Fritters
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
                / August 26, 2020
              </Text>

              <View className={'flex-row  gap-2  items-center'}>
                <Text
                  style={[
                    {
                      fontFamily: 'PlayfairDisplay-Medium',
                      fontSize: 100,
                      color: 'black',
                    },
                  ]}>
                  A
                </Text>
                <Text
                  style={[
                    styles.description,
                    {marginVertical: hp(0), width: wp(70)},
                  ]}>
                  n easy mid-week meal to feed the family
                </Text>
              </View>

              <Text
                style={[
                  styles.description,
                  {
                    fontFamily: 'OpenSans-Bold',
                    marginVertical: hp(-1),
                    marginBottom: hp(2),
                  },
                ]}>
                {' '}
                Ingredients
              </Text>
              <Text style={[styles.description, {marginVertical: hp(0.5)}]}>
                2 courgettes
              </Text>
              <Text style={[styles.description, {marginVertical: hp(0.5)}]}>
                1 Clarence Court Burford Brown egg
              </Text>
              <Text style={[styles.description, {marginVertical: hp(0.5)}]}>
                2 tablespoons self-raising flour
              </Text>
              <Text style={[styles.description, {marginVertical: hp(0.5)}]}>
                70g feta
              </Text>
              <Text style={[styles.description, {marginVertical: hp(0.5)}]}>
                2 spring onions, sliced
              </Text>
              <Text style={[styles.description, {marginVertical: hp(0.5)}]}>
                1 teaspoon cumin
              </Text>
              <Text style={[styles.description, {marginVertical: hp(0.5)}]}>
                Zest of 1 lime
              </Text>
              <Text style={[styles.description, {marginVertical: hp(0.5)}]}>
                A handful of chopped mint
              </Text>
              <Text style={[styles.description, {marginVertical: hp(0.5)}]}>
                Vegetable oil
              </Text>
              <Text style={[styles.description, {marginVertical: hp(0.5)}]}>
                2 tablespoons sour cream
              </Text>
              <Text style={[styles.description, {marginVertical: hp(0.5)}]}>
                2 teaspoons mint sauce
              </Text>
              <Text style={[styles.description, {marginVertical: hp(0.5)}]}>
                Fresh herbs such as chives and garlic cress to garnish
              </Text>

              <Text style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                Method
              </Text>

              <Text style={[styles.description, {marginTop: hp(2)}]}>
                Grate the courgettes using a box grater, season well with salt
                and set in a sieve over a bowl for 10 minutes to drain the
                excess water.
              </Text>
              <Text style={[styles.description, {marginTop: hp(2)}]}>
                Squeeze the courgette and add to a bowl along with the egg,
                flour, feta, spring onions, cumin, lime zest and mint. Stir well
                to combine.
              </Text>
              <Text style={[styles.description, {marginTop: hp(2)}]}>
                Using two tablespoons quenelle the mixture to form small rugby
                ball shaped fritters. Gently fry in hot oil for 2-3 minutes
                until golden brown then pop into the oven, heated at 180C for
                ten minutes..
              </Text>
              <Text style={[styles.description, {marginTop: hp(2)}]}>
                Spread the sour cream over a serving plate and drizzle with the
                mint sauce. Place the fritters on top and garnish with some
                fresh herbs.
              </Text>

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

export default NewerDetial;

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
