import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TextCommonRegular from './TextCommonRegular';
import {COLORS, FONTS_SIZE} from './utils';

const PercentageBar_two = ({
  navigation,
  percentage,
  height,
  backgroundColor,
  completedColor,
  amount,
}) => {
  const [getPercentage, setPercentage] = useState(percentage);
  const [getheight, setHeight] = useState(height);
  const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);
  const [Amount, setAmount] = useState(amount);
  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            width: '85%',
            height: 25,
            backgroundColor: getBackgroundColor,
            flexDirection: 'row-reverse',
            alignItems: 'center',
          }}
        >
          <View style={{position: 'absolute'}}>
            <TextCommonRegular
              text={Amount}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_10}
              textAlign={'right'}
              numberOfLines={1}
            />
          </View>

          <View
            style={{
              width: getPercentage,
              height: getheight,
              backgroundColor: getCompletedColor,
              opacity: 0.5,
            }}
          ></View>
        </View>
      </View>
    </View>
  );
};
export default PercentageBar_two;
