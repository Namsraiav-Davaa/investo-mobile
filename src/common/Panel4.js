import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Animated} from 'react-native';
import {COLORS, FONTS, FONTS_SIZE} from './utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Panel4 extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      up: require('../assets/right_icon.png'),
    };

    this.state = {
      title: props.title,
      expanded: true,
      animation: new Animated.Value(200),
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

    console.log('finalValue ---> ', finalValue);
    console.log('initialValue ---> ', initialValue);
    this.setState({
      expanded: !this.state.expanded,
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue,
    }).start();
  }

  _setMaxHeight(event) {
    console.log('event ==> ', event.nativeEvent);
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
    let icon = this.icons['up'];

    const {LeftIcon, description} = this.props;

    return (
      <Animated.View style={[styles.container, {height: this.state.animation}]}>
        <View
          style={styles.titleContainer}
          onLayout={this._setMinHeight.bind(this)}>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={styles.title}>{this.state.title}</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={styles.buttonImage}
                source={require('../assets/check_green_icon.png')}
              />
              <Text style={styles.title1}>{description}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
            <Image
              resizeMode="contain"
              style={styles.buttonImage1}
              source={icon}
            />
            {/* <IconFile.SvgIcon name="arrow_forward" size={25} color={COLORS.icon_color} /> */}
          </TouchableOpacity>
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
    fontFamily: FONTS.FontRegular,
    fontSize: FONTS_SIZE.txt_14,
  },
  title1: {
    color: COLORS.white,
    fontFamily: FONTS.FontLight,
    fontSize: FONTS_SIZE.txt_12,
    marginLeft: 5,
  },
  button: {
    // marginRight: 10
  },
  buttonImage: {
    width: 15,
    height: 15,
  },
  buttonImage1: {
    width: 15,
    height: 15,
    marginRight: 15,
  },
  body: {
    padding: 12,
    paddingTop: 0,
  },
});

export default Panel4;
