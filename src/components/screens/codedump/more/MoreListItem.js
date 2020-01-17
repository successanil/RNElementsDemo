import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import styles from "./More.style";
export default class MoreListItem extends React.PureComponent {

  constructor(props) {
    super(props);
    const {itemIndex,title,item} = this.props;
    this.state = {
      itemIndex,
      title,
      item
    };
  }

  render() {
    return (
      <View style={{flexDirection:'row',alignItems:'center',marginBottom:16}}>
              <View style={{width:'5%'}}>
                <Image 
                 source={this.state.item.profilepic}
                 resizeMode={'center'}
                 style={styles.locationIcon}
                />
              </View>
              <View style={[styles.locationTextLayout,{width:'90%'}]}>
                <Text style={styles.locationText}>{this.state.item.key}</Text>
                {/* <Text style={styles.locationSubText}>{this.state.item.title}</Text> */}
              </View>
              <View style={{width:'5%'}}>
                <Image 
                 source={this.state.item.rightarrow}
                 resizeMode={'center'}
                 style={styles.locationIcon}
                />
              </View>
      </View>


    );
  }
}
