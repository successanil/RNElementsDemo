import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import styles from "./HomeListItem.style";

export default class HomeListItem extends React.PureComponent {
  render() {
    return (
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
          <Text style={styles.itemtitle}>North Indian</Text>
          <Text style={styles.itemtitle}>FatheGanj</Text>
          <View style={styles.divider}/>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <View style={{width:'50%',flexDirection:'row'}}>
          <Image source={require('../../../assets/img/star.png')} style={{width:16,height:16}} />
          <Text style={styles.ratingText}>4.6</Text>
          </View>
          <View style={styles.deliverLayout}>
           <Text style={styles.ratingText}>Deliver in 20 min</Text>
          </View>
          </View>
        </View>
      </View>
    );
  }
}
