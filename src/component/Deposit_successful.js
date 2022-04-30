import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS_SIZE, FONTS} from '../common/utils';
import ButtonView from '../common/ButtonView';

export default class Deposit_successful extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
          alignItems: 'center',
        }}
      >
        <View style={{marginTop: 50}}>
          <TextCommonRegular
            text={'Deposit'}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_18}
            textAlign={'center'}
          />
        </View>

        <Image
          style={{height: 100, height: 100, marginTop: 70}}
          resizeMode="contain"
          source={require('../assets/check_circle.png')}
        />
        <TextCommonRegular
          text={'Deposit successful'}
          color={COLORS.faq_des_color}
          fontSize={FONTS_SIZE.txt_18}
          textAlign={'center'}
          marginTop={30}
        />
        <View
          style={{
            width: '100%',
            height: 0.2,
            backgroundColor: COLORS.white,
            marginTop: 40,
          }}
        />

        <View style={{marginTop: 30}}>
          <TextCommonRegular
            text={'Amount'}
            color={COLORS.offwhite}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'center'}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TextInput
              returnKeyType={'done'}
              keyboardType={'numeric'}
              style={{
                width: '80%',
                color: COLORS.faq_des_color,
                fontSize: FONTS_SIZE.txt_18,
                fontFamily: FONTS.FontRegular,
                textAlign: 'center',
              }}
              placeholder={'₮5,000,000 MNT'}
              secureTextEntry={false}
              placeholderTextColor={COLORS.faq_des_color}
              onChangeText={value => this.setState({Account: value})}
              value={this.state.Account}
            />
          </View>
          <TextCommonRegular
            text={'= 1,755 USD'}
            color={COLORS.offwhite}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'center'}
          />
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}
        >
          <ButtonView
            landingSize="full"
            btnName={'VIEW WALLET'}
            onPressSite={() => this.props.navigation.navigate('HomePage')}
          />
        </View>
      </View>
    );
  }
}
