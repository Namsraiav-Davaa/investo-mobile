import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS, FONTS_SIZE} from '../common/utils';

export default class MNDL_Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {LeftIcon, description, onCheckItemclick, ischeck, title} =
      this.props;

    return (
      <View style={styles.titleContainer}>
        <View>
          <Image
            resizeMode="contain"
            style={styles.buttonImage_emoji}
            source={LeftIcon}
          />
        </View>
        <View style={{flex: 1, marginLeft: 10}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title1}>{description}</Text>
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={onCheckItemclick}
          underlayColor={COLORS.transparent}
        >
          {ischeck === true ? (
            <Image
              resizeMode="contain"
              style={styles.buttonImage}
              source={require('../assets/selected_icon_New.png')}
            ></Image>
          ) : (
            // <Image
            //   resizeMode="contain"
            //   style={styles.buttonImage}
            //   source={require('../assets/unselected_icon.png')}></Image>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: COLORS.progress_bg_color,
                borderRadius: 2,
              }}
            />
          )}
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  title: {
    color: COLORS.white,
    fontFamily: FONTS.FontRegular,
    fontSize: FONTS_SIZE.txt_16,
  },
  title1: {
    color: COLORS.Item_text,
    fontFamily: FONTS.FontRegular,
    fontSize: FONTS_SIZE.txt_14,
  },
  button: {},
  buttonImage: {
    width: 20,
    height: 20,
  },
  buttonImage_emoji: {
    width: 50,
    height: 50,
  },
  body: {
    padding: 12,
    paddingTop: 0,
  },
});
