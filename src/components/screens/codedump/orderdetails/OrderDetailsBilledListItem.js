import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import styles from "./OrderDetails.style";
export default class OrderDetailsBilledListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    const { itemIndex, title, item } = this.props;
    this.state = {
      itemIndex,
      title,
      item
    };
  }

  render() {
    return (
      <View style={styles.containerBilledItem}>
        <View style={{width:'10%'}}>
          <Image
            source={require("../../../assets/img/veg.png")}
            style={{ width: 16, height: 16 }}
          />
        </View>

        <View style={{width:'70%'}}>
          <Text
            style={styles.subtotal}
          >
            {this.state.item.itemName} x {this.state.item.itemQty}
          </Text>
        </View>

        <View style={{ width:'20%',alignItems: "flex-end"}}>
          <Text
            style={styles.subtotal}
          >
            Rs {(this.state.item.itemQty)*(this.state.item.itemUnitPrice)}
          </Text>
        </View>
      </View>
    );
  }
}
