import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import styles from './HomeListItem.style';
const cc = require('../../../utils/ColorsContants');
const constants = require('../../../utils/constants');

const DBUtils = require('../../../utils/DBUtils');

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {connect} from 'react-redux';
import {addNotificationToastForCustomerDataList} from '../../../actions/index';

import FoodList from '../commonappui/FoodList';

import AppUtils from '../../../utils/AppUtils';
import PrintUtils from '../../../utils/PrintUtils';

class NotificationToastPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: this.props.itemIndex,
      dataObj: this.props.dataObj,
      notificationTitleArr: this.props.notificationTitleArr,
    };
  }
  render() {
    var notificationToastPromise = DBUtils.getNotificationToastData();

    notificationToastPromise
      .then(result => {
        PrintUtils.printLogWithClassName('getNotificationToastData', result);
      })
      .catch(error => {});
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
      {
        backgroundColor: '#f3f4f6',
        key: 'Toast',
        title: 'Toast',
        titleColor: cc.colorInactiveTab,
        profilepic:
          'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85',
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
    return (
      <View style={[styles.pageBg, {flex: 1}]}>
        <FoodList
          dataSource={dataSource}
          orientationHorizontal={false}
          numColumns={1}
          itemType={32}
          itemwrapper={{}}
          itemClickHandler={() => {}}
        />
      </View>
    );
  }
  componentDidMount() {
    // var data = [
    //   {
    //     name: 'hello',
    //   },
    // ];
    // this.props.addNotificationToastForCustomerDataListToRedux(data);


    // this will be used to make a network call to get data if not data in local

    // logic to update local cache is to be added
    //DBUtils.createNotificationToastData(data);
  }
}

const mapStateToProps = state => {
  PrintUtils.printLogWithClassName(
    'Mapping NotificationToastPage state',
    state,
  );
  return AppUtils.retrieveStateDataInRedux(state);
};

const mapDispatchToProps = dispatch => {
  return {
    addNotificationToastForCustomerDataListToRedux: index => {
      dispatch(addNotificationToastForCustomerDataList(index));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationToastPage);
