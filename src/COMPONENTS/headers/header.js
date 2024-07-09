import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import {useNavigation} from '@react-navigation/native';
 

const Header = ({category}) => {
    const navigation = useNavigation();
  
    const opendrower = () => {
        navigation.openDrawer();
      };

    
  return (
    <View style={styles.mainTextView}>
    <Image
      style={styles.mainlogo}
      source={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/Affinity-Luxury-Logo.jpg')}
    />

    <View className="flex-row">
      <TouchableOpacity 
      onPress={opendrower}
      >
        <Image
          style={{width: wp(8), height: hp(5), tintColor: 'black'}}
          source={require('C:/Users/admin/OneDrive/Desktop/reactnative_todo/newtodo/src/img/bars.png')}
        />
      </TouchableOpacity>
      <Text
        className="text-xl"
        style={{
          color: 'rgb(199, 167, 112)',
          alignSelf: 'center',
          marginLeft: wp(5),
          fontFamily: 'OpenSans_Condensed-Medium',
          letterSpacing: 1.5,
          width:wp(80)
        }}>
     {category}
      </Text>
    </View>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({

    mainTextView: {
        position: 'relative',
      },
      mainlogo: {
        height: hp(12),
        width: wp(90),
        resizeMode: 'contain',
      },
})