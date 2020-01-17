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

export default class TextOnlyListItemForDifferentOutlets extends React.PureComponent {
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = {
      title: title
    }
  }
  render() {
    return (
      <View style={[styles.itemwrapperForDifferentRestaurants, { flex: 1 }]}>
        <View style={{ flexDirection: 'row' ,width:'100%' }}>
          <Text style={styles.differntRestaurantName}>{this.state.title.toUpperCase()}</Text>
          <View style={{position:'absolute',right:16,flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../../assets/img/star_green.png')} style={{ width: 12, height: 12 ,marginRight:16}} />
            <Text style={styles.differntRestaurantTime}>27 MINS</Text>
          </View>
        </View>
        <View style={styles.textwrapper} />
      </View>
    );
  }
}
