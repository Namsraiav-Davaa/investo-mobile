import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS_SIZE} from '../common/utils';
import TextCommonRegular from '../common/TextCommonRegular';
import Protfolio_Item from '../ItemView/Protfolio_Item';

export default class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      depositView: false,
      withdrawView: false,
      transactionView: false,
      listArr: [
        {title: 'Stocks'},
        {title: 'ЗГҮЦ'},
        {title: 'Bond'},
        // {title: 'ХХОС'},
        // {title: 'Crypto'},
      ],
      selectedItem: 0,
      selectedName: 'Stocks',
      selectableItems: [
        [
          {
            text: 'Test',
            top: 20,
            left: 40,
            value: 15,
          },
          {
            text: 'Big stock',
            top: -3,
            left: 130,
            value: 50,
          },
          {
            text: 'Medium stock',
            top: 30,
            left: 250,
            value: 20,
          },
          {
            text: 'Small stock',
            top: 120,
            left: 200,
            value: 10,
          },
          {
            text: 'Tiny stock',
            top: 130,
            left: 105,
            value: 5,
          },
        ],
        [
          {
            text: 'Big stock',
            top: 120,
            left: 100,
            value: 50,
          },
          {
            text: 'Medium stock',
            top: -3,
            left: 130,
            value: 30,
          },
          {
            text: 'Small stock',
            top: 30,
            left: 250,
            value: 20,
          },
        ],
        [
          {
            text: 'Big BOND',
            top: 0,
            left: 100,
            value: 100,
          },
        ],
      ],
      portfolioArr: [
        {
          icon: require('../assets/apu.png'),
          title: 'APU',
          description: 'АПУ ХК',
          currentPrice: 1385,
          currentChange: -0.43,
          amount: 4300,
        },
        {
          icon: require('../assets/gobi.png'),
          title: 'GOV',
          description: 'Говь ХК',
          currentPrice: 276.35,
          currentChange: -0.35,
          amount: 2332,
        },
        {
          icon: require('../assets/cu.png'),
          title: 'CUMN',
          description: 'Сэнтрал Экспресс Си Ви Эс',
          currentPrice: 199.02,
          currentChange: 4.54,
          amount: 10232,
        },
      ],
    };
  }

  UNSAFE_componentWillMount() {
    this.props.navigation.addListener('focus', () => {
      this.setState({
        depositView: false,
        withdrawView: false,
        transactionView: false,
      });
    });
  }

  onButtonView(text, visible, onPress) {
    const width = Dimensions.get('window').width - 80;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor:
            visible === true ? COLORS.progress_bg_color : COLORS.card_bg,
          width: width / 2,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <TextCommonRegular
          text={text}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_14}
          numberOfLines={1}
        />
      </TouchableOpacity>
    );
  }
  onRoundView(title, value, text) {
    return (
      <View
        style={{
          backgroundColor:
            title === text ? COLORS.white : COLORS.round_bg_color,
          width: 50 + value,
          height: 50 + value,
          borderRadius: 50 + value,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextCommonRegular
          text={`${value}%`}
          color={title === text ? COLORS.black : COLORS.white}
          fontSize={FONTS_SIZE.txt_14}
          numberOfLines={1}
        />
        <TextCommonRegular
          text={text}
          color={title === text ? COLORS.black : COLORS.white}
          fontSize={FONTS_SIZE.txt_14}
          numberOfLines={1}
        />
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: COLORS.primary,
          height: '100%',
          width: '100%',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            marginTop: Platform.OS === 'ios' ? 40 : 40,
          }}
        >
          <View style={{flex: 0.1}} />
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.trade_pg_icon_color,
            }}
            resizeMode="contain"
            source={require('../assets/account_balance_wallet.png')}
          />
          <View style={{marginLeft: 15}}>
            <TextCommonRegular
              text={'Арилжааны данс'}
              color={COLORS.offwhite}
              fontSize={FONTS_SIZE.txt_12}
              numberOfLines={1}
              textAlign={'left'}
            />

            <TextCommonRegular
              text={'₮39,400,000.00'}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_14}
              numberOfLines={1}
            />
          </View>
          <View style={{flex: 0.8}} />
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.props.navigation.navigate('PortfolioHistory')}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.offwhite,
              }}
              resizeMode="contain"
              source={require('../assets/history.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
          }}
        >
          {this.onButtonView('Deposit', this.state.depositView, () => {
            this.setState({
              depositView: true,
              withdrawView: false,
              transactionView: false,
            }),
              this.props.navigation.navigate('Deposit');
          })}
          <View style={{width: 30}} />
          {this.onButtonView('Withdraw', this.state.withdrawView, () => {
            this.setState({
              depositView: false,
              withdrawView: true,
              transactionView: false,
            }),
              this.props.navigation.navigate('Withdrawal');
          })}
          {/*<View style={{width: 15}} />*/}

          {/*{this.onButtonView('Transaction', this.state.transactionView, () => {*/}
          {/*  this.setState({*/}
          {/*    depositView: false,*/}
          {/*    withdrawView: false,*/}
          {/*    transactionView: true,*/}
          {/*  });*/}
          {/*  this.props.navigation.navigate('PortfolioHistory');*/}
          {/*})}*/}
        </View>
        <View
          style={{
            width: '100%',
            height: 3,
            backgroundColor: COLORS.black,
            marginTop: 15,
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
              }}
            >
              <View style={{marginLeft: 10, marginRight: 10}}>
                <TextCommonRegular
                  text={'Portfolio'}
                  color={COLORS.offwhite}
                  fontSize={FONTS_SIZE.txt_12}
                  numberOfLines={1}
                  fontWeight={'400'}
                  textAlign={'left'}
                />

                <TextCommonRegular
                  text={'₮39,400.00'}
                  color={COLORS.white}
                  fontSize={FONTS_SIZE.txt_14}
                  numberOfLines={1}
                />
              </View>
              <View style={{marginRight: 5}}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: COLORS.offwhite,
                  }}
                  resizeMode="contain"
                  source={require('../assets/Group_icon.png')}
                />
              </View>
            </View>
            <View style={{paddingLeft: 25, paddingRight: 25}}>
              <TextCommonRegular
                text={'24h change'}
                color={COLORS.offwhite}
                fontSize={FONTS_SIZE.txt_12}
                numberOfLines={1}
                fontWeight={'400'}
                textAlign={'left'}
              />

              <TextCommonRegular
                text={'+₮25.00/+1.5%'}
                color={COLORS.progress_bg_color}
                fontSize={FONTS_SIZE.txt_14}
                numberOfLines={1}
              />
              <View>
                <ScrollView>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 15,
                    }}
                  >
                    {this.state.listArr.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() =>
                            this.setState({
                              selectedItem: index,
                              selectedName: item.title,
                            })
                          }
                          style={{marginLeft: 50}}
                        >
                          <TextCommonRegular
                            text={item.title}
                            color={
                              this.state.selectedItem === index
                                ? COLORS.white
                                : COLORS.offwhite
                            }
                            fontSize={FONTS_SIZE.txt_16}
                            numberOfLines={1}
                            textAlign={'center'}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </ScrollView>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 200,
                    alignItems: 'center',
                    paddingLeft: 40,
                  }}
                >
                  {this.state.selectableItems[this.state.selectedItem].map(
                    ({text, top, left, value}, index) => (
                      <View
                        key={index}
                        style={{position: 'absolute', top, left}}
                      >
                        {this.onRoundView(this.state.selectedName, value, text)}
                      </View>
                    ),
                  )}
                  {/*{this.onRoundView(this.state.selectedName, '50%', 'Stocks')}*/}
                  {/*<View style={{position: 'absolute', top: -3, left: 130}}>*/}
                  {/*  {this.onRoundView(this.state.selectedName, '25%', 'ЗГҮЦ')}*/}
                  {/*</View>*/}
                  {/*<View style={{position: 'absolute', top: 30, left: 230}}>*/}
                  {/*  {this.onRoundView(this.state.selectedName, '5%', 'Bond')}*/}
                  {/*</View>*/}
                  {/*<View style={{position: 'absolute', top: 120, left: 200}}>*/}
                  {/*  {this.onRoundView(this.state.selectedName, '10%', 'Crypto')}*/}
                  {/*</View>*/}
                  {/*<View style={{position: 'absolute', top: 130, left: 105}}>*/}
                  {/*  {this.onRoundView(this.state.selectedName, '10%', 'ХХОС')}*/}
                  {/*</View>*/}
                </View>
              </View>
            </View>

            <View
              style={{
                borderBottomWidth: 0.5,
                borderColor: COLORS.view_line_color,
                marginTop: 35,
              }}
            />

            <View style={{marginTop: 15, marginLeft: 15, marginRight: 15}}>
              {this.state.portfolioArr.map((item, index) => {
                return <Protfolio_Item key={index} item={item} />;
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
