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
import { Header } from 'react-native/Libraries/NewAppScreen';

const The_fellows_house = () => {
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
        <Header category={'The Fellows House – A Cultivated Retreat'}/>
         
          <View style={{marginTop: hp(2)}}>
            <View>
              <TouchableOpacity>
                <Imgcomp url={require('../img/fellows_hourse0.jpg')} />
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
          }}>- TRAVEL, TRAVEL REVIEWS, UNCATEGORIZED</Text>
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
                The Fellows House – A Cultivated Retreat
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
                There’s something for everyone when it comes to Cambridge,
                whether it’s history or culture, coffee shops or boutiques,
                idyllic streets and of course punting. The choice is endless it
                is a city that some even say ‘changed the world!’
              </Text>
              <Text style={styles.description}>
                And now amongst the many places to stay, there’s a new kid on
                the block, located a short walk from the city centre, and a
                stone’s throw from the River Cam and Jesus Green, is The Fellows
                House part of the Hilton Hotels ‘Curio Collection’ and the
                perfect base to explore and unlock the history of this famed
                city.
              </Text>
              <Imgcomp
                url={require('../img/fellows_hourse1.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />

              <Text style={[styles.description, {marginTop: hp(4)}]}>
                From outside, the building is unassuming, but walk through the
                doors and you are met witha unique luxury and distinctive
                combination of contemporary and classic elements all inspired by
                the city’s colleges, specifically of course, the fellows.
              </Text>
              <Text style={styles.description}>
                A rich, deep colour palette of walnut, burgundy and metallic
                tones intertwined with artwork that includesa stunning oil
                painting of Dr Davidson Nicol (the first black African fellow at
                Cambridge) and you know that a lot of thought has gone into
                creating an ambient, historic aura.
              </Text>
              <Imgcomp
                url={require('../img/fellows_hourse2.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                Behind the Cipollino Ondulato Rosso marble reception desk is a
                floor to ceiling wooden pigeon hole cabinet (the kind once
                popular in colleges). Eachpigeon hole is labelled with a word in
                an old typewriter font, which on their own are meaningless, but
                put them all togetherand they form a poem by a Cambridge fellow
              </Text>
              <Imgcomp
                url={require('../img/fellows_hourse4.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                The Fellows House, houses 131 rooms from standard through to
                apartments and duplexes. The majority though are apartment-style
                rooms and of course they are named after influential Cambridge
                graduates
              </Text>
              <Text style={styles.description}>
                We were staying in one of the apartments–A large space with a
                fully kitted outattention to detail kitchen withfridge, hob,
                dishwasher, pans, crockery, cutlery, even a cookbook, in case
                you feel like becoming the next Nigella Lawson during your stay!
              </Text>

              <Imgcomp
                url={require('../img/fellows_hourse3.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                Adjacent to the kitchen is the living and dining space, where
                earthy grey tones, muted neutrals and sleek furnishings create a
                relaxing, luxurious ambience.
              </Text>
              <Text style={styles.description}>
                There’s a Flat screen TV in both the living area and bedroom,
                with a King- Sized bed, soft pillows, crisp white sheets and the
                fluffiest of gowns.
              </Text>
              <Text style={styles.description}>
                The little details are what makes a stay extra special, a gift
                bag of goodies that included bottles of fruit juice, gin, tonic
                water and a copy of Thomas Hardy’s ‘Far from the Madding Crowd’
                were all a welcome treat and the White Company toiletries in the
                bathroom were the icing on the cake. You can’t have all these
                treats and not indulge, so after an invigorating rainfinity
                shower it was time to curl up in the corner wrapped in a fluffy
                gown, slowly sipping a Gin &Tonic!
              </Text>
              <Imgcomp
                url={require('../img/fellows_hourse5.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                Before getting too comfortable and not moving from my spot it
                was time to explore the pool. The lift takes you directly down
                to pool level so no need to change out ofyour fluffy gown. The
                pool is small and intimate surrounded by comfy loungers with a
                sauna and steam room off of it. There’s even a separate gym if
                you’re feeling energetic – I wasn’t – chilling by the pool was
                enough for me.
              </Text>
              <Imgcomp
                url={require('../img/fellows_hourse6.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                Dinner was served in The Folio Kitchen, a combination of
                contemporary and classic décor within a fresh and invigorating
                colour palette. Walls and columns are clad in whitewashed brick
                with original artworks adorning them, there’s even a romantic
                poem written nearly 100 years ago by a Chinese student and a
                leader of China’s New Culture.With splashes of burnt orange,
                sage green and brown leather upholstery set against antiqued
                mirrors and a geometric black and white tiled floor, The Folio
                Kitchen is another nod towardsthe fellows and their history.
              </Text>
              <Imgcomp
                url={require('../img/fellows_hourse7.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                The cocktail menu is a dream, it has all the classics along with
                specially themed cocktails, all encapsulating the theme of the
                hotel through their names and ingredients – ‘The Day Dream’
                Alfred Tennyson (Linden Leaf 8 Gin, rhubarb syrup, lime,
                strawberry and soda) and ‘The Enigma’ after Alan Turning’s
                Biography (Dark and White Rums, pineapple,passion fruit, tikki
                bitters and absinth) were our choices and what great choices
                they were, our taste buds were suitably tempted and we were
                ready to dine.
              </Text>
              <Imgcomp
                url={require('../img/fellows_hourse8.jpg')}
                height={hp(50)}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />

              <Text style={styles.description}>
                The menu was full of tempting dishes but after much deliberation
                we opted for the Avocado and Rice Bowl and Scallops and
                Celeriac, both dishes were impeccably presented and were infused
                with flavours and textures that had our taste buds wanting more.
              </Text>
              <Imgcomp
                url={require('../img/fellows_hourse9.jpg')}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                The mains consisted of Lamb served with vegetables, spiced cous
                cous, lamb jus and a tomato & mint relish creating a real
                explosion of tastes – perfection on the palette.Rib eye served
                with all the trimmings was another treat, cooked exactly as
                requested and well rested it literally melted in the mouth.
              </Text>
              <Text style={styles.description}>
                Dessert was an indulgence too far for me, I was full, but hubby
                had no such problem and delved into the Berries & Meringue,
                light and refreshing and the perfect way to end a delightful
                dining experience.
              </Text>
              <Imgcomp
                url={require('../img/fellows_hourse10.jpg')}
                resizeMode={'contain'}
                marginVertical={hp(5)}
              />
              <Text style={styles.description}>
                But the evening didn’t end here, it would have been sacrilege
                not to indulge in another cocktail in ‘The Folio Bar’ and soak
                up the atmosphere of what can only be described as a ‘Private
                Members Club’ that surrounds itself with soft low lighting,
                sumptuous sofas and armchairs (Sherlock Holmes wouldn’t look out
                of place here), a cosy log fire and a pool table that just sat
                perfectly within the curios and history of this unique hotel.
              </Text>
              <Imgcomp
                url={require('../img/fellows_hourse11.jpg')}
                marginVertical={hp(5)}
                resizeMode={'contain'}
              />
              <Text style={styles.description}>
                After a peaceful and restful night sleep breakfast the next
                morning was a laid back relaxed affair,which set us up perfectly
                for a full day of exploring.
              </Text>
              <Imgcomp
                url={require('../img/fellows_hourse12.jpg')}
                marginVertical={hp(5)}
                resizeMode={'contain'}
              />
              <Text style={styles.description}>
                The Fellows House is a treasure trove of hidden artwork, history
                and architecture, around every corner there’s something new to
                discover, a cultivated retreat for business or pleasure and
                guaranteed to have you wanting to return time and time again.
              </Text>

              <Text className="text-black italic text-2xl font-semibold my-3">
                BOOK IT
              </Text>
              <Text
                className="text-black italic text-xl  my-3 opacity-90"
                style={{fontSize: 21, letterSpacing: 0.5, lineHeight: hp(3.5)}}>
                Nightly rates start from €329 per room per night on an
                all-inclusive basis
              </Text>

              <Text
                className="text-black italic my-3 opacity-90 "
                style={{
                  fontFamily: 'OpenSans-Regular',
                  fontSize: 22,
                  lineHeight: hp(3.5),
                }}>
                To experience the art of slow living and book your unforgettable
                retreat at King Jason Zante visit
                <Text
                  style={{
                    color: 'rgb(199, 167, 112)',
                    fontFamily: 'OpenSans-Regular',
                  }}
                  className="opacity-100">
                  {' '}
                  bwww.kingjasonzante.com.
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

export default The_fellows_house;

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
