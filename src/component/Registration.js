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
import SliderView from '../common/SliderView';

var axios = require('axios');
export default class Registration extends Component {
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
      selectView: true,
      selectView2: false,
      selectView3: false,
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
          styleLabel={{fontWeight: '600'}}
          // styleBodyContent={styles.bodyContent}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
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
                style={{width: 25, height: 25, tintColor: COLORS.text_gray}}
                resizeMode="contain"
                source={require('../assets/eye_disable_icon.png')}
              />
            ) : (
              <Image
                style={{width: 25, height: 25, tintColor: COLORS.text_gray}}
                resizeMode="contain"
                source={require('../assets/eye_enable_icon.png')}
              />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }

  render() {
    return (
      <View style={{}}>
        {this.onCardView(
          'default',
          'Last Name',
          value => {
            this.setState({lastname: value});
          },
          this.state.lastname,
          false,
        )}

        {this.onCardView(
          'default',
          'First Name',
          value => {
            this.setState({Firstname: value});
          },
          this.state.Firstname,
          false,
        )}
        {this.onCardView(
          'default',
          ' E-mail',
          value => {
            this.setState({Email: value});
          },
          this.state.Email,
          false,
        )}
        {this.onCardView(
          'numeric',
          'Phone number',
          value => {
            this.setState({Phonenumber: value});
          },
          this.state.Phonenumber,
          false,
        )}
      </View>
    );
  }
}
