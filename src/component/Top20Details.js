import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import DailogView from '../common/DailogView';
import Header_Two from '../common/Header_Two';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS, FONTS_SIZE} from '../common/utils';
import Item_Home from '../ItemView/Item_Home';
import BottomSheet from 'reanimated-bottom-sheet';
import ButtonView from '../common/ButtonView';

export default class Top20Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalView: false,
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
      ],
      isBottomSheetvisible: false,
      shortBy_arr: [
        {
          title: 'Alphabetically',
        },
        {
          title: 'Price',
        },
        {
          title: '% Change',
        },
      ],
      selectedShortByIndex: null,
    };
  }

  render() {
    const renderContent = () => (
      <View
        style={{
          backgroundColor: COLORS.otp_bg,
          padding: 16,
          // justifyContent: 'center',
          // alignItems: 'center',
          height: 330,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextCommonRegular
            text={'Sort by'}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_18}
            textAlign={'center'}
            numberOfLines={1}
          />
        </View>

        {this.state.shortBy_arr.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  selectedShortByIndex: index,
                })
              }
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 15,
                paddingBottom: 15,
                borderBottomWidth: 0.5,
                borderColor: COLORS.card_bg,
              }}>
              <View style={{flex: 1, marginLeft: 10}}>
                <View>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontFamily: FONTS.FontRegular,
                      fontSize: FONTS_SIZE.txt_16,
                    }}>
                    {item.title}
                  </Text>
                </View>
              </View>
              <View>
                {this.state.selectedShortByIndex === index ? (
                  index === 1 ? (
                    <Image
                      resizeMode="contain"
                      style={{width: 15, height: 15, marginRight: 15}}
                      source={require('../assets/stock_down_icon.png')}
                    />
                  ) : (
                    <Image
                      resizeMode="contain"
                      style={{width: 15, height: 15, marginRight: 15}}
                      source={require('../assets/stock_up_icon.png')}
                    />
                  )
                ) : null}
              </View>
            </TouchableOpacity>
          );
        })}

        <View style={{marginTop: 20}} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ButtonView
            landingSize="full"
            btnName={'DONE'}
            onPressSite={() => this.setState({isBottomSheetvisible: false})}
          />
        </View>
      </View>
    );

    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
        }}>
        <Header_Two
          onBackClick={() => this.props.navigation.goBack(null)}
          headertitle="MNDL News"
          rightIcon={require('../assets/Round_plus_icon.png')}
        />
        <View>
          <Image
            style={{width: '100%', height: 150}}
            resizeMode="cover"
            source={require('../assets/Top_20_bg.png')}
          />

          <View
            style={{flexDirection: 'row', alignItems: 'center', padding: 20}}>
            <Image
              source={require('../assets/check_green_icon.png')}
              style={{width: 18, height: 18}}
            />
            <TextCommonRegular
              text={'Mongolian Stock Exchange.'}
              color={COLORS.top20_txt_color}
              fontSize={FONTS_SIZE.txt_12}
              textAlign={'left'}
              numberOfLines={1}
              marginLeft={5}
            />

            <TextCommonRegular
              text={'2021.11.23'}
              color={COLORS.top20_txt_color}
              fontSize={FONTS_SIZE.txt_12}
              textAlign={'left'}
              numberOfLines={1}
              marginLeft={5}
            />
          </View>

          <TextCommonRegular
            text={
              'МХБ-ийн “Үнэт цаасны үнийн индекс тооцоолох журам”-ын дагуу бүртгэлтэй компаниудыг зах зээлийн үнэлгээ, арилжааны өдрийн...'
            }
            color={COLORS.des_text_color}
            fontSize={FONTS_SIZE.txt_13}
            textAlign={'left'}
            width={'85%'}
            marginLeft={20}
          />

          <TextCommonRegular
            text={'More'}
            color={COLORS.button_bg}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'left'}
            marginLeft={20}
            marginTop={10}
            onClickText={() =>
              this.setState({
                ModalView: true,
                description:
                  'МХБ-ийн “Үнэт цаасны үнийн индекс тооцоолох журам”-ын дагуу бүртгэлтэй компаниудыг зах зээлийн үнэлгээ, арилжааны өдрийн...',
                showModalName: 'Earnings',
              })
            }
          />

          <View
            style={{
              width: '100%',
              height: 3,
              backgroundColor: COLORS.black,
              marginTop: 15,
            }}
          />
          <View style={{padding: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 15,
              }}>
              <View style={{flex: 2}}>
                <TextCommonRegular
                  text={'In This List'}
                  color={COLORS.white}
                  fontSize={FONTS_SIZE.txt_16}
                  textAlign={'left'}
                  numberOfLines={2}
                />
                <TextCommonRegular
                  text={'20 item'}
                  color={COLORS.offwhite}
                  fontSize={FONTS_SIZE.txt_14}
                  textAlign={'left'}
                  numberOfLines={2}
                />
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    isBottomSheetvisible: true,
                  })
                }
                style={{flex: 0.1}}>
                <Image
                  style={{
                    height: 22,
                    width: 22,
                    justifyContent: 'flex-end',
                  }}
                  resizeMode="contain"
                  source={require('../assets/filter_icon.png')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderTopWidth: 0.5,
                borderColor: COLORS.card_bg,
                marginTop: 13,
              }}
            />
            <View style={{marginLeft: 10, marginRight: 10}}>
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
          </View>
        </View>

        {this.state.isBottomSheetvisible === true ? (
          <BottomSheet
            ref={ref => (this.sheetRef1 = ref)}
            snapPoints={[330, 330, 330]}
            borderRadius={0}
            renderContent={renderContent}
            onCloseEnd={() => this.setState({isBottomSheetvisible: false})}
          />
        ) : null}

        <DailogView
          loading={this.state.ModalView}
          title={this.state.title}
          rightText={this.state.rightText}
          des={this.state.description}
          showModalName={this.state.showModalName}
          CloseClick={() => this.setState({ModalView: false})}
          // onPressClose={() => {
          //   seterrorModel(!errorModel)
          // }}
        />
      </View>
    );
  }
}
