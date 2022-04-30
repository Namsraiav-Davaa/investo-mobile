import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Platform, Image, View} from 'react-native';
import TextCommonRegular from './common/TextCommonRegular';
import {COLORS, FONTS_SIZE} from './common/utils';

// import screen
import SplashPage from './component/SplashPage';
import OnBording from './component/OnBording';
import LoginPage from './component/LoginPage';
import Registration from './component/Registration';
import Registration_1 from './component/Registration_1';
import Registration_two from './component/Registration_two';
import Registration_Main from './component/Registration_Main';
import Kyc_Main from './component/Kyc_Main';
import Kyc_one from './component/Kyc_one';
import Kyc_two from './component/Kyc_two';
import Kyc_three from './component/Kyc_three';
import Kyc_Four from './component/Kyc_Four';
import Kyc_Five from './component/Kyc_Five';
import Kyc_six from './component/Kyc_six';
import Kyc_Seven from './component/Kyc_Seven';

import Notification from './component/Notification';
import changepassword from './component/changepassword';
import Password from './component/Password';
import Settings from './component/Settings';
import Support from './component/Support';
import Contract from './component/Contract';
import FAQ from './component/FAQ';
import Termsconditions from './component/Termsconditions';
import Contract_details from './component/Contract_details';
import Deposit from './component/Deposit';
import Amount from './component/Amount';
import Card_Payments from './component/Card_Payments';
import Deposit_successful from './component/Deposit_successful';
import Card_details_two from './component/Card_details_two';
import AddNew_card from './component/AddNew_card';
import Order_details from './component/Order_details';
import Withdrawal from './component/Withdrawal';
import Stock_list from './component/Stock_list';

// profile screen amd setting

import Profile from './component/Profile/Profile';
import Account from './component/Profile/Account';
import EmailAndPassword from './component/Profile/EmailAndPassword';

// Bottom Tab Import

import HomePage from './component/HomePage';
import MarketPage from './component/MarketPage';
import PortfolioPage from './component/PortfolioPage';
import TradePage from './component/TradePage';

import SearchPage from './component/SearchPage';
import StocksDetails from './component/StocksDetails';
import TextDemo from './component/TextDemo';
import List_IPO_Active from './component/List_IPO_Active';
import Top20Details from './component/Top20Details';
import OrderSeeAll from './component/OrderSeeAll';
import PortfolioHistory from './component/PortfolioHistory';
import IconFile from './common/CommonFontIcon';
import ComingSoon from './component/ComingSoon';

const Stack_Auth = createStackNavigator();

const Tab = createBottomTabNavigator();

function AuthNavigator() {
  return (
    <Stack_Auth.Navigator initialRouteName="SplashPage" headerMode="none">
      <Stack_Auth.Screen name="SplashPage" component={SplashPage} />
      <Stack_Auth.Screen name="OnBording" component={OnBording} />
      <Stack_Auth.Screen name="LoginPage" component={LoginPage} />
      <Stack_Auth.Screen name="Registration" component={Registration} />
      <Stack_Auth.Screen name="AllTabs" component={AllTabs} />
      <Stack_Auth.Screen name="Registration_1" component={Registration_1} />
      <Stack_Auth.Screen
        name="Registration_Main"
        component={Registration_Main}
      />

      <Stack_Auth.Screen name="Registration_two" component={Registration_two} />
      <Stack_Auth.Screen name="Kyc_Main" component={Kyc_Main} />
      <Stack_Auth.Screen name="Kyc_one" component={Kyc_one} />
      <Stack_Auth.Screen name="Kyc_two" component={Kyc_two} />
      <Stack_Auth.Screen name="Kyc_three" component={Kyc_three} />
      <Stack_Auth.Screen name="Kyc_Four" component={Kyc_Four} />
      <Stack_Auth.Screen name="Kyc_Five" component={Kyc_Five} />
      <Stack_Auth.Screen name="Kyc_six" component={Kyc_six} />
      <Stack_Auth.Screen name="Notification" component={Notification} />
      <Stack_Auth.Screen name="Profile" component={Profile} />
      <Stack_Auth.Screen name="Account" component={Account} />
      <Stack_Auth.Screen name="EmailAndPassword" component={EmailAndPassword} />
      <Stack_Auth.Screen name="changepassword" component={changepassword} />
      <Stack_Auth.Screen name="Password" component={Password} />
      <Stack_Auth.Screen name="Settings" component={Settings} />
      <Stack_Auth.Screen name="Support" component={Support} />
      <Stack_Auth.Screen name="Contract" component={Contract} />
      <Stack_Auth.Screen name="FAQ" component={FAQ} />
      <Stack_Auth.Screen name="Termsconditions" component={Termsconditions} />
      <Stack_Auth.Screen name="Contract_details" component={Contract_details} />
      <Stack_Auth.Screen name="SearchPage" component={SearchPage} />
      <Stack_Auth.Screen name="StocksDetails" component={StocksDetails} />
      <Stack_Auth.Screen name="Deposit" component={Deposit} />
      <Stack_Auth.Screen name="Amount" component={Amount} />
      <Stack_Auth.Screen name="Card_Payments" component={Card_Payments} />
      <Stack_Auth.Screen name="Withdrawal" component={Withdrawal} />
      <Stack_Auth.Screen name="Kyc_Seven" component={Kyc_Seven} />
      <Stack_Auth.Screen name="Stock_list" component={Stock_list} />

      <Stack_Auth.Screen
        name="Deposit_successful"
        component={Deposit_successful}
      />
      <Stack_Auth.Screen name="Card_details_two" component={Card_details_two} />
      <Stack_Auth.Screen name="AddNew_card" component={AddNew_card} />
      <Stack_Auth.Screen name="Order_details" component={Order_details} />

      <Stack_Auth.Screen name="TextDemo" component={TextDemo} />
      <Stack_Auth.Screen name="List_IPO_Active" component={List_IPO_Active} />
      <Stack_Auth.Screen name="Top20Details" component={Top20Details} />
      <Stack_Auth.Screen name="OrderSeeAll" component={OrderSeeAll} />
      <Stack_Auth.Screen name="PortfolioHistory" component={PortfolioHistory} />
      <Stack_Auth.Screen name="ComingSoon" component={ComingSoon} />
    </Stack_Auth.Navigator>
  );
}

function AllTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      headerMode="none"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              height: hp(9),
            },
            android: {
              height: hp(8),
            },
          }),
          backgroundColor: COLORS.primary,
        },
        activeTintColor: COLORS.white,
        inactiveTintColor: COLORS.lightBlack,
      }}
      // tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
            <View style={{alignItems: 'center', marginTop: 25}}>
              {/* <Image
                style={{
                  width: 21,
                  height: 21,
                  tintColor: color,
                  resizeMode: 'contain',
                }}
                source={require('./assets/Home_icon.png')}
              /> */}

              <IconFile.SvgIcon name={'Vector_icon'} size={22} color={color} />

              <TextCommonRegular
                text={'Home'}
                color={color}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'center'}
                numberOfLines={1}
                marginTop={6}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MarketPage"
        component={MarketPage}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
            <View style={{alignItems: 'center', marginTop: 25}}>
              {/* <Image
                style={{
                  width: 25,
                  height: 25,
                  tintColor: color,
                  resizeMode: 'contain',
                }}
                source={require('./assets/Market_icon.png')}
              /> */}

              <IconFile.SvgIcon name={'market_icon'} size={22} color={color} />

              <TextCommonRegular
                text={'Market'}
                color={color}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'center'}
                numberOfLines={1}
                marginTop={6}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="TradePage"
        component={TradePage}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
            <View style={{alignItems: 'center', marginTop: 25}}>
              {/* <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  tintColor: color,
                }}
                source={require('./assets/Trade_icon.png')}
              /> */}
              <IconFile.SvgIcon name={'Group_icon'} size={22} color={color} />
              <TextCommonRegular
                text={'Trade'}
                color={color}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'center'}
                numberOfLines={1}
                marginTop={6}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="PortfolioPage"
        component={PortfolioPage}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
            <View style={{alignItems: 'center', marginTop: 25}}>
              {/* <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  tintColor: color,
                }}
                source={require('./assets/bubble_chart.png')}
              /> */}
              <IconFile.SvgIcon name={'bubble_chart'} size={23} color={color} />

              <TextCommonRegular
                text={'Portfolio'}
                color={color}
                fontSize={FONTS_SIZE.txt_12}
                textAlign={'center'}
                numberOfLines={1}
                marginTop={6}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AuthNavigator;
