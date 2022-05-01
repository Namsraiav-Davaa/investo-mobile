import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import {COLORS, FONTS_SIZE, FONTS} from '../common/utils';
import HomeHeader from '../common/HomeHeader';
import ImageSliderView from '../common/ImageSliderView';
import TextCommonLight from '../common/TextCommonLight';
import TextCommonMedium from '../common/TextCommonMedium';
import Panel from '../common/Panel';
import Panel2 from '../common/Panel2';
import Panel4 from '../common/Panel4';
import Item_Home from '../ItemView/Item_Home';
import BottomSheet from 'reanimated-bottom-sheet';
import ButtonView from '../common/ButtonView';
import TextCommonRegular from '../common/TextCommonRegular';
import {TextInput} from 'react-native-gesture-handler';
import IconFile from '../common/CommonFontIcon';
import ButtonView_1 from '../common/ButtonView_1';
import ButtonView_red_1 from '../common/ButtonView_red_1';
import messaging from '@react-native-firebase/messaging';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myList: [
        {
          icon: 'APU',
          title: 'APU',
          description: 'АПУ ХК',
          currentPrice: 1385,
          currentChange: -0.43,
          changes: [1, 2, 3, -1, -2, -0.43],
        },
        {
          icon: 'AARD',
          title: 'AARD',
          description: 'Ард санхүүгийн нэгдэл ХК',
          currentPrice: 5055,
          currentChange: 0.9,
          changes: [1, 2, 3, -1, -2, 0.9],
        },
        {
          icon: 'MNDL',
          title: 'MNDL',
          description: 'Мандал Даатгал ХК',
          currentPrice: 98.19,
          change: 0.03,
          changes: [1, 2, 3, -1, -2, 0.03],
        },
      ],
      topMovers: [
        {
          icon: 'CUMN',
          title: 'CUMN',
          description: 'Сэнтрал Экспресс Си Ви Эс',
          currentPrice: 199.02,
          currentChange: 4.54,
          changes: [1, 2, 3, -1, -2, 4.54],
        },
        {
          icon: 'AARD',
          title: 'AARD',
          description: 'Ард санхүүгийн нэгдэл ХК',
          currentPrice: 5055,
          currentChange: 0.9,
          changes: [1, 2, 3, -1, -2, 0.9],
        },
      ],
      topTwenty: [
        {
          icon: 'APU',
          title: 'APU',
          description: 'АПУ ХК',
          currentPrice: 1385,
          currentChange: -0.43,
          changes: [1, 2, 3, -1, -2, -0.43],
        },
        {
          icon: 'AARD',
          title: 'AARD',
          description: 'Ард санхүүгийн нэгдэл ХК',
          currentPrice: 5055,
          currentChange: 0.9,
          changes: [1, 2, 3, -1, -2, 0.9],
        },
      ],
      isBottomSheetvisible: false,
      isMoreSheetvisible: false,
      isReferralSheetvisible: false,
    };
  }

  componentDidMount() {
    this.requestUserPermission();
  }

  async requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  UNSAFE_componentWillMount() {
    this.setState({
      isBottomSheetvisible: false,
      isMoreSheetvisible: false,
      isReferralSheetvisible: false,
    });
  }

  onCenterView(img, lable, onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{alignItems: 'center', padding: 20, width: 95}}>
        <IconFile.SvgIcon name={img} size={25} color={COLORS.white} />

        {/* <MyIcon width={20} height={20} fill="#000" /> */}
        <TextCommonLight
          text={lable}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_12}
          textAlign={'center'}
          numberOfLines={2}
          marginTop={6}
        />
      </TouchableOpacity>
    );
  }

  render() {
    const renderContent = () => (
      <View
        style={{
          backgroundColor: COLORS.otp_bg,
          alignItems: 'center',
          height: 330,
          padding: 5,
        }}>
        <TextCommonRegular
          text={'Create New List'}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_16}
          marginTop={5}
          fontWeight={'bold'}
        />
        <View
          style={{
            borderRadius: 10,
            height: 75,
            width: '18%',
            backgroundColor: COLORS.txt_input,
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View>
              <Image
                source={require('../assets/light-bulb.png')}
                style={{width: 35, height: 35}}
              />
            </View>
            <View
              style={{alignItems: 'flex-end', marginLeft: 52, marginTop: 1}}>
              <Image
                source={require('../assets/Round_edit_icon.png')}
                style={{width: 23, height: 23}}
                resizeMode={'contain'}
                containerStyle={styles.icon}
                // onPress={console.log('I was clicked')}
              />
            </View>
          </View>
        </View>

        <TextInput
          style={{
            width: '85%',
            height: 40,
            backgroundColor: COLORS.txt_input,
            borderRadius: 10,
            marginBottom: 15,
            marginTop: 12,
            margin: 10,
            color: COLORS.white,
            paddingLeft: 15,
          }}
          placeholderTextColor="white"
          autoCapitalize="none"
          placeholder="Enter your text"
        />
        <ButtonView
          landingSize="full"
          btnName={'Create'}
          buttonType={'pass'}
          colorBlack={'black'}
          onPressSite={() => {}}
        />
        <TouchableOpacity
          onPress={() => {
            this.setState({
              isBottomSheetvisible: false,
            });
          }}>
          <TextCommonRegular
            text={'Cancel'}
            color={COLORS.button_bg}
            fontSize={FONTS_SIZE.txt_14}
            marginTop={15}
            fontWeight={'bold'}
          />
        </TouchableOpacity>
      </View>
    );
    const renderContent1 = () => (
      <View
        style={{
          backgroundColor: COLORS.otp_bg,
          height: 170,
          alignItems: 'center',
          padding: 15,
          marginTop: 20,
        }}>
        <ButtonView
          landingSize="full"
          btnName={'FOREIGN STOCK'}
          buttonType={'Trade'}
          onPressSite={() => {}}
        />
        <View style={{marginTop: 20}} />
        <ButtonView
          landingSize="full"
          btnName={'DOMESTIC STOCK'}
          buttonType={'Trade'}
          onPressSite={() => {}}
        />
      </View>
    );
    const renderContentRefal = () => (
      <View
        style={{
          backgroundColor: COLORS.otp_bg,
          height: 200,
          padding: 15,
          marginTop: 20,
          alignItems: 'center',
        }}>
        <TextCommonRegular
          text={'Invite Friend'}
          color={COLORS.white}
          fontSize={FONTS_SIZE.txt_16}
          marginTop={5}
          fontWeight={'bold'}
        />
        <TextInput
          style={{
            width: '85%',
            height: 40,
            marginBottom: 15,
            marginTop: 12,
            margin: 10,
            color: COLORS.white,
            paddingLeft: 15,
            borderBottomWidth: 0.5,
            borderColor: COLORS.offwhite,
          }}
          placeholderTextColor={COLORS.offwhite}
          maxLength={10}
          value={this.state.phoneNum}
          onChangeText={val => this.setState({phoneNum: val})}
          autoCapitalize="none"
          placeholder="Phone number"
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.4}}>
            <ButtonView_red_1
              landingSize="full_large"
              btnName={'CANCEL'}
              onPressSite={() => {
                this.setState({
                  isReferralSheetvisible: false,
                });
              }}
            />
          </View>
          <View style={{width: 30}} />
          <View style={{flex: 0.4}}>
            <ButtonView_1
              landingSize="full_large"
              btnName={'SEND'}
              onPressSite={() =>
                this.setState({
                  MyStocksbottomView: true,
                })
              }
            />
          </View>
        </View>
      </View>
    );
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.primary,
        }}>
        <HomeHeader
          headertitle={'тавтай морил'}
          headerTitle_des={'Б.Батхүлэг'}
          onProfileClick={() => this.props.navigation.navigate('Profile')}
          onShareItemClick={() => this.props.navigation.navigate('SearchPage')}
          onnotificationItemClick={() =>
            this.props.navigation.navigate('Notification')
          }
        />

        <ScrollView>
          <ImageSliderView />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            {this.onCenterView(
              'down_icon',
              'Deposit',

              () => this.props.navigation.navigate('Deposit'),
            )}
            {this.onCenterView('person_add', 'Referral', () => {
              this.setState({
                isReferralSheetvisible: true,
              });
            })}
            {this.onCenterView('card_giftcard', 'IPO', () =>
              this.props.navigation.navigate('ComingSoon', {title: 'IPO'}),
            )}
            {this.onCenterView('more_icon', 'Гадаад арилжаа', () =>
              this.props.navigation.navigate('ComingSoon', {
                title: 'Гадаад арилжаа',
              }),
            )}
          </View>

          <View
            style={{width: '100%', height: 4, backgroundColor: COLORS.black}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <TextCommonMedium
              text={'Lists'}
              color={COLORS.white}
              fontSize={FONTS_SIZE.txt_16}
              textAlign={'center'}
              numberOfLines={1}
            />
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  isMoreSheetvisible: true,
                })
              }>
              <Image
                source={require('../assets/more_icon_1.png')}
                style={{width: 22, height: 22, tintColor: COLORS.white}}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: 5, marginRight: 5}}>
            <Panel
              title="My List"
              LeftIcon={require('../assets/Emoji_icon.png')}
              description={`${this.state.myList.length} item(s)`}>
              {this.state.myList.map((item, index) => (
                  <Item_Home
                    key={index}
                    item={item}
                    onItemClick={() =>
                      this.props.navigation.navigate('StocksDetails')
                    }
                  />
                ))}
            </Panel>
          </View>

          <View
            style={{
              marginLeft: 5,
              marginRight: 5,
            }}>
            <Panel2
              title="My Cryptos"
              LeftIcon={require('../assets/Money_icon.png')}
              description={'7 item'}>
              {this.state.myList.map((item, index) => {
                return (
                  <Item_Home
                    key={index}
                    item={item}
                    onItemClick={() =>
                      this.props.navigation.navigate('StocksDetails')
                    }
                  />
                );
              })}
            </Panel2>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              marginLeft: 5,
              marginRight: 5,
            }}>
            <View>
              <Image
                resizeMode="contain"
                style={{width: 50, height: 50}}
                source={require('../assets/plus_icon.png')}
              />
            </View>
            <View style={{flex: 1, marginLeft: 10}}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    isBottomSheetvisible: true,
                  })
                }>
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: FONTS.FontRegular,
                    fontSize: FONTS_SIZE.txt_14,
                  }}>
                  {'Create New List'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{width: '100%', height: 4, backgroundColor: COLORS.black}}
          />
          <Panel4
            title="Top movers"
            LeftIcon={require('../assets/Money_icon.png')}
            onPress={() => this.props.navigation.navigate('MarketPage')}
            description={'Investo  2021.11.23'}>
            {this.state.topMovers.map((item, index) => {
              return (
                <Item_Home
                  key={index}
                  item={item}
                  onItemClick={() =>
                    this.props.navigation.navigate('StocksDetails')
                  }
                />
              );
            })}
          </Panel4>
          <View
            style={{width: '100%', height: 4, backgroundColor: COLORS.black}}
          />
          <Panel4
            title="TOP 20"
            LeftIcon={require('../assets/Money_icon.png')}
            onPress={() => this.props.navigation.navigate('MarketPage')}
            description={'Монголын хөрөнгийн бирж 2022.01.27'}>
            {this.state.topTwenty.map((item, index) => {
              return (
                <Item_Home
                  key={index}
                  item={item}
                  onItemClick={() =>
                    this.props.navigation.navigate('StocksDetails')
                  }
                />
              );
            })}
          </Panel4>
        </ScrollView>
        {this.state.isBottomSheetvisible === true ? (
          <Modal
            animationType="slide"
            visible={this.state.isBottomSheetvisible}
            animated={true}
            onRequestClose={() =>
              this.setState({
                isBottomSheetvisible: false,
              })
            }
            transparent={true}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  isBottomSheetvisible: false,
                });
              }}
              style={{
                width: '100%',
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, .5)',
              }}>
              <BottomSheet
                ref={ref => (this.sheetRef1 = ref)}
                snapPoints={[300, 300, 300]}
                borderRadius={0}
                renderContent={renderContent}
                onCloseEnd={() => this.setState({isBottomSheetvisible: false})}
              />
            </TouchableOpacity>
          </Modal>
        ) : null}

        {this.state.isMoreSheetvisible === true ? (
          <Modal
            animationType="slide"
            visible={this.state.isMoreSheetvisible}
            animated={true}
            onRequestClose={() =>
              this.setState({
                isMoreSheetvisible: false,
              })
            }
            transparent={true}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  isMoreSheetvisible: false,
                });
              }}
              style={{
                width: '100%',
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, .5)',
              }}>
              <BottomSheet
                ref={ref => (this.sheetRef1 = ref)}
                snapPoints={[170, 170, 170]}
                borderRadius={0}
                renderContent={renderContent1}
                onCloseEnd={() => this.setState({isMoreSheetvisible: false})}
              />
            </TouchableOpacity>
          </Modal>
        ) : null}

        {this.state.isReferralSheetvisible === true ? (
          <Modal
            animationType="slide"
            visible={this.state.isReferralSheetvisible}
            animated={true}
            onRequestClose={() =>
              this.setState({
                isReferralSheetvisible: false,
              })
            }
            transparent={true}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  isReferralSheetvisible: false,
                });
              }}
              style={{
                width: '100%',
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, .5)',
              }}>
              <BottomSheet
                ref={ref => (this.sheetRef1 = ref)}
                snapPoints={[200, 200, 200]}
                borderRadius={0}
                renderContent={renderContentRefal}
                onCloseEnd={() =>
                  this.setState({isReferralSheetvisible: false})
                }
              />
            </TouchableOpacity>
          </Modal>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: '#ccc',
    position: 'absolute',
  },
});
