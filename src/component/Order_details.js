import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {COLORS, FONTS_SIZE, FONTS} from '../common/utils';
import Header from '../common/Header';
import TextCommonRegular from '../common/TextCommonRegular';
import TextCommonMedium from '../common/TextCommonMedium';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Order_details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onTextView(lable, value, rightText) {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 5,
        }}
      >
        <TextCommonRegular
          text={lable}
          color={COLORS.offwhite}
          numberOfLines={1}
          fontSize={FONTS_SIZE.txt_12}
        />

        <Text
          style={{
            color: COLORS.white,
            fontSize: FONTS_SIZE.txt_12,
            fontFamily: FONTS.FontLight,
          }}
        >
          {value}
          <Text
            style={{
              color: COLORS.hr_txt_color,
              fontSize: FONTS_SIZE.txt_12,
              fontFamily: FONTS.FontLight,
            }}
          >
            {rightText}
          </Text>{' '}
        </Text>
      </View>
    );
  }
  onTextView_green(lable, value) {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 5,
        }}
      >
        <TextCommonRegular
          text={lable}
          color={COLORS.textColor}
          numberOfLines={1}
          fontSize={FONTS_SIZE.txt_12}
        />
        <TextCommonRegular
          text={value}
          color={COLORS.button_bg}
          numberOfLines={1}
          marginRight={2}
          fontSize={FONTS_SIZE.txt_12}
        />
      </View>
    );
  }

  render() {
    const radomNumber = Math.floor(Math.random() * 2) + 1;
    const {navigation} = this.props;
    return (
      <View
        style={{
          backgroundColor: COLORS.primary,
          width: '100%',
          height: '100%',
        }}
      >
        <Header
          headerType="auth"
          onBackClick={() => navigation.goBack(null)}
          headertitle="Order detail"
        />

        <View
          style={{
            backgroundColor: COLORS.black,
            height: 3,
            marginTop: 10,
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <View style={{marginLeft: 20, marginTop: 10}}>
              <TextCommonMedium
                text={'MNDL/MNT'}
                color={COLORS.white}
                numberOfLines={1}
                fontSize={FONTS_SIZE.txt_20}
              />
              <TextCommonMedium
                text={'₮282,900.00'}
                color={COLORS.white}
                numberOfLines={1}
                fontSize={FONTS_SIZE.txt_24}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginLeft: 20,
                marginBottom: 10,
                alignItems: 'center',
              }}
            >
              {radomNumber === 1 ? (
                <Image
                  resizeMode="contain"
                  style={{width: 18, height: 18}}
                  source={require('../assets/check_green_icon.png')}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  style={{width: 18, height: 18}}
                  source={require('../assets/Vector_red_icon.png')}
                />
              )}
              <View style={{marginLeft: 5}} />
              <TextCommonMedium
                text={radomNumber === 1 ? 'Filled' : 'Cancelled'}
                color={
                  radomNumber === 1 ? COLORS.button_bg : COLORS.text_orange
                }
                numberOfLines={1}
                fontSize={FONTS_SIZE.txt_14}
              />
              <View style={{marginLeft: 5}} />
              <TextCommonMedium
                text={'(100%)'}
                color={
                  radomNumber === 1 ? COLORS.button_bg : COLORS.text_orange
                }
                numberOfLines={1}
                fontSize={FONTS_SIZE.txt_14}
              />
            </View>

            <View
              style={{
                backgroundColor: COLORS.black,
                height: 3,
              }}
            />

            <View style={{padding: 15}}>
              {this.onTextView('Order No.', '6478931264874')}
              {this.onTextView_green('Type.', 'Limit/Buy')}

              {this.onTextView('Filled/Amount.', '123', '/123')}
              {this.onTextView('Avg./Price', '2300', '/2300')}
              {this.onTextView('Conditions.', '--')}

              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderColor: COLORS.card_bg,
                  marginTop: 10,
                  marginBottom: 5,
                }}
              />

              {this.onTextView('Fee', '282 MNT')}
              {this.onTextView_green('Total.', 'Limit/Buy')}

              {this.onTextView('Create time', '2022 - 02 - 10 09:40:23')}
              {this.onTextView('Update time', '2022 - 02 - 10 09:41:00')}
            </View>

            <View
              style={{
                backgroundColor: COLORS.black,
                height: 3,
              }}
            />
            <View
              style={{
                padding: 15,
              }}
            >
              <TextCommonRegular
                text={'Trade Details'}
                color={COLORS.white}
                textAlign={'left'}
                numberOfLines={1}
                fontSize={FONTS_SIZE.txt_14}
              />

              {this.onTextView('Date', '2022 - 02 - 10 09:41:00')}
              {this.onTextView('Price', '282,900')}
              {this.onTextView('Amount', '120')}
              {this.onTextView('Fee', '282 MNT')}
              {this.onTextView('Role', 'Maker')}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
