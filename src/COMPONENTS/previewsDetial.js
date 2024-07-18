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
import CustomBTN from './customBTN';
import ConnectWithUs from './connectWithUs';
import BottomView from './BottomView';
import Randompost from '../homescreens/randompost';
import Prev_Newer from './prev_Newer';
import HTMLView from 'react-native-htmlview';
import Animated, {
  FadeInDown,
  sharedTransitionTag,
} from 'react-native-reanimated';
import {getData} from '../API/api';
import Header from './headers/header';
import Affinity_img from './affinity_main_img/affinity_img';
import Mybuttons from './buttons';
import RenderHTML from 'react-native-render-html';

const PreviewsDetial = ({route}) => {
  const {width} = useWindowDimensions();
  const {item} = route.params;
  const drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [toggle, setToggle] = useState(0);
  const [randomValues, setRandomValues] = useState([]);
  const [items, setItems] = useState();
  const [preNew_items, setPreNew_items] = useState(null);
  const [Loader, setLoader] = useState(false);

  useEffect(() => {
    scrollToTop();
    loadmore();
  }, [item.id]);
  

  const loadmore = async () => {
    setLoader(true);
    try {
      const result = await getData(`/custom/v1/content/post?id=${item.id}`);
      setPreNew_items(result.data);
      // console.log('this is prevnew_item   in prev detial page ', result.data.author);
    } catch (error) {
      console.log('this is prevnew_item detial page  error ', error);
    } finally {
      setLoader(false);
    }
  };
  const fadeInDownRef = useRef(null);
  const source = {
    html: preNew_items ? preNew_items.content : '',
  };

  const tagsStyles = {
    div:{
  
      color: 'black',

      fontSize: 21,
      lineHeight: hp(3.6),
      letterSpacing: 1,
      marginVertical: hp(2.5),

      fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
      fontFamily: 'OpenSans-Regular',

    
  },
    p: {
      color: 'black',

      fontSize: 21,
      lineHeight: hp(3.6),
      letterSpacing: 1,
      marginVertical: hp(2.5),

      fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
      fontFamily: 'OpenSans-Regular',
    },
  
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

    a: {
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

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({y: 0, animated: true, duration: 1000});
  };

  const opendrower = () => {
    navigation.openDrawer();
  };

  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={{flexGrow: 1}}>
      <Animated.View
        style={{flex: 1, backgroundColor: 'white'}}
        ref={fadeInDownRef}>
        <View style={{paddingHorizontal: wp(5), backgroundColor: 'white'}}>
          <Header category={preNew_items ? preNew_items.categories : ' '} />

          <View style={{marginTop: hp(2)}}>
            <View>
              {Loader || preNew_items === null ? (
                <ActivityIndicator
                  style={{height: hp(70), alignSelf: 'auto'}}
                  size={'large'}
                  color="rgb(199, 167, 112)"
                />
              ) : (
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
                          objectFit:'contain'
                        }}
                        source={{   uri: item.featured_image_url
                          ? item.featured_image_url
                          : ' https://affinitymag.co.uk/wp-content/uploads/2020/03/MAIN-IMAGE-3.jpg',}}
                        // sharedTransitionTag={item.title}
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
                          {preNew_items.categories}
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
                      {preNew_items.title}
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
                        {preNew_items.author}{' '}
                      </Text>{' '}
                      /{preNew_items.date}
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
                    <Mybuttons />
                  </Animated.View>
                </View>
              )}

              {/* <TouchableOpacity
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
              </TouchableOpacity> */}

              {Loader || preNew_items === null ? (
                <ActivityIndicator
                  style={{
                    height: hp(30),
                  }}
                  size="large"
                  color="rgb(199, 167, 112)"
                />
              ) : (
                <Prev_Newer item={preNew_items} />
              )}

              {/*  rendom  */}
              {Loader || preNew_items === null ? (
                <ActivityIndicator
                  style={{
                    height: hp(50),
                  }}
                  size="large"
                  color="rgb(199, 167, 112)"
                />
              ) : (
                <Randompost item={preNew_items} />
              )}
            </View>
          </View>

          <ConnectWithUs />
        </View>
        <BottomView scrollToTop={scrollToTop} />
      </Animated.View>
    </ScrollView>
  );
};

export default PreviewsDetial;

const styles = StyleSheet.create({
  // ---------------------main style ----------------------------------------
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
