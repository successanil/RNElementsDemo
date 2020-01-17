import React from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

import styles from './HomeListItem.style';


import {connect} from 'react-redux';
import {addNotificationOffersForCustomerDataList,addNotificationOffersHeadersForCustomerDataList} from '../../../actions/index';

import FoodList from '../commonappui/FoodList';

import AppUtils from '../../../utils/AppUtils';
import PrintUtils from '../../../utils/PrintUtils';
const networkUtils = require('../../../utils/NetworkUtils');

class NotificationOffersPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: this.props.itemIndex,
      dataObj: this.props.dataObj,
      loadingAI:"none",
      notificationTitleArr: this.props.notificationTitleArr,
      notificationOffersHeaderArr:this.props.notificationOffersForCustomerArr,
      notificationOffersForCustomerArr:this.props.notificationOffersForCustomerArr
    };
  }
  render() {
    
    return (
      <View style={{width: '100%', height: '100%',display:this.state.loadingAI}}>
        <View style={styles.notificationsEventsPageBg}>
          <FoodList
            dataSource={this.state.notificationOffersHeaderArr}
            orientationHorizontal={true}
            itemType={35}
            itemwrapper={{}}
            showsHorizontalScrollIndicator={false}
            itemClickHandler={() => {}}
          />
        </View>
        <FoodList
          dataSource={this.state.notificationOffersForCustomerArr}
          orientationHorizontal={false}
          numColumns={1}
          itemType={33}
          showsVerticalScrollIndicator={false}
          itemwrapper={{}}
          itemClickHandler={() => {}}
        />
      </View>
    );
  }

  componentDidMount() {
    if(this.props.notificationOffersForCustomerArr.length == 0){
      // show progress modal here
       
      var customerId = '';
    var offersData = networkUtils.fetchNotificationOffersForCustomer(
      customerId,
    );
    offersData
      .then(result => {
        PrintUtils.printLogWithClassName('Notifications Offers Page data1', result.data1);
        PrintUtils.printLogWithClassName('Notifications Offers Page data2', result.data2);
        // console.log(result.data1);
        this.props.addNotificationOffersHeadersForCustomerDataListToRedux(result.data1);
        this.props.addNotificationOffersForCustomerDataListToRedux(result.data2);
        
        
        // console.log(data);
        // console.log(seg1Arr);
        // console.log(seg2Arr);
        //DBUtils.createNotificationOffersData(result.data.data);
        
        // this.setState({
        //   updated:1,
        //   notificationOffersHeaderArr:result.data1,
        //   notificationOffersForCustomerArr:result.data2
        // });
        this.setState({
          loadingAI:"none"
        })

        
      })
      .catch(() => {});
    } else {
      this.setState({
        loadingAI:"flex"
      })
    }

    
  }

}

const mapStateToProps = state => {
  PrintUtils.printLogWithClassName(
    'Mapping NotificationOffersPage state',
    state.notificationReducer,
  );
  return AppUtils.retrieveStateDataInRedux(state);
};

const mapDispatchToProps = dispatch => {
  return {
    addNotificationOffersForCustomerDataListToRedux: index => {
      dispatch(addNotificationOffersForCustomerDataList(index));
    },
    addNotificationOffersHeadersForCustomerDataListToRedux: index => {
      dispatch(addNotificationOffersHeadersForCustomerDataList(index));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationOffersPage);
