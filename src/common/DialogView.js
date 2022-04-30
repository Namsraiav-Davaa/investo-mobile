import React, {Component} from 'react';
import {View, Text, Modal, Image} from 'react-native';
import TextCommonMedium from './TextCommonMedium';
import {COLORS, FONTS_SIZE} from './utils';

export default class DialogView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {loading, modalImg, ErrorMsg, onPressOk, onPressClose} = this.props;
    return (
      <Modal
        animationType="slide"
        visible={loading}
        animated={true}
        onRequestClose={onPressClose}
        transparent={true}
      >
        <View
          style={{
            width: '100%',
            flex: 1,
            backgroundColor: 'rgba(80, 80, 80, 0.2)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              height: 160,
              width: 300,
              backgroundColor: COLORS.primary,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={modalImg}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />

            <TextCommonMedium
              text={ErrorMsg}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'center'}
              marginTop={10}
            />
          </View>
        </View>
      </Modal>
    );
  }
}
