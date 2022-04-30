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
import RNPickerview_four from '../common/RNPickerview_four';
import TextCommonRegular from '../common/TextCommonRegular';

export default class Kyc_two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityarr: [
        {label: 'Rajkot', value: 'Rajkot'},
        {label: 'Ahamedabad', value: 'Ahamedabad'},
        {label: 'Baroda', value: 'Baroda'},
        {label: 'Surat', value: 'Surat'},
        {label: 'Gandhinagar', value: 'Gandhinagar'},
        {label: 'Haidrabad', value: 'Haidrabad'},
        {label: 'Pune', value: 'Pune'},
      ],
      districtArr: [
        {label: 'Rajkot', value: 'Rajkot'},
        {label: 'Ahamedabad', value: 'Ahamedabad'},
        {label: 'Baroda', value: 'Baroda'},
        {label: 'Surat', value: 'Surat'},
        {label: 'Gandhinagar', value: 'Gandhinagar'},
        {label: 'Haidrabad', value: 'Haidrabad'},
      ],
      value: '',
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
          <RNPickerview_four
            label={'Select City'}
            itemArray={this.state.cityarr}
            onValueChange={value => this.setState({value})}
          />
          <View style={{position: 'absolute', top: 5, left: 15}}>
            <TextCommonRegular
              text={'City'}
              color={COLORS.button_bg}
              fontSize={FONTS_SIZE.txt_14}
              // textDecorationLine={'underline'}
              textAlign={'left'}
            />
          </View>
        </View>

        <View style={{marginTop: 20}} />
        <RNPickerView_two
          label={'District'}
          itemArray={this.state.districtArr}
          onValueChange={value => this.setState({value})}
        />

        {this.onCardView(
          'default',
          'Street',
          value => {
            this.setState({Street: value});
          },
          this.state.Street,
          false,
        )}

        {this.onCardView(
          'numeric',
          'Building/Door',
          value => {
            this.setState({BuildingDoor: value});
          },
          this.state.BuildingDoor,
          false,
        )}
      </View>
    );
  }
}
