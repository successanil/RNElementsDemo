import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import styles from "./HomeListItem2.style";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class NotificationsToastListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: this.props.itemIndex
    };
  }
  render() {
    containerStyle = "";
    if (this.state.itemIndex % 2 == 0) {
      containerStyle = styles.containerItem;
    } else {
      containerStyle = styles.containerItem2;
    }
    return (
      <View>
        <View style={styles.toastItemContainer}>
          <Text style={[styles.textHeadingItem,{fontSize:hp('2.2%')}]}>Your feedback saved us!</Text>
          <Text style={[styles.textHeadingItem2,{fontSize:hp('1.6%')}]}>
            Hi Nitish, we thank you for writing a review about your order
            321890. We have solved the problem faced by you… and we deeply
            regret that you’ve to face such thing.
          </Text>
          <Text style={[styles.textCity,{fontSize:hp('1.5%')}]}>10th Jun</Text>
          <View style={styles.horLine} />
        </View>
      </View>
    );
  }
}
