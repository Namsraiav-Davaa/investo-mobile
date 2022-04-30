import React, {Component} from 'react';
import {View, Text, Modal, Image, StyleSheet} from 'react-native';
import OTPTextView from '../component/OtpView/OTPTextView';
import TextCommonMedium from './TextCommonMedium';
import {COLORS, FONTS_SIZE, FONTS} from './utils';

export default class Transactionpass_Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      loading,
      modalImg,
      ErrorMsg,
      onPressOk,
      onPressClose,
      handleTextChange,
    } = this.props;
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
              height: 250,
              width: 300,
              backgroundColor: COLORS.primary,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={modalImg}
              style={{width: 40, height: 40}}
              resizeMode="contain"
            />

            <TextCommonMedium
              text={ErrorMsg}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'center'}
              marginTop={15}
            />

            <OTPTextView
              ref={e => (this.input1 = e)}
              containerStyle={styles.textInputContainer}
              textInputStyle={styles.textInput}
              handleTextChange={handleTextChange}
              inputCount={4}
              keyboardType="numeric"
              marginTop={20}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: 20,
  },

  textStyle_regular: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.txt_14,
    fontFamily: FONTS.FontLight,
    textAlign: 'center',
    marginTop: 15,
  },
  textStyle_grren: {
    color: COLORS.button_bg,
    fontSize: FONTS_SIZE.txt_14,
    fontFamily: FONTS.FontRegular,
    textAlign: 'center',
    marginTop: 5,
  },
  textInput: {
    width: 50,
    height: 50,
    borderColor: COLORS.otp_bg_selected,
    borderWidth: 0.5,
    padding: 10,
    fontSize: 16,
    letterSpacing: 5,
    marginBottom: 10,
    borderRadius: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonStyle: {
    marginHorizontal: 20,
  },
});
