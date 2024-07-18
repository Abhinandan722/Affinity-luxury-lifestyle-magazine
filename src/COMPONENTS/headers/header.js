import {StyleSheet, Text, Image, TouchableOpacity, View, Pressable, Alert} from 'react-native';
import React, { useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Animated, {FadeInDown, FadeInLeft, FadeInUp} from 'react-native-reanimated';

const Header = ({category,isloading}) => {
  const navigation = useNavigation();
  const[home,setHome]=useState('Home')

  const opendrower = () => {
    navigation.openDrawer();
  };

  return (
    <Animated.View
      entering={FadeInUp.duration(500).springify()}
      style={styles.mainTextView}>
      <TouchableOpacity 
       
       onPress={()=>navigation.navigate('home',{categories:home})}>

      <Image
        style={styles.mainlogo}
        source={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/Affinity-Luxury-Logo.jpg')}
      />
         </TouchableOpacity>

      <View style={{flexDirection:'row',marginTop:hp(1) }}>
        <TouchableOpacity onPress={opendrower}>
          <Image
            style={{width: wp(8), height: hp(5), tintColor: 'black'}}
            source={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/bars.png')}
          />
        </TouchableOpacity>
        {
          category&&(
        <Animated.View  
         entering={FadeInLeft.delay(500)
          .duration(600)}
        style={{flexDirection:'row' ,flexWrap:'wrap',}}>
          <Text
            className="text-xl"
            style={{
              color: 'rgb(199, 167, 112)',
              alignSelf: 'center',
              marginLeft: wp(3),
              fontFamily: 'OpenSans_Condensed-Medium',
              letterSpacing: 1.5,
              
            }}>
            {category}
          </Text>
        </Animated.View>
        
      )
    }
      </View>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainTextView: {
    position: 'relative',
    paddingRight:wp(10),
  
  },
  mainlogo: {
    height: hp(12),
    width: wp(90),
    resizeMode: 'contain',
  },
});
