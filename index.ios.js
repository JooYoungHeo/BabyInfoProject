/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import MainPage from './MainPage';

export default class BabyInfoProject extends Component {
  render() {
    return (
      <NavigatorIOS style={styles.container} initialRoute={{title: 'Nursery', component: MainPage}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('BabyInfoProject', () => BabyInfoProject);
