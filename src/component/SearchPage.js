import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';
import IconFile from '../common/CommonFontIcon';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS, FONTS_SIZE} from '../common/utils';
import Item_Stocks from '../ItemView/Item_Stocks';
import Trending_Item from '../ItemView/Trending_Item';

var number = 1;
export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      tradingList: [
        {
          name: 'TOP 20',
        },
        {
          name: 'IPO',
        },
      ],
      stockArr: [
        {
          name: 'TOL',
          des: 'Toll Brothers',
        },
        {
          name: 'TOST',
          des: 'Tost',
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
    const {navigation} = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.primary,
        }}
      >
        <View
          style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: Platform.OS === 'ios' ? 40 : 35,
            borderRadius: 10,
            flexDirection: 'row',
            marginBottom: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack(null)}
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* <Image
              style={{
                height: 23,
                width: 23,
                marginLeft: 10,
                tintColor: COLORS.marketIcon_color,
              }}
              resizeMode="contain"
              source={require('../assets/back_icon.png')}
            /> */}
            <IconFile.SvgIcon
              name="arrow_back_icon"
              size={25}
              color={COLORS.marketIcon_color}
            />
          </TouchableOpacity>
          <TextInput
            style={{
              height: 50,
              width: '80%',
              color: COLORS.marketIcon_color,
              fontSize: FONTS_SIZE.txt_14,
              fontFamily: FONTS.FontRegular,
              marginLeft: 10,
            }}
            placeholder="Search..."
            placeholderTextColor={COLORS.marketIcon_color}
            onChangeText={value => this.setState({searchText: value})}
            defaultValue={this.state.searchText}
            value={this.state.searchText}
          />
          {this.state.searchText != '' ? (
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  searchText: '',
                })
              }
            >
              {/* <Image
                style={{
                  height: 23,
                  width: 23,
                  marginLeft: 10,
                  tintColor: COLORS.marketIcon_color,
                }}
                resizeMode="contain"
                source={require('../assets/close_icon.png')}
              /> */}
              <IconFile.SvgIcon
                name="close_icon"
                size={23}
                color={COLORS.marketIcon_color}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <View
          style={{width: '100%', height: 3, backgroundColor: COLORS.black}}
        />
        <View>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginLeft: 15,
                marginRight: 15,
              }}
            >
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
          style={{
            width: '100%',
            height: 3,
            backgroundColor: COLORS.black,
            marginTop: 15,
          }}
        />

        <View style={{padding: 20}}>
          <TextCommonRegular
            text={'Stocks'}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'left'}
            numberOfLines={1}
            marginLeft={10}
          />

          {this.state.stockArr.map((item, index) => {
            return (
              <Item_Stocks
                key={index}
                onPress={() => navigation.navigate('StocksDetails')}
                des={item.des}
                title={item.name}
                // onPress={this.props.navigation.navigate('StocksDetails')}
              />
            );
          })}
        </View>
      </View>
    );
  }
}
