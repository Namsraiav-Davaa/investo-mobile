import React, {Component} from 'react';
import {View, Text, Image, Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {pickerSelectStyles} from './pickerSelectStyles';
import {COLORS} from './utils';

const styles = {
  rightArrowAlignment: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginTop: Platform.OS === 'ios' ? 10 : 12,
    marginRight: Platform.OS === 'ios' ? 7 : 8,
    tintColor: COLORS.offwhite,
  },
};
const imgPath = '../assets/';

export default class RNPickerView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onRNPickerSelectIOS(label, itemArray, onValueChange) {
    return (
      <View
        style={{
          width: 48,
          backgroundColor: COLORS.card_bg,
          borderRadius: 10,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RNPickerSelect
          placeholder={{
            label: label,
            value: '',
          }}
          items={itemArray}
          placeholderTextColor={COLORS.red}
          onValueChange={onValueChange}
          Icon={() => {
            return label != null || label != undefined ? null : (
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
          width: 46,
          height: 60,
          backgroundColor: COLORS.card_bg,
          borderRadius: 10,
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
          // placeholderTextColor={COLORS.red}
          Icon={() => {
            return label != null || label != undefined ? null : (
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
