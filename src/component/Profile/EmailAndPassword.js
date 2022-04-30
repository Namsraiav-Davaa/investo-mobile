import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS, FONTS_SIZE} from '../../common/utils';
import HeaderProfile from '../../common/HeaderProfile';
import TextCommonMedium from '../../common/TextCommonMedium';
import TextCommonLight from '../../common/TextCommonLight';
import TextCommonRegular from '../../common/TextCommonRegular';
import IconFile from '../../common/CommonFontIcon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var width = Dimensions.get('window').width - 480 / 2;

export default class EmailAndPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ivTextinput: '1234657890',
      email: 'user@gmail.com',
    };
  }

  onTextView(value, keyboardType, onChangeText, placeholder, phColor, onPress) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={{
          flexDirection: 'row',
          borderBottomWidth: 0.9,
          borderColor: COLORS.card_bg,
          alignItems: 'center',
          padding: 20,
        }}
      >
        <TextInput
          style={{
            fontSize: FONTS_SIZE.txt_24,
            color: COLORS.des_text_color,
            fontFamily: FONTS.FontMedium,
            fontWeight: '500',
            width: width + 30,
          }}
          editable={false}
          placeholder={placeholder}
          placeholderTextColor={phColor}
          value={value}
          keyboardType={keyboardType}
          returnKeyType="done"
          onChangeText={onChangeText}
        />
        {/* <Image
          style={{
            height: 22,
            width: 22,
            marginLeft: 20,
          }}
          resizeMode="contain"
          source={icon}
        /> */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconFile.SvgIcon
            name={'Check-circle_icon'}
            size={20}
            color={COLORS.button_bg}
          />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const {navigation} = this.props;
    const {HeaderTitle} = this.props.route.params;
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
        }}
      >
        <HeaderProfile
          headerTitle={HeaderTitle}
          onBackPress={() => navigation.goBack(null)}
        />

        <View style={{width: '100%'}}>
          {HeaderTitle === 'Phone Number'
            ? this.onTextView(
                this.state.ivTextinput,
                'numeric',
                value => this.setState({ivTextinput: value}),
                'Phone Number',
                COLORS.des_text_color,
                () => {},
              )
            : this.onTextView(
                this.state.email,
                'default',
                value => this.setState({email: value}),
                'Email',
                COLORS.des_text_color,
                () => {},
              )}
        </View>

        <View style={{padding: 20}}>
          <TextCommonRegular
            text={
              HeaderTitle === 'Phone Number'
                ? 'Do you have issues with your phone number?'
                : 'Do you have issues with your e-mail?'
            }
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_12}
            textAlign={'left'}
            fontWeight={'400'}
          />
          <TextCommonRegular
            text={'Support >'}
            color={COLORS.button_bg}
            fontSize={FONTS_SIZE.txt_12}
            textAlign={'left'}
            marginTop={5}
            fontWeight={'500'}
          />
        </View>
      </View>
    );
  }
}
