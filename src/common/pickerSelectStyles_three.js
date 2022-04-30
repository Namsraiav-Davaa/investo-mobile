import {Platform, StyleSheet} from 'react-native';
import {COLORS, FONTS, FONTS_SIZE} from './utils';

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: FONTS_SIZE.txt_14,
    fontFamily: FONTS.FontMedium,
    color: COLORS.view_line_color,
    borderRadius: 20,
    paddingLeft: 10,
    // paddingTop: 1,
    borderTopLeftRadius: 30,
    // opacity: 0.5,
    borderTopRightRadius: 30,
    // marginTop: Platform.OS === 'ios' ? 10 : 12,
    marginRight: Platform.OS === 'ios' ? 5 : 8,
    marginLeft: 70,
  },
  colorDropDown: {
    marginTop: 15,
    fontSize: FONTS_SIZE.txt_14,
    color: COLORS.view_line_color,
  },
  inputAndroid: {
    fontSize: FONTS_SIZE.txt_14,
    fontFamily: FONTS.FontMedium,
    color: COLORS.view_line_color,
    borderRadius: 10,
    paddingLeft: 15,
    marginLeft: 65,
    // marginTop: 7,
  },
});

export {pickerSelectStyles};
