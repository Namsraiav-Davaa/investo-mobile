import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS, FONTS_SIZE} from '../common/utils';
import ProgressCircle from 'react-native-progress-circle';

export default class Open_order_Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {BuyVisible} = this.props;
    return (
      <View
        style={{
          padding: 15,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextCommonRegular
              text={'Limit/buy'}
              width={65}
              color={
                BuyVisible === true ? COLORS.button_bg : COLORS.text_orange
              }
              fontSize={FONTS_SIZE.txt_10}
              textAlign={'left'}
              numberOfLines={2}
            />
            <TextCommonRegular
              text={'Limit/buy'}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_12}
              textAlign={'left'}
              numberOfLines={2}
              // marginLeft={10}
            />
          </View>

          <View
            style={{justifyContent: 'space-between', alignItems: 'flex-end'}}
          >
            <TextCommonRegular
              text={'2022.05.15 09:41:00'}
              color={COLORS.offwhite}
              fontSize={FONTS_SIZE.txt_10}
              textAlign={'right'}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View style={{flex: 0.2, alignItems: 'center'}}>
            <View style={{marginTop: 10}}>
              <ProgressCircle
                percent={30}
                radius={25}
                borderWidth={5}
                color={
                  BuyVisible === true ? COLORS.button_bg : COLORS.text_orange
                }
                shadowColor="#999"
                bgColor={COLORS.primary}
              >
                <TextCommonRegular
                  text={'10%'}
                  color={
                    BuyVisible === true ? COLORS.button_bg : COLORS.text_orange
                  }
                  fontSize={FONTS_SIZE.txt_10}
                  textAlign={'center'}
                  numberOfLines={2}
                />
              </ProgressCircle>
            </View>
          </View>
          <View style={{flex: 0.8, marginLeft: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextCommonRegular
                text={'Amount: '}
                color={COLORS.offwhite}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'left'}
                numberOfLines={2}
              />
              <TextCommonRegular
                text={'123'}
                color={COLORS.white}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'left'}
                numberOfLines={2}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextCommonRegular
                text={'Price: '}
                color={COLORS.offwhite}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'left'}
                numberOfLines={2}
              />
              <TextCommonRegular
                text={'2800'}
                color={COLORS.white}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'left'}
                numberOfLines={2}
              />
            </View>
          </View>
          <View style={{flex: 0.5, alignItems: 'flex-end'}}>
            <View
              style={{
                width: 60,
                height: 20,
                backgroundColor: COLORS.card_bg,
                borderRadius: 5,
                marginTop: 20,
                justifyContent: 'center',
              }}
            >
              <TextCommonRegular
                text={'Cancel'}
                color={COLORS.white}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'center'}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: COLORS.offwhite,
            marginTop: 15,
          }}
        />
      </View>
    );
  }
}
