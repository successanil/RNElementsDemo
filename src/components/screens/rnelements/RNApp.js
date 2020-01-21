// Import libraries for making a component
import React, {Component} from 'react';
import {View, ScrollView, BackHandler} from 'react-native';

import AppDialog from '../commonappui/appdialog/AppDialog';

const cc = require('../../../utils/ColorsContants');

import {connect} from 'react-redux';
import AppUtils from '../../../utils/AppUtils';
import PrintUtils from '../../../utils/PrintUtils';
import networkUtils from '../../../utils/NetworkUtils';

import Dimens from '../../../utils/Dimens';

import {Button, Text, Input} from 'react-native-elements';

import {
  addStartIndex,
  addStartIndexToScreenStack,
  addNotificationTitleDataListToRedux,
  addNotificationToastForCustomerDataList,
  addNotificationOffersForCustomerDataList,
  addNotificationOffersHeadersForCustomerDataList,
} from '../../../actions/index';

class RNApp extends Component {
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

  componentDidMount() {
    this.props.addStartIndexToData(202); // screen number
    var startIndexArr = this.props.startIndexStack;
    startIndexArr.push(202);
    this.props.addStartIndexToStackData(startIndexArr);

    BackHandler.addEventListener('hardwareBackPress', this.backPressed);
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

  componentWillUnmount() {}

  displayMiddleLayout() {
    if (this.state.displayLayout == 0) {
      return this.displayNormalLayout();
    }
  }

  render() {
    return <View style={{height: '100%'}}>{this.displayMiddleLayout()}</View>;
  }

  displayNormalLayout() {
    return (
      <View style={{flex: 1}}>
        {this.addGenericModal()}
        <ScrollView style={{display: this.state.displaySV}}>
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                padding: Dimens.wpFive,
              }}>
              <View style={{marginTop: 50}}></View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text>Ad Title</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  marginBottom: Dimens.hpTwo,
                }}></View>

              <Input
                placeholder="BASIC INPUT"
                containerStyle={{
                  backgroundColor: '#F1F1F1',
                  borderRadius: Dimens.wpTwo,
                }}
                inputContainerStyle={{
                  borderBottomWidth: 0,
                  backgroundColor: '#F1F1F1',
                  borderRadius: Dimens.wpTwo,
                }}
              />

              <View
                style={{
                  marginTop: Dimens.hpFive,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text>Article Name</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  marginBottom: Dimens.hpTwo,
                }}></View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Button title="Upload" />
              </View>
              <View
                style={{
                  flex1: 1,
                  flexDirection: 'row',
                  height: Dimens.hpFour,
                  marginBottom: Dimens.hpTwo,
                  marginTop: Dimens.hpTwo,
                }}>
                <View style={{flex: 1}}>
                  <Text>Available Quantity</Text>
                </View>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Button title="-" containerStyle={{flex: 1}} />
                  <Input
                    placeholder="BA"
                    containerStyle={{
                      backgroundColor: '#F1F1F1',
                      flex: 1,
                      borderRadius: Dimens.wpTwo,
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      backgroundColor: '#F1F1F1',
                      borderRadius: Dimens.wpTwo,
                    }}
                  />
                  <Button title="+" containerStyle={{flex: 1}} />
                </View>
              </View>
              <View>
                <Text>Description</Text>
                <Input
                  placeholder=""
                  containerStyle={{
                    backgroundColor: '#F1F1F1',
                    borderRadius: Dimens.wpTwo,
                  }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    backgroundColor: '#F1F1F1',
                    borderRadius: Dimens.wpTwo,
                  }}
                />
              </View>
              <View
                style={{
                  marginBottom: Dimens.hpTwo,
                  marginTop: Dimens.hpTwo,
                  flex1: 1,
                  flexDirection: 'row',
                  height: 50,
                }}>
                <View style={{flex: 1}}>
                  <Text>Initial Price</Text>
                </View>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Button title="-" containerStyle={{flex: 1}} />
                  <Input
                    placeholder="BA"
                    containerStyle={{
                      backgroundColor: '#F1F1F1',
                      flex: 1,
                      borderRadius: Dimens.wpTwo,
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      backgroundColor: '#F1F1F1',
                      borderRadius: Dimens.wpTwo,
                    }}
                  />
                  <Button title="+" containerStyle={{flex: 1}} />
                </View>
                <View style={{flex: 1}}>
                  <Text>Price after discount</Text>
                </View>
              </View>
              <View
                style={{
                  marginBottom: Dimens.hpTwo,
                  marginTop: Dimens.hpTwo,
                  flex1: 1,
                  flexDirection: 'row',
                  height: 50,
                }}>
                <View style={{flex: 1}}>
                  <Text>Availability Period</Text>
                </View>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <Button title="-" containerStyle={{flex: 1}} />
                  <Input
                    placeholder="BA"
                    containerStyle={{
                      backgroundColor: '#F1F1F1',
                      flex: 1,
                      borderRadius: Dimens.wpTwo,
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      backgroundColor: '#F1F1F1',
                      borderRadius: Dimens.wpTwo,
                    }}
                  />
                  <Button title="+" containerStyle={{flex: 1}} />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Button title="Right" />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(RNApp);
