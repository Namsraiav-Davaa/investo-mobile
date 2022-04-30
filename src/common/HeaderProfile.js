import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import IconFile from './CommonFontIcon';
import TextCommonMedium from './TextCommonMedium';
import TextCommonRegular from './TextCommonRegular';
import {COLORS, FONTS_SIZE} from './utils';

export default class HeaderProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      onPressSetting,
      onPressEdit,
      onBackPress,
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
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onBackPress}
          >
            {/* <Image
              style={{
                height: 22,
                width: 22,
                tintColor: COLORS.white,
              }}
              source={require('../assets/back_ios_arrow.png')}
            /> */}
            <IconFile.SvgIcon
              name={'chevron_left_icon'}
              size={20}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '65%'}}>
          <TextCommonRegular
            text={headerTitle}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_20}
            textAlign={'left'}
            marginLeft={20}
            len="1"
          />
        </View>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity onPress={onShareItemClick}>
            {/* <Image style={editStyle} source={editIcon} /> */}
            {/* <Image style={editStyle} source={editIcon} /> */}
            <IconFile.SvgIcon name={editIcon} size={20} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onProfileItemClick}>
            <Image
              style={profileStyle}
              //   resizeMode="contain"
              source={profileicon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
