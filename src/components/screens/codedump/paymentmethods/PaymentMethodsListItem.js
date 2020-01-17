import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import styles from "./PaymentMethods.style";
export default class PaymentMethodsListItem extends React.PureComponent {
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
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: styles.verticalMarginForScreen
          }}
        >
          <View style={{ width: "10%" }}>
            <Image
              source={this.state.item.profilepic}
              resizeMode={"contain"}
              style={styles.locationIcon}
            />
          </View>
          <View style={[styles.locationTextLayout, { width: "60%" }]}>
            <Text style={styles.locationText}>{this.state.item.key}</Text>
            <Text style={styles.locationSubText}>
              {this.state.item.subTitle}
            </Text>
          </View>
          <View style={{ width: "30%" }}>
            <Text style={[styles.locationSubText,{color:this.state.item.linkStatusColor}]}>
              {this.state.item.linkStatus}
            </Text>
          </View>
        </View>

        <View
          style={{
            // marginTop: 16,
            // marginBottom: 16,
            height: 1,
            backgroundColor: "#BDC0C5"
          }}
        />
      </View>
    );
  }
}
