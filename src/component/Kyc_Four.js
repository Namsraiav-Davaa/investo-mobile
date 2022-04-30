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
import TextCommonMedium from '../common/TextCommonMedium';

import {
  COLORS,
  FONTS_SIZE,
  FONTS,
  API_FAILURE_CAPTION_EN,
  API_FAILURE_CAPTION_AR,
  BASE_URL,
  API_FAILURE_CAPTION_FR,
} from '../common/utils';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ErrorModelView from '../common/ErrorModel';
import ButtonView from '../common/ButtonView';

import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import Header from '../common/Header';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import Modal from 'react-native-modal';

export default class Kyc_Four extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCameraDialogVisible: false,
      imageFrontSide: null,
      imageBackSide: null,
      imageSelfieSide: null,
      ItemClick: null,
    };
  }

  hasCameraPermission = async () => {
    if (Platform.OS === 'ios') {
      // const hasPermission = await this.hasCameraPermissionIOS();
      // return hasPermission;
      this.toggleModal();
    }

    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]).then(result => {
        if (
          result['android.permission.CAMERA'] &&
          result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
        ) {
        }
      });
      return true;
    }
    return false;
  };

  toggleModal = () => {
    this.setState({isCameraDialogVisible: !this.state.isCameraDialogVisible});
  };

  getImgPermission = async () => {
    const hasLocationPermission = await this.hasCameraPermission();
    if (!hasLocationPermission) {
      return;
    } else {
      this.toggleModal();
    }
  };

  selectPhotoTapped() {
    const options = {
      title: 'Select option',
      maxWidth: 800,
      maxHeight: 800,
      quality: 0.5,
      mediaType: 'photo',
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        if (this.state.ItemClick === '0') {
          this.setState({
            imageFrontSide: source.uri,
            isCameraDialogVisible: false,
            filePath: response,
            fileData: response.base64,
            fileUri: response.uri,
          });
        } else if (this.state.ItemClick === '1') {
          this.setState({
            imageBackSide: source.uri,
            isCameraDialogVisible: false,
            filePath: response,
            fileData: response.base64,
            fileUri: response.uri,
          });
        } else {
          this.setState({
            imageSelfieSide: source.uri,
            isCameraDialogVisible: false,
            filePath: response,
            fileData: response.base64,
            fileUri: response.uri,
          });
        }
      }
    });
  }

  cameraClick() {
    const options = {
      title: 'Select option',
      quality: 0.5,
      maxWidth: 500,
      maxHeight: 500,
      mediaType: 'photo',
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
      },
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        console.log('response.uri ---> ', source);
        if (this.state.ItemClick === '0') {
          this.setState({
            imageFrontSide: source.uri,
            isCameraDialogVisible: false,
            filePath: response,
            fileData: response.base64,
            fileUri: response.uri,
          });
        } else if (this.state.ItemClick === '1') {
          this.setState({
            imageBackSide: source.uri,
            isCameraDialogVisible: false,
            filePath: response,
            fileData: response.base64,
            fileUri: response.uri,
          });
        } else {
          this.setState({
            imageSelfieSide: source.uri,
            isCameraDialogVisible: false,
            filePath: response,
            fileData: response.base64,
            fileUri: response.uri,
          });
        }
      }
    });
  }

  onTextView(text) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text allowFontScaling={false} style={stylesKYC.textStyle}>
          {text}
        </Text>
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
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            this.setState({
              isCameraDialogVisible: true,
              ItemClick: '0',
            })
          }
          style={{
            backgroundColor: COLORS.card_bg,
            height: 90,
            borderRadius: 10,
            marginTop: 10,
            alignItems: 'center',
          }}
        >
          {this.state.imageFrontSide === null ? (
            <View style={{alignItems: 'center'}}>
              {this.onTextView('Front Side')}
              <Image
                style={{marginTop: 5, height: 20, width: 20}}
                resizeMode="contain"
                source={require('../assets/Camera_icon.png')}
              ></Image>
            </View>
          ) : (
            <Image
              style={{
                width: '100%',
                height: 90,
                borderRadius: 10,
              }}
              source={{uri: this.state.imageFrontSide}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.setState({
              isCameraDialogVisible: true,
              ItemClick: '1',
            })
          }
          style={{
            backgroundColor: COLORS.card_bg,
            height: 90,
            marginTop: 20,
            borderRadius: 10,
            alignItems: 'center',
          }}
        >
          {this.state.imageBackSide === null ? (
            <View style={{alignItems: 'center'}}>
              {this.onTextView('Back side')}
              <Image
                style={{marginTop: 5, height: 20, width: 20}}
                resizeMode="contain"
                source={require('../assets/Camera_icon.png')}
              ></Image>
            </View>
          ) : (
            <Image
              style={{
                width: '100%',
                height: 90,
                borderRadius: 10,
              }}
              source={{uri: this.state.imageBackSide}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.setState({
              isCameraDialogVisible: true,
              ItemClick: '2',
            })
          }
          style={{
            backgroundColor: COLORS.card_bg,
            height: 90,
            marginTop: 20,
            borderRadius: 10,
            alignItems: 'center',
          }}
        >
          {this.state.imageSelfieSide === null ? (
            <View style={{alignItems: 'center'}}>
              {this.onTextView('ID Holding Selfie')}
              <View style={{height: 10, width: 10}}>
                <Image
                  style={{marginTop: 5, height: 20, width: 20}}
                  resizeMode="contain"
                  source={require('../assets/Camera_icon.png')}
                ></Image>
              </View>
            </View>
          ) : (
            <Image
              style={{
                width: '100%',
                height: 90,
                borderRadius: 10,
              }}
              source={{uri: this.state.imageSelfieSide}}
            />
          )}
        </TouchableOpacity>
        <Modal
          animationIn={'zoomIn'}
          animationOut={'zoomOut'}
          backdropOpacity={0.9}
          backdropColor={COLORS.black}
          isVisible={this.state.isCameraDialogVisible}
          onBackdropPress={() => this.toggleModal()}
          onSwipeComplete={() => this.toggleModal()}
          swipeDirection="right"
          useNativeDriver={false}
          hideModalContentWhileAnimating={true}
        >
          <View style={styles.modalView}>
            <View style={styles.modalBgView}>
              <Text style={styles.modalTitle_selected}>Select Image</Text>
              <View style={styles.modalDivider} />
              <TouchableOpacity onPress={() => this.cameraClick()}>
                <Text style={styles.modelCamera}>Take photo</Text>
              </TouchableOpacity>
              <View style={styles.modalDivider} />
              <TouchableOpacity onPress={() => this.selectPhotoTapped()}>
                <Text style={styles.modelGallery}>Choose from Library</Text>
              </TouchableOpacity>
              <View
                style={{
                  alignSelf: 'center',
                  width: '90%',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  marginTop: 15,
                }}
              >
                <ButtonView
                  landingSize="full_large"
                  btnName={'Cancel'}
                  onPressSite={() => this.toggleModal()}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const stylesKYC = StyleSheet.create({
  textStyle: {
    fontSize: FONTS_SIZE.txt_14,
    color: COLORS.offwhite,
    fontFamily: FONTS.FontRegular,
    textAlign: 'center',
    writingDirection: 'auto',
    lineHeight: 36,
    marginTop: 10,
    fontWeight: '500',
  },
});

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    // shadowColor: COLORS.COLOR.colorWhite,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.84,
    justifyContent: 'center',
  },

  modalBgView: {
    backgroundColor: COLORS.card_bg,
    borderRadius: 10,
    height: 280,
  },

  modalTitle_selected: {
    fontFamily: FONTS.FontRegular,
    color: COLORS.white,
    fontSize: FONTS_SIZE.txt_14,
    textAlign: 'center',
    padding: wp(6),
  },
  modalTitle: {
    fontFamily: FONTS.FontRegular,
    color: COLORS.white,
    fontSize: FONTS_SIZE.txt_14,
    textAlign: 'center',
    padding: wp(6),
  },

  modelCamera: {
    fontFamily: FONTS.FontRegular,
    color: COLORS.white,
    fontSize: FONTS_SIZE.txt_14,
    textAlign: 'center',
    backgroundColor: COLORS.card_bg,
    padding: wp(5),
  },

  modelGallery: {
    fontFamily: FONTS.FontRegular,
    color: COLORS.white,
    fontSize: FONTS_SIZE.txt_14,
    textAlign: 'center',
    backgroundColor: COLORS.card_bg,
    padding: wp(3),
  },

  modalDivider: {
    width: '90%',
    height: wp(0.3),
    backgroundColor: COLORS.offwhite,
    alignItems: 'center',
    alignSelf: 'center',
  },

  modalCancel: {
    padding: wp(3),
    borderRadius: 10,
    marginTop: wp(5),
    fontSize: FONTS_SIZE.txt_14,
    color: COLORS.white,
    backgroundColor: COLORS.card_bg,
    fontFamily: FONTS.FontSemiBold,
    textAlign: 'center',
  },
});
