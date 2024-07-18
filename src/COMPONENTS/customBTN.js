import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Pressable,
  TouchableHighlight,
  Linking,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

const CustomBTN = ({
  height,
  width,
  image,
  tintColor,
  borderColor,
  backgroundColor,
  self,
  url,
}) => {
  const scaleValue = useSharedValue(1);
  const handleButtonPress = () => {
    // Animate the button press
    scaleValue.value = withSpring(0.9, {
      damping: 10,
      stiffness: 100,
      mass: 0.5,
      overshootClamping: false,
    });
    // Reset the button scale after a short delay
    setTimeout(() => {
      scaleValue.value = withSpring(1, {
        damping: 1,
        stiffness: 100,
        mass: 0.5,
        overshootClamping: false,
      });
    }, 200);

    if (url) {
      Linking.openURL(url).catch(err => console.log('error on link', err));
    } else {
      // Alert.alert('url link is not available');
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaleValue.value}],
    };
  });

  return (
    <TouchableOpacity
      style={[
        {
          alignSelf: self ? self : null,
          borderWidth: 0.9,
          height: hp(7),
          width: wp(14),
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: borderColor ? borderColor : 'rgb(170, 170, 170)',
          backgroundColor: backgroundColor ? backgroundColor : null,
        },
      ]}
      onPress={handleButtonPress}>
      <Animated.Image
        style={[
          {
            height: hp(height),
            width: wp(width),
            tintColor: tintColor ? tintColor : 'rgb(170, 170, 170)',
          },
          animatedStyle,
        ]}
        source={image}
      />
    </TouchableOpacity>
  );
};

export default CustomBTN;

const styles = StyleSheet.create({});
