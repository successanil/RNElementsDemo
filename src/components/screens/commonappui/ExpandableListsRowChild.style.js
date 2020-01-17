
import { Platform, StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

styles = "";


const stylesAndroid = StyleSheet.create({
  container:{
    marginTop:wp('5%'),
    flexDirection:'row'
  },
  addButtonLayout:{width:'85%',borderWidth:1,borderColor:'#D6D6D6',paddingLeft:wp('5%'),paddingRight:wp('5%'),paddingTop:2,paddingBottom:2},
  childTitle:{ includeFontPadding:false,color: '#1c1a2f', fontSize: 12, fontFamily: 'SFProDisplaySemibold' },
  childDesc:{ color: '#777779', fontSize: 10, fontFamily: 'SFProDisplayLight' },
  childPrice:{ color: '#2546b0', fontSize: 12, fontFamily: 'SFProDisplayLight' }
});

const stylesIOS = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF',
    width:'100%',
    height:'100%',
    // padding:'5%',  // 5% means 16
  },
  skipLayout:{
    position:'absolute',
    right:'5%',
    top:'5%'
  },
  welcomeLayout:{
    marginTop: '10%'
  },
  container1:{
    height:'50%',
    backgroundColor:'rgba(52, 52, 52, 0.5)'
    // borderWidth:1,
    // borderColor:'#000FFF'
  },
  container2:{
    height:'50%',
    backgroundColor:'#FFFFFF'
  },container21:{
    height:'10%',
    backgroundColor:'#FF00FF',
    flexDirection:'row'
  },
  container22:{
    height:'90%',
    backgroundColor:'#FFFF00'
  },
  container221:{
    width:'40%',
    backgroundColor:'#00FFFF'
  },
  container222:{
    width:'60%',
    backgroundColor:'#FFFF00'
  },
  container2221:{
    height:'80%',
    backgroundColor:'#BB00FF'
  },
  container2222:{
    height:'20%',
    alignItems:'center',
    justifyContent:'center'
  },
  dummySpacingLayout:{
    marginTop:'7%',
    height:1
  },
  createAccountBtnLayout:{
    backgroundColor:'#BDC0C6',
    width:'100%',
    height:'15%',
    alignItems:'center',
    justifyContent:'center'
  },
  createAccountText:{color:'#FFF'},
  applyLayout:{backgroundColor:'#FA6C3C',color:'#FFF',paddingLeft:wp('10%'),paddingRight:wp('10%'),paddingTop:10,paddingBottom:10},
  addButtonLayout:{position:'absolute',right:0,borderWidth:1,borderColor:'#D6D6D6',paddingLeft:18,paddingRight:18,paddingTop:2,paddingBottom:2},
  childTitle:{ includeFontPadding:false,color: '#1c1a2f', fontSize: 12, fontFamily: 'SFProDisplay-Semibold' },
  childDesc:{ color: '#777779', fontSize: 10, fontFamily: 'SFProDisplay-Light' },
  childPrice:{ color: '#2546b0', fontSize: 12, fontFamily: 'SFProDisplay-Light' }
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
