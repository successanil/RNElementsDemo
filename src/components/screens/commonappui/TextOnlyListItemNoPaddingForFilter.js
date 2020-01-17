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

export default class TextOnlyListItemNoPaddingForFilter extends React.PureComponent {
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
      <View style={[styles.itemwrapperNoPaddingForFilter,{backgroundColor:this.state.item.backgroundColor,flex:1}]}>
        <View style={{flexDirection:'row'}}>
        <Text style={[styles.textCentral,{color:this.state.item.itemTextColor}]}>{this.state.title}</Text>
        </View>
        <View style={styles.textwrapperNoPaddingForFilter} />
      </View>
    );
  }
}
