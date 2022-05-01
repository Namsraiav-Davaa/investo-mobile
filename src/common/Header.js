import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import IconFile from './CommonFontIcon';
import TextCommonMedium from './TextCommonMedium';
import TextCommonRegular from './TextCommonRegular';
import {COLORS, FONTS_SIZE} from './utils';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      onPressSetting,
      onPressEdit,
      editText,
      headertitle,
      onBackClick,
      headerType,
    } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-around',
          width: '100%',
          height: 50,
          alignItems: 'center',
          marginTop: Platform.OS === 'ios' ? 40 : 40,
        }}
      >
        <TouchableOpacity
          onPress={onBackClick}
          style={{
            width: '10%',
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
          }}
        >
          {headerType === 'auth' ? (
            <IconFile.SvgIcon
              name={'Back_arrow_icon'}
              color={COLORS.des_text_color}
              size={20}
            />
          ) : (
            <IconFile.SvgIcon
              name={'chevron_left_icon'}
              color={COLORS.des_text_color}
              size={20}
            />
          )}
        </TouchableOpacity>
        <View
          style={{
            width: '60%',
            justifyContent: 'flex-start',
          }}
        >
          <TextCommonMedium
            text={headertitle}
            color={COLORS.des_text_color}
            fontSize={FONTS_SIZE.txt_18}
            textAlign={'left'}
            fontWeight={'600'}
            marginTop={-10}
          />
        </View>
      </View>
    );
  }
}
