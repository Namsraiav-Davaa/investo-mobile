import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Header_Two from '../common/Header_Two';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS, FONTS_SIZE} from '../common/utils';
import People_Item from '../ItemView/People_Item';

export default class List_IPO_Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipoArr: [
        {
          name: 'In flight',
        },
        {
          name: 'Launched',
        },
      ],
      selectedIndex: null,
      PeopleArr: [
        {
          name: 'MNDL',
          des: 'Мандал Даатгал',
          price: '68.89₮',
          up: '+25%',
        },
        {
          name: 'MNDL',
          des: 'Мандал Даатгал',
          price: '68.89₮',
          up: '+25%',
        },
        {
          name: 'MNDL',
          des: 'Мандал Даатгал',
          price: '68.89₮',
          up: '+25%',
        },
        {
          name: 'MNDL',
          des: 'Мандал Даатгал',
          price: '68.89₮',
          up: '+25%',
        },
      ],
    };
  }

  UNSAFE_componentWillMount() {
    var newArr = this.state.ipoArr.map((item, index) => {
      item.isSelect = false;

      return item;
    });

    this.setState({
      ipoArr: newArr,
    });
  }

  selectedItem(item, index) {
    this.setState({
      ipoArr: this.state.ipoArr,
      selectedIndex: index,
    });
  }

  renderEmptyComponent() {
    return (
      <View
        style={{
          marginTop: 10,
          justifyContent: 'center',
          width: '90%',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <TextCommonRegular
          text={'No new IPOs available'}
          color={COLORS.faq_des_color}
          fontSize={FONTS_SIZE.txt_18}
          textAlign={'center'}
        />
        <TextCommonRegular
          text={'The list gets updated whenever a new IPO becomes available.'}
          color={COLORS.faq_des_color}
          fontSize={FONTS_SIZE.txt_14}
          textAlign={'center'}
          marginTop={10}
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
        <Header_Two
          onBackClick={() => this.props.navigation.goBack(null)}
          headertitle="MNDL News"
          rightIcon={require('../assets/Round_plus_icon.png')}
        />
        <View>
          <Image
            style={{width: '100%', height: 150}}
            resizeMode="cover"
            source={require('../assets/IPO_bg.png')}
          />

          <View
            style={{flexDirection: 'row', alignItems: 'center', padding: 20}}
          >
            <Image
              source={require('../assets/check_green_icon.png')}
              style={{width: 18, height: 18}}
            />
            <TextCommonRegular
              text={'Mongolian Stock Exchange.'}
              color={COLORS.faq_des_color}
              fontSize={FONTS_SIZE.txt_12}
              textAlign={'left'}
              numberOfLines={1}
              marginLeft={5}
            />

            <TextCommonRegular
              text={'2021.11.23'}
              color={COLORS.faq_des_color}
              fontSize={FONTS_SIZE.txt_12}
              textAlign={'left'}
              numberOfLines={1}
              marginLeft={5}
            />
          </View>

          <TextCommonRegular
            text={
              'Check out the latest IPOs available for you to potentially invest in, follow, and review.'
            }
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'left'}
            width={'80%'}
            marginLeft={20}
          />

          <ScrollView showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}
            >
              {this.state.ipoArr.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => this.selectedItem(item, index)}
                    style={{
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderColor:
                        index === this.state.selectedIndex
                          ? COLORS.button_bg
                          : COLORS.white,
                      borderWidth: 1,
                      backgroundColor:
                        index === this.state.selectedIndex
                          ? 'rgba(42, 59, 40, 0.5)'
                          : COLORS.primary,
                      borderRadius: 30,
                      marginLeft: 15,
                    }}
                  >
                    <TextCommonRegular
                      text={item.name}
                      color={
                        index === this.state.selectedIndex
                          ? COLORS.button_bg
                          : COLORS.white
                      }
                      fontSize={FONTS_SIZE.txt_14}
                      textAlign={'left'}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: COLORS.card_bg,
              marginTop: 15,
            }}
          />

          <FlatList
            data={this.state.PeopleArr}
            contentContainerStyle={{}}
            style={{marginTop: 20}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <People_Item
                  title={item.name}
                  des={item.des}
                  price={item.price}
                  up={item.up}
                />
              );
            }}
            keyExtractor={(_, index) => index.toString()}
            ListEmptyComponent={this.renderEmptyComponent()}
          />
        </View>
      </View>
    );
  }
}
