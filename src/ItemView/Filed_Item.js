import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS_SIZE} from '../common/utils';

export default class Filed_Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const radomNumber = Math.floor(Math.random() * 2) + 1;
    const {onPressClick} = this.props;
    return (
      <TouchableOpacity
        onPress={onPressClick}
        style={{
          padding: 15,
        }}
      >
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
            text={'2022.05.15 09:41:00'}
            color={COLORS.avalibale_text_color}
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
          <TextCommonRegular
            text={'Limit/buy'}
            color={COLORS.button_bg}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'left'}
            numberOfLines={2}
          />
          <View
            style={{
              backgroundColor:
                radomNumber === 1
                  ? COLORS.filled_bg_color
                  : COLORS.clacel_bg_color,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 3,
              paddingBottom: 3,
              borderRadius: 2,
            }}
          >
            <TextCommonRegular
              text={radomNumber === 1 ? 'Filled' : 'Cancelled'}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_10}
              textAlign={'center'}
              fontWeight={'400'}
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
          <TextCommonRegular
            text={'Amount'}
            color={COLORS.avalibale_text_color}
            fontSize={FONTS_SIZE.txt_14}
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 5,
          }}
        >
          <TextCommonRegular
            text={'Price'}
            color={COLORS.avalibale_text_color}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'left'}
            numberOfLines={2}
          />
          <TextCommonRegular
            text={'2800.00'}
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
      </TouchableOpacity>
    );
  }
}
