import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS_SIZE} from '../common/utils';

export default class Trending_Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {onPress, item, bg_color} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          alignItems: 'center',
          height: 35,
          borderWidth: 0.5,
          borderColor: COLORS.card_bg,
          borderRadius: 30,
          flexDirection: 'row',
          marginLeft: 10,
          paddingLeft: 8,
          paddingRight: 8,
          marginTop: 10,
          backgroundColor:
            item.isSelect === true ? COLORS.button_bg : COLORS.transparent,
        }}
      >
        <View
          style={{
            width: 22,
            height: 22,
            backgroundColor: bg_color,
            borderRadius: 22 / 2,
          }}
        />
        <TextCommonRegular
          text={item.name}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_16}
          textAlign={'center'}
          fontWeight={'400'}
          numberOfLines={1}
          marginLeft={10}
        />
      </TouchableOpacity>
    );
  }
}
