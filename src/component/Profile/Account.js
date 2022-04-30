import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS_SIZE} from '../../common/utils';
import HeaderProfile from '../../common/HeaderProfile';
import TextCommonMedium from '../../common/TextCommonMedium';
import TextCommonLight from '../../common/TextCommonLight';
import TextCommonRegular from '../../common/TextCommonRegular';
import ButtonView from '../../common/ButtonView';
import IconFile from '../../common/CommonFontIcon';

export default class Account extends Component {
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
            height: 22,
            width: 22,
            tintColor: COLORS.white,
          }}
          resizeMode="contain"
          source={icon}
        /> */}
        <IconFile.SvgIcon name={icon} color={COLORS.white} size={23} />
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
    const {navigation} = this.props;
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
        }}
      >
        <HeaderProfile
          headerTitle={'Account'}
          onBackPress={() => navigation.goBack(null)}
        />

        <View style={{width: '100%', height: '75%'}}>
          {this.onTextView('User_icon', 'Phone Number', '99*****80', () =>
            navigation.navigate('EmailAndPassword', {
              HeaderTitle: 'Phone Number',
            }),
          )}
          {this.onTextView('wallet_icon', 'E-mail', 'user@gmail.com', () =>
            navigation.navigate('EmailAndPassword', {HeaderTitle: 'E-Mail'}),
          )}
          {this.onTextView(
            'Settings_icon',
            'Password',
            'Password, transaction password',
            () => navigation.navigate('changepassword'),
          )}
        </View>
      </View>
    );
  }
}
