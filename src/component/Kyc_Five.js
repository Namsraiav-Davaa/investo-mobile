import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import TextCommonMedium from '../common/TextCommonMedium';

import {COLORS, FONTS_SIZE, FONTS} from '../common/utils';
import TextCommonRegular from '../common/TextCommonRegular';

export default class Kyc_Five extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isCheck: false,
    // };
  }
  onTextView(text, text_green, description) {
    return (
      <View style={{marginBottom: 15}}>
        <Text allowFontScaling={false} style={Kycstyle.textStyle}>
          {text}
        </Text>
        <Text allowFontScaling={false} style={Kycstyle.textStyle_grren}>
          {text_green}
        </Text>
      </View>
    );
  }

  render() {
    const isCheck = this.props.isAgree;
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: COLORS.card_bg,
              borderRadius: 10,
              marginTop: 10,
              padding: 20,
            }}
          >
            <TextCommonRegular
              text={
                'Энэхүү “Цахим үйлчилгээний гэрээ” /цаашид “Гэрээ” гэх/-г, нэг талаас Улаанбаатар хот Сүхбаатар дүүрэг 8 дугаар хороо, Их Эзэн Чингис хааны талбай гудамж 8/1 , Сити Тауэр 18 давхар 1803 тоот хаягт байрлах “Мандал Капитал” ҮЦК ХХК /цаашид “ҮЦК” гэх/ нөгөө талаас гэрээ байгуулж үйлчилгээ авахаар хүсэлт ирүүлэн бүртгүүлсэн Монгол улсын иргэн /цаашид “Харилцагч” гэх/ нар /цаашид хамтад нь “талууд” гэх) Монгол Улсын Иргэний хууль, Үнэт цаасны тухай хууль болон бусад хууль тогтоомжийг үндэслэн, дараах нөхцөлийг харилцан тохиролцсоны үндсэн дээр байгуулав.\nНЭГ. НИЙТЛЭГ ҮНДЭСЛЭЛ \n1.1. Энэхүү гэрээ нь ҮЦК-аас нь цахим хэлбэрээр үйлчилгээ авах эрхийг Харилцагчид олгохтой\nхолбогдсон харилцааг зохицуулна.'
              }
              color={COLORS.privacy_txt_color}
              fontSize={FONTS_SIZE.txt_16}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={this.props.onPress}
          activeOpacity={0.9}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
            marginLeft: 20,
          }}
        >
          {isCheck === true ? (
            <Image
              style={{width: 25, height: 25}}
              resizeMode="contain"
              source={require('../assets/selected_icon.png')}
            />
          ) : (
            <Image
              style={{width: 25, height: 25}}
              resizeMode="contain"
              source={require('../assets/unselected_icon.png')}
            />
          )}

          <TextCommonRegular
            text={'I agrees to'}
            color={COLORS.textColor}
            numberOfLines={1}
            fontSize={FONTS_SIZE.txt_16}
            marginTop={2}
            marginLeft={15}
          />
          {this.onTextView('', 'Terms and Conditions')}
        </TouchableOpacity>
      </View>
    );
  }
}
const Kycstyle = StyleSheet.create({
  textStyle: {
    fontSize: FONTS_SIZE.txt_14,
    color: COLORS.textColor,
    fontFamily: FONTS.FontRegular,
    textAlign: 'center',
    writingDirection: 'auto',
    lineHeight: 36,
  },
  textStyle_grren: {
    color: COLORS.button_bg,
    fontSize: FONTS_SIZE.txt_16,
    fontFamily: FONTS.FontMedium,
    padding: 6,
    textAlign: 'center',
  },
});
