import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../common/Header';
import HomeHeader from '../common/HomeHeader';
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS, FONTS_SIZE} from '../common/utils';
import Item_Home from '../ItemView/Item_Home';
import Trending_Item from '../ItemView/Trending_Item';

var number = 1;

export default class Stock_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          icon: 'APU',
          title: 'АПУ ХК',
          description: '',
          currentPrice: 1385,
          currentChange: -0.43,
          changes: [1, 2, 3, -1, -2, -0.43],
        },
        {
          icon: 'AARD',
          title: 'Ард санхүүгийн нэгдэл ХК',
          description: '',
          currentPrice: 5055,
          currentChange: 0.9,
          changes: [1, 2, 3, -1, -2, 0.9],
        },
      ],
    };
  }

  render() {
    const {title} = this.props.route.params;
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: COLORS.primary}}>
        <Header
          headerType="auth"
          onBackClick={() => navigation.goBack(null)}
          headertitle={title}
        />
        <ScrollView>
          <View style={{marginLeft: 20, marginRight: 20}}>
            {this.state.items.map((item, index) => {
              return (
                <Item_Home
                  key={index}
                  item={{title: 'test', change: 0.1, currentPrice: 1}}
                  onItemClick={() =>
                    this.props.navigation.navigate('StocksDetails')
                  }
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
