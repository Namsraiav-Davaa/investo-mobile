import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {useTheme} from '../theme/ThemeProvider';
import {FONTS, FONTS_SIZE} from './utils';

export default function SuceesModelView({
  loading,
  modalImg,
  ErrorMsg,
  onPressOk,
  onPressClose,
}) {
  const {colors, isDark} = useTheme();

  const errormsgstyles = StyleSheet.create({
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
      backgroundColor: colors.white,
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
      tintColor: colors.blue,
    },
    errorMsgTextStyle: {
      color: colors.black,
      fontSize: FONTS_SIZE.txt_16,
      marginRight: 10,
      marginLeft: 10,
      marginTop: 12,
      textAlign: 'center',
      fontFamily: FONTS.FontRegular,
    },
    errorMsgLineStyle: {
      backgroundColor: colors.black,
      height: 0.5,
      width: '90%',
      alignSelf: 'center',
    },
    errorOkTextStyle: {
      color: colors.black,
      fontSize: FONTS_SIZE.txt_16,
      fontFamily: FONTS.FontRegular,
      alignSelf: 'center',
      marginTop: 10,
    },
    attentionTextStyle: {
      color: colors.black,
      fontSize: FONTS_SIZE.txt_16,
      alignSelf: 'center',
      marginTop: 10,
    },
    modalTextStyle: {
      color: colors.blue,
      fontSize: FONTS_SIZE.txt_16,
      alignSelf: 'center',
      marginTop: 10,
    },
  });

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
                {'Ok'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
