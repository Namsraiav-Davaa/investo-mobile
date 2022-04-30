import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS_SIZE} from '../../common/utils';
import HeaderProfile from '../../common/HeaderProfile';
import TextCommonMedium from '../../common/TextCommonMedium';
import TextCommonLight from '../../common/TextCommonLight';
import TextCommonRegular from '../../common/TextCommonRegular';
import ButtonView from '../../common/ButtonView';
import DialogView from '../../common/DialogView';
import IconFile from '../../common/CommonFontIcon';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dialogView: false
    };
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
        <IconFile.SvgIcon name={icon} size={23} color={COLORS.white} />
        <View style={{paddingRight: 10}}>
          <TextCommonMedium
            text={Title}
            color={COLORS.top20_destxt_color}
            fontSize={FONTS_SIZE.txt_18}
            textAlign={'left'}
            marginLeft={15}
            len="1"
            fontWeight={'500'}
          />
          <TextCommonRegular
            text={des}
            color={COLORS.textGrey}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'left'}
            marginLeft={15}
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
          onBackPress={() => navigation.goBack(null)}
          profileStyle={{
            height: 44,
            width: 44,
            borderRadius: 22,
            marginLeft: 10,
          }}
          //   editStyle={{
          //     height: 22,
          //     width: 22,
          //     tintColor: COLORS.white,
          //   }}
          profileicon={require('../../assets/profile_icon.jpeg')}
          editIcon={'Edit_icon'}
        />

        <View style={{width: '100%', height: '75%'}}>
          {this.onTextView(
            'User_icon',
            'Account',
            'Password,Phone number, E-mail, Transaction',
            () => navigation.navigate('Account'),
          )}
          {this.onTextView(
            'wallet_icon',
            'KYC',
            'Account info, Registration',
            () => navigation.navigate('Kyc_Main'),
          )}
          {this.onTextView(
            'Settings_icon',
            'Setting',
            'Appearance, Notification',
            () => navigation.navigate('Settings'),
          )}
          {this.onTextView(
            'contact_support_icon',
            'Support',
            'Contact us,FAQ',
            () => navigation.navigate('Support'),
          )}
          {this.onTextView(
            'Sign_contract_icon',
            'Contract',
            'Terms of condition, Contract',
            () => navigation.navigate('Contract'),
          )}
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ButtonView
            landingSize="full"
            btnName={'LOGOUT'}
            onPressSite={() => this.props.navigation.navigate('LoginPage')}
            buttonType={'offWhite'}
          />
        </View>

        {/* <DialogView
                    loading={this.state.dialogView}
                    modalImg={require('../../assets/check_green_icon.png')}
                    ErrorMsg={"password was successfully changed"}
                /> */}
      </View>
    );
  }
}
