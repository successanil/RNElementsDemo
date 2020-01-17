import { Platform, StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

styles = "";


const stylesAndroid = StyleSheet.create({
  container:{
    backgroundColor:'transparent',
    width:'100%',
    height:hp('100%'),
      // 5% means 16
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
    // height:'50%',
    // backgroundColor:'rgba(52, 52, 52, 0.5)'
    // borderWidth:1,
    // borderColor:'#000FFF'
  },
  container2:{
    height:'100%',
    backgroundColor:'#FFFFFF',
    paddingTop:wp('5%'),
    paddingRight:wp('5%'),
    paddingLeft:wp('5%')
  },
  container21:{
    height:'15%',
    // backgroundColor:'#FF00FF',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:wp('5%'),
    paddingRight:wp('5%')
  },
  container21:{
    height:'15%',
    // backgroundColor:'#FF0000'
  },
  container22:{
    height:'35%',
    // backgroundColor:'#FFFF00'
    paddingTop:5
  },
  container22TextWrapper:{
    height:hp('5%'),
    width:'50%',
    borderWidth:0.5,
    borderColor:'#90959f',
    alignItems:'center',
    justifyContent:'center',
    marginRight:5,
    marginBottom:5
  },
  container23:{
    height:'15%',
    // backgroundColor:'#FF00FF'
  },
  container24:{
    height:'35%',
    // backgroundColor:'#0000FF'
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
  applyLayout:{marginTop:hp('5%'),height:hp('7%'),width:wp('80%'),fontFamily:'SFProDisplaySemibold',backgroundColor:'#FA6C3C',color:'#FFF',alignSelf:'center',alignItems:'center',justifyContent:'center'},
  radioButtonsContainerOuterCircle:{ padding: wp('0.65%'), borderWidth: 2, width: hp('3.5%'), height: hp('3.5%'), borderRadius: hp('3.5%') / 2 },
  radioButtonsContainerInnerCircle:{width: hp('2%'), height: hp('2%'), borderRadius: hp('2%') / 2 },
  radioButtonText:{ fontFamily:'SFProDisplaySemibold',marginLeft: 16 },
  txtInput:{ width: '100%', borderWidth: 1,height:hp('5%') },
  itemwrapper: {
  },
  radioButtonsContainer:{ marginLeft: 16, marginTop: 16, flexDirection: 'row' },
});

const stylesIOS = StyleSheet.create({
  container:{
    backgroundColor:'transparent',
    width:'100%',
    height:hp('100%'),
      // 5% means 16
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
    // height:'50%',
    // backgroundColor:'rgba(52, 52, 52, 0.5)'
    // borderWidth:1,
    // borderColor:'#000FFF'
  },
  container2:{
    height:'100%',
    backgroundColor:'#FFFFFF',
    paddingTop:wp('5%'),
    paddingRight:wp('5%'),
    paddingLeft:wp('5%')
  },
  container21:{
    height:'15%',
    // backgroundColor:'#FF00FF',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:wp('5%'),
    paddingRight:wp('5%')
  },
  container21:{
    height:'15%',
    // backgroundColor:'#FF0000'
  },
  container22:{
    height:'35%',
    // backgroundColor:'#FFFF00'
    paddingTop:5
  },
  container22TextWrapper:{
    height:hp('5%'),
    width:'50%',
    borderWidth:0.5,
    borderColor:'#90959f',
    alignItems:'center',
    justifyContent:'center',
    marginRight:5,
    marginBottom:5
  },
  container23:{
    height:'15%',
    // backgroundColor:'#FF00FF'
  },
  container24:{
    height:'35%',
    // backgroundColor:'#0000FF'
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
  applyLayout:{marginTop:hp('5%'),height:hp('7%'),width:wp('80%'),fontFamily:'SFProDisplay-Semibold',backgroundColor:'#FA6C3C',color:'#FFF',alignSelf:'center',alignItems:'center',justifyContent:'center'},
  radioButtonsContainerOuterCircle:{ padding: wp('0.65%'), borderWidth: 2, width: hp('3.5%'), height: hp('3.5%'), borderRadius: hp('3.5%') / 2 },
  radioButtonsContainerInnerCircle:{width: hp('2%'), height: hp('2%'), borderRadius: hp('2%') / 2 },
  radioButtonText:{ fontFamily:'SFProDisplay-Semibold',marginLeft: 16 },
  txtInput:{ width: '100%', borderWidth: 1,height:hp('5%') },
  itemwrapper: {
  },
  radioButtonsContainer:{ marginLeft: 16, marginTop: 16, flexDirection: 'row' },
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
