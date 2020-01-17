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
const networkUtils = require('../../../utils/NetworkUtils');

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {connect} from 'react-redux';
import {
  addStartIndex,
  addStartIndexToScreenStack,
  addNotificationTitleDataListToRedux,
  addNotificationEventsDataListToRedux,
  addNotificationEventsForCustomerDataList,
} from '../../../actions/index';

import FoodList from '../commonappui/FoodList';

import AppUtils from '../../../utils/AppUtils';
import PrintUtils from '../../../utils/PrintUtils';

class NotificationEventsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: this.props.itemIndex,
      dataObj: this.props.dataObj,
      notificationTitleArr: this.props.notificationTitleArr,
      notificationEventsForCustomerArr: this.props
        .notificationEventsForCustomerArr,
      dataSource: [],
    };
  }
  componentDidMount() {
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
      .catch(err => {});

      
      



  }

  render() {
    const dataSourceFilterMenu = [
      {
        backgroundColor: '#FFF',
        key: 'Anil',
        title: 'Events',
        itemTextColor: '#000',
        profilepic:
          'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0',
      },
      {
        backgroundColor: '#f3f4f6',
        key: 'Offers',
        title: 'Cusines',
        itemTextColor: '#777779',
        profilepic:
          'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fanil.jpg?alt=media&token=78b94b84-55df-4c7d-aa69-109c3753dfa0',
      },
      {
        backgroundColor: '#f3f4f6',
        key: 'Toast',
        itemTextColor: '#777779',
        title: 'Offer & More',
        profilepic:
          'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85',
      },
      {
        backgroundColor: '#f3f4f6',
        key: 'Toast',
        itemTextColor: '#777779',
        title: 'Offer & More',
        profilepic:
          'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85',
      },
      {
        backgroundColor: '#f3f4f6',
        key: 'Toast',
        itemTextColor: '#777779',
        title: 'Offer & More',
        profilepic:
          'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85',
      },
      {
        backgroundColor: '#f3f4f6',
        key: 'Toast',
        itemTextColor: '#777779',
        title: 'Offer & More',
        profilepic:
          'https://firebasestorage.googleapis.com/v0/b/rnfirebasedemo-a238a.appspot.com/o/profiles%2Fkittu.jpg?alt=media&token=7496b5dc-619b-4998-be97-73815d567b85',
      },
    ];
    return (
      <View style={styles.notificationsEventsPageBg}>
        <FoodList
          dataSource={dataSourceFilterMenu}
          orientationHorizontal={false}
          numColumns={1}
          itemType={34}
          itemwrapper={{marginTop: hp('1%')}}
          itemClickHandler={() => {}}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  PrintUtils.printLogWithClassName(
    'Mapping NotificationToastItem state',
    state,
  );
  return AppUtils.retrieveStateDataInRedux(state);
};

const mapDispatchToProps = dispatch => {
  return {
    addNotificationEventsForCustomerDataListToRedux: index => {
      dispatch(addNotificationEventsForCustomerDataList(index));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationEventsPage);
