import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import IconFile from '../common/CommonFontIcon';
import Header from '../common/Header';
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS_SIZE, FONTS} from '../common/utils';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onTextView(icon, Title, des, onPress) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={{
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderColor: COLORS.card_bg,
          alignItems: 'center',
          padding: 20,
        }}
      >
        {/* <Image
          style={{
            height: Title === 'Notification' ? 25 : 25,
            width: Title === 'Notification' ? 25 : 25,
            tintColor: COLORS.white,
          }}
          // resizeMode='contain'
          source={icon}
        /> */}
        <IconFile.SvgIcon
          name={icon}
          size={Title === 'Notification' ? 23 : 23}
          color={COLORS.white}
        />
        <View>
          <TextCommonMedium
            text={Title}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_18}
            textAlign={'left'}
            marginLeft={20}
            fontWeight={'500'}
            len="1"
          />
          <TextCommonRegular
            text={des}
            color={COLORS.textGrey}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'left'}
            marginLeft={20}
            numberOfLines={1}
            fontWeight={'400'}
          />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
        }}
      >
        <Header
          onBackClick={() => this.props.navigation.goBack(null)}
          headertitle="Settings"
        />
        <View
          style={{width: '100%', height: 0.5, backgroundColor: COLORS.card_bg}}
        />
        <View style={{width: '90%', height: '75%', marginLeft: 20}}>
          {this.onTextView('notifiction_icon', 'Notification', 'On')}
          {this.onTextView('nights_stay_icon', 'Appearance', 'Dark')}
        </View>
      </View>
    );
  }
}
