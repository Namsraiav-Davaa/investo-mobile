import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import IconFile from '../common/CommonFontIcon';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS_SIZE} from '../common/utils';

export default class Item_Stocks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title, des, onPlusIconClick, onPress} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 20,
        }}
      >
        <View style={{flex: 2}}>
          <TextCommonRegular
            text={title}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'left'}
            numberOfLines={2}
            onClickText={onPress}
          />

          <TextCommonRegular
            text={des}
            color={COLORS.offwhite}
            fontSize={FONTS_SIZE.txt_12}
            textAlign={'left'}
            numberOfLines={2}
          />
        </View>
        <View style={{flex: 0.2}}>
          {/* <Image
            style={{
              height: 22,
              width: 22,
              justifyContent: 'flex-end',
            }}
            resizeMode="contain"
            source={require('../assets/Round_plus_icon.png')}
          /> */}
          <IconFile.SvgIcon
            name="ic_plus_circle_icon"
            size={23}
            color={COLORS.progress_bg_color}
          />
        </View>
      </View>
    );
  }
}
