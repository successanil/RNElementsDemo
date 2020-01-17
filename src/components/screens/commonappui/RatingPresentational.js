import React, { Component } from "react";
import { ScrollView,Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "./RatingPresentational.style";
import FilterComp from "../filter/FilterComp";
import TextList from './TextList';

const RatingPresentational = props => {
  const { display,radioSelectHandler, radio_props, applyButtonHandler, cancelButtonHandler, dataSource } = props;
  return (
    <ScrollView>
    <View style={[styles.container,{display:display}]}>
      <View style={styles.container2}>
        <View style={styles.container21}>
          <Text>Rate your food</Text>
          <View style={{flexDirection:'row',marginTop:5}}>
            <Image source={require('../../../assets/img/star_green.png')} style={{ width: 20, height: 20 }} />
            <Image source={require('../../../assets/img/star_green.png')} style={{ marginLeft:5,width: 20, height: 20 }} />
            <Image source={require('../../../assets/img/star_green.png')} style={{ marginLeft:5,width: 20, height: 20 }} />
            <Image source={require('../../../assets/img/star_green.png')} style={{ marginLeft:5,width: 20, height: 20 }} />
            <Image source={require('../../../assets/img/star_green.png')} style={{ marginLeft:5,width: 20, height: 20 }} />
          </View>
        </View>
        <View style={styles.container22}>
          <View>
            <Text style={{ marginBottom: 5 }}>WHAT DID YOU LIKE THE BEST</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.container22TextWrapper, { backgroundColor: '#60b243',borderColor:'#60b243' }]}>
              <Text style={{ color: '#FFFFFF' }}>
                Taste
          </Text>
            </View>
            <View style={[styles.container22TextWrapper, { backgroundColor: '#FFF' }]}>
              <Text style={{ color: '#90959f' }}>
                Portion size
          </Text>
            </View>
          </View>

          <View style={[styles.container22TextWrapper, { backgroundColor: '#FFF' }]}>
            <Text style={{ color: '#90959f' }}>
              Food Packaging
          </Text>
          </View>

        </View>
        <View style={styles.container23}>
          <Text>RATE DELIVERY BOY PATHAN SAJANKUMAR</Text>
          <View style={{flexDirection:'row',marginTop:5}}>
            <Image source={require('../../../assets/img/star_green.png')} style={{ width: 20, height: 20 }} />
            <Image source={require('../../../assets/img/star_green.png')} style={{ marginLeft:5,width: 20, height: 20 }} />
            <Image source={require('../../../assets/img/star_green.png')} style={{ marginLeft:5,width: 20, height: 20 }} />
            <Image source={require('../../../assets/img/star_green.png')} style={{ marginLeft:5,width: 20, height: 20 }} />
            <Image source={require('../../../assets/img/star_green.png')} style={{ marginLeft:5,width: 20, height: 20 }} />
          </View>
        </View>
        <View style={styles.container24}>
          <Text>Got any suggestions? Let us know</Text>
          <View>
            <TextInput style={styles.txtInput} />
          </View>
          <View style={styles.applyLayout}>
          <Text style={{ color: '#FFF' }}>RATE DELIVERY</Text>
          </View>
        </View>

      </View>
    </View>
    </ScrollView>
  );
}


export default RatingPresentational;
