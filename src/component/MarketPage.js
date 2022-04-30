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
import HomeHeader from '../common/HomeHeader';
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS, FONTS_SIZE} from '../common/utils';
import Item_Home from '../ItemView/Item_Home';
import Trending_Item from '../ItemView/Trending_Item';

var number = 1;

export default class MarketPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      tradingList: [
        {
          name: 'TOP 20',
        },
        {
          name: 'IPO',
        },
        {
          name: 'MSE A',
        },
        {
          name: 'I LIST',
        },
        {
          name: 'II LIST',
        },
      ],
      items: [
        {
          icon: 'APU',
          title: 'APU',
          description: 'АПУ ХК',
          currentPrice: 1385,
          currentChange: -0.43,
          changes: [1, 2, 3, -1, -2, -0.43],
        },
        {
          icon: 'AARD',
          title: 'AARD',
          description: 'Ард санхүүгийн нэгдэл ХК',
          currentPrice: 5055,
          currentChange: 0.9,
          changes: [1, 2, 3, -1, -2, 0.9],
        },
        {
          icon: 'GOV',
          title: 'Говь ХК',
          description: 'Говь ХК',
          currentPrice: 276.35,
          currentChange: -0.35,
          changes: [1, 2, 3, -1, -2, -0.35],
        },
        {
          icon: 'ERDN',
          title: 'ERDN',
          description: 'Эрдэнэ Ресурс Девелопмент Корпорэйшн ХК',
          currentPrice: 915,
          currentChange: 1.67,
          changes: [1, 2, 3, -1, -2, 1.67],
        },
      ],
    };
  }

  UNSAFE_componentWillMount() {
    var newArr = this.state.tradingList.map((item, index) => {
      item.isSelect = false;

      return item;
    });
    this.setState({
      tradingList: newArr,
    });
  }

  selectedItem(item, index) {
    this.state.tradingList[index].isSelect = !item.isSelect;

    this.setState({
      tradingList: this.state.tradingList,
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.primary,
        }}>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: COLORS.primary,
            marginTop: Platform.OS === 'ios' ? 40 : 35,
            marginLeft: 20,
          }}>
          <TextCommonMedium
            text={'Market'}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_18}
            textAlign={'left'}
            numberOfLines={1}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SearchPage')}
          style={{
            height: 50,
            width: '90%',
            backgroundColor: COLORS.black,
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 5,
            borderRadius: 10,
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <Image
            style={{
              height: 23,
              width: 23,
              marginLeft: 10,
              tintColor: COLORS.marketIcon_color,
            }}
            resizeMode="contain"
            source={require('../assets/search_icon.png')}
          />
          <TextInput
            style={{
              height: 50,
              width: '80%',
              color: COLORS.marketIcon_color,
              fontSize: FONTS_SIZE.txt_14,
              fontFamily: FONTS.FontRegular,
              marginLeft: 10,
            }}
            placeholder="Search......"
            placeholderTextColor={COLORS.marketIcon_color}
            onChangeText={value => this.setState({search: value})}
            defaultValue={this.state.search}
            pointerEvents="none"
            editable={false}
            value={this.state.search}
          />
        </TouchableOpacity>

        <View style={{flex: 1}}>
          <View
            style={{width: '100%', height: 4, backgroundColor: COLORS.black}}
          />
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <TextCommonMedium
              text={'Trending lists'}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_16}
              textAlign={'left'}
              numberOfLines={1}
              fontWeight={'600'}
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {this.state.tradingList.map((item, index) => {
                  var bg_color;

                  switch (number) {
                    case 1:
                      bg_color = COLORS.yellow_bg_color;
                      number++;
                      break;
                    case 2:
                      bg_color = COLORS.red_bg_color;
                      number++;
                      break;
                    case 3:
                      bg_color = COLORS.blue_bg_color;
                      number++;
                      break;
                    case 4:
                      bg_color = COLORS.button_bg;
                      number++;
                      break;
                    case 5:
                      bg_color = COLORS.white;
                      number = 1;
                      break;

                    default:
                      break;
                  }
                  return (
                    <Trending_Item
                      key={index}
                      item={item}
                      bg_color={bg_color}
                      onPress={() => this.selectedItem(item, index)}
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <View
            style={{width: '100%', height: 4, backgroundColor: COLORS.black}}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              <TextCommonMedium
                text={'TOP 20'}
                color={COLORS.white}
                fontSize={FONTS_SIZE.txt_14}
                textAlign={'left'}
                numberOfLines={1}
                fontWeight={'600'}
              />

              <TextCommonRegular
                text={'View all'}
                // onClickText={() =>
                //   this.props.navigation.navigate('Stock_list', {
                //     title: 'TOP 20',
                //   })
                // }
                color={COLORS.view_text_color}
                fontSize={FONTS_SIZE.txt_14}
                textAlign={'left'}
                numberOfLines={1}
              />
            </View>
            <View style={{marginLeft: 20, marginRight: 20}}>
              {this.state.items.map((item, index) => {
                return (
                  <Item_Home
                    key={index}
                    item={item}
                    onItemClick={() =>
                      this.props.navigation.navigate('StocksDetails')
                    }
                  />
                );
              })}
            </View>
            <View
              style={{width: '100%', height: 4, backgroundColor: COLORS.black}}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              <TextCommonMedium
                text={'My List'}
                color={COLORS.white}
                fontSize={FONTS_SIZE.txt_14}
                textAlign={'left'}
                fontWeight={'600'}
                numberOfLines={1}
              />

              <TextCommonRegular
                // onClickText={() =>
                //   this.props.navigation.navigate('Stock_list', {
                //     title: 'My List',
                //   })
                // }
                text={'View all'}
                color={COLORS.view_text_color}
                fontSize={FONTS_SIZE.txt_14}
                textAlign={'left'}
                numberOfLines={1}
              />
            </View>
            <View style={{marginLeft: 20, marginRight: 20}}>
              {this.state.items.map((item, index) => {
                return (
                  <Item_Home
                    key={index}
                    item={item}
                    onItemClick={() =>
                      this.props.navigation.navigate('StocksDetails')
                    }
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
