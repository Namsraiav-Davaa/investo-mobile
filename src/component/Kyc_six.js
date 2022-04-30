import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS_SIZE, FONTS, BASE_URL} from '../common/utils';

import TextCommonRegular from '../common/TextCommonRegular';
import RNSketchCanvas from './signature_file/';

export default class Kyc_six extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conformsingature: '',
      touchEnabled: true,
      signaturestart: 0,
    };
  }

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        <View style={{}}>
          <RNSketchCanvas
            containerStyle={{
              backgroundColor: COLORS.card_bg,
              borderRadius: 15,
              height: '90%',
            }}
            canvasStyle={{
              backgroundColor: 'transparent',
              width: '95%',
              height: '95%',
              alignSelf: 'center',
              borderRadius: 15,
              // borderWidth: 1,
              // borderColor: "green"
            }}
            onStrokeStart={value => this.setState({signaturestart: value})}
            defaultStrokeIndex={0}
            touchEnabled={this.state.touchEnabled}
            defaultStrokeWidth={5}
            // clearComponent={
            //   <View
            //     style={{
            //       height: 50,
            //       //   position: 'absolute',
            //       //   bottom: -90,
            //       width: '100%',
            //       backgroundColor: 'red',
            //     }}>
            //     <TextCommonRegular
            //       text={'SIGN AGAIN'}
            //       color={COLORS.white}
            //       numberOfLines={1}
            //       onClickText={() => {
            //         this.setState({
            //           touchEnabled: true,
            //           signaturestart: 0,
            //           conformsingature: '',
            //         });
            //       }}
            //       fontSize={FONTS_SIZE.txt_16}
            //       // marginTop={10}
            //       textAlign={'center'}
            //       height={60}
            //     />
            //   </View>
            // }
            clearComponent={
              <View
                style={{
                  height: 50,
                  position: 'absolute',
                  bottom: -90,
                  width: '100%',
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: FONTS_SIZE.txt_14,
                    fontFamily: FONTS.FontMedium,
                    textAlign: 'center',
                  }}
                >
                  SIGN AGAIN
                </Text>
              </View>
            }
            onClearPressed={() =>
              this.setState({
                touchEnabled: true,
                signaturestart: 0,
                conformsingature: '',
              })
            }
            // localSourceImage={srcImage}
            // saveComponent={this.state.signaturestart === 0 ? null : this.state.conformsingature === '' ? <View style={{
            //     marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 120,
            //     backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
            // }}><Text style={{ color: 'white' }}>{"this.state.CONFIRM_SIGNATURE_LBL"}</Text></View> :
            //     null}
            savePreference={() => {
              return {
                folder: 'RNSketchCanvas',
                filename: String(Math.ceil(Math.random() * 100000000)),
                transparent: false,
                imageType: 'png',
              };
            }}
            onSketchSaved={(success, path) => {
              this.setState({
                signatureobj: {
                  name: 'savesignature',
                  type: 'image/jpeg',
                  uri: `file://${path}`,
                },
                conformsingature: 'click',
                touchEnabled: false,
              });
              // Alert.alert(success ? 'Image saved!' : 'Failed to save image!', path)
            }}
            onPathsChange={pathsCount => {
              console.log('pathsCount', pathsCount);
            }}
          />
        </View>
      </View>
    );
  }
}
const Kycstyle = StyleSheet.create({
  textStyle: {
    fontSize: FONTS_SIZE.txt_14,
    color: COLORS.textColor,
    fontFamily: FONTS.FontRegular,
    textAlign: 'center',
    writingDirection: 'auto',
    lineHeight: 36,
  },
  textStyle_grren: {
    color: COLORS.button_bg,
    fontSize: FONTS_SIZE.txt_16,
    fontFamily: FONTS.FontRegular,
    padding: 5,
    textAlign: 'center',
  },
});
