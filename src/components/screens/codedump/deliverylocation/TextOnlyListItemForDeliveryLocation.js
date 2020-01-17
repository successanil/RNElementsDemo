/*
Configurable Component for TextOnyListItemForOrderTracking

*/

import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import styles from "./TextOnlyListItem.style";
import PrintUtils from "../../../utils/PrintUtils";

export default class TextOnlyListItemForDeliveryLocation extends React.PureComponent {
  constructor(props) {
    super(props);
    const { title, item } = props;
    this.state = {
      title: title,
      item: item
    };
  }
  render() {
    return (
      <View style={[styles.itemwrapper]}>
        <View style={styles.itemwrapperInner}>
          <Image
            source={this.state.item.profilepic}
            style={{ width: 16, height: 16 }}
            resizeMode={"contain"}
          />
          <Text style={styles.title}>{this.state.item.title}</Text>
        </View>
        <View style={styles.tabIndicator} />
      </View>
    );
  }

  static getDerivedStateFromProps(props, state) {
    if (props.item !== state.item) {
      return {
        item: props.item
      };
    }
    // Return null if the state hasn't changed
    return null;
  }
}
