// Import libraries for making a component
import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import FoodList from '../commonappui/FoodList';
import styles from './Dashboard.style';
import {Header} from '../commonappui/header/Header';
import AppDialog from '../commonappui/appdialog/AppDialog';

const cc = require('../../../utils/ColorsContants');

import {connect} from 'react-redux';
import AppUtils from '../../../utils/AppUtils';
import PrintUtils from '../../../utils/PrintUtils';
import networkUtils from '../../../utils/NetworkUtils';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Dimens from '../../../utils/Dimens';
import AppFonts from '../../../utils/AppFonts';


import {
  addStartIndex,
  addStartIndexToScreenStack,
  addNotificationTitleDataListToRedux,
  addNotificationToastForCustomerDataList,
  addNotificationOffersForCustomerDataList,
  addNotificationOffersHeadersForCustomerDataList,
} from '../../../actions/index';
import NotificationEventsPage from './NotificationEventsPage';
import NotificationToastPage from './NotificationToastPage';
import NotificationOffersPage from './NotificationOffersPage';

class NotificationsPage extends Component {
  constructor(props) {
    super(props);

    const dataSource = [
      {
        backgroundColor: '#FFF',
        key: 'Events',
        title: 'Events',
        titleColor: cc.colorActiveTab,
        profilepic:
          'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0',
      },
      {
        backgroundColor: '#f3f4f6',
        key: 'Offers',
        title: 'Offers',
        titleColor: cc.colorInactiveTab,
        profilepic:
          'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0',
      },
      {
        backgroundColor: '#f3f4f6',
        key: 'Toast',
        title: 'Toast',
        titleColor: cc.colorInactiveTab,
        profilepic:
          'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85',
      },
    ];
    this.props.addNotificationTitleDataList(dataSource);

    this.state = {
      displayHeader: 'flex',
      displaySV: 'flex',
      displayLayout: 0,
      modalVisible: false,
      selectedTab: 0,
      notificationTitleArr: dataSource,
    };
  }

  onSwipeLeft() {
    //this.setState({myText: 'You swiped left!'});
    // if(this.state.selectedTab>0){
    //   var index = selectedTab - 1;
    //   this.moveToNextItemInHeaderList(index);
    // }
  }

  onSwipeRight() {
    // this.setState({myText: 'You swiped right!'});
    // if(this.state.selectedTab<2){
    //   var index = selectedTab + 1;
    //   this.moveToNextItemInHeaderList(index);
    // }
  }
  componentDidMount() {
    this.props.addStartIndexToData(202); // screen number
    var startIndexArr = this.props.startIndexStack;
    startIndexArr.push(202);
    this.props.addStartIndexToStackData(startIndexArr);

    AppUtils.populateReduxToastDataFromRealm()
      .then(result => {
        // add to redux here
        this.props.addNotificationToastForCustomerDataListToRedux(result);
        this.setState({
          updated: 1,
        });
      })
      .catch(() => {});

    AppUtils.populateReduxOffersDataFromRealm()
      .then(() => {
        // add to redux here
        // this.props.addNotificationOffersForCustomerDataListToRedux(result);
      })
      .catch(() => {});

    this.fetchNotificationsModuleData();

    BackHandler.addEventListener('hardwareBackPress', this.backPressed);
  }

  fetchNotificationsModuleData() {
    this.fetchNotificationsOffersData();
    this.fetchNotficationsEventsData();
  }

  fetchNotificationsOffersData() {
    var customerId = '';
    var offersData = networkUtils.fetchNotificationOffersForCustomer(
      customerId,
    );
    offersData
      .then(result => {
        this.props.addNotificationOffersHeadersForCustomerDataListToRedux(
          result.data1,
        );
        this.props.addNotificationOffersForCustomerDataListToRedux(
          result.data2,
        );
      })
      .catch(() => {});
  }

  fetchNotficationsEventsData() {
    var customerId = '';
    var offersData = networkUtils.fetchNotificationEventsForCustomer(
      customerId,
    );
    offersData
      .then(result => {
        PrintUtils.printLogWithClassName(
          'Notifications Events Page',
          result.data.data,
        );
        var data = result.data.data;
        this.props.addNotificationEventsForCustomerDataListToRedux(data);

        // we can put this offersData in realm also
      })
      .catch(() => {});
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
  }

  displayMiddleLayout() {
    if (this.state.displayLayout == 0) {
      return this.displayNormalLayout();
    } else if (this.state.displayLayout == 2) {
      return this.displaySearchScreen();
    } else if (this.state.displayLayout == 21) {
      return this.displaySearchCompletedScreen();
    }
  }

  displayRelevantNotificationPage() {
    console.log('displayRelevantNotificationPage' + this.state.selectedTab);
    if (this.state.selectedTab == 0) {
      return this.displayNotificationEventsPage();
    } else if (this.state.selectedTab == 1) {
      return this.displayNotificationOffersPage();
    } else if (this.state.selectedTab == 2) {
      return this.displayNotificationToastPage();
    }
  }

  displayNotificationToastPage() {
    return (
      <View style={{width: '100%'}}>
        <NotificationToastPage />
      </View>
    );
  }

  displayNotificationEventsPage() {
    return (
      <View style={{width: '100%'}}>
        <NotificationEventsPage></NotificationEventsPage>
      </View>
    );
  }

  displayNotificationOffersPage() {
    return (
      <View style={{width: '100%'}}>
        <NotificationOffersPage />
      </View>
    );
  }

  

  



  render() {
    return (
      <View style={{height: '100%'}}>
        {this.displayMiddleLayout()}
      </View>
    );
  }

  displayNormalLayout() {

    return (
      <View style={{flex: 1}}>
        {this.addGenericModal()}
        <View style={{display: this.state.displayHeader, paddingTop: wp('5%')}}>

          <Header
            headerText=""
            displayHomeAddress={'none'}
            displayHamburger={'none'}
            displayBackButton={'flex'}
            displaySmiley="flex"
            displaySearchIcon="none"
            headerTitle={['HOME', '31 A , RK Flats, near Vas ...']}
            styles={styles}
            buttonHandler={buttonNumber => {
              if (buttonNumber == 0) {
                alert('Hamburger Pressed');
              } else if (buttonNumber == 1) {
                alert('Back Pressed');
                // this.props.navigation.navigate("Splash");
              } else if (buttonNumber == 2) {
                // this.props.navigation.navigate("DashboardAddress");
              } else if (buttonNumber == 3) {
                var fetchNotificationSettingsForCustomer = networkUtils.fetchNotificationSettingsForCustomer();
                fetchNotificationSettingsForCustomer
                  .then(result => {
                    // console.log(result.data);
                    this.setState({
                      modalVisible: true,
                      modalInvokeVal: 5,
                      jsonData: result.data,
                      modalMessage: 'Please check search term.',
                      showLoadingIcon: 'none',
                    });
                  })
                  .catch(() => {});
              }
            }}
          />
        </View>
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}>
          <FilterPresentational
            radioSelectHandler={res => {
              alert(res.value);
            }}
            cancelButtonHandler={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            applyButtonHandler={() => {
              alert('filter applied');
            }}
            radio_props={radio_props}
            dataSource={dataSourceFilterMenu}
          />
        </Modal>
        
         */}
        <View style={{paddingBottom: Dimens.wpFive}}>
          <Text
            style={[
              styles.titleText,
              {fontFamily:AppFonts.montserratSemiBold,paddingLeft: Dimens.wpThree, fontSize: Dimens.hpThree},
            ]}>
            Notifications
          </Text>
          <View style={{paddingLeft: Dimens.wpThreePointFive}}>
            <FoodList
              dataSource={this.state.notificationTitleArr}
              orientationHorizontal={true}
              itemType={31}
              itemwrapper={{}}
              itemClickHandler={index => {
                // this.props.navigation.navigate("Offers");
                this.moveToNextItemInHeaderList(index);
              }}
            />
          </View>
        </View>
        <ScrollView style={{display: this.state.displaySV}}>
          <View style={{flex: 1}}>
            {this.displayRelevantNotificationPage()}
          </View>
        </ScrollView>
      </View>
    );
  }
 

  

  moveToNextItemInHeaderList(index) {
    var dataSource = this.state.notificationTitleArr;
    dataSource.map(obj => {
      obj.titleColor = cc.colorInactiveTab;
    });
    dataSource[index].titleColor = cc.colorActiveTab;
    this.props.addNotificationTitleDataList(dataSource);

    // now we want components to list should be updated
    this.setState({
      notificationTitleArr: dataSource,
      selectedTab: index,
    });
  }

  backPressed = () => {
    Alert.alert(
      'Exit App',
      'Do you want to exit?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: false},
    );
    return true;
  };

  addGenericModal() {
    return AppDialog.addGenericModal(
      this.state.modalInvokeVal,
      this.state.modalVisible,
      this.state.jsonData,
      this.state.modalMessage,
      this.state.showLoadingIcon,
      visible => {
        PrintUtils.printLogWithClassName(
          'Homescreen',
          'Now modal is ' + visible,
        );
        if (typeof visible == 'boolean') {
          this.setState({
            modalVisible: visible,
          });
        } else if (typeof visible == 'string') {
        }
      },
    );
  }
}

const mapStateToProps = state => {
  PrintUtils.printLogWithClassName('Mapping Notification state', state);
  return AppUtils.retrieveStateDataInRedux(state);
};

const mapDispatchToProps = dispatch => {
  return {
    addStartIndexToData: index => {
      dispatch(addStartIndex(index));
    },
    addStartIndexToStackData: dataArr => {
      dispatch(addStartIndexToScreenStack(dataArr));
    },
    addNotificationTitleDataList: dataArr => {
      dispatch(addNotificationTitleDataListToRedux(dataArr));
    },
    addNotificationToastForCustomerDataListToRedux: index => {
      dispatch(addNotificationToastForCustomerDataList(index));
    },
    addNotificationOffersForCustomerDataListToRedux: index => {
      dispatch(addNotificationOffersForCustomerDataList(index));
    },
    addNotificationOffersHeadersForCustomerDataListToRedux: index => {
      dispatch(addNotificationOffersHeadersForCustomerDataList(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsPage);
