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
  Dimensions,
  FlatList,
} from 'react-native';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS_SIZE, FONTS} from '../common/utils';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Header from '../common/Header';
import TextCommonLight from '../common/TextCommonLight';
import Open_order_Item from '../ItemView/Open_order_Item';
import Filed_Item from '../ItemView/Filed_Item';

export default class OrderSeeAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openViewVisible: true,
      FiledViewVisible: false,
      BuyArr: [
        {label: '100', value: '100'},
        {label: '100', value: '100'},
      ],
      FiledArr: [
        {label: '100', value: '100'},
        {label: '100', value: '100'},
      ],
    };
  }

  onTextView(text, showTextView) {
    return showTextView === true ? (
      <View style={{alignItems: 'center'}}>
        <TextCommonRegular
          text={text}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_14}
          textAlign={'center'}
        />
        <View
          style={{
            width: '13%',
            height: 3,
            backgroundColor: COLORS.button_bg,
            marginTop: 10,
          }}
        />
      </View>
    ) : (
      <View>
        <TextCommonLight
          text={text}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_14}
          textAlign={'center'}
        />
        <View
          style={{
            width: '13%',
            height: 3,
            backgroundColor: COLORS.transparent,
            marginTop: 10,
          }}
        />
      </View>
    );
  }

  render() {
    var visibleView = false;
    if (this.props.route.params.visibleView != undefined) {
      visibleView = this.props.route.params.visibleView;
    }

    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
        }}
      >
        <Header
          headerType="auth"
          onBackClick={() => this.props.navigation.goBack(null)}
          headertitle="Orders"
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 35,
            borderBottomWidth: 0.9,
            borderColor: COLORS.card_bg,
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: '50%',
              justifyContent: 'center',
            }}
            onPress={() =>
              this.setState({openViewVisible: true, FiledViewVisible: false})
            }
          >
            {this.onTextView('Open', this.state.openViewVisible)}
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 50,
              width: '50%',
              justifyContent: 'center',
            }}
            onPress={() =>
              this.setState({openViewVisible: false, FiledViewVisible: true})
            }
          >
            {this.onTextView('Filled', this.state.FiledViewVisible)}
          </TouchableOpacity>
        </View>

        <View>
          {this.state.openViewVisible === true
            ? this.state.BuyArr.map((item, index) => {
                return <Open_order_Item BuyVisible={visibleView} />;
              })
            : this.state.FiledArr.map((item, index) => {
                return (
                  <Filed_Item
                    onPressClick={() =>
                      this.props.navigation.navigate('Order_details')
                    }
                  />
                );
              })}
        </View>
      </View>
    );
  }
}
