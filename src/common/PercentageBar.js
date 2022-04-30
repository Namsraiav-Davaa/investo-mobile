import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const PercentageBar = ({
  navigation,
  percentage,
  height,
  backgroundColor,
  completedColor,
}) => {
  const [getPercentage, setPercentage] = useState(percentage);
  const [getheight, setHeight] = useState(height);
  const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);
  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            width: '85%',
            height: getheight,
            backgroundColor: getBackgroundColor,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              width: getPercentage ? getPercentage : 0,
              height: getheight,
              borderRadius: 10,
              backgroundColor: getCompletedColor,
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default PercentageBar;
