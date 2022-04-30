import {RFValue} from 'react-native-responsive-fontsize';
import {Platform} from 'react-native';

export const API_INTERNET_CONNECTION_CAPTION_EN =
  'Sorry, No Internet connectivity detected. Please reconnect and try again';

export const API_FAILURE_CAPTION_EN =
  'Something went wrong, Please try again later';

export const BASE_URL = 'http://dropili.co/link/'; //http://192.168.1.200/NFC/;

export const COLORS = {
  primary: '#1A1C19',
  white: '#FFFFFF',
  black: '#000000',
  lightBlack: '#656565',
  textGrey: '#AAACA6',
  offwhite: '#90918C',
  textColor: '#727272',
  colorgTrans: 'rgba(0,0,0,0.15)',
  red: '#EB4511',
  colorwTrans: 'rgba(255,255,255,0.7)',
  transparent: 'transparent',
  button_bg: '#49CB67',
  card_bg: '#42493F',
  text_gray: '#6D7687',
  otp_bg: '#1F1F1F',
  otp_bg_selected: '#333333',
  sliderView_color: '#2D3A4D',
  faq_des_color: '#E2E3DC',
  deposit_bg: '#3B4B37',
  amount_txt_color: '#8C6861',
  img_border_color: '#026E15',

  Item_text: '#5c7a7c',
  sliderView_color: '#2D3A4D',
  marketIcon_color: '#D6E7CE',
  yellow_bg_color: '#f0b501',
  red_bg_color: '#e43e2b',
  blue_bg_color: '#3b7ded',
  view_text_color: '#9CA5B0',
  borderColor: '#454743',
  text_orange: '#FFB4A9',
  text_light_color: '#747671',
  progress_bg_color: '#7EDB75',
  hr_txt_color: '#767873',
  view_line_color: '#C2C9BC',
  light_red_color: '#ff5449',
  avalibale_text_color: '#5D5F5A',
  round_bg_color: '#1D2124',
  txt_input: '#31363A',
  privacy_txt_color: '#BABCB4',
  trade_pg_icon_color: '#72736f',
  bottom_bg_color: '#31363a',
  arrow_bg_color: '#323232',
  clacel_bg_color: '#930006',
  filled_bg_color: '#005307',
  slider_Color: '#E5E5E5',
  icon_color: '#646560',
  top20_txt_color: '#AFAFAF',
  top20_destxt_color: '#E2E2E2',
  copy_txt_color: '#CECECE',

  title_text_color: '#90918c',
  des_text_color: '#E2E3DC',
};

export const FONTS = {
  FontLight: Platform.OS === 'ios' ? 'IBMPlexSans-Light' : 'IBMPlexSans-Light',
  FontMedium:
    Platform.OS === 'ios' ? 'IBMPlexSans-Medium' : 'IBMPlexSans-Medium',
  FontRegular:
    Platform.OS === 'ios' ? 'IBMPlexSans-Regular' : 'IBMPlexSans-Regular',
  FontSemiBold:
    Platform.OS === 'ios' ? 'IBMPlexSans-SemiBold' : 'IBMPlexSans-SemiBold',
};

// export const FONTS_SIZE = {
//   txt_8: RFValue(8),
//   txt_10: RFValue(10),
//   txt_12: RFValue(12),
//   txt_13: RFValue(13),
//   txt_14: RFValue(14),
//   txt_16: RFValue(16),
//   txt_17: RFValue(17),
//   txt_18: RFValue(18),
//   txt_20: RFValue(20),
//   txt_22: RFValue(22),
//   txt_24: RFValue(24),
//   txt_26: RFValue(26),
//   txt_28: RFValue(28),
//   txt_30: RFValue(30),
// };

export const FONTS_SIZE = {
  txt_8: 8,
  txt_10: 10,
  txt_12: 12,
  txt_13: 13,
  txt_14: 14,
  txt_16: 16,
  txt_17: 17,
  txt_18: 18,
  txt_20: 20,
  txt_22: 22,
  txt_24: 24,
  txt_26: 26,
  txt_28: 28,
  txt_30: 30,
};

export const imgpath = {
  imgpath: './assets/',
};

export const PLATFORM = {
  Platform: Platform.OS === 'ios' ? 'ios' : 'android',
};

const appTheme = {
  COLORS,
  FONTS,
  imgpath,
  FONTS_SIZE,
  PLATFORM,
  API_INTERNET_CONNECTION_CAPTION_EN,
  API_FAILURE_CAPTION_EN,
  BASE_URL,
};

export default appTheme;
