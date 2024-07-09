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
import {Products, Randomposts} from '../products';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import Randompost from './randompost';
import ConnectWithUs from '../COMPONENTS/connectWithUs';
import CustomBTN from '../COMPONENTS/customBTN';
import BottomView from '../COMPONENTS/BottomView';
import Prev_Newer from '../COMPONENTS/prev_Newer';
import Header from '../COMPONENTS/headers/header';

const Randompost_Detail = ({route}) => {
  const {item} = route.params;
  const drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [toggle, setToggle] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Randomposts[0]);
    console.log('/////////////', Randomposts[0].id);
  }, []);
  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({y: 0, animated: true, duration: 1000});
  };

  const opendrower = () => {
    navigation.openDrawer();
  };
  console.log('item..', item);
  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={{flexGrow: 1}}
      style={{marginBottom: 20}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: wp(5), backgroundColor: 'white'}}>
          <Header category={'Travel'} />
          <TouchableOpacity style={{marginTop: hp(3)}}>
            <Image
              style={{width: wp(90), height: hp(30), marginBottom: 10}}
              source={{uri: `${item.featured_image}`}}
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
                  marginHorizontal: wp(5),
                }}>
                {data.name}
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
            {item.title}
          </Text>

          <View className="flex-row items-center justify-center gap-2 mt-0.3">
          <Text
              style={{
              
                fontSize: 20,
                color: 'rgb(199, 167, 112)',
                
              }}>
              Admin
            </Text>
          <Text
            style={{
            
              fontSize: 21,
              color: 'rgb(170, 170, 170)',
              fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
              
            }}>
         
            {item.created_date}
          </Text>
       
          </View>
          {/* <Text
            style={{
              textAlign: 'center',
              fontSize: 22,
              color: 'rgb(170, 170, 170)',
              fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
              marginTop: hp(1),
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: 'rgb(199, 167, 112)',
                marginRight:20
              }}>
              Admin
            </Text>
            {item.created_date}
          </Text> */}

          {/* <Text
                  style={{
                    color: 'black',
                    
                    fontSize: 22,
                    lineHeight: hp(4),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    
                    fontFamily:'OpenSans-Regular'                
               }}>
                  {data.description}
                </Text> */}

          {/* <View style={{marginTop: hp(2)}}>
              <View>
  
                 <Image
                  style={{
                    width: wp(90),
                    height: hp(30),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.desconeimageone}
                /> 
                  <Text
                  style={{
                    color: 'black',
         
                    fontSize: 22,
                    lineHeight: hp(4),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily:'OpenSans-Regular'      
                
               }}>{data.desconeparaone} 
                </Text>
  
                <Text
                  style={{
                    color: 'black',
           
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily:'OpenSans-Regular'
                
               }}>
                 {data.desconeparatwo} 
                </Text>
              
                <Image
                  style={{
                    width: wp(90),
                    height: hp(30),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.desctwoimageone}
                />
                 <Text
                  style={{
                    color: 'black',
                  
                    fontSize: 22,
                    lineHeight: hp(4.5),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    
                  fontFamily:'OpenSans-Regular'
                  
               }}>
                 {data.desctwoparaone} 
                </Text>

                <Image
                  style={{
                    width: wp(90),
                    height: hp(30),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.descthreeimageone}
                />
                    <Image
                  style={{
                    width: wp(90),
                    height: hp(30),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.descthreeimagetwo}
                />
                 <Text
                  style={{
                    color: 'black',
                   
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily:'OpenSans-Regular'
               }}>
                 {data.descthreeparaone} 
                </Text>
                <Image
                  style={{
                    width: wp(90),
                    height: hp(70),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.descfourimageone}
                />
                 <Text
                  style={{
                    color: 'black',
                 
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily:'OpenSans-Regular'
               }}>
                 {data.descfourparaone} 
                </Text>
                <Image
                  style={{
                    width: wp(90),
                    height: hp(70),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.descfiveimageone}
                />
                 <Text
                  style={{
                    color: 'black',
             
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily:'OpenSans-Regular'
               }}>
                 {data.descfiveparaone} 
                </Text>

                <Image
                  style={{
                    width: wp(90),
                    height: hp(30),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.descsiximageone}
                />
                 <Text
                  style={{
                    color: 'black',
                
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily:'OpenSans-Regular'
               }}>
                 {data.descsixparaone} 
                </Text>
                <Text
                  style={{
                    color: 'black',
                  
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily:'OpenSans-Regular'
               }}>
                 {data.descsixparatwo} 
                </Text>
                <Image
                  style={{
                    width: wp(90),
                    height: hp(70),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.descsevenimageone}
                />
                 <Text
                  style={{
                    color: 'black',
                   
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily:'OpenSans-Regular'
               }}>
                 {data.descsevenparaone} 
                </Text>

                <Image
                  style={{
                    width: wp(90),
                    height: hp(70),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.descateimageone}
                />
                 <Text
                  style={{
                    color: 'black',
         
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily:'OpenSans-Regular'
               }}>
                 {data.descateparaone} 
                </Text>
                <Image
                  style={{
                    width: wp(90),
                    height: hp(70),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.descnineimageone}
                />
                 <Text
                  style={{
                    color: 'black',
             
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily:'OpenSans-Regular'
               }}>
                 {data.descnineparaone} 
                </Text>
                <Text
                  style={{
                    color: 'black',
                   
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                
               }}>
                 {data.descnineparatwo} 
                </Text>
                <Image
                  style={{
                    width: wp(90),
                    height: hp(30),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.desctenimageone}
                />
                 <Text
                  style={{
                    color: 'black',
               
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily:'OpenSans-Regular'
               }}>
                 {data.desctenparaone} 
                </Text>
               < Image
                  style={{
                    width: wp(90),
                    height: hp(70),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.descellevenimageone}
                />
                 < Image
                  style={{
                    width: wp(90),
                    height: hp(70),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.descellevenimagetwo}
                />
                 <Text
                  style={{
                    color: 'black',
     
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily:'OpenSans-Regular'
               }}>
                 {data.descellevenparaone} 
                </Text>
                < Image
                  style={{
                    width: wp(90),
                    height: hp(70),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.desctowellimageone}
                />
                 <Text
                  style={{
                    color: 'black',
                   
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily:'OpenSans-Regular'
               }}>
                 {data.desctowellparaone} 
                </Text>
                < Image
                  style={{
                    width: wp(90),
                    height: hp(30),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.descthirteenimageone}
                />
                 <Text
                  style={{
                    color: 'black',
                   
                    fontSize: 22,
                    lineHeight: hp(3.6),
                    letterSpacing: 1,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily:'OpenSans-Regular'
               }}>
                 {data.descthirteenparaone} 
                </Text>
                < Image
                  style={{
                    width: wp(90),
                    height: hp(30),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.descfourteenimageone}
                />
                 <Text
                  style={{
                    color: 'black',
                 
                    fontSize: 22,
                    lineHeight: hp(3.8),
                    letterSpacing: 1.7,
                    marginVertical: hp(1.5),
                    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                    fontFamily:'OpenSans-Regular'
               }}>
                 {data.descfourteenparaone} 
                </Text>
                < Image
                  style={{
                    width: wp(90),
                    height: hp(70),
                    marginTop: hp(2.5),
                    marginBottom: 22,
                  }}
                  source={data.descfifteenimageone}
                /> 
  
  
              
              </View>
            </View> */}

          <Text className="text-black italic text-2xl font-semibold my-3">
            BOOK IT
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
            }}>
            Nightly rates at Château de Candie start from € 200 per room on a
            Bed and Breakfast basis.
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
            }}>
            Exclusive use of Château de Candie and all its rooms is € 15,000.
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
            }}>
            Wedding packages are tailored to couples individual needs, for more
            information and to book, please visit
            <Text style={{color: 'rgb(199, 167, 112)'}} className="opacity-100">
              {' '}
              www.chateaudecandie.com.
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

export default Randompost_Detail;

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
