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
import ItemNotification from '../ItemView/ItemNotification';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotificationView: true,
      isNewsView: false,
      Notification_arr: [
        {
          title: 'Notification Title',
          date: '2021/09/31',
          description: 'Your order has completed',
        },
        {
          title: 'Notification Title',
          date: '2021/09/31',
          description: 'Your order has completed',
        },
        {
          title: 'Notification Title',
          date: '2021/09/31',
          description: 'Your order has completed',
        },
      ],
      News_arr: [
        {
          title: 'News Title',
          date: '2021/09/31',
          description: 'Your order has completed',
        },
        {
          title: 'News Title',
          date: '2021/09/31',
          description: 'Your order has completed',
        },
        {
          title: 'News Title',
          date: '2021/09/31',
          description: 'Your order has completed',
        },
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
          headertitle="Notification"
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
              this.setState({isNewsView: false, isNotificationView: true})
            }
          >
            {this.onTextView('Notification', this.state.isNotificationView)}
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 50,
              width: '50%',
              justifyContent: 'center',
            }}
            onPress={() =>
              this.setState({isNewsView: true, isNotificationView: false})
            }
          >
            {this.onTextView('News', this.state.isNewsView)}
          </TouchableOpacity>
        </View>
        <FlatList
          data={
            this.state.isNotificationView === true
              ? this.state.Notification_arr
              : this.state.News_arr
          }
          contentContainerStyle={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
          }}
          style={{}}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <ItemNotification
                title={item.title}
                date={item.date}
                description={item.description}
              />
            );
          }}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    );
  }
}
