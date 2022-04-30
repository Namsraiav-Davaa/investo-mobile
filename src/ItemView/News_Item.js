import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import TextCommonRegular from '../common/TextCommonRegular';
import TextCommonMedium from '../common/TextCommonMedium';
import {COLORS, FONTS_SIZE} from '../common/utils';

export default class News_Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title, des, up, down, image, hr} = this.props;
    return (
      <View
        style={{
          paddingTop: 15,
          paddingBottom: 15,
          borderBottomWidth: 0.5,
          borderColor: COLORS.view_line_color,
        }}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.8}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextCommonRegular
                text={title}
                color={COLORS.faq_des_color}
                fontSize={FONTS_SIZE.txt_14}
                textAlign={'left'}
                numberOfLines={2}
              />
              <TextCommonRegular
                text={hr}
                color={COLORS.hr_txt_color}
                fontSize={FONTS_SIZE.txt_14}
                textAlign={'left'}
                numberOfLines={2}
                marginLeft={10}
              />
            </View>

            <TextCommonRegular
              text={des}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'left'}
              marginTop={10}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              <TextCommonRegular
                text={up}
                color={COLORS.button_bg}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'left'}
              />

              <TextCommonRegular
                text={down}
                color={COLORS.red}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'left'}
                marginLeft={10}
              />
            </View>
          </View>
          <View style={{flex: 0.3}}>
            {image === null ? null : (
              <Image
                style={{
                  height: 70,
                  width: 70,
                  marginLeft: 10,
                  borderRadius: 10,
                }}
                resizeMode="contain"
                source={{uri: image}}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}
