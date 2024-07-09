import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Imgcomp from '../imgcomp';

const Card = ({item, navigationn, iDnum}) => {
  const navigation = useNavigation();

  return (
    <>
     {
      item.featured_image_url?<TouchableOpacity 
      onPress={navigationn}
      >
        <Imgcomp url={item.featured_image_url}  />
      </TouchableOpacity>:null
     }
      
   
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
              letterSpacing: 2,
              fontFamily: 'OpenSans_Condensed-Medium',
              marginHorizontal: wp(1.4),
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
  onPress={navigationn}
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
          color: 'black',
          opacity: 0.8,
          fontSize: 22,
          lineHeight: hp(3.6),
          letterSpacing: 1,
          marginVertical: hp(1.5),
          fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
          fontFamily: 'OpenSans-Regular',
        }}>
         {`${item.excerpt}`} 
      
      </Text>

      <Text
        style={{
          textAlign: 'center',
          fontSize: 22,
          color: 'rgb(170, 170, 170)',
          fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 21,
            color: 'rgb(199, 167, 112)',
          }}>
        {item.author}
        </Text> /{item.date} 
        
      </Text>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  line: {
    height: 1,

    minWidth: wp(5),

    backgroundColor: 'rgb(199, 167, 112)',
  },
});
