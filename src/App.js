import React, {Component} from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';

// routes import
import RootStack from './Routes';
import {NavigationContainer} from '@react-navigation/native';

import {COLORS} from './common/utils';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  UNSAFE_componentWillMount() {}

  render() {
    // console.disableYellowBox = true;

    return (
      <View style={{flex: 1, backgroundColor: COLORS.primary}}>
        <StatusBar translucent backgroundColor={COLORS.black} />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </View>
    );
  }
}
