import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomBTN = ({
  height,
  width,
  image,
  tintColor,
  borderColor,
  backgroundColor,
  self,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignSelf: self ? self : null,
        borderWidth: 0.9,
        height: hp(7),
        width: wp(14),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: borderColor ? borderColor : 'rgb(170, 170, 170)',
        backgroundColor: backgroundColor ? backgroundColor : null,
      }}>
      <Image
        style={{
          height: hp(height),
          width: wp(width),
          tintColor: tintColor ? tintColor : 'rgb(170, 170, 170)',
        }}
        source={image}
      />
    </TouchableOpacity>
  );
};

export default CustomBTN;

const styles = StyleSheet.create({});
