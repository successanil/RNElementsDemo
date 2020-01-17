import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import styles from "./RestaurantProfileOneListItem.style";

export default class RestaurantProfileOneListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemClickHandler:this.props.itemClickHandler,
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
      <View style={containerStyle}>
        <TouchableOpacity onPress={
          ()=>{
            this.state.itemClickHandler(0)
          }

        }>
          <Image
            source={require("../../../assets/img/resturant_profile_item.png")}
            style={styles.imgStyle}
            resizeMode={"cover"}
          />
          <Text style={[styles.dishName, { color: "#90959f" }]}>
            Basmati Rice Lunchbox
          </Text>
          <Text style={styles.dishNameSemibold}>Paneer Briyani</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 16 }}>
          <View style={styles.priceLayout}>
            <Text style={[styles.dishName, { color: "#2546B0" }]}>Rs 220</Text>
          </View>
          <View style={styles.addButtonLayout}>
            <TouchableOpacity
              onPress={() => {
                this.state.itemClickHandler(1)
              }}
            >
              <Text style={[styles.dishName, { color: "#FA6C3C" }]}>+ Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
