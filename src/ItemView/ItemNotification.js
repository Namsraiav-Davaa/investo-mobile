import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TextCommonLight from '../common/TextCommonLight';
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';
import TextCommonSemiBold from '../common/TextCommonSemiBold';
import {COLORS, FONTS_SIZE} from '../common/utils';

export default class ItemNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title, date, description} = this.props;
    return (
      <View style={{marginTop: 10}}>
        <TextCommonMedium
          text={title}
          color={COLORS.top20_destxt_color}
          fontSize={FONTS_SIZE.txt_16}
          textAlign={'left'}
          fontWeight={'600'}
        />
        <TextCommonLight
          text={date}
          color={COLORS.textGrey}
          fontSize={FONTS_SIZE.txt_14}
          textAlign={'left'}
        />
        <TextCommonMedium
          text={description}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_14}
          textAlign={'left'}
          marginTop={10}
        />
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: COLORS.card_bg,
            marginTop: 10,
          }}
        />
      </View>
    );
  }
}
