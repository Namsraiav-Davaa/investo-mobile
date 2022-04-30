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
  Dimensions,
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
import {backgroundColor} from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default class Registration_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otpInput: '',
      timer: null,
      counter: 45,
    };
  }
  UNSAFE_componentWillMount() {
    this.startTimer();
  }
  startTimer = () => {
    let timer = setInterval(this.manageTimer, 1000);
    this.setState({timer});
  };

  manageTimer = () => {
    var states = this.state;
    if (states.counter === 0) {
      //   alert('Times Up !\nTimer  is reset');
      clearInterval(this.state.timer);
      this.setState({
        counter: 5,
      });
    } else {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  alertText = () => {
    const {otpInput = ''} = this.state;
    if (otpInput) {
      //   Alert.alert(otpInput);
    }
  };
  clear = () => {
    this.input1.clear();
  };
  onTextView(text_green, description) {
    return (
      <View style={{}}>
        <Text allowFontScaling={false} style={styles.textStyle_regular}>
          {description}
        </Text>
        <Text allowFontScaling={false} style={styles.textStyle_grren}>
          {text_green}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{}}>
        <View style={{justifyContent: 'center', marginTop: 15}}>
          <TextCommonRegular
            text={'Please, confirm your phone number'}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_16}
            textAlign="center"
            fontWeight="bold"
          />
          {this.onTextView(
            '91234567.',
            'Enter the 6-digit code you received on',
          )}
        </View>
        <View style={{marginTop: 20}}>
          <OTPTextView
            ref={e => (this.input1 = e)}
            containerStyle={styles.textInputContainer}
            textInputStyle={styles.textInput}
            handleTextChange={text => this.setState({otpInput: text})}
            inputCount={6}
            keyboardType="numeric"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 22,
            marginRight: 22,
          }}
        >
          <TextCommonRegular
            text={'00:' + this.state.counter}
            color={COLORS.button_bg}
            fontSize={FONTS_SIZE.txt_12}
            textAlign="center"
          />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 15, height: 15}}
              resizeMode="contain"
              tintColor={COLORS.text_gray}
              source={require('../assets/refresh_icon.png')}
            />
            <TextCommonRegular
              text={'Send again'}
              color={COLORS.text_gray}
              fontSize={FONTS_SIZE.txt_12}
              textAlign="center"
              marginLeft={5}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputContainer: {
    // marginBottom: 20,
  },

  textStyle_regular: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.txt_16,
    fontFamily: FONTS.FontRegular,
    textAlign: 'center',
    marginTop: 15,
  },
  textStyle_grren: {
    color: COLORS.button_bg,
    fontSize: FONTS_SIZE.txt_16,
    fontFamily: FONTS.FontRegular,
    textAlign: 'center',
    marginTop: 5,
  },
  textInput: {
    width: wp(11.5),
    height: 44,
    borderColor: COLORS.otp_bg_selected,
    borderWidth: 0.5,
    // padding: 10,
    fontSize: 16,
    letterSpacing: 5,
    marginBottom: 10,
    borderRadius: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonStyle: {
    marginHorizontal: 20,
  },
});
