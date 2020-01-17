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
import FoodList from "../commonappui/FoodList";
import PrintUtils from "../../../utils/PrintUtils";

export default class TextOnlyListItemForOrderTracking extends React.PureComponent {
  constructor(props){
    super(props);
    const {title,item} = props;
    this.state={
      title:title,
      item:item
    }
  }
  render() {
    return (
      <View style={[styles.itemwrapper]}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={this.state.item.profilepic} style={{width:32,height:32}} resizeMode={'contain'} />
        <Text style={{marginLeft:16}}>{this.state.item.title}</Text>
        </View>
        
        <View style={styles.textwrapperNoPadding} />
      </View>
    );
  }

  static getDerivedStateFromProps(props, state) {
    if (props.item !== state.item) {
      return {
        item: props.item,
      };
    }
    // Return null if the state hasn't changed
    return null;
  }
}
