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

const The_Whispering_Angel_Terrace = () => {
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
                The Whispering Angel Terrace
              </Text>
            </View>
          </View>
          <View style={{marginTop: hp(2)}}>
            <View>
              <TouchableOpacity>
                <Imgcomp
                  url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpost_wesparing1.jpg')}
                />
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginTop: hp(2),
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
                    - FOOD AND DRINK, LATEST NEWS
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
                The Whispering Angel Terrace
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
                STK Stratford have unveiled their enchanting Summer Terrace in
                collaboration with Whispering Angel, a sophisticated addition to
                the already renowned STK Rooftop & Bar.
              </Text>

              <Text style={[styles.description, {marginTop: hp(4)}]}>
                Perched atop The Gantry, the Summer Terrace offers an idyllic
                escape with panoramic views stretching from East Village to
                Canary Wharf. The collaboration with Whispering Angel brings an
                extra touch of elegance, ensuring guests experience the ultimate
                in luxury and relaxation. The terrace is adorned with chic,
                stylish decor that perfectly complements the vibrant yet refined
                ambiance of STK Stratford.
              </Text>

              <Text style={styles.description}>
                Guests will be delighted by the specially crafted Whispering
                Angel cocktails, showcasing the world-famous rosé from Château
                d’Esclans.
              </Text>
              <Imgcomp
                url={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/recentpost_wesparing2.jpg')}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                The exclusive drink menu is a testament to sophisticated
                indulgence, featuring:
              </Text>
              <Text style={styles.description}>
                ANGEL’S FLUTE: A delightful blend of Volcan de mi Tierra Blanco,
                cranberry, lime, Whispering Angel, Belvedere Pure, and orange,
                creating a refreshing and tantalizing sip.
              </Text>
              <Text style={styles.description}>
                PEACH ANGEL SPRITZ: A refreshing fusion of WA Rose, Chandon
                Spritz, and luscious peach and orange cordials, topped with a
                splash of soda for a sparkling finish. This vibrant cocktail is
                the perfect companion for a sunlit afternoon, offering a
                harmonious blend of fruity and effervescent notes.
              </Text>

              <Text style={styles.description}>
                WHISPERING SUNSET: A harmonious blend of WA Rose, luscious peach
                and orange cordials, and a touch of Hennessy VS. This elegant
                cocktail offers a captivating medley of floral, fruity, and rich
                notes, perfect for a serene evening unwind.
              </Text>
              <Text style={styles.description}>
                Complementing these exquisite beverages, guests can savor a
                curated selection of STK’s signature small plates, designed to
                tantalize the taste buds and enhance the overall experience.
                Indulge in:
              </Text>

              <View style={styles.bullet} className="gap-10 mt-0.7 mb-5">
                <View>
                <Text style={{alignItems: 'center'}}>
                  <View
                    style={{
                      height: hp(1),
                      width: wp(2),
                      backgroundColor: 'black',
                      borderRadius: 100,
                    }}
                  />
                  <Text style={styles.description}
                  >   Lil BRG & Fries: Classic mini burgers served with crispy fries. 
                  </Text>
                </Text>
                
                <Text>
                  <View
                    style={{
                      height: hp(1),
                      width: wp(2),
                      backgroundColor: 'black',
                      borderRadius: 100,
                    }}
                  />
                  <Text style={styles.description}
                  >   Giant Wagyu Meatball: A succulent, flavourful delight.
                  </Text>
                </Text>
                </View>
               


                <Text style={{marginTop:100}} >
                  <View
                    style={{
                      height: hp(1),
                      width: wp(2),
                      backgroundColor: 'black',
                      borderRadius: 100,
                    }}
                  />
                  <Text style={styles.description}
                  >   Short Rib Quesadilla: Rich, savoury, and perfect for sharing.
                  </Text>
                </Text>

                <Text>
                  <View
                    style={{
                      height: hp(1),
                      width: wp(2),
                      backgroundColor: 'black',
                      borderRadius: 100,
                    }}
                  />
                  <Text style={styles.description}
                  >   STK & Frites: Signature steak and fries dish.
                  </Text>
                </Text>

                <Text>
                  <View
                    style={{
                      height: hp(1),
                      width: wp(2),
                      backgroundColor: 'black',
                      borderRadius: 100,
                    }}
                  />
                  <Text style={styles.description}
                  >   Tuna Tartare Taco: Fresh and zesty with a gourmet twist.
                  </Text>
                </Text>

                <Text>
                  <View
                    style={{
                      height: hp(1),
                      width: wp(2),
                      backgroundColor: 'black',
                      borderRadius: 100,
                    }}
                  />
                  <Text style={styles.description}
                  >   Crispy Chicken Bites: Irresistibly crunchy and tender.
                  </Text>
                </Text>
                <Text>
                  <View
                    style={{
                      height: hp(1),
                      width: wp(2),
                      backgroundColor: 'black',
                      borderRadius: 100,
                    }}
                  />
                  <Text style={styles.description}
                  >   Crispy Calamari: Lightly fried and perfectly seasoned.
                  </Text>
                </Text>
                <Text style={{marginTop:200,}}>
                  <View
                    style={{
                      height: hp(1),
                      width: wp(2),
                      backgroundColor: 'black',
                      borderRadius: 100,
                    }}
                  />
                  <Text style={styles.description}
                  >   Jalapeño Pickled Shrimp: A spicy, tangy treat that’s sure to please. 
                  </Text>
                </Text>
              </View>

           
    

              <Text style={styles.description}>
              STK Stratford provides a chic and contemporary setting that is perfect for the new Whispering Angel Terrace. This summer, the collaboration promises to become a favoruite destination for guests looking to savour stunning views, exceptional drinks, and delectable food in an elegant atmosphere.
              </Text>
              <Text style={styles.description}>
              Whether you’re planning a romantic date night under the stars or looking to unwind with colleagues after a long day at work, the Whispering Angel Summer Terrace offers the ideal backdrop. Enjoy an intimate evening with your special someone, sharing cocktails and small plates as the sun sets over the city. Or gather with friends and co-workers for after-work drinks, celebrating the end of the day with style and sophistication.
              </Text>

              <Text style={[styles.description]}>
              For more information, visit
                <Text style={{color: 'rgb(199, 167, 112)'}}
                > STK Stratford.
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

export default The_Whispering_Angel_Terrace;

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
