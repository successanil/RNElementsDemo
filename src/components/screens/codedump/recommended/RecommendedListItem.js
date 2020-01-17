import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import styles from "./RecommendedListItem.style";

export default class RecommendedListItem extends React.PureComponent {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={styles.container1}>
          <Image
            source={require("../../../assets/img/recommended_list_img.png")}
            style={styles.itemImage}
            resizeMode={'center'}
          />
          <View style={{width:'100%',flexDirection:'row'}}>
            <View style={{width:'80%'}}>
            <Text>Basmati Rice Lunchbox</Text>
            <Text>Paneer Biryani</Text>
            <Text>Rs 220</Text>
            </View>
            <View style={{width:'20%'}}>
              <Text>+ Add</Text>
            </View>
          </View>
        </View>
      
      </View>
    );
  }
}
