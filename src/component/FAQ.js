import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
  I18nManager,
  ScrollView,
} from 'react-native';
import Header from '../common/Header';
import TextCommonLight from '../common/TextCommonLight';
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS_SIZE, FONTS} from '../common/utils';

const des =
  ' You can top up your current account at Investo in two ways.If you want to top up your connected bank card, you can recharge by selecting the card, entering the amount to top up and pressing the top up button.If you want to top up your bank account with internet banking or mobile banking, select the interbank transaction ----- enter the bank -------------- account, enter the amount to top up and attach your name and phone number to the transaction value can be recharged by sending.';

export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: true,
      view2: false,
      view3: false,
      view4: false,
    };
  }

  onTextView(title, description, iconvisible, iconPressClick) {
    return (
      <View
        style={{
          borderBottomWidth: 0.5,
          borderColor: COLORS.card_bg,
          paddingBottom: iconvisible === true ? 20 : 5,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          <TextCommonMedium
            text={title}
            color={COLORS.title_text_color}
            fontSize={FONTS_SIZE.txt_16}
            textAlign={'left'}
            fontWeight={'500'}
          />
          <TouchableOpacity
            onPress={iconPressClick}
            activeOpacity={0.9}
            style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {iconvisible === true ? (
              <Image
                style={{width: 15, height: 15, tintColor: COLORS.offwhite}}
                resizeMode="contain"
                source={require('../assets/up_arrow_1.png')}
              />
            ) : (
              <Image
                style={{width: 15, height: 15, tintColor: COLORS.offwhite}}
                resizeMode="contain"
                source={require('../assets/down_arrow_1.png')}
              />
            )}
          </TouchableOpacity>
        </View>
        {iconvisible === true ? (
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
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'left'}
              fontWeight={'400'}
            />
          </View>
        ) : null}
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
          headertitle="FAQ"
        />

        <View
          style={{width: '100%', height: 0.5, backgroundColor: COLORS.card_bg}}
        />

        <ScrollView
          style={{width: '100%', height: '100%'}}
          showsVerticalScrollIndicator={false}
        >
          <View style={{marginLeft: 10, marginRight: 10}}>
            {this.onTextView('what is investo', des, this.state.view, () =>
              this.setState({
                view: true,
                view2: false,
                view3: false,
                view4: false,
              }),
            )}
            {this.onTextView('Investo Products', des, this.state.view2, () =>
              this.setState({
                view: false,
                view2: true,
                view3: false,
                view4: false,
              }),
            )}
            {this.onTextView('How to trade?', des, this.state.view3, () =>
              this.setState({
                view: false,
                view2: false,
                view3: true,
                view4: false,
              }),
            )}
            {this.onTextView(
              'How to open an account?',
              des,
              this.state.view4,
              () =>
                this.setState({
                  view: false,
                  view2: false,
                  view3: false,
                  view4: true,
                }),
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
