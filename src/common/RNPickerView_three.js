import React, {Component} from 'react';
import {View, Text, Image, Platform, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {pickerSelectStyles} from './pickerSelectStyles_three';
import {COLORS} from './utils';

const styles = {
  rightArrowAlignment: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginTop: Platform.OS === 'ios' ? 10 : 10,
    marginRight: Platform.OS === 'ios' ? 7 : 8,
    tintColor: COLORS.faq_des_color,
  },
  infoStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    tintColor: COLORS.hr_txt_color,
    // marginTop: Platform.OS === 'ios' ? 10 : 12,
  },
};
const imgPath = '../assets/';

export default class RNPickerView_three extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onRNPickerSelectIOS(label, itemArray, onValueChange) {
    return (
      <View
        style={{
          backgroundColor: COLORS.card_bg,
          height: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity style={{position: 'absolute', left: 15}}>
          <Image
            style={styles.infoStyle}
            resizeMode="contain"
            source={require(`${imgPath}info_icon.png`)}
          />
        </TouchableOpacity>

        <RNPickerSelect
          placeholder={{
            label: label,
            value: '',
            placeholderTextColor: COLORS.faq_des_color,
          }}
          items={itemArray}
          placeholderTextColor={COLORS.faq_des_color}
          onValueChange={onValueChange}
          Icon={() => {
            return (
              <Image
                style={styles.rightArrowAlignment}
                source={require(`${imgPath}down_arrow.png`)}
              />
            );
          }}
          style={{...pickerSelectStyles}}
        />
      </View>
    );
  }
  onRNPickerSelectAndroid(label, itemArray, onValueChange) {
    return (
      <View
        style={{
          backgroundColor: COLORS.card_bg,
          borderRadius: 10,
          height: 40,
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity style={{position: 'absolute', left: 15}}>
          <Image
            style={styles.infoStyle}
            resizeMode="contain"
            source={require(`${imgPath}info_icon.png`)}
          />
        </TouchableOpacity>
        <RNPickerSelect
          placeholder={{
            label: label,
            value: '',
          }}
          items={itemArray}
          onValueChange={onValueChange}
          useNativeAndroidPickerStyle={false}
          fixAndroidTouchableBug={true}
          placeholderTextColor={COLORS.offwhite}
          Icon={() => {
            return (
              <Image
                style={styles.rightArrowAlignment}
                source={require(`${imgPath}down_arrow.png`)}
              />
            );
          }}
          style={{...pickerSelectStyles}}
        />
      </View>
    );
  }

  render() {
    const {label, itemArray, onValueChange} = this.props;
    return Platform.OS === 'ios'
      ? this.onRNPickerSelectIOS(label, itemArray, onValueChange)
      : this.onRNPickerSelectAndroid(label, itemArray, onValueChange);
  }
}
