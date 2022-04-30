import {StyleSheet} from 'react-native';
import {COLORS, FONTS, FONTS_SIZE} from '../../common/utils';

export default StyleSheet.create({
  content: {
    justifyContent: 'flex-end',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    fontSize: FONTS_SIZE.txt_16,
    flex: 1,
    // marginBottom: 10,
    color: COLORS.white,
    fontFamily: FONTS.FontRegular,
    // height: 15,
    marginLeft: 12,
  },
  bodyContent: {
    borderBottomColor: 'black',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  toucheableLineContent: {
    flexDirection: 'row',
    alignItems: 'baseline',
    lineHeight: 6,
  },
  label: {
    fontSize: FONTS_SIZE.txt_13,
    paddingTop: 1,
    color: COLORS.textColor,
    // fontWeight: "600",
    marginLeft: 15,
    fontFamily: FONTS.FontRegular,
  },
  error: {
    marginBottom: 5,
    color: COLORS.red,
    fontSize: FONTS_SIZE.txt_14,
    marginTop: 2,
  },
  sufix: {
    flexDirection: 'column-reverse',
  },
});
