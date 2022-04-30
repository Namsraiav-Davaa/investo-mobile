import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import TextCommonRegular from '../common/TextCommonRegular';
import HeaderProfile2 from '../common/HeaderProfile2';
import {COLORS, FONTS_SIZE} from '../common/utils';
import AnimatedInput from './AnimatedInput/AnimatedInput';
import ButtonView from '../common/ButtonView';
import RNPickerView_two from '../common/RNPickerview_two';

export default class Withdrawal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bankarray: [
        {label: 'Хаан банк', value: 'Хаан банк'},
        {label: 'Голомт банк', value: 'Голомт банк'},
        {label: 'Худалдаа хөгжлийн банк', value: 'Худалдаа хөгжлийн банк'},
      ],
      bank: 'Хаан банк',
      accountName: 'Tester',
      accountNumber: '123',
      amountNumber: '0',
    };
  }
  onCardView(
    keyboardType,
    placeholder,
    placeholderTextColor,
    onChangeText,
    value,
    secureTextEntry,
    disabled,
  ) {
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
          placeholderTextColor={placeholderTextColor}
          // valid={true}
          // errorText="Error"
          // onChangeText={onChangeText}
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
          onBackClick={() => this.props.navigation.goBack(null)}
          headerTitle={'1,500,000₮'}
          profileStyle={{
            height: 40,
            width: 90,
            borderRadius: 30,
            marginLeft: 40,
          }}
          profileicon={require('../assets/profile_icon.jpeg')}
        />
        <ScrollView>
          <View>
            <TextCommonRegular
              text={'Withdraw'}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_18}
              textAlign={'left'}
              numberOfLines={1}
              marginLeft={15}
              marginTop={30}
            />
            <View style={{marginLeft: 20, marginRight: 20, marginTop: 20}}>
              <RNPickerView_two
                label={this.state.bankarray[0].label}
                itemArray={this.state.bankarray}
                onValueChange={value => this.setState({bank: value})}
              />
            </View>

            {this.onCardView(
              'default',
              'Батхүлэг Батзориг',
              value => {
                this.setState({accountName: value});
              },
              this.state.accountName,
              this.state.securePassword,
              false,
              true,
            )}
            {this.onCardView(
              'numeric',
              '200932094824',
              value => {
                this.setState({accountNumber: value});
              },
              this.state.accountNumber,
              this.state.securePassword,
              false,
              true,
            )}
            {this.onCardView(
              'numeric',
              '0',
              value => {
                this.setState({amountNumber: value});
              },
              this.state.amountNumber,
              this.state.securePassword,
              false,
              false,
            )}
            {this.onCardView(
              'default',
              'УХ89050422 Инвесто зарлага',
              value => {
                this.setState({description: value});
              },

              this.state.description,
              this.state.securePassword,
              false,
              true,
            )}
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}
          >
            <ButtonView
              landingSize="full"
              btnName={'SUBMIT'}
              onPressSite={() =>
                Alert.alert(
                  'Success',
                  `bank: ${this.state.bank || ''}, name: ${
                    this.state.accountName || ''
                  }, account: ${this.state.accountNumber || ''}, amount: ${
                    this.state.amountNumber || ''
                  }, description: ${this.state.description || ''}`,
                )
              }
              buttonType={'pass'}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
