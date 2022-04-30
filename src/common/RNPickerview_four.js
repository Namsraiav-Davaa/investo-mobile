import React, {Component} from 'react';
import {View, Text, Image, Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {pickerSelectStyles_four} from './pickerSelectStyles';
import {COLORS} from './utils';

const styles = {
  rightArrowAlignment: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginTop: Platform.OS === 'ios' ? 10 : 15,
    marginRight: Platform.OS === 'ios' ? 7 : 8,
    tintColor: COLORS.offwhite,
  },
};
const imgPath = '../assets/';

export default class RNPickerview_four extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onRNPickerSelectIOS(label, itemArray, onValueChange) {
    return (
      <View
        style={{
          backgroundColor: COLORS.card_bg,
          height: 66,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RNPickerSelect
          placeholder={{
            label: label,
            value: '',
            placeholderTextColor: COLORS.offwhite,
          }}
          items={itemArray}
          placeholderTextColor={COLORS.red}
          onValueChange={onValueChange}
          Icon={() => {
            return (
              <Image
                style={styles.rightArrowAlignment}
                source={require(`${imgPath}down_arrow.png`)}
              />
            );
          }}
          style={{...pickerSelectStyles_four}}
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
          height: 64,
          justifyContent: 'center',
        }}
      >
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
          style={{...pickerSelectStyles_four}}
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
