import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextCommonRegular from './TextCommonRegular';
import {COLORS, FONTS_SIZE} from './utils';
import IconFile from './CommonFontIcon';

export default class HeaderProfile2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      onPressSetting,
      onBackClick,
      onShareItemClick,
      headerTitle,
      onProfileItemClick,
      profileStyle,
      editStyle,
      profileicon,
      editIcon,
    } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          width: '100%',
          alignItems: 'center',
          marginTop: Platform.OS === 'ios' ? 35 : 35,
          borderBottomWidth: 0.5,
          borderColor: COLORS.card_bg,
        }}
      >
        <View
          style={{
            width: '10%',
            marginLeft: 10,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
          }}
        >
          <TouchableOpacity onPress={onBackClick}>
            <IconFile.SvgIcon
              name="Back_arrow_icon"
              color={COLORS.des_text_color}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '55%'}}>
          <TextCommonRegular
            text={headerTitle}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_20}
            textAlign={'left'}
            len="1"
          />
        </View>
        <View
          style={{
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            // flexDirection: 'row'
          }}
        >
          <TouchableOpacity onPress={onProfileItemClick}>
            <Image
              style={profileStyle}
              resizeMode="contain"
              source={profileicon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
