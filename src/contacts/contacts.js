import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Alert,
  Linking,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import React, {useEffect, useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {BEAUTY, FASHION, Products, fashionANDBeauty} from '../products';

import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomView from '../COMPONENTS/BottomView';
import ConnectWithUs from '../COMPONENTS/connectWithUs';
import CustomBTN from '../COMPONENTS/customBTN';
import Plus from 'react-native-vector-icons/FontAwesome5';
import Minus from 'react-native-vector-icons/FontAwesome5';
import Keyboard from 'react-native-vector-icons/FontAwesome5';
import {Divider} from 'react-native-paper';
import WebView from 'react-native-webview';
import Header from '../COMPONENTS/headers/header';
const Contacts = () => {
  const drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [homescreendata, setHomescreendata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false); // State to track if all items are loaded
  
  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = () => {
    if (isLoading || allLoaded) return; // Stop loading if already loading or all items are loaded

    setIsLoading(true);
    // Simulating an API call with a timeout
    setTimeout(() => {
      const newItems = BEAUTY.slice((currentPage - 1) * 5, currentPage * 5);
      setHomescreendata([...homescreendata, ...newItems]);
      setCurrentPage(currentPage + 1);

      if (homescreendata.length + newItems.length >= BEAUTY.length) {
        setAllLoaded(true); // Set allLoaded to true if all items are loaded
      }
      setIsLoading(false);
    }, 1000);
  };

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({y: 0, animated: true, duration: 1000});
  };

  const opendrower = () => {
    navigation.openDrawer();
  };
  // zoom
  const [selectedRegion, setSelectedRegion] = useState({
    latitude: 22.717554721106843,
    longitude: 75.85146654028246,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });
  const [zoom, setZoom] = useState(14);

  const mapRef = useRef(null);
  const MAX_ZOOM_LEVEL = 20;
  const MIN_ZOOM_LEVEL = 3;

  const getLatLongDelta = (zoomLevel, latitude) => {
    const EARTH_RADIUS = 6378137;
    const equatorLength = 2 * Math.PI * EARTH_RADIUS;
    const widthInMeters =
      (equatorLength * Math.cos((latitude * Math.PI) / 180)) /
      Math.pow(2, zoomLevel);
    const heightInMeters = equatorLength / Math.pow(2, zoomLevel);
    const latitudeDelta = heightInMeters / 111320;
    const longitudeDelta =
      widthInMeters / (111320 * Math.cos((latitude * Math.PI) / 180));
    return [longitudeDelta, latitudeDelta];
  };
  const handleZoom = (isZoomIn = false) => {
    let currentZoomLevel = zoom;
    // if zoomlevel set to max value and user click on minus icon, first decrement the level before checking threshold value
    if (!isZoomIn && currentZoomLevel === MAX_ZOOM_LEVEL) {
      currentZoomLevel -= 1;
    }
    // if zoomlevel set to min value and user click on plus icon, first increment the level before checking threshold value
    else if (isZoomIn && currentZoomLevel === MIN_ZOOM_LEVEL) {
      currentZoomLevel += 1;
    }
    if (
      currentZoomLevel >= MAX_ZOOM_LEVEL ||
      currentZoomLevel <= MIN_ZOOM_LEVEL
    ) {
      return;
    }

    currentZoomLevel = isZoomIn ? currentZoomLevel + 1 : currentZoomLevel - 1;
    const zoomedInRegion = {
      ...selectedRegion,
      latitudeDelta: getLatLongDelta(
        currentZoomLevel,
        selectedRegion.latitude,
      )[1],
      longitudeDelta: getLatLongDelta(
        currentZoomLevel,
        selectedRegion.latitude,
      )[0],
    };

    setSelectedRegion(zoomedInRegion);
    setZoom(currentZoomLevel);
    mapRef?.current?.animateToRegion(zoomedInRegion, 100);
  };
  //zoom end

  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: wp(5), backgroundColor: 'white'}}>
        <Header category={'Contact'}/>
          <View style={styles.mainTextView}>
          
         
            <Text
              className="text-6xl  my-10"
              style={{
                alignItems: 'center',
                color: 'black',
                lineHeight: hp(10),
                fontFamily: 'PlayfairDisplay-Medium',
                textAlign: 'center',
              }}>
              Contact
            </Text>
          </View>
          <Text style={styles.description}>
            Office:{' '}
            <Text style={{fontFamily: 'OpenSans-Regular', letterSpacing: 1}}>
              {' '}
              01234 962106
            </Text>
          </Text>
          <Text style={styles.description}>
            Mobile:{' '}
            <Text style={{fontFamily: 'OpenSans-Regular', letterSpacing: 1}}>
              07507 602401
            </Text>
          </Text>

          <Text style={[styles.description, {marginVertical: hp(5)}]}>
            Address:{' '}
            <Text style={{fontFamily: 'OpenSans-Regular', letterSpacing: 1}}>
              10 Francis Groves Close, Bedford, MK41 7DH
            </Text>
          </Text>
          <Text style={[styles.description, {marginVertical: hp(1)}]}>
            Email:{' '}
            <Text style={{fontFamily: 'OpenSans-Regular', letterSpacing: 1}}>
              jane@affinitymag.co.uk
            </Text>
          </Text>

          <Text
            style={{
              color: 'black',

              fontSize: 22,
              lineHeight: hp(4.3),
              letterSpacing: 1.4,

              marginTop: hp(10),
              fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
              fontFamily: 'OpenSans-Regular',
            }}>
            [contact-form-7 404 "Not Found"]
          </Text>

          <View>
            <MapView
              style={{width: wp(90), height: hp(80)}}
              ref={mapRef}
              Vi
              
              initialRegion={selectedRegion}
              onRegionChangeComplete={region => {
                setSelectedRegion(region);
              }}
              showsUserLocation={true}
              >
              <Marker
                coordinate={{
                  latitude: 22.717554721106843,
                  longitude: 75.85146654028246,
                }}>
                <View className="w-10 h-10">
                  {/* <Location name="location" size={50} color="red" /> */}
                  <Image
                    className="w-10 h-10"
                    style={{resizeMode: 'cover'}}
                    source={require('../img/location.png')}
                  />
                </View>
              </Marker>
            </MapView>

            <View  
             style={{ shadowColor: 'black',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
            }}
            className="absolute w-48 py-2 top-2 left-2 bg-white justify-center items-start pl-4">
 <Text style={{ fontFamily: 'OpenSans-Bold',color:'black' ,fontSize:18}}>10 Francis Gr...</Text>
 
            </View>
            <View style={styles.zoomContainer}>
              <TouchableOpacity
                style={styles.zoomButton}
                onPress={() => handleZoom(true)}
                disabled={zoom === MAX_ZOOM_LEVEL}>
                <Plus name="plus" size={25} color="rgb(102,102,102)" />
              </TouchableOpacity>
              <Divider style={{backgroundColor:'rgb(102,102,102)',height:hp(0.1)}} />
              <TouchableOpacity
                style={styles.zoomButton}
                onPress={() => handleZoom()}
                disabled={zoom === MIN_ZOOM_LEVEL}>
                <Minus name="minus" size={25} color="rgb(102,102,102)" />
              </TouchableOpacity>
            </View>
            
            <View 
             style={{ 
              position:'absolute',
              height:hp(2.7),
              width:wp(65),
              backgroundColor:'rgb(247,247,247)',
              bottom: hp(0.5),
              right: wp(0),
              justifyContent:'space-around',
              alignItems:'center',flexDirection:'row',


             }}
              >
                <TouchableOpacity>
                <Text style={{
                  color:'black',
                  fontSize:11
                }}
                >Map data © 2024</Text>
                </TouchableOpacity>
              <TouchableOpacity>
              <Text
                style={{
                  color:'black',
                  fontSize:11
                }}
                >Terms</Text>
              </TouchableOpacity>
                <TouchableOpacity>
                <Text
                style={{
                  color:'black',
                  fontSize:11
                }}
                >Report a map error</Text>
                </TouchableOpacity>
             

            </View>
            <View 
             style={{backgroundColor:'rgb(247,247,247)',
              bottom:hp(0.5),left:wp(18),padding:0.1 ,height:hp(2.7),alignItems:'center',
             }}
            className="w-6 h-4 absolute ">
            <Keyboard name="keyboard" size={17} color="black" />
            </View>
           

          </View>

          <View className="mb-16 mt-6 ">
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
        </View>
        <BottomView scrollToTop={scrollToTop} />
      </View>
    </ScrollView>
  );
};

export default Contacts;

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
  description: {
    color: 'black',
    fontSize: 22,
    lineHeight: hp(4.3),
    letterSpacing: 1.4,
    marginVertical: hp(0),
    fontFamily: 'OpenSans-Bold',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  zoomContainer: {
    position: 'absolute',
    bottom: hp(6),
    right: wp(2),
    justifyContent: 'space-between',
    height: hp(12),
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: wp(1.2),
  },
  zoomButton: {
    width: wp(10),
    height: wp(10),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(5),
  },
  zoomText: {
    fontSize: 24,
    color: 'black',
  },

});

// -----+--
