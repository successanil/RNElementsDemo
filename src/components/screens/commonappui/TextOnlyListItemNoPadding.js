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

export default class TextOnlyListItemNoPadding extends React.PureComponent {
  constructor(props){
    super(props);
    const {title} = props;
    this.state={
      title:title
    }
  }
  render() {
    return (
      <View style={[styles.itemwrapperNoPadding,{flex:1}]}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../../../assets/img/search_tab.png')} style={styles.searchTabStyle}/>
        <Text style={styles.title}>{this.state.title}</Text>
        </View>
        <View style={styles.textwrapperNoPadding} />
      </View>
    );
  }
}
