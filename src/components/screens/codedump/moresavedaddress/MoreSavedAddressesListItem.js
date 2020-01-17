import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import styles from "./MoreSavedAddress.style";
export default class MoreSavedAddressesListItem extends React.PureComponent {
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
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={this.state.item.profilepic}
            resizeMode={"center"}
            style={styles.locationIcon}
          />
        </View>
        <View style={styles.locationTextLayout}>
          <Text style={styles.locationText1}>{this.state.item.key}</Text>
          <Text style={styles.locationSubText1}>{this.state.item.title}</Text>
          <View style={{ flexDirection: "row" }}>
          <Text style={styles.locationText2}>Edit</Text>
          <Text style={styles.locationSubText2}>Delete</Text>
        </View>
        </View>
       
      </View>
    );
  }
}
