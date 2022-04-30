import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, FONTS_SIZE} from '../common/utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LogoView = ({screenName}) => {
  return (
    <View style={styles.container_login}>
      <Image
        style={{
          width: wp(65),
          height: 150,
        }}
        resizeMode="contain"
        source={require('../assets/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: COLORS.white,
  },
  container_login: {
    alignItems: 'center',
    //backgroundColor: COLORS.primary,
  },
});

export default LogoView;
