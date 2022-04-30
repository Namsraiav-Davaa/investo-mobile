import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated,
} from 'react-native';
import {COLORS, FONTS, FONTS_SIZE} from './utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      up: require('../assets/up-1.png'),
      down: require('../assets/down-1.png'),
    };

    this.state = {
      title: props.title,
      expanded: true,
      animation: new Animated.Value(120),
      minHeight: 100,
      maxHeight: 120,
    };
  }

  toggle() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded,
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue,
    }).start();
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height,
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height,
    });
  }

  render() {
    let icon = this.icons['down'];

    if (this.state.expanded) {
      icon = this.icons['up'];
    }

    const {LeftIcon, description} = this.props;

    return (
      <Animated.View style={[styles.container, {height: this.state.animation}]}>
        <View
          style={styles.titleContainer}
          onLayout={this._setMinHeight.bind(this)}
        >
          <View>
            <Image
              resizeMode="contain"
              style={styles.buttonImage_emoji}
              source={LeftIcon}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.title}>{this.state.title}</Text>
            <Text style={styles.title1}>{description}</Text>
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1"
          >
            <Image
              resizeMode="contain"
              style={styles.buttonImage}
              source={icon}
            ></Image>
          </TouchableHighlight>
        </View>

        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
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
  },
  title: {
    color: COLORS.white,
    fontFamily: FONTS.FontLight,
    fontSize: FONTS_SIZE.txt_14,
  },
  title1: {
    color: COLORS.Item_text,
    fontFamily: FONTS.FontLight,
    fontSize: FONTS_SIZE.txt_12,
  },
  button: {},
  buttonImage: {
    width: 23,
    height: 23,
    tintColor: COLORS.white,
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

export default Panel;
