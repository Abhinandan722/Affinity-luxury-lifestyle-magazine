
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
import Prev_Newer from './prev_Newer';

const Randomthree = () => {
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
               No-bake Strawberry Cheesecake
              </Text>
            </View>
          </View>
          <View style={{marginTop: hp(2)}}>
            <View>
              <TouchableOpacity className="mt-5">
                <Imgcomp url={require('../img/img_no_metter.jpg')} />
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
          }}>- FOOD AND DRINK , RECIPES AND TIPS</Text>
          <View style={{   backgroundColor: 'rgb(199, 167, 112)', height: 2, flex: 0.6}} />

</View>     

          
              </View>

              <Text
                style={{
                  alignItems: 'center',
                  color: 'black',
                  fontSize: 43,
                  fontFamily: 'PlayfairDisplay-Medium',
                  textAlign: 'center',
                }}>
                No-bake Strawberry Cheesecake
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

              <Text
                style={[
                  styles.description,
                  {
                    marginTop: hp(3),
                    fontFamily: 'OpenSans_SemiCondensed-Italic',
                    letterSpacing: 0.5,
                  },
                ]}>
                {' '}
                This strawberry cheesecake is a Valentine dream. Made with
                plenty of white chocolate, strawberries and cream
              </Text>

              <Text
                style={[
                  styles.description,
                  {marginTop: hp(4), fontFamily: 'OpenSans-Bold'},
                ]}>
                INGREDIENTS
              </Text>

              <Text style={styles.description}>2 tsp sunflower oil</Text>
              <Text style={styles.description}>
                200g/7oz digestive biscuits
              </Text>
              <Text style={styles.description}>100g/3½oz unsalted butter</Text>
              <Text style={styles.description}>½ tsp ground cinnamon</Text>
              <Text style={styles.description}>
                100g/3½oz white chocolate, roughly chopped
              </Text>
              <Text style={styles.description}>
                400g/14oz strawberries, trimmed, plus extra to decorate
              </Text>
              <Text style={styles.description}>
                300g/10½oz full-fat cream cheese
              </Text>
              <Text style={styles.description}>1 tsp vanilla extract</Text>
              <Text style={styles.description}>
                ½ unwaxed lemon, finely grated zest only
              </Text>
              <Text style={styles.description}>
                1 tbsp runny honey or maple syrup
              </Text>
              <Text style={styles.description}>200ml/7fl oz double cream</Text>

              <Text
                style={[
                  {
                    fontFamily: 'OpenSans_SemiCondensed-Medium',
                    fontSize: 45,
                    letterSpacing: 2,
                    color: 'rgb(58, 58, 58)',
                  },
                ]}>
                METHOD
              </Text>

              <Text
                style={[
                  styles.description,
                  {fontFamily: 'OpenSans_Light', color: 'rgba(0,0, 0, 0.7)'},
                ]}>
                Brush the inside of a 20cm/8in springform tin with the sunflower
                oil, and line the base with a disc of baking parchment. Put the
                digestive biscuits into a sealable freezer bag. Push all the air
                out and seal the bag. Crush the biscuits with a rolling pin,
                until they are reduced to sand-like crumbs. Melt the butter in a
                large saucepan. Stir in the biscuit crumbs and cinnamon. Press
                the crumbs into the bottom of the tin. Chill in the refrigerator
                for 30 minutes.Chop 150g/5oz of the strawberries in half from
                top to bottom and arrange around the edge of the prepared tin,
                cut side-up. Chop the remaining berries into small pieces.
              </Text>
              <Text
                style={[
                  styles.description,
                  {fontFamily: 'OpenSans_Light', color: 'rgba(0,0, 0, 0.7)'},
                ]}>
                Melt the chocolate in a heatproof bowl, either over a pan of
                simmering water, making sure the bowl doesn’t touch the water,
                or in a microwave.Beat together the cream cheese, vanilla, lemon
                zest and honey in a mixing bowl. Stir in the chopped
                strawberries.
              </Text>
              <Text
                style={[
                  styles.description,
                  {fontFamily: 'OpenSans_Light', color: 'rgba(0,0, 0, 0.7)'},
                ]}>
                In another bowl, whisk the double cream until it holds a floppy
                peak.Fold the melted chocolate into the cream cheese mixture,
                followed by the double cream. Add more honey if needed. Spoon
                the filling into the tin, being careful not to move the
                strawberries on the edge. Spread level with a palette knife or
                the back of a spoon, cover with cling film and chill overnight,
                until firm.
              </Text>
              <Text style={[styles.description,{color:'rgba(0,0,0,0.8)'}]}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  RECIPE:
                </Text>{' '}
                BBC Good Food
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

export default Randomthree;

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
    height: hp(0.1),
    width: wp(5),
    backgroundColor: 'rgb(199, 167, 112)',
    alignSelf:'center',textAlign:'center'
  },
  lineone: {
    height: 0.6,
    
    maxWidth:wp(6),
    backgroundColor: 'rgb(170, 170, 170)',
  },
  description: {
    color: 'black',
    fontSize: 22,
    lineHeight: hp(4),
    letterSpacing: 0,
    marginVertical: hp(1.5),

    fontFamily: 'OpenSans-Regular',
  },
});
