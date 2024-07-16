import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';

import {PaperProvider, DefaultTheme} from 'react-native-paper';
import Appnavigation from './src/appnavigation';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    secondary: 'yellow',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Appnavigation />
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
