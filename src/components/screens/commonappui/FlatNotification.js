import { Image,TouchableWithoutFeedback, ScrollView, View, Text } from 'react-native';
import React, { Component } from "react";

export default class FlatNotification extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{flexDirection: 'row', height: '20%', width: '100%' }}>
                <View style={{ paddingTop:16,width: '20%', backgroundColor: '#fa6c3c' ,alignItems:'center'}}>
                    <Image source={require('../../../assets/img/burger_order.png')} style={{width:35,height:35}} resizeMode={'contain'} />
                </View>
                <View style={{ paddingTop:16,width: '60%', backgroundColor: '#fa6c3c' }}>
                    <Text style={{color:'#FFFFFF'}}>Your food is on the way.</Text>
                    <Text style={{color:'#FFFFFF'}} >Rajesh kumar has arrived at the restaurant 
                            and will pick up your order soon.</Text>
                </View>
                <View style={{width: '20%', backgroundColor: '#fa6c3c' ,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#FFFFFF'}}>VIEW</Text>
                </View>
            </View>

        );
    }
}