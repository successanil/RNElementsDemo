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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {connect} from 'react-redux';

import AppUtils from '../../../utils/AppUtils';
import PrintUtils from '../../../utils/PrintUtils';

class NotificationHeaderItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: this.props.itemIndex,
      dataObj: this.props.dataObj,
    };
  }
  render() {
    return (
      <View style={styles.notificationHeaderContainer}>
        <Text
          style={[
            styles.notificationHeaderItemStyle,
            {
              color: this.props.notificationTitleArr[this.state.itemIndex]
                .titleColor,
            },
          ]}>
          {this.state.dataObj.title}
        </Text>
      </View>
    );
  }

  // static getDerivedStateFromProps(props, state) {
  //   // console.log('getDerivedState');
  //   // console.log(props.notificationTitleArr);
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
  // PrintUtils.printLogWithClassName("Mapping NotificationHeaderItem state", state);
  return AppUtils.retrieveStateDataInRedux(state);
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationHeaderItem);
