import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import TextCommonMedium from '../common/TextCommonMedium';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS_SIZE} from '../common/utils';

export default class BullShall_Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      title,
      rightText,
      des,
      moreClick,
      numberOfLines,
      index,
      selectedIndexItem,
    } = this.props;
    return (
      <View>
        <View
          style={{
            padding: 20,
            backgroundColor: COLORS.black,
            borderRadius: 10,
            marginLeft: 15,
            height: 180,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <TextCommonMedium
              text={title.toUpperCase()}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_12}
              numberOfLines={1}
              fontWeight={'500'}
            />
            <TextCommonRegular
              text={rightText}
              color={COLORS.offwhite}
              fontSize={FONTS_SIZE.txt_12}
              numberOfLines={1}
              textAlign={'right'}
            />
          </View>
          <TextCommonRegular
            text={des}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_12}
            numberOfLines={4}
            marginTop={10}
            width={280}
          />
          <TextCommonRegular
            text={'More'}
            color={COLORS.button_bg}
            fontSize={FONTS_SIZE.txt_10}
            numberOfLines={1}
            textAlign={'right'}
            marginTop={15}
            height={25}
            onClickText={moreClick}
          />
        </View>
      </View>
    );
  }
}
