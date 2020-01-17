import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import { Thumbnail, List, ListItem, Separator } from 'native-base';

import styles from "./ExpandableListsRowChild.style";

export default class ExpandableListsRowChildOne extends React.PureComponent {

  constructor(props) {
    super(props);
    const { childArr } = this.props;
    this.state = {
      childArr: childArr
    }
  }

  render() {
    return (
      <View>
        {this.getChildView()}
      </View>
    );
  }


  getChildView() {
    var retArr = [];
    this.state.childArr.forEach((child) => {
      retArr.push(
          <View style={styles.container}>
            <View>
              <Image source={require('../../../assets/img/veg.png')} style={{width:16,height:16}} />
            </View>
            <View style={{marginLeft:10}}>
              <Text style={styles.childTitle}>{child.title}</Text>
              <Text style={styles.childDesc}>{child.desc}</Text>
              <Text style={styles.childPrice}>{child.price}</Text>
            </View>
          </View>
        
      );
    })
    return (
      retArr
    );
  }
}
