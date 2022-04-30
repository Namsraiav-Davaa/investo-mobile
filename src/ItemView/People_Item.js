import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import TextCommonRegular from '../common/TextCommonRegular';
import TextCommonMedium from '../common/TextCommonMedium';
import {COLORS, FONTS_SIZE} from '../common/utils';

export default class People_Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title, des, price, up} = this.props;
    return (
      <View
        style={{
          backgroundColor: COLORS.card_bg,
          //   width: 145,
          //   height: 145,
          borderRadius: 10,
          marginLeft: 15,
          justifyContent: 'center',
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              padding: 3,
              backgroundColor: COLORS.yellow_bg_color,
              borderRadius: 30 / 2,
            }}
          >
            <Image
              style={{
                height: 15,
                width: 15,
              }}
              resizeMode="contain"
              source={require('../assets/Setting_icon.png')}
            />
          </View>

          <TextCommonRegular
            text={title}
            color={COLORS.faq_des_color}
            fontSize={FONTS_SIZE.txt_16}
            textAlign={'left'}
            numberOfLines={2}
            marginLeft={10}
          />
          <Image
            style={{
              height: 10,
              width: 10,
              marginLeft: 10,
            }}
            resizeMode="contain"
            source={require('../assets/Polygon_icon.png')}
          />
        </View>
        <TextCommonRegular
          text={des}
          color={COLORS.faq_des_color}
          fontSize={FONTS_SIZE.txt_14}
          textAlign={'left'}
          numberOfLines={1}
        />

        <TextCommonMedium
          text={price}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_18}
          textAlign={'left'}
          marginTop={15}
        />
        <TextCommonRegular
          text={up}
          color={COLORS.button_bg}
          fontSize={FONTS_SIZE.txt_14}
          textAlign={'left'}
        />
      </View>
    );
  }
}
