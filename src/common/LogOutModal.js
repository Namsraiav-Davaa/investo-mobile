import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS, FONTS_SIZE} from './utils';

export default class LogOutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {loading, onPressOk, onPressClose, onPressCancel} = this.props;
    return (
      <Modal
        animationType="slide"
        visible={loading}
        animated={true}
        onRequestClose={onPressClose}
        transparent={true}
      >
        <View style={Style.errorMsgMainViewStyle}>
          <View style={Style.errorMsgSecondViewStyle}>
            <View style={Style.errorMsgImageViewStyle}>
              <Text allowFontScaling={false} style={Style.errorMsgTextStyle}>
                {'logout_msg_lbl'}
              </Text>
            </View>
            <View style={{width: '100%'}}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={onPressOk}
                style={{
                  backgroundColor: COLORS.blue,
                  width: '50%',
                  height: 50,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: 20,
                }}
              >
                <Text allowFontScaling={false} style={Style.errorOkTextStyle}>
                  {'Yes'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={1}
                onPress={onPressCancel}
                style={{
                  width: '50%',
                  height: 50,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              >
                <Text allowFontScaling={false} style={Style.CancelTextStyle}>
                  {'Cancel_lbl'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const Style = StyleSheet.create({
  errorMsgMainViewStyle: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(80, 80, 80, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsgSecondViewStyle: {
    height: 230,
    width: 300,
    backgroundColor: COLORS.white,
    borderRadius: 15,
  },
  errorMsgImageViewStyle: {
    width: '100%',
    marginTop: 30,
  },
  errorMsgImageStyle: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    tintColor: COLORS.blue,
  },
  errorMsgTextStyle: {
    color: COLORS.black,
    fontSize: FONTS_SIZE.txt_18,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 12,
    textAlign: 'center',
    fontFamily: FONTS.FontMedium,
  },

  CancelTextStyle: {
    color: COLORS.textGrey,
    fontSize: FONTS_SIZE.txt_16,
    fontFamily: FONTS.FontRegular,
    alignSelf: 'center',
  },
  errorOkTextStyle: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.txt_18,
    fontFamily: FONTS.FontRegular,
    alignSelf: 'center',
  },
});
