import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, FONTS_SIZE} from '../common/utils';
import Header from '../common/Header';
import TextCommonRegular from '../common/TextCommonRegular';
import ButtonView from '../common/ButtonView';
import BottomSheet from 'reanimated-bottom-sheet';

export default class Card_Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBottomSheetvisible: false,
      bankArr: [
        {
          icon: require('../assets/khan_icon.png'),
          name: 'Хаан банк',
        },
        {
          icon: require('../assets/golomt_icon.png'),
          name: 'Голомт банк',
        },
      ],
    };
  }

  render() {
    const renderContent = () => (
      <View
        style={{
          backgroundColor: COLORS.otp_bg,
          width: '100%',
          height: 300,
        }}
      >
        <TextCommonRegular
          text={'Pick a card'}
          color={COLORS.faq_des_color}
          fontSize={FONTS_SIZE.txt_16}
          textAlign={'center'}
          numberOfLines={1}
        />

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            padding: 15,
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              height: 40,
              width: 40,
              tintColor: COLORS.marketIcon_color,
            }}
            resizeMode="contain"
            source={require('../assets/khan_icon.png')}
          />

          <View style={{flex: 0.7, marginLeft: 15}}>
            <TextCommonRegular
              text={'Хаан банк'}
              color={COLORS.faq_des_color}
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'center'}
              numberOfLines={1}
              textAlign={'left'}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: 45, width: 45}}
                resizeMode="contain"
                source={require('../assets/visa_logo.png')}
              />
              <TextCommonRegular
                text={'*******450'}
                color={COLORS.faq_des_color}
                fontSize={FONTS_SIZE.txt_16}
                textAlign={'center'}
                numberOfLines={1}
                textAlign={'left'}
                marginLeft={15}
              />
            </View>
          </View>
        </View>

        <View style={{borderBottomWidth: 0.9, borderColor: COLORS.white}} />

        <View
          style={{
            flexDirection: 'row',
            padding: 15,
            alignItems: 'center',
            marginLeft: 5,
          }}
        >
          <Image
            style={{
              height: 35,
              width: 35,
              tintColor: COLORS.marketIcon_color,
            }}
            resizeMode="contain"
            source={require('../assets/golomt_icon.png')}
          />
          <View style={{flex: 0.7, marginLeft: 15}}>
            <TextCommonRegular
              text={'Голомт банк'}
              color={COLORS.faq_des_color}
              fontSize={FONTS_SIZE.txt_14}
              textAlign={'center'}
              numberOfLines={1}
              textAlign={'left'}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                resizeMode="contain"
                source={require('../assets/Mastercard.png')}
              />
              <TextCommonRegular
                text={'*******561'}
                color={COLORS.faq_des_color}
                fontSize={FONTS_SIZE.txt_16}
                textAlign={'center'}
                numberOfLines={1}
                textAlign={'left'}
                marginLeft={15}
              />
            </View>
          </View>
        </View>

        <View style={{borderBottomWidth: 0.9, borderColor: COLORS.white}} />

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('AddNew_card');
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 15,
              marginLeft: 5,
            }}
          >
            <Image
              style={{height: 30, width: 30}}
              resizeMode="contain"
              source={require('../assets/add.png')}
            />
            <View style={{marginLeft: 15}} />
            <TextCommonRegular
              text={'Connect a new card'}
              color={COLORS.faq_des_color}
              fontSize={FONTS_SIZE.txt_16}
              numberOfLines={1}
              textAlign={'left'}
            />
          </View>
        </TouchableOpacity>
      </View>
    );

    const {navigation} = this.props;

    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.primary,
        }}
      >
        <Header
          headerType="auth"
          onBackClick={() => navigation.goBack(null)}
          headertitle="Картаар цэнэглэх"
        />
        <View style={{marginTop: 40}}>
          <TextCommonRegular
            text={'Amount'}
            color={COLORS.offwhite}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'center'}
            numberOfLines={1}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TextInput
              returnKeyType={'done'}
              keyboardType={'numeric'}
              style={{
                width: '55%',
                color: COLORS.white,
                fontSize: FONTS_SIZE.txt_18,
                fontFamily: FONTS.FontRegular,
                marginLeft: 10,
                textAlign: 'left',
              }}
              placeholder={'₮5,000,000 MNT'}
              secureTextEntry={false}
              placeholderTextColor={COLORS.white}
              onChangeText={value => this.setState({Account: value})}
              value={this.state.Account}
            />
          </View>
          <TextCommonRegular
            text={'= 1,755 USD'}
            color={COLORS.offwhite}
            fontSize={FONTS_SIZE.txt_14}
            textAlign={'center'}
            numberOfLines={1}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 0.6,
            backgroundColor: COLORS.card_bg,
            marginTop: 60,
          }}
        />

        <TextCommonRegular
          text={'Payment methods'}
          color={COLORS.offwhite}
          fontSize={FONTS_SIZE.txt_14}
          textAlign={'center'}
          numberOfLines={1}
          textAlign={'left'}
          marginLeft={15}
          marginTop={20}
        />
        <TouchableOpacity
          onPress={() =>
            this.setState({
              isBottomSheetvisible: true,
            })
          }
        >
          <View
            style={{
              backgroundColor: COLORS.card_bg,
              marginTop: 15,
              flexDirection: 'row',
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: COLORS.marketIcon_color,
              }}
              resizeMode="contain"
              source={require('../assets/golomt_icon.png')}
            />
            <View style={{flex: 0.9, marginLeft: 15}}>
              <TextCommonRegular
                text={'Card'}
                color={COLORS.offwhite}
                fontSize={FONTS_SIZE.txt_14}
                numberOfLines={1}
                textAlign={'left'}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 25, width: 25}}
                  resizeMode="contain"
                  source={require('../assets/Mastercard.png')}
                />
                <TextCommonRegular
                  text={'*******561'}
                  color={COLORS.offwhite}
                  fontSize={FONTS_SIZE.txt_16}
                  numberOfLines={1}
                  textAlign={'left'}
                  marginLeft={15}
                />
              </View>

              <TextCommonRegular
                text={'Change card >'}
                color={COLORS.button_bg}
                fontSize={FONTS_SIZE.txt_14}
                numberOfLines={1}
                textAlign={'left'}
                marginTop={5}
              />
            </View>
            <View style={{flex: 0.1, justifyContent: 'center'}}>
              <Image
                style={{height: 25, width: 25}}
                resizeMode="contain"
                source={require('../assets/check_green_icon.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TextCommonRegular
          text={
            'You will be able to participate in primary and\nsecondary trading by opening an account at the\nCentral Securities Depository. '
          }
          color={COLORS.offwhite}
          fontSize={FONTS_SIZE.txt_12}
          textAlign={'center'}
          numberOfLines={8}
          textAlign={'left'}
          marginTop={15}
          marginLeft={10}
        />
        <View
          style={{position: 'absolute', bottom: 10, width: '100%', height: 80}}
        >
          <View
            style={{
              width: '100%',
              height: 0.6,
              backgroundColor: COLORS.card_bg,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
              marginTop: 10,
              alignItems: 'center',
            }}
          >
            <View style={{flex: 0.9}}>
              <TextCommonRegular
                text={'Top up amount '}
                color={COLORS.offwhite}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'center'}
                numberOfLines={1}
                textAlign={'left'}
              />
              <TextCommonRegular
                text={'₮5,000,000'}
                color={COLORS.white}
                fontSize={FONTS_SIZE.txt_16}
                textAlign={'center'}
                numberOfLines={1}
                textAlign={'left'}
              />
            </View>
            <View
              style={{
                width: '55%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ButtonView
                landingSize="full"
                btnName={'CONFIRM'}
                onPressSite={() => {
                  this.props.navigation.navigate('Card_details_two');
                }}
              />
            </View>
          </View>
        </View>
        {this.state.isBottomSheetvisible === true ? (
          <BottomSheet
            ref={ref => (this.sheetRef1 = ref)}
            snapPoints={[300, 300, 300]}
            borderRadius={0}
            renderContent={renderContent}
            onCloseEnd={() => this.setState({isBottomSheetvisible: false})}
          />
        ) : null}
      </View>
    );
  }
}
