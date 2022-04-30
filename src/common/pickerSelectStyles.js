import {Platform, StyleSheet} from 'react-native';
import {COLORS, FONTS, FONTS_SIZE} from './utils';

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: FONTS_SIZE.txt_14,
    fontFamily: FONTS.FontRegular,
    color: COLORS.white,
    borderRadius: 20,
    paddingLeft: 10,
    paddingTop: 1,
    borderTopLeftRadius: 30,
    opacity: 0.5,
    borderTopRightRadius: 30,
    marginTop: Platform.OS === 'ios' ? 10 : 12,
    marginRight: Platform.OS === 'ios' ? 5 : 8,
  },
  colorDropDown: {
    marginTop: 15,
    fontSize: FONTS_SIZE.txt_14,
    color: COLORS.offwhite,

    // fontFamily: "SFProText-Semibold"
  },
  inputAndroid: {
    fontSize: FONTS_SIZE.txt_14,
    fontFamily: FONTS.FontRegular,
    backgroundColor: COLORS.card_bg,
    color: COLORS.white,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 9,
  },
});

const pickerSelectStyles_two = StyleSheet.create({
  inputIOS: {
    fontSize: FONTS_SIZE.txt_14,
    fontFamily: FONTS.FontRegular,
    color: COLORS.white,
    borderRadius: 20,
    paddingLeft: 10,
    paddingTop: 1,
    borderTopLeftRadius: 30,
    opacity: 0.5,
    borderTopRightRadius: 30,
    marginTop: Platform.OS === 'ios' ? 10 : 12,
    marginRight: Platform.OS === 'ios' ? 5 : 8,
  },
  colorDropDown: {
    marginTop: 10,
    fontSize: FONTS_SIZE.txt_14,
    color: COLORS.offwhite,

    // fontFamily: "SFProText-Semibold"
  },
  inputAndroid: {
    fontSize: FONTS_SIZE.txt_14,
    fontFamily: FONTS.FontRegular,
    backgroundColor: COLORS.card_bg,
    color: COLORS.white,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 15,
  },
});

const pickerSelectStyles_four = StyleSheet.create({
  inputIOS: {
    fontSize: FONTS_SIZE.txt_14,
    fontFamily: FONTS.FontRegular,
    color: COLORS.white,
    borderRadius: 20,
    paddingLeft: 10,
    paddingTop: 1,
    borderTopLeftRadius: 30,
    opacity: 0.5,
    borderTopRightRadius: 30,
    marginTop: Platform.OS === 'ios' ? 10 : 12,
    marginRight: Platform.OS === 'ios' ? 5 : 8,
  },
  colorDropDown: {
    marginTop: 10,
    fontSize: FONTS_SIZE.txt_14,
    color: COLORS.offwhite,

    // fontFamily: "SFProText-Semibold"
  },
  inputAndroid: {
    fontSize: FONTS_SIZE.txt_14,
    fontFamily: FONTS.FontRegular,
    backgroundColor: COLORS.card_bg,
    color: COLORS.white,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 18,
  },
});

export {pickerSelectStyles, pickerSelectStyles_two, pickerSelectStyles_four};
