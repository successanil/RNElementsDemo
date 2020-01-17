import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import styles from "./OrderHistoryListItem.style";

export default class OrderHistoryListItem extends React.PureComponent {
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.container1}>
            <Image
              source={require("../../../assets/img/dish_icon.png")}
              style={styles.itemImage}
            />
          </View>
          <View
            style={styles.container2}
          >
            <Text style={styles.item}>Santushti Smoothies and Shakes</Text>
            <Text style={styles.itemtitle}>FatheGanj</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View
          style={styles.container2}
        >
          <Text style={styles.itemHeading}>ITEMS</Text>
          <Text style={styles.item2title}>2 X French Fries</Text>
        </View>
        <View
          style={styles.container2}
        >
          <Text style={styles.itemHeading}>ORDERED ON</Text>
          <Text style={styles.item2title}>10 May 2019 at 12:00 PM</Text>
        </View>
        <View
          style={styles.container2}
        >
          <Text style={styles.itemHeading}>TOTAL AMOUNT</Text>
          <Text style={styles.item2title}>Rs 280</Text>
        </View>

        <View
          style={styles.containerOrderStatus}
        >
          <Text style={styles.itemHeadingStatus}>TRACK ORDER</Text>
        </View>

      </View>
    );
  }
}
