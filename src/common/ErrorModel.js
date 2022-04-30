import React, {Component} from 'react';
import {Text, View, Modal, Image, TouchableOpacity} from 'react-native';
import {errormsgstyles} from './errormsgstyles';

export default class ErrorModelView extends Component {
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
        <View style={errormsgstyles.errorMsgMainViewStyle}>
          <View style={errormsgstyles.errorMsgSecondViewStyle}>
            <View style={errormsgstyles.errorMsgImageViewStyle}>
              <Image
                source={modalImg}
                style={errormsgstyles.errorMsgImageStyle}
              />
              <Text
                allowFontScaling={false}
                style={errormsgstyles.errorMsgTextStyle}
              >
                {ErrorMsg}
              </Text>
            </View>

            <View style={{position: 'absolute', bottom: 15, width: '100%'}}>
              <View style={errormsgstyles.errorMsgLineStyle} />
              <TouchableOpacity activeOpacity={1} onPress={onPressOk}>
                <Text
                  allowFontScaling={false}
                  style={errormsgstyles.errorOkTextStyle}
                >
                  {'OK'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
