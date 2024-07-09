import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ScrollView,
    ActivityIndicator,
    BackHandler
  } from 'react-native';
  import React, {useEffect, useState, useRef} from 'react';
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import {useNavigation} from '@react-navigation/native';
  import Icon from 'react-native-vector-icons/Entypo';
 
  import {createDrawerNavigator} from '@react-navigation/drawer';


const Prev_Newer = () => {
  const navigation=useNavigation()
  useEffect(() => {
    const backAction = () => {
      // Handle custom back button behavior here
      // For example, navigate back to previous screen
      navigation.goBack();
      return true; // Prevent default behavior (exit app)
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove(); // Clean up the event listener on unmount
  }, [navigation]);

  return (
   
      <View className="flex-row justify-around mt-10">
         {/* this is a prev and next view  */}
      <TouchableOpacity  onPress={()=>navigation.navigate('prevdetial')}
        style={{width: wp(35), maxHeight: hp(35)}} 
        className="relative z-0 overflow-hidden">
        <View
          className=" p-1 absolute z-10 left-1 top-1 mr-2 "
          style={[
            styles.absulte,
            {backgroundColor: '#ffffff',
               height: '96%',
                width: '94%',opacity:0.9
              },
          ]}>
          <View className="flex-row items-center gap-3 justify-center">
            <Icon name="arrow-long-left" size={15} color="black" />
            <Text
              style={{letterSpacing: 1}}
              className=" text-black font-semibold text-base ">
              PREVIOUS
            </Text>
          </View>

          <Text
            className=" text-black  text-center text-2xl "
            style={{
              fontFamily: 'PlayfairDisplay-Medium',
              letterSpacing: 1,
            }}>
            The Acqua di Parma Afternoon Tea at Baglioni
          </Text>
          
        </View>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../img/previes.png')}
        />
      </TouchableOpacity>

      {/* newer */}

      <TouchableOpacity onPress={()=>navigation.navigate('newerdetial')}
        style={{width: wp(35), maxHeight: hp(28)}}
        className="relative z-0 overflow-hidden ">
        <View
          className=" p-1 absolute z-10 left-1 top-1 mr-2 opacity-90 "
          style={[
            styles.absulte,
            {backgroundColor: '#ffffff', height: '96%', width: '94%'},
          ]}>
          <View className="flex-row items-center gap-3 justify-center">
            <Text
              style={{letterSpacing: 3}}
              className=" text-black font-semibold text-base">
              NEWER
            </Text>
            <Icon name="arrow-long-right" size={15} color="black" />
          </View>

          <Text
            className=" text-black  text-center text-2xl  opacity-90"
            style={{
              fontFamily: 'PlayfairDisplay-Medium',
              letterSpacing: 1,
            }}>
       Courgette, Feta and Mint Fritters
          </Text>
        </View>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../img/newer.jpg')}
        
        
        />
      </TouchableOpacity>
          {/* random  post view */}
    </View>

  )
}

export default Prev_Newer

const styles = StyleSheet.create({})