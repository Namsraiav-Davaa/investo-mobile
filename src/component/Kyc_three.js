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
import AnimatedInput from './AnimatedInput/AnimatedInput';
import RNPickerView_two from '../common/RNPickerview_two';
import TextCommonRegular from '../common/TextCommonRegular';

export default class Kyc_three extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education_arr: [
        {label: 'Bachelor', value: 'Bachelor'},
        {label: 'Ahamedabad', value: 'Ahamedabad'},
        {label: 'Baroda', value: 'Baroda'},
        {label: 'Surat', value: 'Surat'},
        {label: 'Gandhinagar', value: 'Gandhinagar'},
        {label: 'Haidrabad', value: 'Haidrabad'},
        {label: 'Pune', value: 'Pune'},
      ],
      organization_Arr: [
        {label: 'Rajkot', value: 'Rajkot'},
        {label: 'Ahamedabad', value: 'Ahamedabad'},
        {label: 'Baroda', value: 'Baroda'},
        {label: 'Surat', value: 'Surat'},
        {label: 'Gandhinagar', value: 'Gandhinagar'},
        {label: 'Haidrabad', value: 'Haidrabad'},
      ],
      areaArr: [
        {label: 'Rajkot', value: 'Rajkot'},
        {label: 'Ahamedabad', value: 'Ahamedabad'},
        {label: 'Baroda', value: 'Baroda'},
        {label: 'Surat', value: 'Surat'},
        {label: 'Gandhinagar', value: 'Gandhinagar'},
        {label: 'Haidrabad', value: 'Haidrabad'},
      ],

      value: '',
      amountArr: [
        {label: 'Ahamedabad', value: 'Ahamedabad'},
        {label: 'Baroda', value: 'Baroda'},
        {label: 'Surat', value: 'Surat'},
      ],
      isCheck: false,
    };
  }
  onCardView(keyboardType, placeholder, onChangeText, value, secureTextEntry) {
    return (
      <View
        style={{
          backgroundColor: COLORS.card_bg,
          marginTop: 20,
          borderRadius: 10,
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
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <View style={{height: 67, justifyContent: 'center'}}>
          <RNPickerView_two
            label={'Select Education'}
            itemArray={this.state.education_arr}
            onValueChange={value => this.setState({value})}
          />
          <View style={{position: 'absolute', top: 5, left: 15}}>
            <TextCommonRegular
              text={'Education'}
              color={COLORS.button_bg}
              fontSize={FONTS_SIZE.txt_14}
              // textDecorationLine={'underline'}
              textAlign={'left'}
            />
          </View>
        </View>

        <View style={{marginTop: 20}} />
        <RNPickerView_two
          label={'Type of organization'}
          itemArray={this.state.organization_Arr}
          onValueChange={value => this.setState({value})}
        />
        <View style={{marginTop: 20}} />
        <RNPickerView_two
          label={'Areas of activity'}
          itemArray={this.state.areaArr}
          onValueChange={value => this.setState({value})}
        />

        {this.onCardView(
          'default',
          'Company name ',
          value => {
            this.setState({Companyname: value});
          },
          this.state.Companyname,
          false,
        )}

        {this.onCardView(
          'numeric',
          'Position',
          value => {
            this.setState({Position: value});
          },
          this.state.Position,
          false,
        )}

        <View style={{marginTop: 20}} />
        <RNPickerView_two
          label={'Amount of income'}
          itemArray={this.state.amountArr}
          onValueChange={value => this.setState({value})}
        />
      </View>
    );
  }
}
