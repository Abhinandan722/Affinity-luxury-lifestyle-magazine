import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,BackHandler,Alert
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

const PreviewsDetial = () => {
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
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        { text: 'Cancel', onPress: () => null, style: 'cancel' },
        { text: 'YES', onPress: () => navigation.goBack() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

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
                {' '}
                The Acqua di Parma Afternoon Tea at Baglioni Hotel London
              </Text>
            </View>
          </View>
          <View style={{marginTop: hp(2)}}>
            <View>
              <TouchableOpacity>
                <Imgcomp url={require('../img/previes.png')} />
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
            marginVertical: hp(1),marginTop:hp(3)
          }}>
          <View
            style={{
              backgroundColor: 'rgb(199, 167, 112)',
              height: 2,
              flex: 0.4,
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
              marginHorizontal: wp(1.4),
            }}>
        - LIFESTYLE, LATEST NEWS
          </Text>
          <View
            style={{
              backgroundColor: 'rgb(199, 167, 112)',
              height: 2,
              flex: 0.4,
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
                The Acqua di Parma Afternoon Tea at Baglioni Hotel London
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
                / April 09, 2021
              </Text>
              <Text style={[styles.description, {marginTop: hp(4)}]}>
                To celebrate this year’s Chelsea Flower Show (22nd – 26th May),
                Baglioni Hotel London is partnering with iconic fragrance brand
                Acqua di Parma, creating a unique Afternoon Tea inspired by the
                fresh and elegant, citrus-based Colonia, that has been seducing
                customers for over 100 years.
              </Text>
              <Text style={[styles.description, {marginTop: hp(4)}]}>
                Alongside a selection of scones and sandwiches with an Italian
                twist, the Acqua di Parma Afternoon Tea will feature colourful
                treats inspired by the Colonia’s ingredients and its complex
                bouquet, which include citrus fruit from Sicily, lavender,
                bergamot, verbena and Bulgarian rose.
              </Text>
              <Text style={[styles.description, {marginTop: hp(4)}]}>
                Baglioni Hotel London’s Chef Alberto Rossetti, born and raised
                in Parma himself, has created Colonia Lemon Cake, Lavender
                Meringue and Bergamot Cream, Floral Verbena and Lime Zest Panna
                Cotta with Rose Coulis, Violets of Parma and Sicilian Cannoli
                with Candied orange.
              </Text>
              <Text style={[styles.description, {marginTop: hp(4)}]}>
                To accompany, choose between the Calabrian Bergamot and Mint Tea
                or Rose and Dried Lime Tea and round off nicely with a glass of
                premium Italian sparkling wine for a complete Italian Afternoon
                tea experience.
              </Text>
              <Text style={[styles.description, {marginTop: hp(4)}]}>
                The Acqua di Parma Afternoon Tea is available for the month of
                May at Baglioni Hotel London from £47 per person. Every guest
                enjoying the Acqua di Parma Afternoon Tea will also be treated
                to a luxury sample of Colonia.
              </Text>

              <Text
                className="text-black  my-3 opacity-90 "
                style={{
                  fontFamily: 'OpenSans-Regular',
                  fontSize: 22,
                  lineHeight: hp(3.5),
                }}>
                For booking and for further information call 020 7368 5900 or
                visit
                <Text
                  style={{
                    color: 'rgb(199, 167, 112)',
                    fontFamily: 'OpenSans-Regular',
                  }}
                  className="opacity-100">
                  {' '}
                  baglionihotels.com
                </Text>
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

export default PreviewsDetial;

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
