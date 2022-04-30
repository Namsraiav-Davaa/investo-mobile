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

import Loader from '../common/LoadingScreen';
import AnimatedInput from './AnimatedInput/AnimatedInput';
import RNPickerView from '../common/RNPickerView';

export default class Kyc_one extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthArr: [
        {label: '1', value: '1'},
        {label: '2', value: '2'},
        {label: '3', value: '3'},
        {label: '4', value: '4'},
        {label: '5', value: '5'},
        {label: '6', value: '6'},
        {label: '7', value: '7'},
        {label: '8', value: '8'},
        {label: '9', value: '9'},
        {label: '10', value: '10'},
        {label: '11', value: '11'},
        {label: '12', value: '12'},
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
          marginLeft: placeholder === 'ID number' ? 10 : 0,
          // marginRight: 20,
          marginTop: placeholder === 'ID number' ? 0 : 20,
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
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RNPickerView
            label={''}
            itemArray={this.state.monthArr}
            onValueChange={value => this.setState({value})}
          />
          <View style={{marginLeft: 10}} />
          <RNPickerView
            label={''}
            itemArray={this.state.monthArr}
            onValueChange={value => this.setState({value})}
          />
          <View style={{width: '71%'}}>
            {this.onCardView(
              'numeric',
              'ID number',
              value => {
                this.setState({Idnumber: value});
              },
              this.state.Idnumber,
              false,
            )}
          </View>
        </View>

        <TouchableOpacity
          onPress={() =>
            this.setState({
              isCheck: !this.state.isCheck,
            })
          }
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            marginLeft: 10,
          }}
        >
          {this.state.isCheck === true ? (
            <Image
              style={{width: 25, height: 25}}
              resizeMode="contain"
              source={require('../assets/unselected_icon.png')}
            />
          ) : (
            <Image
              style={{width: 25, height: 25}}
              resizeMode="contain"
              source={require('../assets/selected_icon.png')}
            />
          )}
          <TextCommonMedium
            text={'Foreign Cizitizen'}
            color={COLORS.textColor}
            fontSize={FONTS_SIZE.txt_16}
            textAlign={'left'}
            marginLeft={10}
          />
        </TouchableOpacity>

        {this.onCardView(
          'numeric',
          'Phone Number',
          value => {
            this.setState({Pnumber: value});
          },
          this.state.Pnumber,
          false,
        )}

        {this.onCardView(
          'default',
          'E-mail',
          value => {
            this.setState({name: value});
          },
          this.state.name,
          false,
        )}
      </View>
    );
  }
}
