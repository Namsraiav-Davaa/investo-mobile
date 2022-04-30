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
  Button,
  Alert,
} from 'react-native';
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';
import TextCommonMedium_login from '../common/TextCommonMedium_login';

import {
  COLORS,
  FONTS_SIZE,
  FONTS,
  API_FAILURE_CAPTION_EN,
  API_FAILURE_CAPTION_AR,
  BASE_URL,
  API_FAILURE_CAPTION_FR,
} from '../common/utils';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ErrorModelView from '../common/ErrorModel';
import ButtonView from '../common/ButtonView';

import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import Header from '../common/Header';

import Loader from '../common/LoadingScreen';
import AnimatedInput from './AnimatedInput/AnimatedInput';
import OTPTextView from './OtpView/OTPTextView';
import {tintColor} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import IconFile from '../common/CommonFontIcon';

export default class Registration_two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      securePasswordconfirm: false,
      securePassword: false,
      digitPattenDone: false,
      symbolPattenDone: false,
      uppercasePattenDone: false,
      lowerCasePattenDone: false,
    };
  }
  onCardView(keyboardType, placeholder, onChangeText, value, secureTextEntry) {
    return (
      <View
        style={{
          backgroundColor: COLORS.card_bg,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          borderRadius: 10,
          // justifyContent: 'center',
          // flexDirection: 'row'
        }}
      >
        <AnimatedInput
          placeholder={placeholder}
          // valid={true}
          // errorText="Error"
          onChangeText={onChangeText}
          value={value}
          styleLabel={{fontWeight: '500'}}
          // styleBodyContent={styles.bodyContent}
          secureTextEntry={secureTextEntry}
        />

        {
          <TouchableOpacity
            onPress={() => {
              this.setState({
                securePassword: !this.state.securePassword,
              });
            }}
            style={{
              width: 50,
              height: 50,
              position: 'absolute',
              right: 5,
              alignItems: 'center',
              top: 20,
            }}
          >
            {this.state.securePassword === true ? (
              <Image
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.title_text_color,
                }}
                resizeMode="contain"
                source={require('../assets/eye_disable_icon.png')}
              />
            ) : (
              // <Image
              //   style={{ width: 25, height: 25, tintColor: COLORS.text_gray }}
              //   resizeMode="contain"
              //   source={require('../assets/eye_enable_icon.png')}
              // />
              <IconFile.SvgIcon
                name="Eye_enable_icon"
                size={23}
                color={COLORS.title_text_color}
              />
            )}
          </TouchableOpacity>
        }
      </View>
    );
  }

  onCardView1(keyboardType, placeholder, onChangeText, value, secureTextEntry) {
    return (
      <View
        style={{
          backgroundColor: COLORS.card_bg,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          borderRadius: 10,
          // justifyContent: 'center',
          // flexDirection: 'row'
        }}
      >
        <AnimatedInput
          placeholder={placeholder}
          // valid={true}
          // errorText="Error"
          onChangeText={onChangeText}
          value={value}
          // styleLabel={{fontWeight: '600'}}
          // styleBodyContent={styles.bodyContent}
          secureTextEntry={secureTextEntry}
        />

        {
          <TouchableOpacity
            onPress={() => {
              this.setState({
                securePasswordconfirm: !this.state.securePasswordconfirm,
              });
            }}
            style={{
              width: 50,
              height: 50,
              position: 'absolute',
              right: 5,
              alignItems: 'center',
              top: 20,
            }}
          >
            {this.state.securePasswordconfirm === true ? (
              <Image
                style={{width: 25, height: 25, tintColor: COLORS.text_gray}}
                resizeMode="contain"
                source={require('../assets/eye_disable_icon.png')}
              />
            ) : (
              // <Image
              //   style={{ width: 25, height: 25, tintColor: COLORS.text_gray }}
              //   resizeMode="contain"
              //   source={require('../assets/eye_enable_icon.png')}
              // />
              <IconFile.SvgIcon
                name="Eye_enable_icon"
                size={23}
                color={COLORS.text_gray}
              />
            )}
          </TouchableOpacity>
        }
      </View>
    );
  }

  onTextChangeValue(value) {
    const numberRegex = /[0-9]/;
    const symbolRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const uppercaseRegex = /^.*[A-Z].*$/;
    const lowerCaseRegex = /^.*[a-z].*$/;

    if (numberRegex.test(value)) {
      this.setState({
        digitPattenDone: true,
      });
    } else {
      this.setState({
        digitPattenDone: false,
      });
    }
    if (symbolRegex.test(value)) {
      this.setState({
        symbolPattenDone: true,
      });
    } else {
      this.setState({
        symbolPattenDone: false,
      });
    }
    if (lowerCaseRegex.test(value)) {
      console.log('uppercaseRegex', 'true');
      this.setState({
        lowerCasePattenDone: true,
      });
    } else {
      this.setState({
        lowerCasePattenDone: false,
      });
    }
    if (uppercaseRegex.test(value)) {
      console.log('uppercaseRegex', 'true');
      this.setState({
        uppercasePattenDone: true,
      });
    } else {
      this.setState({
        uppercasePattenDone: false,
      });
    }

    this.setState({Password: value});
  }

  render() {
    return (
      <View>
        {this.onCardView(
          'default',
          'Password',
          value => {
            this.onTextChangeValue(value);
          },
          this.state.Password,
          this.state.securePassword,
        )}
        {this.state.digitPattenDone === true ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginLeft: 22,
            }}
          >
            <Image
              style={{width: 10, height: 10, tintColor: COLORS.button_bg}}
              source={require('../assets/check_icon.png')}
              resizeMode="contain"
            />
            <TextCommonMedium
              text={'Digits 1 - 9'}
              color={COLORS.button_bg}
              fontSize={FONTS_SIZE.txt_14}
              marginLeft={10}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginLeft: 22,
            }}
          >
            <TextCommonMedium
              text={'\u2B24'}
              color={COLORS.text_gray}
              fontSize={5}
            />
            <TextCommonMedium
              text={'Digits 1 - 9'}
              color={COLORS.text_gray}
              fontSize={FONTS_SIZE.txt_14}
              marginLeft={5}
            />
          </View>
        )}
        {this.state.symbolPattenDone === true ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginLeft: 22,
            }}
          >
            <Image
              style={{width: 10, height: 10, tintColor: COLORS.button_bg}}
              source={require('../assets/check_icon.png')}
              resizeMode="contain"
            />
            <TextCommonMedium
              text={'Symbol'}
              color={COLORS.button_bg}
              fontSize={FONTS_SIZE.txt_14}
              marginLeft={10}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginLeft: 22,
            }}
          >
            <TextCommonMedium
              text={'\u2B24'}
              color={COLORS.text_gray}
              fontSize={5}
            />
            <TextCommonMedium
              text={'Symbol'}
              color={COLORS.text_gray}
              fontSize={FONTS_SIZE.txt_14}
              marginLeft={5}
            />
          </View>
        )}

        {this.state.uppercasePattenDone === true &&
        this.state.lowerCasePattenDone == true ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginLeft: 22,
            }}
          >
            <Image
              style={{width: 10, height: 10, tintColor: COLORS.button_bg}}
              source={require('../assets/check_icon.png')}
              resizeMode="contain"
            />
            <TextCommonMedium
              text={'Upper and lower case letters'}
              color={COLORS.button_bg}
              fontSize={FONTS_SIZE.txt_14}
              marginLeft={10}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginLeft: 22,
            }}
          >
            <TextCommonMedium
              text={'\u2B24'}
              color={COLORS.text_gray}
              fontSize={5}
            />
            <TextCommonMedium
              text={'Upper and lower case letters'}
              color={COLORS.text_gray}
              fontSize={FONTS_SIZE.txt_14}
              marginLeft={5}
            />
          </View>
        )}
        {this.onCardView1(
          'default',
          'Password confirmation',
          value => {
            this.setState({Passwordconfirm: value});
          },
          this.state.Passwordconfirm,
          this.state.securePasswordconfirm,
        )}
      </View>
    );
  }
}
