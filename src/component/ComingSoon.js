import React from 'react';
import {View} from 'react-native';
import {COLORS, FONTS_SIZE} from '../common/utils';
import Header from '../common/Header';
import TextCommonRegular from '../common/TextCommonRegular';

const ComingSoon = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <Header
        headerType="auth"
        onBackClick={() => props.navigation.goBack(null)}
        headertitle={props.route.params.title}
      />
      <View style={{width: '100%', height: 4, backgroundColor: COLORS.black}} />
      <View style={{width: '100%', height: '80%', justifyContent: 'center'}}>
        <TextCommonRegular
          text="Coming soon!"
          color={COLORS.button_bg}
          fontSize={FONTS_SIZE.txt_30}
          textAlign="center"
        />
      </View>
    </View>
  );
};

export default ComingSoon;
