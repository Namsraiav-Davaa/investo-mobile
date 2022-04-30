import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import IconFile from './CommonFontIcon';
import TextCommonMedium from './TextCommonMedium';
import TextCommonRegular from './TextCommonRegular';
import {COLORS, FONTS_SIZE} from './utils';

export default class Header_Two extends Component {
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
      rightIcon,
      onfilterClick,
      filtericon,
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
          style={{width: '10%', marginLeft: 15}}
        >
          {/* <Image
            source={require('../assets/back_icon.png')}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.faq_des_color,
            }}
          /> */}
          <View style={{marginTop: 10}}>
            <IconFile.SvgIcon
              name="Back_arrow_icon"
              size={23}
              color={COLORS.faq_des_color}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: '63%',
            justifyContent: 'flex-start',
          }}
        >
          <TextCommonMedium
            text={headertitle}
            color={COLORS.des_text_color}
            fontSize={FONTS_SIZE.txt_18}
            textAlign={'left'}
            fontWeight={'500'}
          />
        </View>
        <TouchableOpacity
          onPress={onfilterClick}
          style={{width: '10%', marginLeft: 15}}
        >
          <Image
            source={filtericon}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.offwhite,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressEdit} style={{width: '10%'}}>
          <Image
            source={rightIcon}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.offwhite,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
