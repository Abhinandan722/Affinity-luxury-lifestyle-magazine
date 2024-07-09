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
import Randompost from './randompost';
import Imgcomp from '../COMPONENTS/imgcomp';
import Prev_Newer from '../COMPONENTS/prev_Newer';
import { Products } from '../products';
import HTMLView from 'react-native-htmlview';




const Detialpage = ({route}) => {
  const {item} = route.params;
  const drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [toggle, setToggle] = useState(0);
  const [randomValues, setRandomValues] = useState([]);
console.log("allitem in detial page   ",item)
  useEffect(() => {
  }, []);
  const htmlContent = `${item.content.rendered}`;

 

   
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
          </View>
          <View style={{marginTop: hp(2)}}>
            <View>
            {
      item.featured_media?<TouchableOpacity >
        <Imgcomp url={item.featured_media}  />
      </TouchableOpacity>:null
     }
       

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
            letterSpacing: 1.9,
            fontFamily: 'OpenSans_Condensed-Medium',
            marginHorizontal:wp(1)
          }}>
                {item.categories}
             </Text>
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
                {item.title.rendered}
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
                {/* {item.date} */}  / March 15,2024
              </Text>
              <HTMLView
        value={htmlContent}
        stylesheet={styles}
      />

              {/* <Text
                style={{
                  color: 'black',
                  marginTop: hp(4),
                  fontSize: 22,
                  lineHeight: hp(3.3),
                  letterSpacing: 0,
                  marginVertical: hp(1.5),
                  fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                  fontFamily: 'OpenSans-Regular',
                }}>
                <Text style={{color: 'rgb(199, 167, 112)'}}>
                  {item.description.slice(0, 16)}
                </Text>
                {item.description}
              </Text> */}

              {/* <Imgcomp url={item.detial.image1} /> */}
              {/* <View>
                <Text
                  style={{
                    color: 'black',

                    fontSize: 21,
                    lineHeight: hp(4),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),

                    fontFamily: 'OpenSans-Italic',
                  }}>
                  {item.detial.descriptionONE.paramone}
                </Text>
                <Text
                  style={{
                    color: 'black',

                    fontSize: 22,
                    lineHeight: hp(4),
                    letterSpacing: 0.5,
                    marginVertical: hp(1),
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  {item.detial.descriptionONE.paramtwo}
                </Text>
                <Text
                  style={{
                    color: 'black',

                    fontSize: 22,
                    lineHeight: hp(4),
                    letterSpacing: 0.5,

                    fontFamily: 'OpenSans-Regular',
                  }}>
                  {item.detial.descriptionONE.paramthree}
                </Text>
              </View>

              <Imgcomp url={item.detial.image2} />
              <Text
                style={{
                  color: 'black',

                  fontSize: 22,
                  lineHeight: hp(3.6),
                  letterSpacing: 0,
                  marginVertical: hp(1.5),
                  fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                  fontFamily: 'OpenSans-Regular',
                }}>
                {item.detial.descriptionTWO.paramone}
              </Text>
              <Text
                style={{
                  color: 'black',

                  fontSize: 23,
                  lineHeight: hp(3.9),
                  letterSpacing: 1,
                  marginVertical: hp(1.5),
                  fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                  fontFamily: 'OpenSans-Regular',
                }}>
                {item.detial.descriptionTWO.paramtwo}
              </Text>

              <Imgcomp url={item.detial.image3} />
              <Text
                style={{
                  color: 'black',
                  opacity: 1,
                  fontSize: 22.5,
                  lineHeight: hp(3.5),
                  letterSpacing: 0,
                  marginVertical: hp(1.5),
                  fontFamily: 'OpenSans-Regular',
                }}>
                {item.detial.descriptionTHREE}
              </Text> */}

              {/* <Imgcomp url={item.detial.image4} /> */}
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

export default Detialpage;

const styles = StyleSheet.create({
  a:{
    fontWeight: '600',
    color: 'rgb(199, 167, 112)', // make links coloured pink
  },
  span:{
    color:'black'

  },


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
