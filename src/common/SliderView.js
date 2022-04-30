import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import TextCommonMedium from './TextCommonMedium';
import TextCommonRegular from './TextCommonRegular';
import {COLORS, FONTS_SIZE} from './utils';

export default class SliderView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var width = 0;
    const {
      view,
      view1,
      view2,
      view3,
      view4,
      view5,
      count,
      message,
      screenName,
      totalCount,
    } = this.props;
    if (screenName != 'KYC') {
      width = Dimensions.get('window').width - 50;
    } else {
      width = Dimensions.get('window').width - 65;
    }
    return (
      <View>
        {screenName != 'KYC' ? (
          <View style={{flexDirection: 'row', marginLeft: 20, marginRight: 20}}>
            <View
              style={{
                width: width / 3,
                height: 5,
                backgroundColor: view
                  ? COLORS.button_bg
                  : COLORS.sliderView_color,
                borderRadius: 10,
              }}
            />
            <View style={{width: 5}} />
            <View
              style={{
                width: width / 3,
                height: 5,
                backgroundColor: view1
                  ? COLORS.button_bg
                  : COLORS.sliderView_color,
                borderRadius: 10,
              }}
            />
            <View style={{width: 5}} />

            <View
              style={{
                width: width / 3,
                height: 5,
                backgroundColor: view2
                  ? COLORS.button_bg
                  : COLORS.sliderView_color,
                borderRadius: 10,
              }}
            />
          </View>
        ) : (
          <View style={{flexDirection: 'row', marginLeft: 20, marginRight: 20}}>
            <View
              style={{
                width: width / 6,
                height: 5,
                backgroundColor: view
                  ? COLORS.button_bg
                  : COLORS.sliderView_color,
                borderRadius: 10,
              }}
            />
            <View style={{width: 5}} />
            <View
              style={{
                width: width / 6,
                height: 5,
                backgroundColor: view1
                  ? COLORS.button_bg
                  : COLORS.sliderView_color,
                borderRadius: 10,
              }}
            />
            <View style={{width: 5}} />

            <View
              style={{
                width: width / 6,
                height: 5,
                backgroundColor: view2
                  ? COLORS.button_bg
                  : COLORS.sliderView_color,
                borderRadius: 10,
              }}
            />
            <View style={{width: 5}} />
            <View
              style={{
                width: width / 6,
                height: 5,
                backgroundColor: view3
                  ? COLORS.button_bg
                  : COLORS.sliderView_color,
                borderRadius: 10,
              }}
            />
            <View style={{width: 5}} />
            <View
              style={{
                width: width / 6,
                height: 5,
                backgroundColor: view4
                  ? COLORS.button_bg
                  : COLORS.sliderView_color,
                borderRadius: 10,
              }}
            />
            <View style={{width: 5}} />
            <View
              style={{
                width: width / 6,
                height: 5,
                backgroundColor: view5
                  ? COLORS.button_bg
                  : COLORS.sliderView_color,
                borderRadius: 10,
              }}
            />
          </View>
        )}

        <TextCommonRegular
          text={count + '/' + totalCount + ': ' + message}
          color={COLORS.text_gray}
          fontSize={FONTS_SIZE.txt_12}
          marginLeft={20}
          marginTop={10}
        />
      </View>
    );
  }
}
