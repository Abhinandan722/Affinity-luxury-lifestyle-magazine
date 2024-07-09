import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Imgcomp = ({url, height, width, marginVertical, resizeMode,alignSelf,marginTop,paddingVertical,overflow}) => {
  return (
    <Image
      style={{
        width: width ? width : wp(90),
        height: height ? height : hp(30),
        marginVertical: marginVertical ? marginVertical : hp(0),
        resizeMode: resizeMode ? resizeMode : null,
        alignSelf: alignSelf?alignSelf:null,
        marginTop:marginTop? marginTop:null,
        paddingVertical:paddingVertical?paddingVertical:null,
     overflow:overflow?overflow:null
      }}
      source={{uri:`${url}`}}
    />
    
  );
};

export default Imgcomp;

const styles = StyleSheet.create({});
