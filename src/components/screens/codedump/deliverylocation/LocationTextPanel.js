import React, { Component } from "react";
import { Image, Text, TextInput, View, TouchableOpacity,ScrollView } from "react-native";
import FoodList from "../commonappui/FoodList";

import styles from "./LocationTextPanel.style";

class LocationTextPanel extends Component {
  constructor(props) {
    super(props);
    const { searchButtonHander, cancelButtonHandler, placeholderText } = props;
    this.state = {
      searchButtonHander: searchButtonHander,
      cancelButtonHandler: cancelButtonHandler,
      placeholderText: placeholderText,
      dataSource: [
        {
          key: "Anil",
          title: "HOME",
          profilepic: require('../../../assets/img/veg.png')
        },
        {
          key: "Sunil",
          title: "WORK",
          profilepic: require('../../../assets/img/veg.png')
        },
        {
          key: "Kittu",
          title: "OTHER",
          profilepic: require('../../../assets/img/veg.png')
        }
      ]
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={[styles.container]}>
          <View style={styles.container1}>
            <Text>LOCATION</Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder={"Bay terrace, cross island party"}
            ></TextInput>
            <Image source={require('../../../assets/img/location.png')} style={{position:'absolute',right:16,bottom:16,width:32,height:32}} />
          </View>
          <View style={styles.container1}>
            <Text>HOUSE/FLAT NO</Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder={"Enter house/flat number"}
            ></TextInput>
          </View>
          <View style={styles.container1}>
            <Text>LANDMARK</Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder={"Enter Landmark"}
            ></TextInput>
          </View>


          
          
        </View>
      </ScrollView>
    );
  }
}

export default LocationTextPanel;
