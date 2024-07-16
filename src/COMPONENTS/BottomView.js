import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomBTN from './customBTN';

const BottomView = ({scrollToTop}) => {
  return (
    <View>
      <View
        className="flex-row  justify-center items-center py-7"
        style={{backgroundColor: '#333333', width: wp(100), gap: wp(6)}}>
        <CustomBTN
          height={3}
          width={5}
          image={require('../img/facebook-app-symbol.png')}
          tintColor={'white'}
          borderColor={'white'}
          backgroundColor={'transparent'}
          url={'https://www.facebook.com/AffinityMag'}
        />
        <CustomBTN
          height={3}
          width={6}
          image={require('../img/twitter.png')}
          tintColor={'white'}
          borderColor={'white'}
          backgroundColor={'transparent'}
          url={'https://x.com/i/flow/login?redirect_after_login=%2Faffinitymagz'}
        />
        <CustomBTN
          height={3}
          width={6}
          image={require('../img/instagram-logo.png')}
          tintColor={'white'}
          borderColor={'white'}
          backgroundColor={'transparent'}
          url={'https://www.instagram.com/affinitymagz/'}
        />
      </View>
      <View style={{backgroundColor: '#242424'}} className="py-8">
        <Image
          style={[styles.mainlogo, {marginVertical: hp(2), width: wp(100)}]}
          source={require('../img/logo-forbottom.png')}
        />
        <Text
          style={{color: 'rgb(153, 153, 153)'}}
          className="text-xl text-center">
          Copyrights © 2021 Affinitymag. All Rights Reserved.
        </Text>
        <TouchableOpacity
          onPress={scrollToTop}
          className="self-center items-center py-1 my-4 ">
          <Image
            style={{
              width: wp(5),
              height: hp(4),
              tintColor: 'rgb(199,167,112)',
              transform: [{rotate: '270deg'}],
            }}
            source={require('../img/right1.png')}
          />
          <Text
            style={{fontFamily: 'OpenSans-Bold', color: 'rgb(199,167,112)'}}
            className="Text-center text-xl">
            BACK TO TOP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomView;

const styles = StyleSheet.create({
  mainlogo: {
    height: hp(12),
    width: wp(90),
    resizeMode: 'contain',
  },
});
