import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS_SIZE} from '../common/utils';
import LogoView from '../common/LogoView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconFile from '../common/CommonFontIcon';

export default class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.getData();
    }, 2000);
  }

  getData() {
    this.onRedirct();
  }

  onRedirct() {
    AsyncStorage.getItem('user_Login').then(value => {
      if (value != null) {
        this.props.navigation.reset({
          routes: [{name: 'HomePage'}],
        });
      } else {
        this.props.navigation.reset({
          routes: [{name: 'OnBording'}],
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <LogoView />

        {/* <IconFile.SvgIcon name="market_icon" size={60} color={'white'} /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
});
