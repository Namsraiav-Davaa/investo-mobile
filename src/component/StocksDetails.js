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
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS, FONTS_SIZE} from '../common/utils';
import {AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import ButtonView from '../common/ButtonView';
import ButtonView_red from '../common/ButtonView_red';
import ButtonView_red_1 from '../common/ButtonView_red_1';
import DailogView from '../common/DailogView';

import PercentageBar from '../common/PercentageBar';
import BullShall_Item from '../ItemView/BullShall_Item';
import Trending_Item from '../ItemView/Trending_Item';
import People_Item from '../ItemView/People_Item';
import News_Item from '../ItemView/News_Item';
import MNDL_Item from '../ItemView/MNDL_Item';
import BottomSheet from 'reanimated-bottom-sheet';
import IconFile from '../common/CommonFontIcon';
import ButtonView_1 from '../common/ButtonView_1';

var number = 1;
export default class StocksDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daysArr: [
        {
          date: '1d',
        },
        {
          date: '7d',
        },
        {
          date: '1M',
        },
        {
          date: '3M',
        },
        {
          date: '1Y',
        },
        {
          date: '6Y',
        },
      ],
      bullShallArr: [
        {
          title: 'Bulls Say',
          rightText: 'Investo',
          des: 'Монголын хөрөнгийн биржийн 1-р ангилалд бүртгэлтэй "Мандал Даатгал" ХК-ийн 2021 оны эхний хагас жилийн санхүү, үйл ажиллагааны тайланг Санхүү хариуцсан захирал Г.Халиунаа олон нийтэд цахимаар танилцууллаа.Тайлант хугацаанд...',
        },
        {
          title: 'Bulls Say',
          rightText: 'Investo',
          des: 'Монголын хөрөнгийн биржийн 1-р ангилалд бүртгэлтэй "Мандал Даатгал" ХК-ийн 2021 оны эхний хагас жилийн санхүү, үйл ажиллагааны тайланг Санхүү хариуцсан захирал Г.Халиунаа олон нийтэд цахимаар танилцууллаа.Тайлант хугацаанд...',
        },
      ],
      selectedIndex: 0,
      numberOfLines: 5,
      selectedIndexItem: null,
      RealetedList: [
        {
          name: 'TOP 20',
        },
        {
          name: 'IPO',
        },
      ],
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
      NewsArr: [
        {
          name: 'ikon.mn',
          time: '6h',
          des: 'Мандал хөрөнгө оруулалтын сангийн арилжаа эхэллээ.',
          imge: null,
          up: 'MNDL +0.25%',
          down: 'ARD -0.08%',
        },
        {
          name: 'ikon.mn',
          time: '6h',
          des: 'Мандал хөрөнгө оруулалтын сангийн арилжаа эхэллээ.',
          imge: 'https://s3-alpha-sig.figma.com/img/139f/4395/b7f190f93f22b4891c818b1b448c2362?Expires=1646611200&Signature=bhbtmgSNQiZzwt6GBZQoeRTYRq7gUs4g3OW5cHG2MyJKvo0b4nJ7Pm2ndNyk-tnZA8FQuMUHI-gluzUN3R~x9us1zIjH31xn9i6XKuCxgiUsOFHK9JTjtruDkQaOxc0MQIOzA43boaXGC3naL-jN1df1D5C7W~-4iL4jdG42MUGbP78saNcJwn~y8d04EoZN8XEp51rnKT7E4zWIr0TpPmA2P2760Y8rra5Qtd0ReykN5No4ZetLRzah1I13sPaGLm-jGHVY8dlCThxGMXut1cPYg2atY2zL~YyfqGWRrBa00nw9mu3RBG9k4JjHOZ6MlJJEH8dz3uXi2iicyXjw5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          up: 'MNDL +0.25%',
          down: 'ARD -0.08%',
        },
        {
          name: 'ikon.mn',
          time: '6h',
          des: 'Мандал хөрөнгө оруулалтын сангийн арилжаа эхэллээ.',
          imge: 'https://s3-alpha-sig.figma.com/img/139f/4395/b7f190f93f22b4891c818b1b448c2362?Expires=1646611200&Signature=bhbtmgSNQiZzwt6GBZQoeRTYRq7gUs4g3OW5cHG2MyJKvo0b4nJ7Pm2ndNyk-tnZA8FQuMUHI-gluzUN3R~x9us1zIjH31xn9i6XKuCxgiUsOFHK9JTjtruDkQaOxc0MQIOzA43boaXGC3naL-jN1df1D5C7W~-4iL4jdG42MUGbP78saNcJwn~y8d04EoZN8XEp51rnKT7E4zWIr0TpPmA2P2760Y8rra5Qtd0ReykN5No4ZetLRzah1I13sPaGLm-jGHVY8dlCThxGMXut1cPYg2atY2zL~YyfqGWRrBa00nw9mu3RBG9k4JjHOZ6MlJJEH8dz3uXi2iicyXjw5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',

          up: 'MNDL +0.25%',
          down: 'ARD -0.08%',
        },
        {
          name: 'ikon.mn',
          time: '6h',
          des: 'Мандал хөрөнгө оруулалтын сангийн арилжаа эхэллээ.',
          imge: null,
          up: 'MNDL +0.25%',
          down: 'ARD -0.08%',
        },
      ],
      showMoreText: false,
      ModalView: false,
      showModalName: '',
      MyStocksbottomView: false,
      MNDLArr: [
        {
          title: 'My Stocks',
        },
        {
          title: 'My Stocks',
        },
        {
          title: 'My Stocks',
        },
        {
          title: 'Stocks',
        },
      ],
    };
  }

  UNSAFE_componentWillMount() {
    var newArr = this.state.RealetedList.map((item, index) => {
      item.isSelect = false;

      return item;
    });
    var newMNDLArr = this.state.MNDLArr.map((item, index) => {
      item.isSelect = false;

      return item;
    });

    this.setState({
      RealetedList: newArr,
      MNDLArr: newMNDLArr,
    });
  }

  selectedItem(item, index) {
    this.state.RealetedList[index].isSelect = !item.isSelect;

    this.setState({
      RealetedList: this.state.RealetedList,
    });
    if (index === 1) {
      this.props.navigation.navigate('List_IPO_Active');
    } else {
      this.props.navigation.navigate('Top20Details');
    }
  }

  onTextView(Title, value, title2, value2) {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <View style={{flex: 0.6}}>
          <TextCommonRegular
            text={Title}
            color={COLORS.text_light_color}
            fontSize={FONTS_SIZE.txt_12}
            textAlign={'left'}
            numberOfLines={1}
          />
          <TextCommonRegular
            text={value}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'left'}
            numberOfLines={1}
          />
        </View>
        <View style={{flex: 0.5}}>
          <TextCommonRegular
            text={title2}
            color={COLORS.text_light_color}
            fontSize={FONTS_SIZE.txt_12}
            textAlign={'left'}
            numberOfLines={1}
          />
          <TextCommonRegular
            key="4"
            text={value2}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'left'}
            numberOfLines={1}
          />
        </View>
      </View>
    );
  }

  onAboutTextView(Title, value) {
    return (
      <View style={{marginTop: 15}}>
        <TextCommonRegular
          text={Title}
          color={COLORS.text_light_color}
          fontSize={FONTS_SIZE.txt_14}
          textAlign={'left'}
          numberOfLines={1}
        />
        <TextCommonRegular
          text={value}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_16}
          textAlign={'left'}
          numberOfLines={1}
        />
      </View>
    );
  }

  selectedMNDLItem(item, index) {
    this.state.MNDLArr[index].isSelect = !item.isSelect;

    this.setState({
      MNDLArr: this.state.MNDLArr,
    });
  }

  render() {
    const data = [5, 20, 40, 10, 50];
    const data1 = [
      50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80,
    ];

    const renderContent = () => (
      <View
        style={{
          backgroundColor: COLORS.otp_bg,
          padding: 16,
          // justifyContent: 'center',
          // alignItems: 'center',
          height: 500,
        }}
      >
        <TextCommonMedium
          text={'Add MNDL to List'}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_24}
          textAlign={'left'}
          numberOfLines={1}
          fontWeight={'700'}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <View>
            <Image
              resizeMode="contain"
              style={{width: 50, height: 50}}
              source={require('../assets/plus_icon.png')}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  isBottomSheetvisible: true,
                })
              }
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: FONTS.FontRegular,
                  fontSize: FONTS_SIZE.txt_14,
                }}
              >
                {'Create New List'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          {this.state.MNDLArr.map((item, index) => {
            return (
              <MNDL_Item
                key={index}
                title={item.title}
                LeftIcon={require('../assets/Money_icon.png')}
                description={'7 Item'}
                ischeck={item.isSelect}
                onCheckItemclick={() => this.selectedMNDLItem(item, index)}
              />
            );
          })}
        </ScrollView>

        <View style={{marginTop: 20}} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ButtonView
            landingSize="full"
            btnName={'SAVE'}
            onPressSite={() => this.setState({MyStocksbottomView: false})}
          />
        </View>
      </View>
    );

    const radomNumber = Math.floor(Math.random() * 3) + 1;

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
          headertitle="MNDL"
          rightIcon={
            radomNumber === 1
              ? require('../assets/sub_round_icon.png')
              : radomNumber === 2
              ? require('../assets/round_right_icon.png')
              : require('../assets/round_plus_icon_gray.png')
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

        <ScrollView>
          <View>
            <View style={{paddingLeft: 20, paddingRight: 20}}>
              <TextCommonMedium
                text={'Mandal Insurance'}
                color={COLORS.white}
                fontSize={FONTS_SIZE.txt_22}
                textAlign={'left'}
                numberOfLines={1}
              />
              <TextCommonMedium
                text={'₮194.15'}
                color={COLORS.white}
                fontSize={FONTS_SIZE.txt_22}
                textAlign={'left'}
                numberOfLines={1}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}
              >
                {/* <Image
                  style={{
                    height: 15,
                    width: 15,
                  }}
                  resizeMode="contain"
                  source={require('../assets/Polygon_icon.png')}
                /> */}
                <IconFile.SvgIcon
                  name="Polygon_icon"
                  color={COLORS.progress_bg_color}
                  size={13}
                />
                <TextCommonRegular
                  text={'₮0.15 (0.25%)'}
                  color={COLORS.button_bg}
                  fontSize={FONTS_SIZE.txt_12}
                  textAlign={'left'}
                  marginLeft={5}
                  numberOfLines={1}
                />
                <TextCommonRegular
                  text={'Today'}
                  color={COLORS.white}
                  fontSize={FONTS_SIZE.txt_12}
                  textAlign={'left'}
                  marginLeft={10}
                  numberOfLines={1}
                />
              </View>
            </View>
            <AreaChart
              style={{height: 200}}
              data={data}
              contentInset={{top: 30, bottom: 30}}
              curve={shape.curveNatural}
              svg={{
                fill: 'rgba(73, 200, 100, .5)',
                // stroke: 'rgba(73, 200, 100, 1)',
                //   fillRule: 'evenodd',
              }}
            >
              <Grid direction="VERTICAL" />
            </AreaChart>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {this.state.daysArr.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      this.setState({
                        selectedIndex: index,
                      })
                    }
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor:
                        this.state.selectedIndex === index
                          ? COLORS.button_bg
                          : COLORS.transparent,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15,
                      borderRadius: 5,
                    }}
                  >
                    <TextCommonRegular
                      text={item.date}
                      color={
                        this.state.selectedIndex === index
                          ? COLORS.white
                          : COLORS.button_bg
                      }
                      fontSize={FONTS_SIZE.txt_14}
                      textAlign={'center'}
                      numberOfLines={1}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <View
              style={{
                width: '100%',
                height: 3,
                backgroundColor: COLORS.black,
                marginTop: 15,
              }}
            />
            <View
              style={{
                padding: 20,
              }}
            >
              <TextCommonMedium
                text={'Statistics'}
                color={COLORS.white}
                fontWeight={'500'}
                fontSize={FONTS_SIZE.txt_20}
                textAlign={'left'}
                numberOfLines={1}
              />
              <View style={{marginTop: 10}}>
                {this.onTextView('Open', '000000.00 ₮', 'Volume', '000000')}
                {this.onTextView(
                  'Today’s High',
                  '000000.00 ₮',
                  'Average Volume',
                  '000000',
                )}
                {this.onTextView(
                  'Today’s Low',
                  '000000.00 ₮',
                  'Market Cap',
                  '000000',
                )}
                {this.onTextView(
                  '52 Wk High',
                  '000000.00 ₮',
                  'P/E Ratio',
                  '000000',
                )}
                {this.onTextView(
                  '52 Wk Low',
                  '000000.00 ₮',
                  'Div/Yield',
                  '000000',
                )}
              </View>
            </View>

            <View
              style={{
                width: '100%',
                height: 3,
                backgroundColor: COLORS.black,
                marginTop: 10,
              }}
            />
            <View
              style={{
                padding: 20,
              }}
            >
              <TextCommonMedium
                text={'22 Analyst Ratings'}
                color={COLORS.white}
                fontWeight={'500'}
                fontSize={FONTS_SIZE.txt_20}
                textAlign={'left'}
                numberOfLines={1}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <View style={{flex: 0.2}}>
                  <View
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 70 / 2,
                      backgroundColor: COLORS.progress_bg_color,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TextCommonRegular
                      text={'63 %'}
                      color={COLORS.black}
                      fontSize={FONTS_SIZE.txt_20}
                      textAlign={'left'}
                      numberOfLines={1}
                    />
                  </View>
                </View>
                <View style={{flex: 0.6, marginLeft: 20}}>
                  <PercentageBar
                    height={8}
                    backgroundColor={COLORS.black}
                    completedColor={COLORS.progress_bg_color}
                    percentage={'65%'}
                  />
                  <View style={{marginTop: 10}} />
                  <PercentageBar
                    height={8}
                    backgroundColor={COLORS.black}
                    completedColor={COLORS.white}
                    percentage={'20%'}
                  />
                  <View style={{marginTop: 10}} />

                  <PercentageBar
                    height={8}
                    backgroundColor={COLORS.black}
                    completedColor={COLORS.white}
                    percentage={'10%'}
                  />
                </View>
                <View style={{flex: 0.2}}>
                  <TextCommonRegular
                    text={'50% Buy'}
                    color={COLORS.button_bg}
                    fontSize={FONTS_SIZE.txt_10}
                    textAlign={'left'}
                    numberOfLines={1}
                  />
                  <View style={{marginTop: 5}} />
                  <TextCommonRegular
                    text={'20% Buy'}
                    color={COLORS.white}
                    fontSize={FONTS_SIZE.txt_10}
                    textAlign={'left'}
                    numberOfLines={1}
                  />
                  <View style={{marginTop: 5}} />
                  <TextCommonRegular
                    text={'10% Buy'}
                    color={COLORS.white}
                    fontSize={FONTS_SIZE.txt_10}
                    textAlign={'left'}
                    numberOfLines={1}
                  />
                </View>
              </View>
            </View>
            <FlatList
              data={this.state.bullShallArr}
              contentContainerStyle={{}}
              style={{}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <BullShall_Item
                    title={item.title}
                    rightText={item.rightText}
                    des={item.des}
                    moreClick={() => {
                      this.setState({
                        ModalView: true,
                        title: item.title,
                        rightText: item.rightText,
                        description: item.des,
                      });
                    }}
                  />
                );
              }}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 3,
              backgroundColor: COLORS.black,
              marginTop: 10,
            }}
          />
          <View
            style={{
              padding: 20,
            }}
          >
            <TextCommonMedium
              text={'Q4 Earnings'}
              color={COLORS.white}
              fontWeight={'500'}
              fontSize={FONTS_SIZE.txt_20}
              textAlign={'left'}
              numberOfLines={1}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 3,
              backgroundColor: COLORS.black,
              marginTop: 10,
            }}
          />
          <View
            style={{
              padding: 20,
            }}
          >
            <TextCommonMedium
              text={'Related Lists'}
              color={COLORS.white}
              fontWeight={'500'}
              fontSize={FONTS_SIZE.txt_20}
              textAlign={'left'}
              numberOfLines={1}
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginRight: 15,
                }}
              >
                {this.state.RealetedList.map((item, index) => {
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
              marginTop: 10,
            }}
          />

          <View
            style={{
              padding: 20,
            }}
          >
            <TextCommonMedium
              text={'People also own'}
              color={COLORS.white}
              fontWeight={'500'}
              fontSize={FONTS_SIZE.txt_20}
              textAlign={'left'}
            />
            <TextCommonRegular
              text={
                'This list is based on the protfolios of people on Investo who own MNDL.'
              }
              color={COLORS.faq_des_color}
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'left'}
              marginTop={10}
            />
          </View>
          <FlatList
            data={this.state.PeopleArr}
            contentContainerStyle={{}}
            style={{}}
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
          />

          <View
            style={{
              width: '100%',
              height: 3,
              backgroundColor: COLORS.black,
              marginTop: 15,
            }}
          />
          <View
            style={{
              padding: 20,
            }}
          >
            <TextCommonMedium
              text={'About'}
              color={COLORS.white}
              fontWeight={'500'}
              fontSize={FONTS_SIZE.txt_20}
              textAlign={'left'}
            />
            {this.state.showMoreText === true ? (
              <TextCommonRegular
                text={
                  ' Мандал Даатгал нь 2014 оноос 3 сая ам. доллар хүртэлх хязгаартай “Variable Quota Share Treaty” багцын давхар даатгалын хамгаалалтаар даатгуулагчдынхаа эрсдэлийг хамгаалж байсан бол 2017 оноос эхлэн багцын давхар даатгал...'
                }
                color={COLORS.faq_des_color}
                fontSize={FONTS_SIZE.txt_14}
                textAlign={'left'}
                marginTop={10}
              />
            ) : (
              <TextCommonRegular
                text={
                  ' Мандал Даатгал нь 2014 оноос 3 сая ам. доллар хүртэлх хязгаартай “Variable Quota Share Treaty” багцын давхар даатгалын хамгаалалтаар даатгуулагчдынхаа эрсдэлийг хамгаалж байсан бол 2017 оноос эхлэн багцын давхар даатгал...'
                }
                color={COLORS.faq_des_color}
                fontSize={FONTS_SIZE.txt_14}
                textAlign={'left'}
                numberOfLines={4}
                marginTop={10}
              />
            )}

            <TextCommonRegular
              text={'More'}
              onClickText={() =>
                this.setState({
                  showMoreText: !this.state.showMoreText,
                  showModalName: 'Earnings',
                  ModalView: true,
                  title: 'Earnings per share',
                  description:
                    'Нэгж хувьцаанд ногдох ашиг (EPS) нь компанийн ашиг орлогыг эргэлтэд байгаа хувьцааны тоонд хуваасан юм. Компаниуд улирал бүр орлогоо зарлаж, зарладаг.',
                })
              }
              color={COLORS.button_bg}
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'left'}
              marginTop={10}
            />
            {this.onAboutTextView('CEO', 'Б. Жавхлан')}
            {this.onAboutTextView(
              'Address',
              'Монгол Улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Чингисийн өргөн чөлөө - 24, Паркплэйс барилга, 3 давхар ',
            )}
            {this.onAboutTextView('Founded', '2011.04.16')}
            {this.onAboutTextView('IPO released', '2018.05.07')}
            {this.onAboutTextView('type', 'Энгийн')}
          </View>

          <View
            style={{
              width: '100%',
              height: 3,
              backgroundColor: COLORS.black,
              marginTop: 10,
            }}
          />

          <View
            style={{
              padding: 20,
            }}
          >
            <TextCommonMedium
              text={'News'}
              color={COLORS.white}
              fontWeight={'500'}
              fontSize={FONTS_SIZE.txt_20}
              textAlign={'left'}
            />

            {this.state.NewsArr.map((item, index) => {
              return (
                <News_Item
                  key={index}
                  title={item.name}
                  des={item.des}
                  up={item.up}
                  down={item.down}
                  image={item.imge}
                  hr={item.time}
                />
              );
            })}
          </View>
        </ScrollView>

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

        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 70,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <View style={{flex: 0.4}}>
            <ButtonView_1
              landingSize="full_large"
              btnName={'BUY'}
              onPressSite={() => this.props.navigation.navigate('TradePage')}
            />
          </View>
          <View style={{width: 30}} />
          <View style={{flex: 0.4}}>
            <ButtonView_red_1
              landingSize="full_large"
              btnName={'SELL'}
              onPressSite={() => {}}
            />
          </View>
        </View>
        {this.state.MyStocksbottomView === true ? (
          <BottomSheet
            ref={ref => (this.sheetRef1 = ref)}
            snapPoints={[500, 500, 500]}
            borderRadius={0}
            renderContent={renderContent}
            onCloseEnd={() => this.setState({MyStocksbottomView: false})}
          />
        ) : null}
      </View>
    );
  }
}
