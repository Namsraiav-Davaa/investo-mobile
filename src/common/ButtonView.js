import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native';
import {COLORS, FONTS_SIZE} from './utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextCommonLight from './TextCommonLight';
import TextCommonRegular from './TextCommonRegular';
import TextCommonMedium from './TextCommonMedium';

export default class ButtonView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      onPressSite,
      btnName,
      backgroundColor,
      txtColor,
      borderColor,
      landingSize,
      buttonName,
      buttonType,
      screenName,
      colorBlack,
      disabled,
    } = this.props;
    return (
      <TouchableOpacity
        onPress={onPressSite}
        disabled={disabled || false}
        activeOpacity={0.9}
        style={{
          width:
            landingSize === 'full'
              ? '88%'
              : landingSize === 'full_large'
              ? '100%'
              : '40%',
          height: screenName === 'Trade' ? 40 : 50,
          borderRadius:
            buttonType === 'pass' ? 30 : screenName === 'Trade' ? 10 : 15,
          alignItems: 'center',
          justifyContent: 'center',
          // borderWidth: 1,
          paddingLeft: 35,
          paddingRight: 35,
          backgroundColor:
            buttonType === 'offWhite'
              ? COLORS.textGrey
              : screenName === 'Trade'
              ? COLORS.progress_bg_color
              : COLORS.button_bg,
          // borderColor: borderColor,
        }}
      >
        <TextCommonMedium
          text={btnName}
          color={
            buttonType === 'offWhite'
              ? COLORS.black
              : colorBlack === 'black'
              ? COLORS.black
              : COLORS.white
          }
          numberOfLines={1}
          fontSize={FONTS_SIZE.txt_14}
          fontWeight={'500'}
        />
      </TouchableOpacity>
    );
  }
}
