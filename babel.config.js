module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-paper/babel','nativewind/babel','react-native-reanimated/plugin'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  }
};




