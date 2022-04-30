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
import Kyc_one from '../component/Kyc_one';
import Kyc_two from '../component/Kyc_two';
import Kyc_three from '../component/Kyc_three';
import Kyc_Four from './Kyc_Four';
import Kyc_Five from './Kyc_Five';
import Kyc_six from './Kyc_six';

var count = 1;

export default class Kyc_Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectView: true,
      selectView2: false,
      selectView3: false,
      selectView4: false,
      selectView5: false,
      selectview6: false,

      screenfirst: true,
      screenTwo: false,
      screenthree: false,
      screenfour: false,
      screenfive: false,
      screensix: false,

      isAgree: false,

      message: 'Customer Information',
      count: 1,
    };
  }

  componentDidMount() {
    count = 1;
  }

  onNextClick() {
    var isValid = true;

    if (count === 1) {
      this.setState({
        selectView: true,
        selectView2: true,

        screenTwo: true,
        screenfirst: false,

        count: 2,
        message: 'Address',
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

        screenfirst: false,
        screenTwo: false,
        screenthree: true,

        count: 3,
        message: 'Occupation',
      });
      count = 3;
      isValid = false;

      return false;
    }
    if (count === 3) {
      this.setState({
        selectView: true,
        selectView2: true,
        selectView3: true,
        selectView4: true,
        selectView5: false,

        screenTwo: false,
        screenfirst: false,
        screenthree: false,
        screenfour: true,
        screenfive: false,
        count: 4,
        message: 'National ID Photo',
      });
      count = 4;
      isValid = false;

      return false;
    }
    if (count === 4) {
      this.setState({
        selectView: true,
        selectView2: true,
        selectView3: true,
        selectView4: true,
        selectView5: true,

        screenTwo: false,
        screenfirst: false,
        screenthree: false,
        screenfour: false,
        screenfive: true,

        count: 5,
        message: 'Broker Contract',
      });
      count = 5;
      isValid = false;

      return false;
    }

    if (count === 5) {
      this.setState({
        selectView: true,
        selectView2: true,
        selectView3: true,
        selectView4: true,
        selectView5: true,
        selectView6: true,

        screenTwo: false,
        screenfirst: false,
        screenthree: false,
        screenfour: false,
        screenfive: false,
        screensix: true,

        count: 6,
        message: 'Signature',
      });
      isValid = false;
      count = 6;
      return false;
    }
    if (isValid) {
      this.props.navigation.reset({
        routes: [{name: 'AllTabs'}],
      });
    }
  }

  onback = () => {
    if(count === 1) {
    this.props.navigation.goBack(null);
    }
    else {
      var isValid = true;
    if (count === 2) {
      this.setState({
        selectView: true,
        selectView2: false,
        selectView3: false,

        screenfirst: true,
        screenTwo: false,
        screenthree: false,

        count: 1,
        message: 'Occupation',
      });
      count = 1;
      isValid = false;

      return false;
    }
    if (count === 3) {
      this.setState({
        selectView: true,
        selectView2: true,
        selectView3: false,
        selectView4: false,
        selectView5: false,

        screenTwo: true,
        screenfirst: false,
        screenthree: false,
        screenfour: false,
        screenfive: false,
        count: 2,
        message: 'National ID Photo',
      });
      count = 2;
      isValid = false;

      return false;
    }
    if (count === 4) {
      this.setState({
        selectView: true,
        selectView2: true,
        selectView3: true,
        selectView4: false,
        selectView5: false,

        screenTwo: false,
        screenfirst: false,
        screenthree: true,
        screenfour: false,
        screenfive: false,

        count: 3,
        message: 'Broker Contract',
      });
      count = 3;
      isValid = false;

      return false;
    }

    if (count === 5) {
      this.setState({
        selectView: true,
        selectView2: true,
        selectView3: true,
        selectView4: true,
        selectView5: false,
        selectView6: false,

        screenTwo: false,
        screenfirst: false,
        screenthree: false,
        screenfour: true,
        screenfive: false,
        screensix: false,

        count: 4,
        message: 'Signature',
      });
      isValid = false;
      count = 4;
      return false;
    }
    if (count === 6) {
      this.setState({
        selectView: true,
        selectView2: true,
        selectView3: true,
        selectView4: true,
        selectView5: true,
        selectView6: false,

        screenTwo: false,
        screenfirst: false,
        screenthree: false,
        screenfour: false,
        screenfive: true,
        screensix: false,

        count: 5,
        message: 'Signature',
      });
      isValid = false;
      count = 5;
      return false;
    }
    if (isValid) {
      this.props.navigation.reset({
        routes: [{name: 'AllTabs'}],
      });
    }
    }
  };

  changeAgreeMent = () => {
    this.setState({isAgree: !this.state.isAgree});
  };

  render() {
    const agreeTerms = this.state.screenfive && !this.state.isAgree;
    return (
      <View
        style={{width: '100%', height: '100%', backgroundColor: COLORS.primary}}
      >
        <Header
          headerType="auth"
          onBackClick={this.onback}
          headertitle="KYC"
        />
        <View>
          <SliderView
            view={this.state.selectView}
            view1={this.state.selectView2}
            view2={this.state.selectView3}
            view3={this.state.selectView4}
            view4={this.state.selectView5}
            view5={this.state.selectView6}
            count={this.state.count}
            message={this.state.message}
            screenName={'KYC'}
            totalCount={'6'}
          />
        </View>
        <View style={{marginTop: 20}} />
        <ScrollView
          contentContainerStyle={{width: '100%', height: '100%'}}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {this.state.screenfirst === true ? <Kyc_one /> : null}
          {this.state.screenTwo === true ? <Kyc_two /> : null}
          {this.state.screenthree === true ? <Kyc_three /> : null}
          {this.state.screenfour === true ? <Kyc_Four /> : null}
          {this.state.screenfive === true ? <Kyc_Five onPress={this.changeAgreeMent} isAgree={this.state.isAgree} /> : null}
          {this.state.screensix === true ? <Kyc_six /> : null}
        </ScrollView>

        <View
          style={{
            width: '100%',
            alignContent: 'center',
            justifyContent: 'flex-end',
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: 50,
          }}
        >
          <ButtonView
            disabled={agreeTerms}
            landingSize="full"
            buttonType={agreeTerms ? 'offWhite' : null}
            btnName={'NEXT'}
            onPressSite={() => this.onNextClick()}
          />
        </View>
      </View>
    );
  }
}
