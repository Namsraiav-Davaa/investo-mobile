// import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import {BarChart, Grid, XAxis, G, Path} from 'react-native-svg-charts';

// export default class TextDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     const fill = 'rgba(120, 50, 120, .5)';
//     const data = [5, 3, 4, 4, 4, 2, 1];
//     {
//       /* <Grid direction="HORIZONTAL" /> */
//     }

//     return (
//       <View style={{height: 200, padding: 20}}>
//         <BarChart
//           style={{height: 200}}
//           data={data}
//           svg={{fill}}
//           // spacing={50}
//           // gridMin={0}
//           // contentInset={{top: 30, bottom: 30}}
//         ></BarChart>
//         <XAxis
//           style={{marginHorizontal: -10}}
//           data={data}
//           formatLabel={(value, index) => index + 1}
//           contentInset={{left: 10, right: 10}}
//           svg={{fontSize: 14, fill: 'black'}}
//         />
//       </View>
//     );
//   }
// }
import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
// import ScatterChart from 'react-native-scatter-chart';

import BottomSheet from 'reanimated-bottom-sheet';
import ButtonView from '../common/ButtonView';
import TextCommonRegular from '../common/TextCommonRegular';
import {COLORS, FONTS_SIZE} from '../common/utils';

// const chartData = [
//   {
//     color: 'red',
//     unit: '%',
//     values: [
//       [0, 0],
//       [1, 0.5877852522924731],
//       [2, 0.9510565162951535],
//       [3, 0.9510565162951536],
//       [4, 0.5877852522924732],
//       [5, 1.2246467991473532e-16],
//       [6, -0.587785252292473],
//       [7, -0.9510565162951535],
//       [8, -0.9510565162951536],
//       [9, -0.5877852522924734],
//       [10, -2.4492935982947064e-16],
//       [11, 0.5877852522924729],
//       [12, 0.9510565162951535],
//       [13, 0.9510565162951536],
//       [14, 0.5877852522924734],
//       [15, 3.6739403974420594e-16],
//       [16, -0.5877852522924728],
//       [17, -0.9510565162951534],
//       [18, -0.9510565162951538],
//       [19, -0.5877852522924735],
//     ],
//   },
//   {
//     color: 'green',
//     unit: '%',
//     values: [
//       [0, 1],
//       [1, 0.8090169943749475],
//       [2, 0.30901699437494745],
//       [3, -0.30901699437494734],
//       [4, -0.8090169943749473],
//       [5, -1],
//       [6, -0.8090169943749475],
//       [7, -0.30901699437494756],
//       [8, 0.30901699437494723],
//       [9, 0.8090169943749473],
//       [10, 1],
//       [11, 0.8090169943749476],
//       [12, 0.30901699437494773],
//       [13, -0.3090169943749471],
//       [14, -0.8090169943749472],
//       [15, -1],
//       [16, -0.8090169943749477],
//       [17, -0.30901699437494784],
//       [18, 0.309016994374947],
//       [19, 0.8090169943749471],
//     ],
//   },
// ];

export default class TextDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBottomSheetvisible: true,
    };
  }

  render() {
    const renderContent = () => (
      <View
        style={{
          backgroundColor: COLORS.otp_bg,
          padding: 16,
          // justifyContent: 'center',
          alignItems: 'center',
          height: 350,
        }}
      >
        <TextCommonRegular
          text={'Create New List'}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_16}
          marginTop={10}
          fontWeight={'bold'}
        />
        <View
          style={{
            backgroundColor: COLORS.bottom_bg_color,
            height: 65,
            width: 58,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Image
            resizeMode="contain"
            style={{width: 30, height: 30}}
            source={require('../assets/Account_icon.png')}
          />
          <Image
            resizeMode="contain"
            style={{
              width: 18,
              height: 18,
              position: 'absolute',
              top: 50,
              left: 45,
            }}
            source={require('../assets/Round_edit_icon.png')}
          />
        </View>

        <TextInput
          style={{
            height: 40,
            width: '90%',
            textAlign: 'left',
            backgroundColor: COLORS.bottom_bg_color,
            color: COLORS.white,
            borderRadius: 5,
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 20,
          }}
          onChangeText={value => this.setState({text: value})}
          value={this.state.text}
          placeholderTextColor={COLORS.white}
          placeholder="create a List"
          keyboardType="default"
        />

        <View
          style={{
            marginTop: 20,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ButtonView
            landingSize="full"
            btnName={'Create'}
            onPressSite={() => {}}
            buttonType={'pass'}
            colorBlack={'black'}
          />
          <TextCommonRegular
            text={'Cancel'}
            color={COLORS.button_bg}
            fontSize={FONTS_SIZE.txt_14}
            marginTop={20}
            fontWeight={'bold'}
          />
        </View>
      </View>
    );

    return (
      <View style={{flex: 1}}>
        {/* <ScatterChart
          backgroundColor="#ffffff"
          data={chartData}
          height={200}
          // horizontalLinesAt={[-1, -0.5, 0, 0.5, 1]}
          unitY="100"
          unitX="200"
        /> */}

        {this.state.isBottomSheetvisible === true ? (
          <BottomSheet
            ref={ref => (this.sheetRef1 = ref)}
            snapPoints={[350, 350, 350]}
            borderRadius={0}
            renderContent={renderContent}
            onCloseEnd={() => this.setState({isBottomSheetvisible: false})}
          />
        ) : null}
      </View>
    );
  }
}
