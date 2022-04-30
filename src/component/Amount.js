import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Header from '../common/Header';
import {COLORS, FONTS, FONTS_SIZE} from '../common/utils';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextCommonMedium from '../common/TextCommonMedium';
import ButtonView from '../common/ButtonView';
import TextCommonRegular from '../common/TextCommonRegular';

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow != numColumns &&
    numberOfElementsLastRow != 0
  ) {
    data.push({key: 'blank-${numberOfElementsLastRow}', empty: true});
    numberOfElementsLastRow++;
  }
  return data;
};
const numColumns = 3;

export default class Amount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberArray: [
        {
          key: 1,
        },
        {
          key: 2,
        },
        {
          key: 3,
        },
        {
          key: 4,
        },
        {
          key: 5,
        },
        {
          key: 6,
        },
        {
          key: 7,
        },
        {
          key: 8,
        },
        {
          key: 9,
        },
        {
          key: null,
        },
        {
          key: 0,
        },
        {
          key: '✕',
        },
      ],
      selectedArray: [],
      Account: '0',
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
        }}
      >
        <Header headerType="auth" onBackClick={() => navigation.goBack(null)} />
        <View style={{marginTop: 20, height: '30%'}}>
          <TextCommonRegular
            text={'Amount'}
            color={COLORS.offwhite}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'center'}
            numberOfLines={1}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TextInput
              returnKeyType={'done'}
              keyboardType={'numeric'}
              style={{
                // width: '35%',
                color: COLORS.white,
                fontSize: FONTS_SIZE.txt_28,
                fontFamily: FONTS.FontRegular,
                marginLeft: 10,
                textAlign: 'center',
              }}
              placeholder={'500.00'}
              secureTextEntry={false}
              maxLength={10}
              editable={false}
              placeholderTextColor={COLORS.white}
              value={this.state.Account}
            />

            <TextCommonRegular
              text={'MNT'}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'center'}
              numberOfLines={1}
              marginTop={20}
              marginLeft={5}
            />
          </View>
          <TextCommonRegular
            text={'Minimum amount 10,000₮'}
            color={COLORS.amount_txt_color}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'center'}
            numberOfLines={1}
          />
        </View>
        <FlatList
          data={formatData(this.state.numberArray, numColumns)}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '95%',
          }}
          style={{
            marginTop: hp(1),
          }}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (item.key === '✕' || item.key === null) {
                    this.setState({
                      Account: '0',
                      selectedArray: [],
                    });
                  } else {
                    this.state.selectedArray.push(item.key.toString());
                    if (this.state.selectedArray.length === 10) {
                      console.log(
                        'this.state.selectedArray.length',
                        this.state.selectedArray,
                      );
                    } else {
                      this.setState({
                        Account: this.state.Account.concat(item.key.toString()),
                      });
                    }
                  }
                }}
                style={{
                  width: wp(30),
                  height: hp(7.5),
                  borderRadius: 150 / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  marginLeft: 20,
                  marginTop: hp(1.5),
                }}
              >
                <View
                  style={{
                    width: wp(14),
                    height: hp(7.5),
                    borderRadius: 150 / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.primary,
                  }}
                >
                  {item.key === '✕' ? (
                    <Image
                      source={require('../assets/rm_icon.png')}
                      style={{width: 20, height: 20, tintColor: COLORS.white}}
                    />
                  ) : (
                    <TextCommonMedium
                      text={item.key === null ? '.' : item.key}
                      color={COLORS.white}
                      fontSize={FONTS_SIZE.txt_18}
                      textAlign={'center'}
                      numberOfLines={1}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(_, index) => index.toString()}
        />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 45,
          }}
        >
          <ButtonView
            landingSize="full"
            btnName={'DEPOSIT'}
            onPressSite={() => {
              this.props.navigation.navigate('Card_Payments');
            }}
          />
        </View>
      </View>
    );
  }
}
