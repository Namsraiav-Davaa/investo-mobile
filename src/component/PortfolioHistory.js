import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import DailogView from '../common/DailogView';
import Header_Two from '../common/Header_Two';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS, FONTS_SIZE} from '../common/utils';
import Item_Home from '../ItemView/Item_Home';
import BottomSheet from 'reanimated-bottom-sheet';
import ButtonView from '../common/ButtonView';
import TextCommonLight from '../common/TextCommonLight';
import History_Item from '../ItemView/History_Item';

export default class PortfolioHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuArr: [
        {title: 'Buy'},
        {title: 'Sell'},
        {title: 'Deposit'},
        {title: 'Withdrawal'},
      ],
      selectedItem: 0,
      FiledArr: [
        {label: '100', value: '100'},
        {label: '100', value: '100'},
        {label: '100', value: '100'},
      ],
    };
  }

  onTextView(text, selectedValue, index, onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', marginLeft: 20, padding: 5}}
      >
        {selectedValue === index ? (
          <View style={{alignItems: 'center'}}>
            <TextCommonRegular
              text={text}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_16}
              textAlign={'center'}
            />
            <View
              style={{
                width: 30,
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
              color={COLORS.offwhite}
              fontSize={FONTS_SIZE.txt_16}
              textAlign={'center'}
            />
            <View
              style={{
                width: 30,
                height: 3,
                backgroundColor: COLORS.transparent,
                marginTop: 10,
              }}
            />
          </View>
        )}
      </TouchableOpacity>
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
        <Header_Two
          onBackClick={() => this.props.navigation.goBack(null)}
          headertitle="History"
          rightIcon={require('../assets/calendar_icon.png')}
          filtericon={require('../assets/filter_alt_icon.png')}
          onfilterClick={() => {}}
        />
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: COLORS.card_bg,
          }}
        >
          <FlatList
            data={this.state.menuArr}
            contentContainerStyle={{}}
            style={{}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View style={{flexDirection: 'row'}}>
                  {this.onTextView(
                    item.title,
                    this.state.selectedItem,
                    index,
                    () =>
                      this.setState({
                        selectedItem: index,
                      }),
                  )}
                </View>
              );
            }}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
        <View>
          {this.state.FiledArr.map((item, index) => {
            return <History_Item index={index} key={index} />;
          })}
        </View>
      </View>
    );
  }
}
