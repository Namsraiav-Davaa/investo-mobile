import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS_SIZE} from '../common/utils';

export default class History_Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const radomNumber = Math.floor(Math.random() * 2) + 1;
    const {index} = this.props;

    return (
      <View
        style={{
          padding: 15,
        }}
      >
        {index != 0 ? (
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <TextCommonMedium
                text={'MNDL/MNT'}
                color={COLORS.white}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'left'}
                fontWeight={'500'}
                numberOfLines={2}
              />
              <TextCommonRegular
                text={'2022.05.15 09:41:00'}
                color={COLORS.offwhite}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'right'}
                numberOfLines={2}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 5,
              }}
            >
              <TextCommonMedium
                text={'Limit/buy'}
                color={COLORS.progress_bg_color}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'left'}
                fontWeight={'400'}
                numberOfLines={2}
              />
              <View
                style={{
                  backgroundColor:
                    radomNumber === 1
                      ? COLORS.filled_bg_color
                      : COLORS.clacel_bg_color,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderRadius: 2,
                }}
              >
                <TextCommonRegular
                  text={radomNumber === 1 ? 'Filled' : 'Cancelled'}
                  color={COLORS.white}
                  fontSize={FONTS_SIZE.txt_12}
                  textAlign={'center'}
                  numberOfLines={2}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 5,
              }}
            >
              <TextCommonMedium
                text={'Amount'}
                color={COLORS.offwhite}
                fontSize={FONTS_SIZE.txt_12}
                fontWeight={'400'}
                textAlign={'left'}
                numberOfLines={2}
              />
              <TextCommonRegular
                text={'123'}
                color={COLORS.white}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'right'}
                numberOfLines={2}
              />
            </View>

            <View
              style={{
                borderBottomWidth: 0.5,
                borderColor: COLORS.card_bg,
                marginTop: 10,
              }}
            />
          </View>
        ) : (
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <TextCommonRegular
                text={'MNDL/MNT'}
                color={COLORS.white}
                fontSize={FONTS_SIZE.txt_14}
                textAlign={'left'}
                numberOfLines={2}
              />
              <TextCommonRegular
                text={'₮38,000'}
                color={COLORS.white}
                fontSize={FONTS_SIZE.txt_14}
                textAlign={'right'}
                numberOfLines={2}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 5,
              }}
            >
              <TextCommonRegular
                text={'Deposit'}
                color={COLORS.offwhite}
                fontSize={FONTS_SIZE.txt_14}
                textAlign={'left'}
                numberOfLines={2}
              />

              <TextCommonRegular
                text={'Card'}
                color={COLORS.offwhite}
                fontSize={FONTS_SIZE.txt_14}
                textAlign={'center'}
                numberOfLines={2}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 5,
              }}
            >
              <TextCommonRegular
                text={'State'}
                color={COLORS.offwhite}
                fontSize={FONTS_SIZE.txt_14}
                textAlign={'left'}
                numberOfLines={2}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextCommonRegular
                  text={'\u2B24'}
                  color={COLORS.button_bg}
                  fontSize={5}
                  textAlign={'left'}
                  numberOfLines={2}
                />
                <TextCommonRegular
                  text={'Success'}
                  color={COLORS.offwhite}
                  fontSize={FONTS_SIZE.txt_14}
                  textAlign={'right'}
                  numberOfLines={2}
                  marginLeft={5}
                />
              </View>
            </View>

            <View
              style={{
                borderBottomWidth: 0.5,
                borderColor: COLORS.card_bg,
                marginTop: 10,
              }}
            />
          </View>
        )}
      </View>
    );
  }
}
