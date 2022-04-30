import {StyleSheet} from 'react-native';
import {COLORS, FONTS, FONTS_SIZE} from './utils';

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
    tintColor: COLORS.primary,
  },
  errorMsgTextStyle: {
    color: COLORS.black,
    fontSize: FONTS_SIZE.txt_16,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 12,
    textAlign: 'center',
    fontFamily: FONTS.FontRegular,
  },
  errorMsgLineStyle: {
    backgroundColor: COLORS.black,
    height: 0.5,
    width: '90%',
    alignSelf: 'center',
  },
  errorOkTextStyle: {
    color: COLORS.black,
    fontSize: FONTS_SIZE.txt_16,
    fontFamily: FONTS.FontRegular,
    alignSelf: 'center',
    marginTop: 10,
  },
  attentionTextStyle: {
    color: COLORS.black,
    fontSize: FONTS_SIZE.txt_16,
    alignSelf: 'center',
    marginTop: 10,
  },
  modalTextStyle: {
    color: COLORS.blue,
    fontSize: FONTS_SIZE.txt_16,
    alignSelf: 'center',
    marginTop: 10,
  },
});
export {errormsgstyles};
