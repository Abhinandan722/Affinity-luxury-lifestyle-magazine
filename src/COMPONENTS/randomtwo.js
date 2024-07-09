


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
  import BottomView from '../COMPONENTS/BottomView';
  import ConnectWithUs from '../COMPONENTS/connectWithUs';
  import Icon from 'react-native-vector-icons/Entypo';
  import Imgcomp from '../COMPONENTS/imgcomp';
  import Randompost from '../homescreens/randompost';
import { Randomposttwo } from '../products';
import Prev_Newer from './prev_Newer';
  
  const Randomtwo = () => {
    
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
    useEffect(()=>{
    Randomposttwo
    })
  
    return (
      <ScrollView ref={scrollViewRef} contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{paddingHorizontal: wp(5), backgroundColor: 'white'}}>
            <View style={styles.mainTextView}>
              <Image
                style={styles.mainlogo}
                source={require('../img/Affinity-Luxury-Logo.jpg')}
              />
            </View>
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
        
               Fashion and Beauty, Beauty
              </Text>
            </View>
            <View style={{marginTop: hp(2)}}>
              <View>
                <TouchableOpacity className="my-4">
                 {/* <Imgcomp url={'../img/fashion&beauty1.png'} /> */}
                 <Imgcomp url={require('../img/fashion&beauty1.png')} />
                </TouchableOpacity>
  
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
              <View style={{flexDirection: "row", alignItems: "center", marginVertical: hp(1)}}>
          <View style={{   backgroundColor: 'rgb(199, 167, 112)', height: 2, flex: 0.4,}} />
          <Text style={{
            textAlign: 'center',
            color: 'black',
            fontSize: 22,
            fontWeight: '600',
            letterSpacing: 1.5,
            fontFamily: 'OpenSans_Condensed-Medium',
            marginHorizontal:wp(1.4)
          }}> - FASHION AND BEAUTY, BEAUTYS</Text>
          <View style={{   backgroundColor: 'rgb(199, 167, 112)', height: 2, flex: 0.4}} />
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
                  5 Festive Make-up Looks for Christmas
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
                  / February 12,2024
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily: 'OpenSans-Regular',
                    opacity: 0.9,
                    marginTop:hp(5)
                  }}>
                The holiday season is just around the corner, and what better way to celebrate Christmas than by adding a touch of glamour to your look? Whether youre attending a festive party, a family gathering, or a simple Christmas dinner at home, these five makeup looks will ensure you shine bright this Christmas. Classic red lips 
                </Text>
                <View>
                  <Text
                  className="text-black my-3"
                    style={{
                      fontSize: 22,
                      fontFamily: 'OpenSans-Bold',
                    }}>
                    Classic red lips
                  </Text>
  
                  <Text
                  className="text-black opacity-90"
                    style={{
                      color: 'black',
                      fontSize: 22,
                      lineHeight: hp(3.7),
                      letterSpacing: 1,
                      marginVertical: hp(1.5),
                      fontFamily: 'OpenSans-Regular',
                    }}>
                   Nothing says Christmas quite like classic red lips and a sleek winged eyeliner. This timeless combination screams sophistication and festive spirit. Start by applying a nice base with your favorite foundation and concealer from COSRX. Next, create a sharp winged liner using a liquid or gel eyeliner. For the lips you can choose a bold red shade that complements your skin tone. Finish the look with a touch of highlighter on the high points of your face for that extra holiday glow.
                  </Text>
  
                  <Text
                  className="text-black my-3"
                    style={{
                      fontSize: 22,
                      fontFamily: 'OpenSans-Bold',
                    }}>
                    Winter wonderland eyes
                  </Text>
  
                  <Text
                  className="text-black opacity-90"
                    style={{
                      color: 'black',
                      fontSize: 22,
                      lineHeight: hp(3.7),
                      letterSpacing: 1,
                      marginVertical: hp(1.5),
                      fontFamily: 'OpenSans-Regular',
                    }}>
                Bring the magic of a winter wonderland to your eyes with your makeup look. Begin by applying a shimmery silver or icy blue eyeshadow to your lids. Blend a deeper, cool-toned shade into the crease to add dimension. Don’t forget a coat of volumizing mascara or a pair of false lashes to make your eyes pop. You can buy these online atKorean Skincare. Complete the look with a frosty highlighter on your cheekbones and a subtle nude lip to balance the shimmer.
                  </Text>
                  <Text
                  className="text-black my-3"
                    style={{
                      fontSize: 22,
                      fontFamily: 'OpenSans-Bold',
                    }}>
                Green and gold 
                  </Text>
  
                  <Text
                  className="text-black opacity-90"
                    style={{
                      color: 'black',
                      fontSize: 22,
                      lineHeight: hp(3.7),
                      letterSpacing: 1,
                      marginVertical: hp(1.5),
                      fontFamily: 'OpenSans-Regular',
                    }}>
                  Channel the festive spirit with a green and gold makeup look that reminds you of Christmas trees and sparkling decorations. Start by applying a rich, emerald green eyeshadow to your lids. Add a touch of gold shimmer to the center of your eyelids for a dazzling effect. Enhance your eyes further with black eyeliner and mascara. Keep the rest of your face neutral with a neutral blush and a nude lip to let your eyes steal the show.
                  </Text>
                  <Text
                  className="text-black my-3"
                    style={{
                      fontSize: 22,
                      fontFamily: 'OpenSans-Bold',
                    }}>
                  Classic elegance
                  </Text>
  
                  <Text
                  className="text-black opacity-90"
                    style={{
                      color: 'black',
                      fontSize: 22,
                      lineHeight: hp(3.7),
                      letterSpacing: 1,
                      marginVertical: hp(1.5),
                      fontFamily: 'OpenSans-Regular',
                    }}>
                  Embrace the warm and cosy vibes of the season with a classic makeup look. Begin by blending a deep brown or beige eyeshadow onto your lids, focusing on the outer corners for a sultry effect. Define your eyes with a brown eyeliner and finish with voluminous lashes. Opt for a rosy blush to complement the eyeshadow, and complete the look with a berry-toned lipstick for a touch of elegance.
                  </Text>
                  <Text
                  className="text-black my-3"
                    style={{
                      fontSize: 22,
                      fontFamily: 'OpenSans-Bold',
                    }}>
                    Glittery glam
                  </Text>
  
                  <Text
                  className="text-black opacity-90"
                    style={{
                      color: 'black',
                      fontSize: 22,
                      lineHeight: hp(3.7),
                      letterSpacing: 1,
                      marginVertical: hp(1.5),
                      fontFamily: 'OpenSans-Regular',
                    }}>
                   If there’s ever a time to indulge in a little extra sparkle, it’s the holidays. Create a show-stopping look with a touch of glitter on your eyes. Apply a neutral base eyeshadow and then add a pop of glitter to the center of your lids. You can choose gold, silver, or even holographic glitter for a playful twist. Keep the rest of your makeup relatively neutral to let the glitter take center stage. A nude lip and a subtle blush will balance the overall look.
                  </Text>
                </View>
  
                <View className="mb-7">
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
  
  export default Randomtwo;
  
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
    randomView: {},
  });
  