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
import IconFile from '../common/CommonFontIcon';

var axios = require('axios');

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      Password: '',
      errorModel: false,
      errorMsg: '',
      errorIcon: require('../assets/attention.png'),
      isLoading: false,
      token: '',
      Email: '',
      securePassword: false,
    };
  }

  UNSAFE_componentWillMount() {}

  onInitState() {
    this.setState({
      Password: '',
      name: '',
    });
  }

  onLoginClick = () => {
    let isValid = true;

    // const { name, Password, errorIcon, errorModel, errorMsg } = this.state;
    // this.setState({
    //   login_type: '1',
    //   s_id: '',
    // });

    // if (name === '') {
    //   isValid = false;
    //   this.setState({
    //     errorIcon: require('../assets/attention.png'),
    //     errorMsg: "Enter your email",
    //     errorModel: true,
    //   });
    //   return false;
    // }
    // if (Password === '') {
    //   isValid = false;
    //   this.setState({
    //     errorIcon: require('../assets/attention.png'),
    //     errorMsg: "Enter your password",
    //     errorModel: true,
    //   });
    //   return false;
    // }
    if (isValid) {
      this.props.navigation.navigate('AllTabs');
    }
  };
  onCardView(keyboardType, placeholder, onChangeText, value, secureTextEntry) {
    return (
      <View
        style={{
          backgroundColor: COLORS.card_bg,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          borderRadius: 10,
          justifyContent: 'center',
          // flexDirection: 'row'
        }}
      >
        {/* <TextInput
          returnKeyType={'done'}
          keyboardType={keyboardType}
          style={{
            width: '95%',
            color: COLORS.black,
            fontSize: FONTS_SIZE.txt_16,
            fontFamily: FONTS.FontRegular,
            marginLeft: 10,
            textAlign: 'left',
          }}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={COLORS.black}
          onChangeText={onChangeText}
          value={value}
        /> */}

        <AnimatedInput
          placeholder={placeholder}
          // valid={true}
          // errorText="Error"
          onChangeText={onChangeText}
          value={value}
          styleLabel={{fontWeight: '500'}}
          fontStyle={'regular'}
          // styleBodyContent={styles.bodyContent}
          secureTextEntry={secureTextEntry}
        />

        {placeholder === 'Password' ? (
          <TouchableOpacity
            onPress={() =>
              this.setState({
                securePassword: !this.state.securePassword,
              })
            }
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
        ) : null}
      </View>
    );
  }

  render() {
    const {navigation} = this.props;
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          backgroundColor: COLORS.primary,
        }}
      >
        <Header
          headerType="auth"
          onBackClick={() => navigation.goBack(null)}
          headertitle="Login"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          {this.onCardView(
            'default',
            'E-mail',
            value => {
              this.setState({name: value});
            },
            this.state.name,
            false,
          )}

          {this.onCardView(
            'default',
            'Password',
            value => {
              this.setState({Password: value});
            },
            this.state.Password,
            this.state.securePassword,
          )}
          <TouchableOpacity
            onPress={() => {
              this.onInitState();
            }}
            style={{marginTop: 15, marginBottom: 15, marginLeft: 240}}
          >
            <TextCommonRegular
              onClickText={() => {
                this.onInitState();
              }}
              text={'Forgot Password'}
              color={COLORS.text_gray}
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'center'}
              fontWeight={'400'}
            />
          </TouchableOpacity>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 25,
              width: '100%',
            }}
          >
            <ButtonView
              landingSize="full"
              btnName={'LOG IN'}
              onPressSite={() => this.onLoginClick()}
            />
          </View>

          <ErrorModelView
            loading={this.state.errorModel}
            modalImg={this.state.errorIcon}
            ErrorMsg={this.state.errorMsg}
            onPressOk={() => this.setState({errorModel: false})}
            // onPressClose={() => {
            //   seterrorModel(!errorModel)
            // }}
          />
          <Loader loading={this.state.isLoading} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyContent: {
    borderBottomWidth: 0,
    borderColor: COLORS.transparent,
  },
});
