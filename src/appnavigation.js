import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Drowernavigation from './homescreens/drowers/drowernavigation';
import Competitions from './competitions/competitions';
import Detialpage from './homescreens/detialpage';
import Randompost from './homescreens/randompost';

const Appnavigation = () => {
  const stack = createNativeStackNavigator();

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown: false}}>
          <stack.Screen component={Drowernavigation} name="drowerroot" />
          <stack.Screen component={Competitions} name="competitions" />
          <stack.Screen component={Detialpage} name="detialpage" />
          <stack.Screen component={Randompost} name="randompost" />
        </stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Appnavigation;

const styles = StyleSheet.create({});
