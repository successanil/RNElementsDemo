import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import styles from './HomeListItem2.style';

var dateFormat = require('dateformat');

const Dimens = require('../../../utils/Dimens');

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class NotificationsOffersListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataObj:this.props.dataObj,
      itemIndex: this.props.itemIndex,
    };
  }
  render() {
    containerStyle = '';
    if (this.state.itemIndex % 2 == 0) {
      containerStyle = styles.containerItem;
    } else {
      containerStyle = styles.containerItem2;
    }
    return (
      <View>
        <View style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
          <View style={{flexDirection: 'row', paddingTop: hp('0.5%')}}>
            <Text
              style={[
                styles.textHeadingItemForNotificationOffers,
                {fontSize: Dimens.hpOnePointFive},
              ]}>
              Promo Code:
            </Text>
            <Text style={[styles.offerCodeText, {fontSize: Dimens.hpOnePointFive}]}>
              {this.state.dataObj.coupon_code}
            </Text>
          </View>

          <Text
            style={[
              styles.textsubHeadingItemForNotificationOffers,
              {marginTop: Dimens.hpPointOne, fontSize: Dimens.hpOnePointSeven},
            ]}>
            {this.state.dataObj.coupon_title}
          </Text>
          <Text
            style={[
              styles.textHeadingItem2,
              {marginTop: Dimens.hpPointOne, fontSize: Dimens.hpOnePointSix},
            ]}>
            {this.state.dataObj.coupon_description}
          </Text>
          <Text
            style={[
              styles.textCity,
              {marginTop: Dimens.hpPointOne, fontSize: Dimens.hpOnePointFive},
            ]}>
            Valid till  
            { 
              ' '+dateFormat(this.state.dataObj.coupon_valid_till,"mmmm dS, yyyy")
            }
          </Text>
          <View style={styles.horLine} />
        </View>
      </View>
    );
  }
}
