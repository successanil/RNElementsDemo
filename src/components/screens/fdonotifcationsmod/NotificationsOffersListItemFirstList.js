import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import styles from './HomeListItem2.style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const cc = require('../../../utils/ColorsContants');
import FastImage from 'react-native-fast-image';

export default class NotificationsOffersListItemFirstList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
      <View style={styles.containerOfferFirstList}>
        <FastImage
          style={styles.imgStyle}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
            //headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}>
          <View
            style={styles.topViewForOffersFirstListItem}>
            <View style={{height: '60%'}}>
              <Text
                style={[
                  styles.textHeadingItem1FirstListOffers,
                  {fontSize: hp('1.5%')},
                ]}>
                World Cup Special
              </Text>
              <Text
                style={[
                  styles.textHeadingItem2FirstListOffers,
                  {fontSize: hp('1.8%')},
                ]}>
                Get 60 % OFF*
              </Text>
              <Text
                style={[
                  styles.textHeadingItemConditionApply,
                  {fontSize: hp('1.5%')},
                ]}>
                Conditions Apply
              </Text>
            </View>
            <View style={{height: '40%'}}>
              <Text
                style={[
                  styles.textHeadingItemPromoCode,
                  {color: '#FFF', fontSize: hp('1.5%')},
                ]}>
                Use promo code
              </Text>
              <Text
                style={[
                  styles.textCity,
                  {
                    fontFamily: 'Montserrat-Semibold',
                    color: cc.offerColor,
                    fontSize: hp('1.6%'),
                  },
                ]}>
                WC 560
              </Text>
            </View>
          </View>
        </FastImage>
      </View>
    );
  }
}
