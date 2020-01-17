
import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import styles from './HomeListItem2.style';

export default class HomeListItem2 extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      itemIndex:this.props.itemIndex
    }
  }
  render() {
    containerStyle = '';
    if(this.state.itemIndex % 2 == 0){
      containerStyle = styles.containerItem;
    } else {
      containerStyle = styles.containerItem2;
    }
    return (
      <View style={containerStyle}>
      <Image
        source={require("../../../assets/img/dish_large.png")}
        style={styles.imgStyle}
      />
      <View style={{position:'absolute',bottom:0,width:'100%'}}>
      <View style={{paddingLeft:'5%',backgroundColor:'rgba(255, 255, 255, 0.9)',paddingBottom:'5%'}}>
      <Text style={styles.textHeadingItem}>45 % OFF!</Text>
      <Text style={styles.textHeadingItem}>COUPON 'STAR 200'</Text>
      <Text style={styles.textCity}>AMAYA FREN RESIDENCY VADODARA</Text>
      </View>
      </View>
      </View>
    );
  }
}
