import {StyleSheet} from 'react-native';
import {COLORS, FONTS, FONTS_SIZE} from './utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MsgStyles = StyleSheet.create({
  mainViewStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(80, 80, 80, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainViewStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 30,
  },
  mainViewStyle1: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtLangugaeStyle: {
    fontFamily: FONTS.FontRegular,
    fontSize: wp(8),
    textAlign: 'center',
  },
});
export {MsgStyles};
