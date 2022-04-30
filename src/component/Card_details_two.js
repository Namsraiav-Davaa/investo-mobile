import Header from '../common/Header';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS_SIZE} from '../common/utils';
import TextCommonRegular from '../common/TextCommonRegular';
import AnimatedInput from './AnimatedInput/AnimatedInput';
import ButtonView from '../common/ButtonView';
import Transactionpass_Dialog from '../common/Transactionpass_Dialog';

export default class Card_details_two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Transactionpass_Dialog: false,
    };
  }
  onCardView(
    keyboardType,
    placeholder,
    onChangeText,
    value,
    secureTextEntry,
    disabled,
  ) {
    return (
      <View
        style={{
          backgroundColor: COLORS.otp_bg,
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
          disabled={disabled}
        />
      </View>
    );
  }

  onRedirectClick(text) {
    var pass = '1234';

    if (text === pass) {
      this.setState({
        Transactionpass_Dialog: false,
      });
      this.props.navigation.navigate('Deposit_successful');
    } else {
      if (text.length === 4) {
        alert('Transaction pin invalid please try again.');
      }
    }
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
        <Header
          headerType="auth"
          onBackClick={() => navigation.goBack(null)}
          headertitle="Deposit"
        />
        <TextCommonRegular
          text={'Карт холбох'}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_18}
          textAlign={'left'}
          numberOfLines={1}
          marginLeft={15}
          marginTop={30}
        />
        {this.onCardView(
          'numeric',
          'Card number',
          value => {
            this.setState({CardNumber: value});
          },
          this.state.CardNumber,
          false,
          false,
        )}

        {this.onCardView(
          'default',
          'Card name',
          value => {
            this.setState({cardName: value});
          },
          this.state.cardName,
          false,
          false,
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{flex: 0.5}}>
            {this.onCardView(
              'numeric',
              'Expity date',
              value => {
                this.setState({expiryDate: value});
              },
              this.state.expiryDate,
              false,
              false,
            )}
          </View>

          <View style={{flex: 0.5}}>
            {this.onCardView(
              'numeric',
              'CVV',
              value => {
                this.setState({cvv: value});
              },
              this.state.cvv,
              false,
              false,
            )}
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}
        >
          <ButtonView
            landingSize="full"
            btnName={'CONFIRM'}
            onPressSite={() => {
              this.setState({
                Transactionpass_Dialog: true,
              });
            }}
          />
        </View>
        <Transactionpass_Dialog
          loading={this.state.Transactionpass_Dialog}
          modalImg={require('../assets/lock_icon.png')}
          ErrorMsg={'Transaction password'}
          handleTextChange={text => this.onRedirectClick(text)}
        />
      </View>
    );
  }
}
