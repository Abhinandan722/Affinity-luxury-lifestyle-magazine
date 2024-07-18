import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {getData} from '../API/api';
const Prev_Newer = (item) => {
  const [Loader, setLoader] = useState(false);
  const navigation = useNavigation();
  const [preNew_items, setPreNew_items] = useState(null);
  const [prevHeight, setPrevHeight] = useState(0); // State to manage previous post height
  const [nextHeight, setNextHeight] = useState(0); // State to manage next post height

  useEffect(() => {
    loadmore();
  }, [item.item.id]);
  
 

  const loadmore = async () => {
    setLoader(true);
    try {
      const result = await getData(`/custom/v1/content/post?id=${item.item.id}`);
      setPreNew_items(result.data);
      // console.log('this is prevnew_item', result.data.next_post.title);
     
    } catch (error) {
      console.log('this is prevnew_item error ', error);
    } finally {
      setLoader(false);
    }
  };

  const handlePrevLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setPrevHeight(height); // Set the height based on the title size
  };

  // Function to handle layout changes of the next post title
  const handleNextLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setNextHeight(height); // Set the height based on the title size
  };

  
  return (
    <>
      {Loader ? (
        <ActivityIndicator
          className="h-40"
          size="large"
          color="rgb(199, 167, 112)"
        />
      ) : preNew_items ? (
        <View className=" justify-around mt-10 gap-5">
          {/* this is a prev and next view  */} 

    {
     preNew_items.prev_post==null?null: 
          <TouchableOpacity
            onPress={() => navigation.navigate('prevdetial',{item: preNew_items.prev_post})}
            style={{width: wp(90), maxHeight: prevHeight+48}}
            className="relative z-0 overflow-hidden ">
            <View
              className=" p-1 absolute z-10 left-1 top-1 mr-2 "
              style={[
                styles.absulte,
                {
                  backgroundColor: '#ffffff',
                  height: prevHeight+40, // Dynamic height
                  width: '98%',
                  opacity: 0.9,
                },
              ]}>
              <View className="flex-row items-center gap-3 justify-center">
                <Icon name="arrow-long-left" size={15} color="black" />
                <Text
                  style={{letterSpacing: 1}}
                  className=" text-black font-semibold text-lg ">
                  PREVIOUS
                </Text>
              </View>

              <Text
                className=" text-black  text-center text-2xl "
                onLayout={handlePrevLayout} // Measure the height
                style={{
                  fontFamily: 'PlayfairDisplay-Medium',
                  letterSpacing: 1,
                }}>
                {preNew_items.prev_post.title}
              </Text>
            </View>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri:preNew_items.prev_post.featured_image_url}}
            />
          </TouchableOpacity>
    }
          {/* newer */}
          {
     preNew_items.next_post==null?null: 
          <TouchableOpacity
          onPress={() => navigation.navigate('prevdetial',{item: preNew_items.next_post})}
            style={{width: wp(90), maxHeight: nextHeight+48}}
            className="relative z-0 overflow-hidden ">
            <View
              className=" p-1 absolute z-10 left-1 top-1 mr-2 opacity-90 "
              style={[
                styles.absulte,
                {backgroundColor: '#ffffff', height: nextHeight+40, width: '98%'}, // Dynamic height
              ]}>
              <View className="flex-row items-center gap-3 justify-center">
                <Text
                  style={{letterSpacing: 3}}
                  className=" text-black font-semibold text-lg">
                  NEWER
                </Text>
                <Icon name="arrow-long-right" size={15} color="black" />
              </View>

              <Text
                className=" text-black  text-center text-2xl  opacity-90"
                onLayout={handleNextLayout} // Measure the height
                style={{
                  fontFamily: 'PlayfairDisplay-Medium',
                  letterSpacing: 1,
                }}>
                  {preNew_items.next_post.title}
              </Text>
            </View>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri:preNew_items.next_post.featured_image_url}}
            />
          </TouchableOpacity>
          }
          {/* random  post view */}
        </View>
      ) : null}
    </>
  );
};

export default Prev_Newer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    width: wp(35),
    overflow: 'hidden',
    position: 'relative',
  },
  absoluteView: {
    position: 'absolute',
    left: 1,
    top: 1,
    marginRight: 2,
    backgroundColor: '#ffffff',
    width: '94%',
    opacity: 0.9,
    padding: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  buttonText: {
    letterSpacing: 1,
    color: 'black',
    fontWeight: '600',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'PlayfairDisplay-Medium',
    letterSpacing: 1,
  },
  image: {
    width: '100%',
    height: hp(20), // Set a fixed height for images to ensure consistent layout
  },

  
});
