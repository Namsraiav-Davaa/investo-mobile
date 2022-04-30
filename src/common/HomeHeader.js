import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import IconFile from './CommonFontIcon';
import TextCommonLight from './TextCommonLight';
import TextCommonMedium from './TextCommonMedium';
import TextCommonRegular from './TextCommonRegular';
import {COLORS, FONTS_SIZE} from './utils';

export default class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      headertitle,
      headerTitle_des,
      onProfileClick,
      onShareItemClick,
      onnotificationItemClick,
    } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 70,
          width: '100%',
          alignItems: 'center',
          backgroundColor: COLORS.primary,
          marginTop: Platform.OS === 'ios' ? 35 : 35,
        }}
      >
        <View
          style={{
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onProfileClick}
          >
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 30,
              }}
              resizeMode="cover"
              source={require('../assets/profile_icon.jpeg')}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '65%'}}>
          <TextCommonRegular
            text={headertitle.toUpperCase()}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_10}
            fontWeight={'400'}
            textAlign={'left'}
            marginLeft={15}
          />
          <TextCommonMedium
            text={headerTitle_des}
            color={COLORS.white}
            fontSize={FONTS_SIZE.txt_16}
            fontWeight={'500'}
            textAlign={'left'}
            marginLeft={15}
          />
        </View>
        <View
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity onPress={onShareItemClick} style={{}}>
            {/* <Image
              style={{
                height: 22,
                width: 22,
                tintColor: COLORS.white,
              }}
              resizeMode="contain"
              source={require('../assets/search_icon.png')}
            /> */}
            <IconFile.SvgIcon
              name={'search_icon'}
              size={25}
              color={COLORS.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onnotificationItemClick}
            style={{marginLeft: 5}}
          >
            {/* <Image
              style={{
                height: 30,
                width: 30,
                tintColor: COLORS.white,
                marginTop: 5,
              }}
              resizeMode="contain"
              source={require('../assets/notifications_none.png')}
            /> */}

            <IconFile.SvgIcon
              name={'notifiction_icon'}
              size={30}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
