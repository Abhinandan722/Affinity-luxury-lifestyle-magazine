import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    useWindowDimensions,
    Alert,
  } from 'react-native';
  import Animated, {
    FadeInDown,
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedRef,
  } from 'react-native-reanimated';
  import React, {useEffect, useState, useRef} from 'react';
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import RenderHTML from 'react-native-render-html';
import axios from 'axios';

const Affinity_img = () => {
    const {width} = useWindowDimensions();
const [storeimg,setStoreimg]=useState(null);
    useEffect(() => {
        apicall();
       
      }, []);
    
      const apicall = async () => {
        try {
          const result = await axios.get(
            'https://affinitymag.co.uk/wp-json/custom/v1/widgets/sidebar-1/0',
          );
    
          setStoreimg(result.data.text);
        } catch (error) {
          console.log('api call for image get error', error);
        }
      };
    
      const source = {
        html: storeimg, 
      };
      const tagsStyles = {
        img: {
          width: wp(90),
          height: hp(70),
        },
      };
  return (
    <Animated.View  entering={FadeInDown.duration(800)} 
    style={{  marginVertical: hp(8),}}
    >
        {
            storeimg&&(
                <RenderHTML
                source={source}
                contentWidth={width}
                tagsStyles={tagsStyles}
              />

            )
        }
     
    </Animated.View>
  )
}

export default Affinity_img

const styles = StyleSheet.create({})