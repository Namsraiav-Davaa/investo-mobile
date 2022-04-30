import React, {Component} from 'react';
import {View, Text} from 'react-native';
import HeaderProfile from '../common/HeaderProfile';
import {COLORS, FONTS_SIZE} from '../common/utils';
import TextCommonRegular from '../common/TextCommonRegular';
import AnimatedInput from './AnimatedInput/AnimatedInput';
import ButtonView from '../common/ButtonView';
import HeaderProfile2 from '../common/HeaderProfile2';
import Transactionpass_Dialog from '../common/Transactionpass_Dialog';

export default class AddNew_card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Transactionpass_Dialog: false,
      Cardadded_dialog: false,
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
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
        }}
      >
        <HeaderProfile2
          headerTitle={'1,500,000₮'}
          profileStyle={{
            height: 40,
            width: 90,
            borderRadius: 30,
            marginLeft: 40,
          }}
          profileicon={require('../assets/profile_icon.jpeg')}
        />
        <TextCommonRegular
          text={'Add debit card'}
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
            marginTop: 15,
          }}
        >
          <ButtonView
            landingSize="full"
            btnName={'ADD CARD'}
            onPressSite={() => {}}
          />
        </View>
      </View>
    );
  }
}
