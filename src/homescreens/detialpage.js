import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
  useWindowDimensions,
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
import {Products} from '../products';
import HTMLView from 'react-native-htmlview';
import Animated, {
  FadeInDown,
  sharedTransitionTag,
} from 'react-native-reanimated';
import Mybuttons from '../COMPONENTS/buttons';
import RenderHTML from 'react-native-render-html';

const Detialpage = ({route}) => {
  const {item} = route.params;
  const drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [toggle, setToggle] = useState(0);
  const [randomValues, setRandomValues] = useState([]);
  const [items, setItems] = useState();

  useEffect(() => {
    scrollToTop();
  },);
  const {width} = useWindowDimensions();
  const fadeInDownRef = useRef(null);
  // const htmlContent = `${item.content}`;
  const source = {
    html: item.content, 
  };

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({y: 0, animated: true, duration: 1000});
  };

  const opendrower = () => {
    navigation.openDrawer();
  };

  const tagsStyles = {
    span: {
      color: 'black',
      
      fontSize: 21,
      lineHeight: hp(3.6),
      letterSpacing: 1,
      marginVertical: hp(2.5),

      fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                  fontFamily: 'OpenSans-Regular',
    },
    b: {
      fontSize: 18,
      color: 'rgb(199, 167, 112)',
    },

  
    a:{
    

        fontSize: 21,
      lineHeight: hp(3.6),
      fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
      fontFamily: 'OpenSans-Regular',

    
     
    },
    img: {
      width: wp(90),
      height: 'auto',
      marginVertical: hp(1),
    },
  };
  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={{flexGrow: 1}}>
      <Animated.View
        style={{flex: 1, backgroundColor: 'white'}}
        ref={fadeInDownRef}>
        <View style={{paddingHorizontal: wp(5), backgroundColor: 'white'}}>
          <View style={styles.mainTextView}>
            <Image
              style={styles.mainlogo}
              source={require('../img/Affinity-Luxury-Logo.jpg')}
            />
          </View>
          <View style={{marginTop: hp(2)}}>
            <View>
              <Animated.View
                entering={FadeInDown.delay(200)
                  .duration(400)
                  .springify()
                  .damping(12)}>
                <TouchableOpacity>
                  <Animated.Image
                    style={{
                      width: wp(90),
                      height: hp(30),
                    }}
                    source={{uri: item.featured_image_url}}
                    sharedTransitionTag={item.title}
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
                        flex: 0.4,
                      }}
                    />
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: 22,
                        fontWeight: '600',
                        letterSpacing: 1.9,
                        fontFamily: 'OpenSans_Condensed-Medium',
                        marginHorizontal: wp(1),
                      }}>
                      {item.categories}
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
                  {item.title}
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
                    {item.author}
                  </Text>
                  /{item.date}
                </Text>
              </Animated.View>

              <Animated.View
                style={{marginTop: hp(4)}}
                entering={FadeInDown.delay(200)
                  .duration(800)
                  .springify()
                  .damping(20)}>
                {/* <HTMLView value={htmlContent} stylesheet={htmlContentStyles} /> */}
<RenderHTML 
    source={source}
    contentWidth={width}
    tagsStyles={tagsStyles}
 />

                {/* <View className="mb-14">
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
                </View> */}
                <Mybuttons/>
              </Animated.View>

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

              <Prev_Newer item={item} />

              {/* random  post view */}

              <Randompost  item={item} />
            </View>
          </View>

        
          

          <ConnectWithUs />
        </View>
        <BottomView scrollToTop={scrollToTop} />
      </Animated.View>
    </ScrollView>
  );
};

export default Detialpage;

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

