import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import styles from "./ExpandableListsRow.style";

export default class ExpandableListsRowOne extends React.PureComponent {
  
  constructor(props){
    super(props);
    const {Title,Count} = this.props;
    this.state ={
      Title:Title,
      Count:Count
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>{this.state.Title}</Text>
        <Text style={styles.Count}>{this.state.Count} items</Text>
      </View>
    );
  }
}
