import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import IconFile from '../common/CommonFontIcon';
import Header from '../common/Header';
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS_SIZE, FONTS} from '../common/utils';

export default class Support extends Component {
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
          if (Title === 'FAQ') {
            navigation.navigate('FAQ');
          } else {
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
            height: 22,
            width: 22,
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
            fontWeight={'500'}
            textAlign={'left'}
            marginLeft={20}
            len="1"
          />
          {/* <TextCommonRegular
                        text={des}
                        color={COLORS.textGrey}
                        fontSize={FONTS_SIZE.txt_14}
                        textAlign={'left'}
                        marginLeft={20}
                        numberOfLines={1}
                    /> */}
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
        <Header
          onBackClick={() => this.props.navigation.goBack(null)}
          headertitle="Support"
        />
        <View
          style={{width: '100%', height: 0.5, backgroundColor: COLORS.card_bg}}
        />

        {this.onTextView('support_agent_icon', 'Contact us')}
        {this.onTextView('contact_support_icon', 'FAQ')}
      </View>
    );
  }
}
