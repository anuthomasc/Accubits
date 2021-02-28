/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';

import MainStackNavigator from './app/router/nav'

function App() {
  return (
      <MainStackNavigator />
  );
}

const styles = StyleSheet.create({

});

export default App;
