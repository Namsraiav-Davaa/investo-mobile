import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import TextCommonRegular from './TextCommonRegular';
import {COLORS, FONTS_SIZE} from './utils';

export default class DailogView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      loading,
      title,
      rightText,
      des,
      onPressClose,
      CloseClick,
      showModalName,
    } = this.props;

    return (
      <Modal
        animationType="slide"
        visible={loading}
        animated={true}
        onRequestClose={onPressClose}
        transparent={true}
      >
        <View style={ViewStyle.MainView}>
          {showModalName === 'Earnings' ? (
            <View style={ViewStyle.SecondViewStyle1}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <TextCommonRegular
                  text={title}
                  color={COLORS.white}
                  fontSize={FONTS_SIZE.txt_16}
                  numberOfLines={1}
                />
                <TextCommonRegular
                  text={rightText}
                  color={COLORS.offwhite}
                  fontSize={FONTS_SIZE.txt_14}
                  numberOfLines={1}
                  textAlign={'right'}
                />
              </View>

              <ScrollView style={{marginTop: 20}}>
                <TextCommonRegular
                  text={des}
                  color={COLORS.white}
                  fontSize={FONTS_SIZE.txt_14}
                />
              </ScrollView>

              <TextCommonRegular
                text={'Close'}
                color={COLORS.button_bg}
                fontSize={FONTS_SIZE.txt_12}
                numberOfLines={1}
                textAlign={'right'}
                marginTop={15}
                height={25}
                onClickText={CloseClick}
              />
            </View>
          ) : (
            <View style={ViewStyle.SecondViewStyle}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <TextCommonRegular
                  text={title}
                  color={COLORS.white}
                  fontSize={FONTS_SIZE.txt_16}
                  numberOfLines={1}
                />
                <TextCommonRegular
                  text={rightText}
                  color={COLORS.offwhite}
                  fontSize={FONTS_SIZE.txt_14}
                  numberOfLines={1}
                  textAlign={'right'}
                />
              </View>

              <ScrollView style={{marginTop: 20}}>
                <TextCommonRegular
                  text={des}
                  color={COLORS.white}
                  fontSize={FONTS_SIZE.txt_14}
                />
              </ScrollView>

              <TextCommonRegular
                text={'Close'}
                color={COLORS.button_bg}
                fontSize={FONTS_SIZE.txt_12}
                numberOfLines={1}
                textAlign={'right'}
                marginTop={15}
                height={25}
                onClickText={CloseClick}
              />
            </View>
          )}
        </View>
      </Modal>
    );
  }
}

const ViewStyle = StyleSheet.create({
  MainView: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(13, 14, 12, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SecondViewStyle: {
    height: 400,
    width: '85%',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 20,
  },
  SecondViewStyle1: {
    height: 250,
    width: '85%',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 20,
  },
});
