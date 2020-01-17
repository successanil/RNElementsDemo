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

export default class TextOnlyListItem extends React.PureComponent {
  constructor(props){
    super(props);
    const {title} = props;
    this.state={
      title:title
    }
  }
  render() {
    return (
      <View style={[styles.itemwrapper,{flex:1}]}>
        <Text>{this.state.title}</Text>
        <View style={styles.textwrapper} />
      </View>
    );
  }
}
