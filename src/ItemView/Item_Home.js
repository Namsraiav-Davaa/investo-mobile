import React, {Component} from 'react';
import {View} from 'react-native';
import {COLORS, FONTS_SIZE} from '../common/utils';
import TextCommonRegular from '../common/TextCommonRegular';
import TextCommonMedium from '../common/TextCommonMedium';
import {LineChart} from 'react-native-svg-charts';

import Dash from 'react-native-dash';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Item_Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {onItemClick, item} = this.props;

    if (!item) {
      return <View />;
    }

    return (
      <TouchableOpacity onPress={onItemClick}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderColor: COLORS.card_bg,
            paddingTop: 5,
            paddingBottom: 5,
          }}>
          <View style={{flex: 1}}>
            <TextCommonRegular
              text={item.title}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_16}
              textAlign={'left'}
              fontWeight={'700'}
            />
            <TextCommonRegular
              text={item.description}
              color={COLORS.textGrey}
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'left'}
            />
          </View>
          <View style={{flex: 0.3}}>
            <Dash
              style={{width: 65, height: 0.5, position: 'absolute', top: 30}}
              dashColor={COLORS.white}
            />

            <LineChart
              style={{height: 70}}
              data={item.changes}
              svg={{stroke: item.currentChange >= 0 ? COLORS.button_bg : COLORS.red}}
              contentInset={{top: 20, bottom: 20}}>
              {/* <Grid /> */}
            </LineChart>
          </View>
          <View style={{flex: 0.5}}>
            <TextCommonMedium
              text={`${item.currentPrice} ₮`}
              color={item.currentChange >= 0 ? COLORS.button_bg : COLORS.red}
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'right'}
            />
            <TextCommonRegular
              text={`${item.currentChange}%`}
              color={item.currentChange >= 0 ? COLORS.button_bg : COLORS.red}
              fontSize={FONTS_SIZE.txt_12}
              textAlign={'right'}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
