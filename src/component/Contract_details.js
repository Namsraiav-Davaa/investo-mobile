import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import Header from '../common/Header';
import {COLORS, FONTS_SIZE} from '../common/utils';
import ViewShot from 'react-native-view-shot';
import TextCommonRegular from '../common/TextCommonRegular';
import CameraRoll from '@react-native-community/cameraroll';
import {WebView} from 'react-native-webview';
import IconFile from '../common/CommonFontIcon';
import TextCommonMedium from '../common/TextCommonMedium';

var imgeurl =
  'https://s3-alpha-sig.figma.com/img/acb9/ea17/2e5fb23c8d625264b299498429f13043?Expires=1646611200&Signature=ahx3odTH266ex9VThqKAWOjp~0C532j2nDeBnd3U4MbUc7~tRfGF97cHFC1~DJTK2QE8TJ6MZVLZ6FfBiwKZPj-yRxYE4eqPlGaAaZ~qqfMA5B6DIgHktlCMq2FpTjn5uyIT84xXk8UyG4CwckBhSKup9fPJYZHNXGmZP89Zz0vYGx7snD-Aos8BQ8~4kB0kS5tWlrdWN6tOat4Va6vzl89WUsV2dDA9ki~5EhdGVp3Bc5PcU-NWsHfW35ZlRUsci-DG3GvVtSTVQMTBdbqChU5kGbZpgZ4~8twZb1fZNNEJyv6pdA9Kfg6nMT6pol2c~1JBnesKVNRVk3Z4QktVuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

export default class Contract_details extends Component {
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

  onTextView(ref, title, imgUrl, onPress) {
    return (
      <ViewShot
        ref={ref}
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 20,
          backgroundColor: COLORS.transparent,
        }}
        options={{format: 'jpg', quality: 0.9}}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{flex: 0.9}}>
            <TextCommonMedium
              text={title}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_12}
              textAlign={'left'}
              fontWeight={'500'}
              numberOfLines={2}
            />
          </View>

          <TouchableOpacity
            onPress={onPress}
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

        <Image
          source={{uri: imgUrl}}
          resizeMode="contain"
          style={{width: '100%', height: 450, marginTop: 20}}
        />
      </ViewShot>
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
          headertitle="Contract"
        />
        <View
          style={{width: '100%', height: 0.5, backgroundColor: COLORS.card_bg}}
        />
        <ScrollView style={{width: '100%', height: '100%'}}>
          <View style={{marginLeft: 20, marginRight: 20}}>
            {this.onTextView(
              'viewShot',
              'Citizen - Central Deposit Account\nOpening Agreement ',
              imgeurl,
              () => alert("hello ma'am"),
            )}
            {this.onTextView(
              'viewShot1',
              'Cash transaction agreement',
              imgeurl,
              () => alert("hello ma'am"),
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
