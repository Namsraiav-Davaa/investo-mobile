import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import SignatureScreen from "react-native-signature-canvas";
import { hp, wp } from '../helpers/responsiveMetrics';
import Edit from 'react-native-vector-icons/AntDesign';
import { FONTS, FONTS_SIZE } from '../common/utils';

export default function Kyc_six(props) {

  const ref = useRef(null);

  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = (signature) => {
    console.log(signature);
    // onOK(signature); // Callback from Component props
  };

  // Called after ref.current.readSignature() reads an empty string
  const handleEmpty = () => {
    console.log("Empty");
  };

  // Called after ref.current.clearSignature()
  const handleClear = () => {
    ref.current.clearSignature();
    console.log("clear success!");
  };

  // Called after end of stroke
  const handleEnd = () => {
    ref.current.readSignature();
  };

  // Called after ref.current.getData()
  const handleData = (data) => {
    console.log(data);
  };

const imgWidth = wp(86);
const imgHeight = hp(55);
const style = `.m-signature-pad {box-shadow: none; border: none; } 
              .m-signature-pad--body {border: none;}
              .m-signature-pad--footer {display: none; margin: 0px;}
              body,html {
              width: ${imgWidth}px; height: ${imgHeight}px;}`;

  return (
    <View>
    <View style={styles.container}>
      <SignatureScreen
        ref={ref}
        overlayWidth={imgWidth}
        overlayHeight={imgHeight}
        webStyle={style}
        onOK={handleOK}
      />
    </View>
    <Pressable onPress={handleClear} style={styles.edit}>
        <Edit color={'white'} size={20} name='edit' />
        <Text style={styles.text}>
        Дахин зурах
        </Text>
      </Pressable>
    </View>
  );
}

// const webStyle = `.m-signature-pad {box-shadow: none; border: none; } 
// .m-signature-pad--body {border: none;}
// .m-signature-pad--footer {display: none; margin: 0px;}`;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: wp(86),
    borderRadius: wp(2),
    overflow: 'hidden',
    height: hp(55),
  },
  edit: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: wp(4),
  },
  text: {
    color: 'white',
    marginLeft: wp(2),
    fontFamily: FONTS.FontMedium,
    fontSize: FONTS_SIZE.txt_14,
    textTransform: 'uppercase',
    
  },
  signatureView: {
    borderRadius: widthPercentageToDP(2),
    overflow: 'hidden',
  },
});