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
import SliderView from '../common/SliderView';
import Registration from '../component/Registration';
import Registration_1 from '../component/Registration_1';
import Registration_two from '../component/Registration_two';

var axios = require('axios');
var count = 1;

export default class Registration_Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorModel: false,
      errorMsg: '',
      errorIcon: require('../assets/attention.png'),
      isLoading: false,
      securePassword: false,
      selectView: true,
      selectView2: false,
      selectView3: false,
      screenfirst: true,
      screenTwo: false,
      screenthree: false,
      message: 'Personal information',
      count: 1,
    };
  }

  componentDidMount() {

  }

  onRegisterClick() {
    let isValid = true;

    if (count === 1) {
      this.setState({
        selectView: true,
        selectView2: true,

        screenTwo: true,
        screenfirst: false,

        count: 2,
        message: 'Confirmation',
      });

      count = 2;
      isValid = false;
      return false;
    }

    if (count === 2) {
      this.setState({
        selectView: true,
        selectView2: true,
        selectView3: true,

        screenTwo: false,
        screenfirst: false,
        screenthree: true,

        count: 3,
        message: 'Password',
      });
      count = 3;
      isValid = false;
      return false;
    }

    if (isValid) {
      this.props.navigation.navigate('Kyc_Main');
    }
  }

  onBack = () => {
    if(count === 1) {
      this.props.navigation.goBack(null);
    } else if(count === 2) {
      this.setState({
        selectView: true,
        selectView2: false,
        selectView3: false,

        screenfirst: true,
        screenTwo: false,
        screenthree: false,

        count: 1,
        message: 'Password',
      });
      count = 1;
      isValid = false;
    } else if (count === 3) {
      this.setState({
        selectView: true,
        selectView2: true,
        selectView3: false,

        screenfirst: false,
        screenTwo: true,
        screenthree: false,

        count: 2,
        message: 'Password',
      });
      count = 2;
      isValid = false;
    }
  };

  render() {
    const height = Dimensions.get('window').height;
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
        }}
      >
        <Header
          headerType="auth"
          onBackClick={this.onBack}
          headertitle="Registration"
        />

        <View>
          <SliderView
            view={this.state.selectView}
            view1={this.state.selectView2}
            view2={this.state.selectView3}
            count={this.state.count}
            message={this.state.message}
            totalCount={'3'}
          />
        </View>

        <View style={{marginTop: 20}} />

        <View
          style={{
            marginLeft: this.state.screenTwo === true ? 0 : 0,
            marginRight: this.state.screenTwo === true ? 0 : 0,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.screenfirst === true ? <Registration /> : null}
            {this.state.screenTwo === true ? <Registration_1 /> : null}

            {this.state.screenthree === true ? <Registration_two /> : null}
          </ScrollView>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // alignSelf: 'center',
            marginTop: 35,
            width: '100%',
          }}
        >
          <ButtonView
            landingSize="full"
            btnName={'REGISTER'}
            onPressSite={() => this.onRegisterClick()}
          />
        </View>
      </View>
    );
  }
}
