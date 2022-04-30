import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import ButtonView from '../common/ButtonView';
import HomeHeader from '../common/HomeHeader';
import RNPickerView_three from '../common/RNPickerView_three';
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS, FONTS_SIZE} from '../common/utils';
import Open_order_Item from '../ItemView/Open_order_Item';
import ButtonView_red from '../common/ButtonView_red';
import PercentageBar_two from '../common/PercentageBar_two';

export default class TradePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBuyView: true,
      selectedSellView: false,
      Limitarr: [
        {label: '100', value: '100'},
        {label: '200', value: '200'},
        {label: '300', value: '300'},
        {label: '400', value: '400'},
      ],
      priceValue: '1',
      AmmountValue: '500',
      totalAmount: '500',
      BuyArr: [
        {label: '100', value: '100'},
        {label: '100', value: '100'},
      ],
    };
  }

  onPriceView(
    lefticon,
    text,
    righticon,
    leftonPress,
    rightonPress,
    onChangeText,
    phText,
  ) {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 40,
          borderRadius: 10,
          marginTop: 15,
          backgroundColor: COLORS.card_bg,
        }}>
        <TouchableOpacity
          onPress={leftonPress}
          style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
          {lefticon && (
            <Image
              source={lefticon}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
                tintColor: COLORS.faq_des_color,
              }}
            />
          )}
        </TouchableOpacity>
        <View style={{flex: 0.6}}>
          <TextInput
            style={{
              fontSize: FONTS_SIZE.txt_14,
              fontFamily: FONTS.FontMedium,
              color: COLORS.view_line_color,
              textAlign: 'center',
            }}
            onChangeText={onChangeText}
            placeholderTextColor={COLORS.view_line_color}
            value={text}
            placeholder={phText}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          onPress={rightonPress}
          style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={righticon}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              tintColor: COLORS.faq_des_color,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  onLineViewCode(value) {
    const width = Dimensions.get('window').width - 235;
    return (
      <View>
        <View
          style={{
            width: width / 4,
            height: 10,
            backgroundColor: COLORS.card_bg,
            marginTop: 15,
            borderRadius: 2,
          }}
        />
        <TextCommonRegular
          text={value}
          color={COLORS.faq_des_color}
          fontSize={FONTS_SIZE.txt_10}
          textAlign={'center'}
        />
      </View>
    );
  }

  onRightSideView(Amount, percentage, color) {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 22,
        }}>
        <View style={{width: 80}}>
          <TextCommonRegular
            text={Amount}
            color={COLORS.red}
            fontSize={FONTS_SIZE.txt_10}
            textAlign={'left'}
            numberOfLines={1}
          />
        </View>

        <View style={{width: 95}}>
          <PercentageBar_two
            height={15}
            backgroundColor={COLORS.primary}
            completedColor={
              color === 'color'
                ? 'rgba(255, 180, 169, 1)'
                : 'rgba(126, 219, 117, .5)'
            }
            percentage={percentage}
            amount={Amount}
          />
        </View>
      </View>
    );
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
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingLeft: 15,
            paddingRight: 15,
            width: '100%',
            height: 50,
            alignItems: 'center',
            marginTop: Platform.OS === 'ios' ? 40 : 40,
          }}>
          <View
            style={{
              width: '70%',
              justifyContent: 'flex-start',
            }}>
            <TextCommonMedium
              text={'Buy MNDL'}
              color={COLORS.faq_des_color}
              fontSize={FONTS_SIZE.txt_20}
              textAlign={'left'}
            />
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SearchPage')}
            style={{width: '5%', marginLeft: 10}}>
            <Image
              source={require('../assets/search_icon.png')}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: COLORS.faq_des_color,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('PortfolioHistory');
            }}
            style={{width: '5%', marginLeft: 10}}>
            <Image
              source={require('../assets/Group_icon.png')}
              resizeMode="contain"
              style={{
                width: 28,
                height: 28,
                tintColor: COLORS.faq_des_color,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{width: '100%', height: 3, backgroundColor: COLORS.black}}
        />
        <ScrollView>
          <View style={{flexDirection: 'row', padding: 20}}>
            <View
              style={{flex: Platform.OS === 'ios' ? 0.6 : 0.6, marginTop: 5}}>
              <View
                style={{
                  flexDirection: 'row',
                  height: 35,
                  backgroundColor: COLORS.offwhite,
                  borderRadius: 5,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      selectedSellView: false,
                      selectedBuyView: true,
                      priceValue: '1',
                      AmmountValue: '500',
                      totalAmount: '500',
                    })
                  }
                  style={{
                    backgroundColor:
                      this.state.selectedBuyView === true
                        ? COLORS.progress_bg_color
                        : COLORS.transparent,
                    flex: 1,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TextCommonRegular
                    text={'Buy'}
                    color={
                      this.state.selectedBuyView === true
                        ? COLORS.white
                        : COLORS.faq_des_color
                    }
                    fontSize={FONTS_SIZE.txt_14}
                    textAlign={'center'}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      selectedSellView: true,
                      selectedBuyView: false,
                      priceValue: '1',
                      AmmountValue: '500',
                      totalAmount: '500',
                    })
                  }
                  style={{
                    backgroundColor:
                      this.state.selectedSellView === true
                        ? COLORS.light_red_color
                        : COLORS.transparent,
                    borderRadius: 5,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: this.state.selectedSellView === true ? -5 : 0,
                  }}>
                  <TextCommonRegular
                    text={'Sell'}
                    color={
                      this.state.selectedSellView === true
                        ? COLORS.white
                        : COLORS.faq_des_color
                    }
                    fontSize={FONTS_SIZE.txt_14}
                    textAlign={'center'}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginTop: 15}}>
                <RNPickerView_three
                  label={'Limit'}
                  itemArray={this.state.Limitarr}
                  onValueChange={value => this.setState({value})}
                />
                {this.onPriceView(
                  require('../assets/sub_icon.png'),
                  this.state.priceValue,
                  require('../assets/add_icon.png'),
                  () => {
                    if (this.state.priceValue === '1') {
                      var totalAmount =
                        Number(this.state.priceValue) *
                        Number(this.state.AmmountValue);
                      this.setState({
                        priceValue: '1',
                        totalAmount: totalAmount.toString(),
                      });
                    } else {
                      var price = Number(this.state.priceValue) - 1;
                      var totalAmount = price * Number(this.state.AmmountValue);

                      this.setState({
                        priceValue: price.toString(),
                        totalAmount: totalAmount.toString(),
                      });
                    }
                  },
                  () => {
                    var price = Number(this.state.priceValue) + 1;
                    var totalAmount = price * Number(this.state.AmmountValue);

                    this.setState({
                      priceValue: price.toString(),
                      totalAmount: totalAmount.toString(),
                    });
                  },
                  value => this.setState({priceValue: value}),
                  'Price (MNT)',
                )}
                {this.onPriceView(
                  require('../assets/sub_icon.png'),
                  this.state.AmmountValue,
                  require('../assets/add_icon.png'),
                  () => {
                    if (this.state.AmmountValue === '500') {
                      var totalAmount =
                        Number(this.state.priceValue) *
                        Number(this.state.AmmountValue);
                      this.setState({
                        AmmountValue: '500',
                        totalAmount: totalAmount.toString(),
                      });
                    } else {
                      var amount = Number(this.state.AmmountValue) - 100;

                      var totalAmount = Number(this.state.priceValue) * amount;
                      this.setState({
                        AmmountValue: amount.toString(),
                        totalAmount: totalAmount.toString(),
                      });
                    }
                  },
                  () => {
                    var amount_plus = Number(this.state.AmmountValue) + 500;
                    var totalAmount =
                      Number(this.state.priceValue) * amount_plus;
                    this.setState({
                      AmmountValue: amount_plus.toString(),
                      totalAmount: totalAmount.toString(),
                    });
                  },
                  value => this.setState({AmmountValue: value}),
                  'Amount (MNDL)',
                )}
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {this.onLineViewCode('25%')}
                <View style={{width: '3%'}} />
                {this.onLineViewCode('50%')}
                <View style={{width: '3%'}} />

                {this.onLineViewCode('75%')}
                <View style={{width: '3%'}} />

                {this.onLineViewCode('100%')}
              </View>

              {this.onPriceView(
                undefined,
                this.state.totalAmount,
                require('../assets/add_icon.png'),
                () => {},
                () => {},
                value => {},
                'Total (MNT)',
              )}

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 15,
                  marginLeft: 3,
                }}>
                <TextCommonRegular
                  text={'Available'}
                  color={COLORS.avalibale_text_color}
                  fontSize={FONTS_SIZE.txt_12}
                  textAlign={'center'}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <TextCommonRegular
                    text={'1.5k MNT'}
                    color={COLORS.white}
                    fontSize={FONTS_SIZE.txt_12}
                    textAlign={'right'}
                  />
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Deposit')}>
                    <Image
                      source={require('../assets/plus_round_icon.png')}
                      resizeMode="contain"
                      style={{
                        width: 16,
                        height: 16,
                        marginLeft: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{marginTop: 20}}>
                {this.state.selectedBuyView === false ? (
                  <ButtonView_red
                    landingSize="full_large"
                    btnName={'SELL'}
                    screenName="Trade"
                    onPressSite={() => {}}
                  />
                ) : (
                  <ButtonView
                    landingSize="full_large"
                    btnName={'BUY'}
                    screenName="Trade"
                    onPressSite={() => {}}
                  />
                )}
              </View>
            </View>
            <View style={{flex: 0.5, marginLeft: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextCommonRegular
                  text={'Price\n(MNT)'}
                  color={COLORS.faq_des_color}
                  fontSize={FONTS_SIZE.txt_12}
                  textAlign={'center'}
                  numberOfLines={2}
                />
                <TextCommonRegular
                  text={'Amount\n(MNT)'}
                  color={COLORS.faq_des_color}
                  fontSize={FONTS_SIZE.txt_12}
                  textAlign={'left'}
                  numberOfLines={2}
                />
              </View>
              <View style={{marginTop: 5}} />
              {this.onRightSideView('010889', '80%', 'color')}
              {this.onRightSideView('010889', '60%', 'color')}
              {this.onRightSideView('010889', '50%', 'color')}
              {this.onRightSideView('010889', '40%', 'color')}
              {this.onRightSideView('010889', '30%', 'color')}
              {this.onRightSideView('010889', '20%', 'color')}

              <View
                style={{alignItems: 'center', marginTop: 5, marginBottom: 5}}>
                <TextCommonRegular
                  text={'0.010889'}
                  color={COLORS.red}
                  fontSize={FONTS_SIZE.txt_12}
                  textAlign={'center'}
                  numberOfLines={2}
                />
                <TextCommonRegular
                  text={'= ₮93.87'}
                  color={COLORS.offwhite}
                  fontSize={FONTS_SIZE.txt_10}
                  textAlign={'left'}
                  numberOfLines={2}
                />
              </View>
              {this.onRightSideView('010889', '100%')}
              {this.onRightSideView('010889', '80%')}
              {this.onRightSideView('010889', '50%')}
              {this.onRightSideView('010889', '40%')}
              {this.onRightSideView('010889', '30%')}
              {this.onRightSideView('010889', '20%')}

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: COLORS.card_bg,
                    padding: 5,
                    borderRadius: 5,
                    width: 100,
                  }}>
                  <TextCommonRegular
                    text={'1'}
                    color={COLORS.view_line_color}
                    fontSize={FONTS_SIZE.txt_10}
                    textAlign={'left'}
                  />
                  <Image
                    source={require('../assets/arrow_drop_up_icon.png')}
                    resizeMode="contain"
                    style={{
                      width: 18,
                      height: 18,
                      marginLeft: 5,
                      tintColor: COLORS.arrow_bg_color,
                    }}
                  />
                </View>
                <Image
                  source={require('../assets/vertical_split_icon.png')}
                  resizeMode="contain"
                  style={{
                    width: 33,
                    height: 33,
                    tintColor: COLORS.faq_des_color,
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{width: '100%', height: 3, backgroundColor: COLORS.black}}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 15,
              borderBottomWidth: 0.5,
              borderColor: COLORS.offwhite,
              marginLeft: 5,
              marginRight: 5,
            }}>
            <TextCommonMedium
              text={'Open orders (15)'}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'left'}
              fontWeight={'500'}
              numberOfLines={2}
            />
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('OrderSeeAll', {
                  visibleView: this.state.selectedBuyView,
                })
              }
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextCommonRegular
                text={'See all'}
                color={COLORS.offwhite}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'left'}
                numberOfLines={2}
              />
              <Image
                source={require('../assets/right_icon.png')}
                resizeMode="contain"
                style={{
                  width: 13,
                  height: 13,
                  marginLeft: 11,
                }}
              />
            </TouchableOpacity>
          </View>
          {this.state.BuyArr.map((item, index) => {
            return (
              <Open_order_Item
                key={index}
                BuyVisible={this.state.selectedBuyView}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
