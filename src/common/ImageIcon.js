import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default class ImageIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {onPress, icon, tintcolor, marginLeft, whiteIndex} = this.props;
    return (
      <TouchableOpacity
        style={{
          // width: 50,
          // height: 50,
          marginLeft: marginLeft,
          // alignItems: 'center',
          // justifyContent: 'center',
        }}
        activeOpacity={0.9}
        onPress={onPress}
      >
        <Image
          source={icon}
          resizeMode={'contain'}
          style={{width: 16, height: 16, tintColor: tintcolor}}
        />
      </TouchableOpacity>
    );
  }
}
