import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {COLORS} from './utils';

export default class CardViewCommon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: COLORS.text_gray, width: '88%'}}>
        <Text> CardViewCommon </Text>
      </View>
    );
  }
}
