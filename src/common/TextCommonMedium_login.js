import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {FONTS, FONTS_SIZE} from './utils';

export default class TextCommonMedium_login extends Component {
  reverseString(s) {
    return s.split('').reverse().join('');
  }

  renderBackText() {
    return (
      <Text
        onPress={this.props.onClickText}
        allowFontScaling={false}
        style={{
          color: this.props.color,
          fontSize: this.props.fontSize,
          textAlign: this.props.textAlign,
          width: this.props.width,
          height: this.props.height,
          fontFamily: FONTS.FontMedium,
          opacity: this.props.opacity,
          lineHeight: this.props.lineHeight,
          marginLeft: this.props.marginLeft,
          marginTop: this.props.marginTop,
          letterSpacing: this.props.letterSpacing,
          marginRight: this.props.marginRight,
          textDecorationLine: this.props.textDecorationLine,
        }}
        numberOfLines={this.props.numberOfLines}
      >
        {this.props.text}
      </Text>
    );
  }

  render() {
    return <View>{this.renderBackText()}</View>;
  }
}
