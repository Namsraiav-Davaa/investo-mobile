import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import TextCommonRegular from '../common/TextCommonRegular';
import TextCommonMedium from '../common/TextCommonMedium';
import {COLORS, FONTS_SIZE} from '../common/utils';

export default class Protfolio_Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {item} = this.props;
    return (
      <View style={{}}>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
          <Image
            resizeMode="contain"
            source={item.icon}
            style={{width: 30, height: 30}}
          />
          <View style={{marginLeft: 10, flex: 1}}>
            <TextCommonMedium
              text={item.title}
              color={COLORS.white}
              numberOfLines={1}
              fontSize={FONTS_SIZE.txt_14}
            />
            <TextCommonMedium
              text={item.description}
              color={COLORS.textColor}
              marginTop={5}
              fontSize={FONTS_SIZE.txt_12}
            />
          </View>
          <View>
            <TextCommonMedium
              text={item.currentPrice.toLocaleString()}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'right'}
            />
            <TextCommonMedium
              text={`₮${item.amount.toLocaleString()}`}
              color={COLORS.textColor}
              marginTop={5}
              fontSize={FONTS_SIZE.txt_12}
            />
          </View>
        </View>
      </View>
    );
  }
}
