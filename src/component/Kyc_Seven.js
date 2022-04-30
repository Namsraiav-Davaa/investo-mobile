import Header from '../common/Header';
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS_SIZE} from '../common/utils';
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';
import ButtonView from '../common/ButtonView';

export default class Kyc_Seven extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onView(icon, text, right_icon) {
    console.log('text', text);
    var styleNew;
    if (text == 'Card') {
      styleNew = {height: 25, width: 25, tintColor: COLORS.offwhite};
    } else {
      styleNew = {height: 35, width: 35, tintColor: COLORS.offwhite};
    }
    return (
      <View
        style={{
          backgroundColor: COLORS.card_bg,
          alignItems: 'center',
          flexDirection: 'row',
          padding: 15,
        }}
      >
        <Image style={styleNew} resizeMode="contain" source={icon} />
        <View style={{flex: 1}}>
          <TextCommonMedium
            text={text}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_14}
            marginLeft={15}
            textAlign={'left'}
          />
        </View>
        <Image
          style={{height: 20, width: 20}}
          resizeMode="contain"
          source={right_icon}
        />
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
          backgroundColor: COLORS.primary,
        }}
      >
        <Header onBackClick={() => navigation.goBack(null)} />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Image
            style={{width: 35, height: 35, tintColor: COLORS.white}}
            resizeMode="contain"
            source={require('../assets/Transaction.png')}
          />
          <TextCommonMedium
            text={'Open an account at the Central\n Securities Depository'}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_14}
            textAlign="center"
          />
          <TextCommonRegular
            text={'Fee'}
            color={COLORS.textColor}
            numberOfLines={1}
            fontSize={FONTS_SIZE.txt_14}
            marginTop={20}
          />
          <TextCommonMedium
            text={'₮5000'}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_14}
          />
        </View>

        <View
          style={{
            borderWidth: 0.3,
            borderColor: COLORS.textColor,
            marginTop: 30,
          }}
        />

        <View style={{justifyContent: 'center', marginTop: 20}}>
          <TextCommonMedium
            text={'Payment methods'}
            color={COLORS.textColor}
            fontSize={FONTS_SIZE.txt_14}
            marginLeft={20}
          />
        </View>
        <View style={{marginTop: 10}}>
          {this.onView(
            require('../assets/account_balance_wallet.png'),
            'Bank transaction',
            require('../assets/right_icon.png'),
          )}

          <View style={{borderWidth: 0.2, borderColor: COLORS.textColor}} />
          {this.onView(
            require('../assets/wallet_icon2.png'),
            'Card',
            require('../assets/right_icon.png'),
          )}
        </View>

        <View style={{justifyContent: 'center', marginTop: 20}}>
          <TextCommonRegular
            text={
              'You will be able to trade by opening an account at\nthe Central Securities Depository.'
            }
            color={COLORS.textColor}
            fontSize={FONTS_SIZE.txt_12}
            marginLeft={20}
          />
        </View>
        <View
          style={{position: 'absolute', bottom: 10, width: '100%', height: 80}}
        >
          <View
            style={{
              width: '100%',
              height: 0.6,
              backgroundColor: COLORS.card_bg,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
              marginTop: 10,
              alignItems: 'center',
            }}
          >
            <View style={{flex: 0.9}}>
              <TextCommonRegular
                text={'You will pay'}
                color={COLORS.offwhite}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'center'}
                numberOfLines={1}
                textAlign={'left'}
              />
              <TextCommonRegular
                text={'₮5000'}
                color={COLORS.white}
                fontSize={FONTS_SIZE.txt_16}
                textAlign={'center'}
                numberOfLines={1}
                textAlign={'left'}
              />
            </View>
            <View
              style={{
                width: '55%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ButtonView
                landingSize="full"
                btnName={'CONFIRM'}
                onPressSite={() => {
                  this.props.navigation.navigate('');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
