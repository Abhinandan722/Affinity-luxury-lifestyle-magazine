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

const CelevratingMonth_Lndon = () => {
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
        <Header category={' Celebrating A Month Of Love At Shangri-La The Shard, London'}/>
          
          <View style={{marginTop: hp(2)}}>
            <View>
              <TouchableOpacity>
                <Imgcomp url={require('../img/celebrating1.jpg')} />
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <View style={{flexDirection: "row", alignItems: "center", marginVertical: hp(1)}}>
          <View style={{   backgroundColor: 'rgb(199, 167, 112)', height: 2, flex: 1,}} />
          <Text style={{
            textAlign: 'center',
            color: 'black',
            fontSize: 22,
            fontWeight: '600',
            letterSpacing: 1.5,
            fontFamily: 'OpenSans_Condensed-Medium',
            marginHorizontal:wp(3)
          }}>- TRAVEL, LATEST TRAVEL NEWS</Text>
          <View style={{   backgroundColor: 'rgb(199, 167, 112)', height: 2, flex: 1}} />

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
                Celebrating a Month of Love at Shangri-La The Shard, London
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
              <View  >

            
              <Text style={[styles.description, {marginTop: hp(4)}]}>
                This February, Shangri-La The Shard is conjuring up new and
                unforgettable ways to show appreciation to all the loves in your
                life, whether it’s a partner, parent or friend, in one of
                London’s most iconic settings. Ensuring no one is missed by
                Cupid’s arrow this year, Shangri-La The Shard has created an
                array of special experiences, with heart, to mark the month of
                love.
              </Text>

              <Imgcomp
                url={require('../img/celebrating2.jpg')}
                resizeMode={'cover'}
                marginVertical={hp(3)}
                height={hp(60)}
              />

              <Text style={[styles.description, {marginTop: hp(2)}]}>
                Pulling out all the stops for a luxurious getaway in the clouds,
                rooms and suites can be transformed with heart-shaped balloons,
                bouquets of flowers, hand-made chocolates, caviar and rosé
                champagne to sip against the backdrop of the capital’s skyline –
                from sweeping daytime views to romantic sunsets and twinkling
                evening lights of the city below.
              </Text>

              <Imgcomp
                url={require('../img/celebrating3.jpg')}
                resizeMode={'cover'}
                marginVertical={hp(3)}
                height={hp(60)}
              />
              <Text style={styles.description}>
                During the month of love, spend quality relaxation time at
                Western Europe’s highest Sky Pool, gym and sauna, with unique
                views over landmarks like St. Paul’s Cathedral and the Houses of
                Parliament, topped off with a blissful Neal’s Yard Remedies
                Valentine’s couples’ aromatherapy massage performed either in
                one of the hotel’s serene treatment rooms, or in the comfort of
                your own room.
              </Text>

              <Text 
               style={[styles.description,{fontFamily: 'OpenSans-Bold',}]}
               >
              Priced from £745 per night, the Love is in the Air package includes:
              </Text>

              <Text style={[styles.description,{fontFamily: 'OpenSans_SemiCondensed-Italic',letterSpacing:1.2,fontSize:23}]}>
              A one-night stay in a luxurious room or suite, with breakfast for two at TĪNG
              </Text>
              <Text style={[styles.description,{fontFamily: 'OpenSans_SemiCondensed-Italic',letterSpacing:1.2,fontSize:23}]}>
              A bottle of chilled rosé champagne in your room
              </Text>
              <Text style={[styles.description,{fontFamily: 'OpenSans_SemiCondensed-Italic',letterSpacing:1.2,fontSize:23}]}>
              A bouquet of flowers and hand -made chocolate
              </Text>
              <Text style={[styles.description,{fontFamily: 'OpenSans_SemiCondensed-Italic',letterSpacing:1.2,fontSize:23}]}>
              Use of the Sky Gym, infinity Sky Pool and sauna
              </Text>
             

              <Imgcomp
                url={require('../img/celebrating4.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(2)}
              />
              <Text style={styles.description}>
              Customise your stay with heart-shaped balloons and couples’ massages by selecting from our Valentine’s experience menu when booking.
              </Text>
              <Text style={styles.description}>
              Throughout February, foodies will also find special love-inspired culinary creations at Shangri-La The Shard’s spectacular restaurants and bars:
              </Text>
              <Text 
               style={[styles.description,{fontFamily: 'OpenSans-Bold',}]}
               >
              The Ultimate Date Night at TĪNG Restaurant and Lounge
              </Text>
              <Text style={styles.description}>
              TĪNG, on Level 35, is offering a decadent Valentine’s Day menu featuring Maldon oysters with rose and passionfruit, camembert ‘fondue’ with asparagus and truffle, and heart-shaped chocolate mousse.
              </Text>
              <Imgcomp
                url={require('../img/celebrating5.jpg')}
                resizeMode={'cover'}
                marginVertical={hp(5)}
                height={hp(60)}
              />
              <Text style={styles.description}>
              With the option to pair each course with wines selected by the hotel’s expert sommelier, and a signature Midnight Delight cocktail, there’s no better way to enjoy your special moment.
              </Text>
              <Imgcomp
               url={require('../img/celebrating6.jpg')}
               resizeMode={'cover'}
               marginVertical={hp(5)}
               height={hp(60)}
              />

              <Text style={styles.description}>
              <Text 
               style={[styles.description,{fontFamily: 'OpenSans-Bold',}]}
               >
               Availability:
              </Text> Valentine’s Day set  menu available 11th-28th February 2022, priced from £150 per person.
            
              </Text>
                
              <Text style={[styles.description ,{color:'rgb(199, 167, 112)'}]}>
              <Text 
               style={[styles.description,{fontFamily: 'OpenSans-Bold',}]}
               >
               To book, visit:
              </Text> ting-shangri -la.com   
              </Text>

              <Text 
               style={[styles.description,{fontFamily: 'OpenSans-Bold',}]}
               >Take Love Sky High at GŎNG Bar
              </Text>

              <Text style={styles.description}>
              Revel in London’s best views at the highest hotel bar in Western 
              Europe this Valentine’s Day. Your front row seat to the city 
              skyline comes with a bottle of Louis Roederer Rosé Champagne, an
               Asian sharing platter, and delicious dessert in the most romantic of 
               settings.
            
              </Text>
       
              <Imgcomp
              height={hp(30)}
              width={wp(60)}
                url={require('../img/celebrating7.jpg')}
                marginVertical={hp(5)}
                alignSelf={'flex-start'}
              />
      
              <Text style={styles.description}>
              For the month of love, GŎNG’s extensive cocktail menu will feature the fragrant Pink Azul, made with Ocho Blanco tequila, Campari, rose and lavender. Continue your celebrations at home with an Asian-inspired Love Potion bottled cocktail, which includes Courvoisier 
              cognac, Havana rum, Sake and a flash of gold.
              </Text>




              <Text style={styles.description}>
              <Text 
               style={[styles.description,{fontFamily: 'OpenSans-Bold',}]}
               >
               Availability:
              </Text> Available from 11th – 14th February 2022, with rosé champagne 
              and platter priced from £295. The Pink Azul cocktail will be served until the end of
               February 2022.
              </Text>

              <Text style={[styles.description ,{color:'rgb(199, 167, 112)'}]}>
              <Text 
               style={[styles.description,{fontFamily: 'OpenSans-Bold',}]}
               >
               To book, visit:
              </Text> gong-shangri -la.com   
              </Text>
              
             
              <Text 
               style={[styles.description,{fontFamily: 'OpenSans-Bold',}]}
               >
             Cosy Up with Love Cocktails at Hütte 31
              </Text>

              <Text style={styles.description}>
              At ground floor Hütte 31, Valentine’s visitors will find cosy outdoor 
              wooden chalets with soft blankets and guaranteed ‘snow’; a wintry hideaway to enjoy a 
              selection of cocktails created by mixologists for the month of love, alongside traditional
               Austrian delicacies from Nuernberger Sausage Rolls and Chicken Schnitzel. Try the Flamey Viola,
                with watermelon liqueur, Ketel one vodka, fresh apple and prosecco, or the Mr Wild, with Wild 
                Turkey rye whiskey, Maker’s Mark bourbon, 
              fresh orange, lime and honey
              </Text>

              <Text style={[styles.description ,{color:'rgb(199, 167, 112)'}]}>
              <Text 
               style={[styles.description,{fontFamily: 'OpenSans-Bold',}]}
               >
               To book, visit:
              </Text> bar31.com   
              </Text>




            




              <Text style={[styles.description ,{color:'rgb(199, 167, 112)'}]}>
              <Text 
               style={[styles.description,{}]}
               >
             For more information, visit
              </Text> shangri-la.com/london/shangrila
              </Text>

             

              <Text 
              className="mt-28"
               style={[styles.description,{fontFamily: 'OpenSans-Bold',lineHeight:hp(-1)}]}
               >
              Availability:
         
              <Text 
              style={[styles.description]}
              > Love Cocktails available from 11th – 28th February 2022, from £11
               each, or two for £20. Chalets seat up to four people.
              </Text>
              </Text>

              </View>

              <View className="my-9">
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
          className="mt-32"
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

export default CelevratingMonth_Lndon;

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
