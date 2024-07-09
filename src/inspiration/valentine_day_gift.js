import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
  Alert,
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
import Fullscr from 'react-native-vector-icons/MaterialIcons';
import Close from 'react-native-vector-icons/MaterialCommunityIcons';
import Closeinner from 'react-native-vector-icons/Ionicons';
import Imgcomp from '../COMPONENTS/imgcomp';
import Randompost from '../homescreens/randompost';
import {VELENTINES} from '../products';
import Prev_Newer from '../COMPONENTS/prev_Newer';
import Header from '../COMPONENTS/headers/header';

const Valentine_day_gift = () => {
  const drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [toggle, setToggle] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useState(() => {
    VELENTINES;
  }, []);
  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({y: 0, animated: true, duration: 1000});
  };

  const opendrower = () => {
    navigation.openDrawer();
  };
  const openModal = image => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  
  };
  const toggleSmallscreen=()=>{
    setIsFullscreen(!isFullscreen);
  }

  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: wp(5), backgroundColor: 'white'}}>
        <Header category={'Valentine’s Day Gift Ideas For 2022'}/>
       
          <View style={{marginTop: hp(2)}}>
            <View>
              <TouchableOpacity className="mt-5">
                <Imgcomp url={require('../img/valentaineday0.jpg')} />
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
            
            <View style={{flexDirection: "row", alignItems: "center", marginVertical: hp(1)}}>
          <View style={{   backgroundColor: 'rgb(199, 167, 112)', height: 2,flex:0.4,}} />
          <Text style={{
            textAlign: 'center',
            color: 'black',
            fontSize: 22,
            fontWeight: '600',
            letterSpacing: 1.5,
            fontFamily: 'OpenSans_Condensed-Medium',
            marginHorizontal:wp(1)
          }}> UNCATEGORIZED</Text>
          <View style={{   backgroundColor: 'rgb(199, 167, 112)', height: 2, flex:0.4}} />
        </View>
            
             
                 
              </View>

              <Text
                style={{
                  alignItems: 'center',
                  color: 'black',
                  fontSize: 45,
                  fontFamily: 'PlayfairDisplay-Medium',
                  textAlign: 'center',
                }}>
                VALENTINE’S DAY GIFT IDEAS FOR 2022
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

              <Text style={styles.description}>
                Not sure what to get your wife or husband-to-be for Valentine’s
                Day? Our Valentine’s Day gift guide is full of gift ideas for
                him and for her
              </Text>

              <Text
                className="self-center mt-2"
                style={[
                  styles.description,
                  {fontFamily: 'OpenSans-Bold', marginVertical: hp(0)},
                ]}>
                For Her
              </Text>
              <FlatList
              scrollEnabled={false}
                data={VELENTINES}
                renderItem={({item}) => {
                  console.log(',,,,', item);
                  return (
                    <View className="items-center">
                      <TouchableOpacity
                        onPress={() => openModal(item.img)}
                        className="my-12"
                        style={{
                          borderColor: 'black',
                          overflow: 'hidden',
                          alignItems: 'center',
                          justifyContent: 'center',
                          elevation: 0.5,
                      
                        
                          
                        }}>
                        <Imgcomp
                          width={wp(90)}
                          height={hp(42)}
                          marginVertical={hp(2)}
                          resizeMode={'contain'}
                        
                          url={item.img}
                          overflow={'hidden'}
                        />
                      </TouchableOpacity>
                      <View className="items-center">
                        <Text
                          style={[
                            styles.description,
                            {marginVertical: hp(0.3)},
                          ]}>
                          {item.param}
                        </Text>
                        <Text
                          style={[
                            styles.description,
                            {marginVertical: hp(0.3)},
                          ]}>
                          {item.paramtwo}
                        </Text>
                        <Text
                          style={[
                            styles.description,
                            {
                              marginVertical: hp(0.3),
                              color: 'rgb(199, 167, 112)',
                            },
                          ]}>
                          {item.paramthree}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />

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
      {/* Modal for displaying selected image */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={[styles.modalView, {}]}>
            {
                isFullscreen?  <TouchableOpacity onPress={closeModal} style={[styles.closeButton,{top:hp(5)}]}>
 <Closeinner name="close-outline" size={26} color="white" />
              </TouchableOpacity>
              :   <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
       <Close name="close-thick" size={30} color="white" />

            </TouchableOpacity>
            }

        

          {selectedImage && (
            <Image
              source={selectedImage}
              style={{
                width:  isFullscreen?wp(99):wp(90),
                 height: isFullscreen? hp(96) : hp(50),
                 resizeMode: isFullscreen?'stretch':'contain' }}
            />
          )}

{
                isFullscreen?  <TouchableOpacity onPress={toggleSmallscreen} style={[styles.fullscrButton,{backgroundColor:'grey',bottom:hp(5)}]}>
                <Fullscr name="fullscreen-exit" size={30} color="white" />
              </TouchableOpacity>
              :   <TouchableOpacity onPress={toggleFullscreen} style={[styles.fullscrButton,{backgroundColor:'grey'}]}>
              <Fullscr name="open-with" size={30} color="white" />
            </TouchableOpacity>
            }
 

        </View>
      </Modal>
    </ScrollView>
  );
};

export default Valentine_day_gift;

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
    alignSelf: 'center',
    textAlign: 'center',
  },
  lineone: {
    height: 0.6,

    maxWidth: wp(6),
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
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  closeButton: {
    position: 'absolute',
    top: hp(20),
    right: 25,
    zIndex: 1,
    padding:5,
    borderRadius:100,
    backgroundColor:'grey'
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  fullscrButton: {
    position: 'absolute',
    bottom: hp(20),
    right: 25,
    zIndex: 1,
    padding:5,
    borderRadius:100,
    
  },
  modalImage: {
    width: wp(90),
    height: hp(70),
    resizeMode: 'contain',
  },
  fullscreenImage: {
    width: wp(100),
    height: hp(100),
    resizeMode: 'contain',
  },
  normalImage: {
    width: wp(90),
    height: hp(70),
    resizeMode: 'contain',
  },
});
