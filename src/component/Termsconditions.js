import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  PermissionsAndroid,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../common/Header';
import ViewShot from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import {COLORS, FONTS_SIZE, FONTS} from '../common/utils';
import TextCommonLight from '../common/TextCommonLight';
import TextCommonRegular from '../common/TextCommonRegular';
import TextCommonMedium from '../common/TextCommonMedium';
import IconFile from '../common/CommonFontIcon';

export default class Termsconditions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkPermission = async () => {
    if (Platform.OS === 'ios') {
      this.captureAndShareScreenshot();
    } else {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]).then(result => {
          if (
            result['android.permission.CAMERA'] &&
            result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
          ) {
            this.captureAndShareScreenshot();
          } else {
            Alert.alert('Error', 'Storage Permission Not Granted');
          }
        });
      } catch (err) {
        // To handle permission related exception
        console.log('++++' + err);
      }
    }
  };
  captureAndShareScreenshot() {
    this.refs.viewShot.capture().then(uri => {
      console.log('uri ---> capture', uri);
      CameraRoll.saveToCameraRoll(uri, 'photo')
        .then(res => {})
        .catch(err => {});
    });
  }

  onTextView(title, description) {
    return (
      <View>
        <View
          style={{
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <TextCommonMedium
            text={title}
            color={COLORS.des_text_color}
            fontSize={FONTS_SIZE.txt_12}
            fontWeight={'500'}
            textAlign={'left'}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            alignContent: 'center',
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <TextCommonRegular
            text={description}
            color={COLORS.des_text_color}
            fontSize={FONTS_SIZE.txt_10}
            fontWeight={'400'}
            textAlign={'left'}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
        }}
      >
        <Header
          onBackClick={() => this.props.navigation.goBack(null)}
          headertitle="Terms of Conditions"
        />
        <View
          style={{width: '100%', height: 0.5, backgroundColor: COLORS.card_bg}}
        />
        <ViewShot
          ref="viewShot"
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: COLORS.transparent,
          }}
          options={{format: 'jpg', quality: 0.9}}
        >
          <ScrollView style={{width: '100%', height: '100%'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
                justifyContent: 'space-between',
                marginRight: 20,
                marginTop: 10,
              }}
            >
              <Image
                style={{
                  width: 100,
                  height: 50,
                  tintColor: COLORS.progress_bg_color,
                }}
                resizeMode="contain"
                source={require('../assets/logo.png')}
              />
              <TouchableOpacity
                onPress={() => this.checkPermission()}
                style={{
                  backgroundColor: COLORS.card_bg,
                  height: 30,
                  //   marginTop: 15,
                  borderRadius: 4,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignContent: 'center',
                  opacity: 0.8,
                }}
              >
                {/* <Image
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.offwhite,
                    marginTop: 6,
                  }}
                  resizeMode="contain"
                  source={require('../assets/file_download_icon.png')}
                /> */}
                <IconFile.SvgIcon
                  name="file_download_icon"
                  size={22}
                  color={COLORS.white}
                />

                <TextCommonMedium
                  text={'Download'}
                  color={COLORS.white}
                  fontSize={FONTS_SIZE.txt_12}
                  textAlign={'left'}
                  fontWeight={'500'}
                  marginTop={-8}
                  marginLeft={3}
                />
              </TouchableOpacity>
            </View>

            {this.onTextView(
              'INVESTO TERMS OF CONDITIONS',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio arcu, sodales nec fringilla vel, aliquet at \n\nlorem. Vivamus blandit lacus vitae sem venenatis venenatis. Sed a urna et augue mattis malesuada finibus id lectus. Quisque sed vulputate urna, aliquet congue \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio arcu, sodales nec fringilla vel, aliquet at lorem. Vivamus blandit lacus vitae sem venenatis venenatis. Sed a urna et augue mattis malesuada finibus id lectus. Quisque sed vulputate urna, aliquet congue Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio arcu, sodales nec fringilla vel, aliquet at \n\nlorem. Vivamus blandit lacus vitae sem venenatis venenatis. Sed a urna et augue mattis malesuada finibus id lectus. Quisque sed vulputate urna, aliquet congue Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio arcu, sodales nec fringilla vel, aliquet at lorem. Vivamus blandit lacus vitae sem venenatis venenatis. Sed a urna et augue mattis malesuada finibus id lectus. Quisque sed vulputate urna, aliquet congue ',
            )}
          </ScrollView>
        </ViewShot>
      </View>
    );
  }
}
