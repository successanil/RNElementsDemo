import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

import styles from './HomeListItem2.style';
const cc = require('../../../utils/ColorsContants');
import AttendingIcon from '../../../assets/img/attending_icon.svg';
import AttendingUsers from '../../../assets/img/noun_group.svg';
import ShareIcon from '../../../assets/img/share_icon.svg';

import FastImage from 'react-native-fast-image';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Dimens from '../../../utils/Dimens';

export default class NotificationsEventsListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: this.props.itemIndex,
      item: this.props.item,
    };
  }
  render() {
    var containerStyle = '';
    if (this.state.itemIndex % 2 == 0) {
      containerStyle = styles.containerItem;
    } else {
      containerStyle = styles.containerItem2;
    }
    return (
      <View style={[styles.containerNotificationEvents]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: '35%'}}>
            <View style={{borderColor: '#000', borderWidth: 0.5}}></View>
          </View>
          <View style={{width: '30%', alignItems: 'center'}}>
            <Text>15 january 2019</Text>
          </View>
          <View style={{width: '35%'}}>
            <View style={{borderColor: '#000', borderWidth: 0.5}}></View>
          </View>
        </View>
        <View style={[styles.containerNotificationInnerEvents]}>
          <View
            style={{
              // width: wp('26%'),
              //backgroundColor: '#f9efef',
              borderTopLeftRadius: wp('5%'),
              borderBottomLeftRadius: wp('5%'),
            }}>
            <FastImage
              style={styles.notificationEventsImgStyle}
              source={{
                uri: 'https://unsplash.it/400/400?image=1',
                //headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            {/* <Image 
               style={styles.notificationEventsImgStyle}
               source = {require('../../../assets/img/events_notifcations.png')}
               resizeMode={"stretch"}

            /> */}
            
          </View>
          <View
            style={styles.containerInner2}>
            <View style={{flex: 1}}>
              <Text style={[styles.textHeadingItemNotificationEvents]}>
                Event's Name
              </Text>
              <View style={{flexDirection: 'row'}}>
                <AttendingUsers height="15" width="15" />
                <Text
                  style={[
                    styles.textSubHeadingItemNotificationEvents,
                    {color: cc.colorActiveTab},
                  ]}>
                  22 people attending
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  paddingBottom: Dimens.wpTwo,
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={[
                    styles.textCityNotificationEvents,
                    // {position: 'absolute', left: 0, bottom: Dimens.wpTwo},
                  ]}>
                  10.05 | Shivaji Nagar
                </Text>
              </View>
            </View>

            <View
              style={styles.shareAndAttendingContainers}>
              <View style={{flex: 1}}>
                <ShareIcon height="18" width="18" />
              </View>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <AttendingIcon
                  // style={{, bottom: Dimens.wpOne}}
                  width="90"
                  height="26"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
