import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import IconFile from '../common/CommonFontIcon';
import Header from '../common/Header';
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS_SIZE, FONTS} from '../common/utils';

export default class Contract extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onTextView(icon, Title, des) {
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          if (Title === 'Contract') {
            navigation.navigate('Contract_details');
          } else {
            navigation.navigate('Termsconditions');
          }
        }}
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
            height: 25,
            width: 25,
            tintColor: COLORS.white,
          }}
          resizeMode="contain"
          source={icon}
        /> */}
        <IconFile.SvgIcon name={icon} size={23} color={COLORS.white} />
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
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: COLORS.primary}}>
        <Header
          onBackClick={() => navigation.goBack(null)}
          headertitle="Contract"
        />

        <View
          style={{width: '100%', height: 0.5, backgroundColor: COLORS.card_bg}}
        />

        <View style={{flex: 1, marginLeft: 20}}>
          {this.onTextView('Sign_contract_icon', 'Terms of Conditions')}

          {this.onTextView('Sign_contract_icon', 'Contract')}
        </View>
      </View>
    );
  }
}
