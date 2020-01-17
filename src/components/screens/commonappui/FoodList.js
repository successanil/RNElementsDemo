import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './Foodlist.style';

import NotificationHeaderItem from '../fdonotifcationsmod/NotificationHeaderItem';
import {connect} from 'react-redux';
import {
  addStartIndex,
  addStartIndexToScreenStack,
  addNotificationTitleDataListToRedux,
} from '../../../actions/index';

import AppUtils from '../../../utils/AppUtils';
import PrintUtils from '../../../utils/PrintUtils';
import NotificationsToastListItem from '../fdonotifcationsmod/NotificationsToastListItem';
import NotificationsOffersListItem from '../fdonotifcationsmod/NotificationsOffersListItem';
import NotificationsEventsListItem from '../fdonotifcationsmod/NotificationsEventsListItem';
import NotificationsOffersListItemFirstList from '../fdonotifcationsmod/NotificationsOffersListItemFirstList';


// import HomeListItem from '../home/HomeListItem';
// import HomeListItem2 from '../home/HomeListItem2';
// import RestaurantProfileOneListItem from './RestaurantProfileOneListItem';
// import TextOnlyListItem from './TextOnlyListItem';
// import TextOnlyListItemForDifferentRestaurants from './TextOnlyListItemForDifferentOutlets';
// import TextOnlyListItemNoPadding from './TextOnlyListItemNoPadding';
// import TextListItemForSearchTab from '../search/TextListItemForSearchTab';
// import SearchRestaurantItem from '../search/SearchRestaurantItem';
// import TextOnlyListItemNoPaddingForFilter from './TextOnlyListItemNoPaddingForFilter';
// import OrderHistoryListItem from '../orders/OrderHistoryListItem';
// import ExpandableListsRowChildOne from './ExpandableListsRowChildOne';
// import ExpandableListsRowChildTwo from '../search/ExpandableListsRowChildTwo';
// import TextOnlyListItemForOrderTracking from '../trackingorder/TextOnlyListItemForOrderTracking';
// import RecommendedListItem from '../recommended/RecommendedListItem';
// //import DashboardSavedAddressesListItem from "../dashboardaddress/DashboardSavedAddressesListItem";
// import MoreListItem from '../more/MoreListItem';
// import PaymentMethodsListItem from '../paymentmethods/PaymentMethodsListItem';
// import FavoriteRestaurantsListItem from '../favoriterestaurants/FavoriteRestaurantsListItem';
// import MoreSavedAddressesListItem from '../moresavedaddress/MoreSavedAddressesListItem';
// import OrderDetailsListItem from '../orderdetails/OrderDetailsListItem';
// import OrderDetailsBilledListItem from '../orderdetails/OrderDetailsBilledListItem';
// import TextOnlyListItemForDeliveryLocation from '../deliverylocation/TextOnlyListItemForDeliveryLocation';

class FoodList extends Component {
  constructor(props) {
    super(props);
    const {
      showsHorizontalScrollIndicator,
      showVerticalScrollIndicator,
      selectedTab,
      dataSource,
      orientationHorizontal,
      numColumns,
      itemClickHandler,
      itemType,
      itemwrapper,
    } = this.props;
    this.state = {
      dataSource: dataSource,
      orientationHorizontal: orientationHorizontal,
      numColumns: numColumns,
      itemType: itemType,
      itemClickHandler: itemClickHandler,
      itemwrapper: itemwrapper,
      selectedTab: selectedTab,
      refreshing: false,
      showsHorizontalScrollIndicator: showsHorizontalScrollIndicator,
      showVerticalScrollIndicator: showVerticalScrollIndicator,
    };
  }

  render() {
    return (
      <View>
        <FlatList
          style={{width: '100%'}}
          horizontal={this.state.orientationHorizontal}
          data={this.state.dataSource}
          extraData={this.state.dataSource}
          numColumns={this.state.numColumns}
          showVerticalScrollIndicator={this.state.showVerticalScrollIndicator}
          showsHorizontalScrollIndicator={
            this.state.showsHorizontalScrollIndicator
          }
          renderItem={({item, index}) => (
            <View style={this.state.itemwrapper}>
              <TouchableOpacity
                onPress={() => {
                  this.state.itemClickHandler(index);
                }}>
                {this.renderDesiredListItem(
                  this.state.itemType,
                  item,
                  index,
                  item.title,
                  item.key,
                  styles,
                  item.profilepic,
                )}
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }

  renderDesiredListItem(i, item, itemIndex, title, key, styles, profilepic) {
    if (i == 31) {
      return (
        <NotificationHeaderItem
          dataObj={item}
          itemIndex={itemIndex}
          title={title}
          name={key}
          pp={{uri: profilepic}}
        />
      );
    } else if (i == 32) {
      return (
        <NotificationsToastListItem
          dataObj={item}
          itemIndex={itemIndex}
          title={title}
          name={key}
          pp={{uri: profilepic}}
        />
      );
    } else if (i == 33) {
      return (
        <NotificationsOffersListItem
          dataObj={item}
          itemIndex={itemIndex}
          title={title}
          name={key}
          pp={{uri: profilepic}}
        />
      );
    } else if (i == 34) {
      return (
        <NotificationsEventsListItem
          dataObj={item}
          itemIndex={itemIndex}
          title={title}
          name={key}
          pp={{uri: profilepic}}
        />
      );
    } else if (i == 35) {
      return (
        <NotificationsOffersListItemFirstList
          dataObj={item}
          itemIndex={itemIndex}
          title={title}
          name={key}
          pp={{uri: profilepic}}
        />
      );
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedState FoodList');
  //   console.log(state.notificationTitleArr);
  //   if (props.notificationTitleArr !== state.notificationTitleArr) {
  //     return {
  //       notificationTitleArr: props.notificationTitleArr,
  //     };
  //   }
  //   // Return null if the state hasn't changed
  //   return null;
  // }
}

const mapStateToProps = state => {
  // PrintUtils.printLogWithClassName("Mapping FlatList state", state);
  return AppUtils.retrieveStateDataInRedux(state);
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
