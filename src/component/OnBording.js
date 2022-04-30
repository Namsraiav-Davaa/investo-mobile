import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
  I18nManager,
} from 'react-native';

import Swiper from 'react-native-swiper';
import ButtonView from '../common/ButtonView';
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';

import {COLORS, FONTS, FONTS_SIZE} from '../common/utils';

const dotsize = 5;

export default class onBording extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  onNextClick() {
    this.refs.swiper.scrollBy(1);
  }

  _renderDotIndicator(index) {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          bottom: 100,
          width: '90%',
          height: 60,
          margin: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            width: '100%',
            height: 50,
          }}
        >
          <View
            style={{
              backgroundColor: index === 0 ? COLORS.button_bg : COLORS.textGrey,
              height: dotsize,
              width: dotsize,
              borderRadius: dotsize / 2,
            }}
          />
          <View
            style={{
              marginLeft: 5,
              backgroundColor: index === 1 ? COLORS.button_bg : COLORS.textGrey,
              height: dotsize,
              width: dotsize,
              borderRadius: dotsize / 2,
            }}
          />
        </View>
      </View>
    );
  }

  onTextView(text, text_green, description) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text allowFontScaling={false} style={stylesLogin.textStyle}>
          {text}
        </Text>

        <View
          style={{marginTop: 5, width: '90%', paddingLeft: 2, paddingRight: 2}}
        >
          <Text allowFontScaling={false} style={stylesLogin.descriptionText}>
            <Text allowFontScaling={false} style={stylesLogin.textStyle_grren}>
              {text_green}
            </Text>
            {description}
          </Text>
        </View>
      </View>
    );
  }

  onPageSelected(index) {
    this.setState({index: index});
  }
  onLoginClick() {
    const {navigation} = this.props;
    navigation.navigate('LoginPage');
  }
  onSignupClick() {}

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
        }}
      >
        <Swiper
          loop={false}
          ref="swiper"
          showsPagination={false}
          dotColor={COLORS.transparent}
          activeDotColor={COLORS.transparent}
          onIndexChanged={index => this.onPageSelected(index)}
        >
          <View style={stylesLogin.container}>
            <Image
              style={stylesLogin.BordingImgeStyle}
              source={require('../assets/logo.png')}
            />
            {this.onTextView(
              'Welcome',
              'Investo',
              ' is the first digital broker in Mongolia. You can trade both Mongolian and foreign stocks from your mobile phone!',
            )}
          </View>
          <View style={stylesLogin.container}>
            <Image
              style={stylesLogin.BordingImgeStyleTwo}
              source={require('../assets/Group.png')}
            />
            <View style={{marginTop: 50, width: '80%'}}>
              {this.onTextView(
                'Easiest trading!',
                '',
                'Trading has never\n been this easy',
              )}
            </View>
          </View>
        </Swiper>
        {this._renderDotIndicator(this.state.index)}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 50,
            width: '100%',
          }}
        >
          <ButtonView
            btnName="LOG IN"
            landingSize="full"
            onPressSite={() => this.onLoginClick()}
          />
          <TextCommonMedium
            text={'REGISTER'}
            color={COLORS.button_bg}
            numberOfLines={1}
            fontSize={FONTS_SIZE.txt_14}
            marginTop={10}
            fontWeight={'500'}
            onClickText={() =>
              this.props.navigation.navigate('Registration_Main')
            }
          />
        </View>
      </View>
    );
  }
}

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  textStyle: {
    fontSize: FONTS_SIZE.txt_18,
    color: COLORS.white,
    fontFamily: FONTS.FontRegular,
    textAlign: 'center',
    writingDirection: 'auto',
    lineHeight: 36,
    fontWeight: '700',
  },
  textStyle_grren: {
    color: COLORS.button_bg,
    fontSize: FONTS_SIZE.txt_16,
    fontFamily: FONTS.FontRegular,
    padding: 5,
    textAlign: 'center',
    fontWeight: '400',
  },
  iconStyle: {
    width: 80,
    height: 80,
  },
  descriptionText: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.txt_16,
    fontFamily: FONTS.FontRegular,
    textAlign: 'center',
    fontWeight: '400',
  },
  BordingImgeStyle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  BordingImgeStyleTwo: {
    width: 280,
    height: 180,
    resizeMode: 'contain',
  },
  BordingImgeStyleThree: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  skipText: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.txt_18,
    fontFamily: FONTS.FontMedium,
    lineHeight: 24,
  },
});
