import React, { Component } from "react";
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "./RestaurantsListPanelPresentational.style";
import TextList from './TextList';

const RestaurantsListPanelPresentational = props => {
  const { dataSource,itemClickHandler, cancelButtonHandler, placeholderText } = props;
  const dataSourceMenu = dataSource;
  return (
    <View style={styles.container}>
      <View style={styles.container1}>

      </View>
      <View style={styles.container2}>
        <View>
        <Image source={require('../../../assets/img/subway.png')} style={styles.subwayTitleImage} resizeMode={'cover'} />
        </View>
        <View style={{height:'70%'}} >
        <TextList horizontal={false} rowType={9} numColumns={1} dataSource={dataSourceMenu} itemwrapper={styles.itemwrapper}
            itemClickHandler={itemClickHandler}
          />
        </View>
      </View>
    </View>
  );
}


export default RestaurantsListPanelPresentational;
