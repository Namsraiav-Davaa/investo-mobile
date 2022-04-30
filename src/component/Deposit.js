import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Clipboard,
} from 'react-native';
import {COLORS, FONTS_SIZE, FONTS} from '../common/utils';
import Header from '../common/Header';
import TextCommonRegular from '../common/TextCommonRegular';
import AnimatedInput from './AnimatedInput/AnimatedInput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BottomSheet from 'reanimated-bottom-sheet';
import ButtonView from '../common/ButtonView';
import TextCommonMedium from '../common/TextCommonMedium';

export default class Deposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backName: 'Хаан банк',
      accountName: 'khan test user',
      accountNumber: '123',
      description: 'test',
      secureTextEntry: false.valueOf,
      isBottomSheetvisible: false,
      bankArr: [
        {
          icon: require('../assets/khan_icon.png'),
          name: 'Хаан банк',
        },
        {
          icon: require('../assets/golomt_icon.png'),
          name: 'Голомт банк',
        },
        {
          icon: require('../assets/tdb_icon.png'),
          name: 'Худалдаа хөгжлийн банк',
        },
      ],
    };
  }

  onCardView(
    keyboardType,
    placeholder,
    onChangeText,
    value,
    secureTextEntry,
    disabled,
  ) {
    return (
      <View
        style={{
          backgroundColor: COLORS.card_bg,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          borderRadius: 10,
          // justifyContent: 'center',
          // flexDirection: 'row'
        }}
      >
        <AnimatedInput
          placeholder={placeholder}
          // valid={true}
          // errorText="Error"
          onChangeText={onChangeText}
          value={value}
          styleLabel={{fontWeight: '600'}}
          // styleBodyContent={styles.bodyContent}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          disabled={disabled}
        />

        {placeholder === 'Account name' || placeholder === 'Account number' ? (
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: 50,
              height: 50,
              position: 'absolute',
              right: 15,
              alignItems: 'center',
              top: 20,
            }}
          >
            <TextCommonMedium
              text={'Copy'}
              color={COLORS.copy_txt_color}
              fontSize={FONTS_SIZE.txt_12}
              textAlign={'center'}
              numberOfLines={1}
              onClick={() => Clipboard.setString(value)}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }

  render() {
    const renderContent = () => (
      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          // justifyContent: 'center',
          // alignItems: 'center',
          height: 280,
        }}
      >
        <TextCommonMedium
          text={'Pick a bank'}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_18}
          textAlign={'center'}
          numberOfLines={1}
        />

        <View
          style={{justifyContent: 'center', paddingLeft: 20, paddingRight: 20}}
        >
          {this.state.bankArr.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  this.setState({
                    backName: item.name,
                  })
                }
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignContent: 'center',
                  borderBottomWidth: 0.4,
                  borderColor: COLORS.borderColor,
                  paddingTop: 15,
                  paddingBottom: 15,
                }}
              >
                <Image
                  source={item.icon}
                  style={{width: 25, height: 25, tintColor: COLORS.white}}
                />
                <TextCommonRegular
                  text={item.name}
                  color={COLORS.white}
                  fontSize={FONTS_SIZE.txt_14}
                  textAlign={'center'}
                  numberOfLines={1}
                  marginLeft={10}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{marginTop: 20}} />
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ButtonView
            landingSize="full"
            btnName={'DONE'}
            onPressSite={() =>
              this.setState({
                isBottomSheetvisible: false,
              })
            }
          />
        </View>
      </View>
    );

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.primary,
        }}
      >
        <Header
          headerType="auth"
          onBackClick={() => this.props.navigation.goBack(null)}
          headertitle="Deposit"
        />

        <View
          style={{width: '100%', height: 4, backgroundColor: COLORS.black}}
        />
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Amount')}
              style={{
                backgroundColor: COLORS.deposit_bg,
                width: '90%',
                height: 68,
                borderRadius: 10,
                marginTop: 15,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 15,
                paddingRight: 15,
              }}
            >
              <Image
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.marketIcon_color,
                }}
                resizeMode="contain"
                source={require('../assets/wallet_icon2.png')}
              />

              <View
                style={{
                  flex: 1.5,
                }}
              >
                <TextCommonRegular
                  text={'Deposit with debit card'}
                  color={COLORS.marketIcon_color}
                  fontSize={FONTS_SIZE.txt_18}
                  textAlign={'left'}
                  numberOfLines={1}
                  marginLeft={10}
                />
              </View>

              <View
                style={{
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.marketIcon_color,
                  }}
                  resizeMode="contain"
                  source={require('../assets/right_icon2.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <TextCommonMedium
            text={'Deposit with bank transfer'}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_17}
            textAlign={'left'}
            fontWeight={'600'}
            numberOfLines={1}
            marginLeft={20}
            marginTop={10}
          />
          <View>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  isBottomSheetvisible: true,
                })
              }
            >
              {this.onCardView(
                'default',
                'Bank',
                value => {
                  this.setState({backName: value});
                },
                this.state.backName,
                this.state.securePassword,
                true,
              )}
            </TouchableOpacity>

            {this.onCardView(
              'default',
              'Account name',
              value => {
                this.setState({accountName: value});
              },
              this.state.accountName,
              this.state.securePassword,
              true,
            )}
            {this.onCardView(
              'numeric',
              'Account number',
              value => {
                this.setState({accountNumber: value});
              },
              this.state.accountNumber,
              this.state.securePassword,
              true,
            )}
            {this.onCardView(
              'default',
              'Transaction description',
              value => {
                this.setState({description: value});
              },
              this.state.description,
              this.state.securePassword,
              true,
            )}
          </View>
        </ScrollView>
        {this.state.isBottomSheetvisible === true ? (
          <BottomSheet
            ref={ref => (this.sheetRef1 = ref)}
            snapPoints={[280, 280, 280]}
            borderRadius={0}
            renderContent={renderContent}
            onCloseEnd={() => this.setState({isBottomSheetvisible: false})}
          />
        ) : null}
      </View>
    );
  }
}
