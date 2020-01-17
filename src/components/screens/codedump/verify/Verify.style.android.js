import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesAndroid = StyleSheet.create({
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
    height:'40%',
    // borderWidth:1,
    // borderColor:'#000FFF'
  },
  container2:{
    height:'40%',
    width:'100%',
    paddingLeft:'5%',
    paddingRight:'5%',
    paddingBottom:'3%',
    alignItems:'center',
    justifyContent:'flex-end'
  },
  dummySpacingLayout:{
    marginTop:'7%',
    height:1
  },
  createAccountBtnLayout:{
    width:'100%',
    height:hp('7%'),
    alignItems:'center',
    justifyContent:'center'
  },
  createAccountText:{color:'#FFF',fontFamily:'SFProDisplayLight'},

  bgStyle:{ backgroundColor:'#FDF9F2',flexDirection: "row", width: "100%" },
  homeLayout:{paddingLeft:wp('5%'),paddingTop:hp('2%')},
  homeText:{fontSize:hp('3%'),includeFontPadding:false,color:'#1c1a2f',fontWeight:'bold',fontFamily:'SFProDisplayLight'},
  addressText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplayLight'},
  hamburgerViewStyle:{paddingLeft:wp('5%'),paddingTop:wp('5%')},
  downArrowStyle:{marginLeft:5,width:wp('3%'),height:wp('3%')},
  searchIconStyle:{width:wp('5%'),height:wp('5%')},
  TextInPlaceOfSmiley:{width:wp('35%'),paddingTop:wp('5%'),alignItems:'flex-end'},
  smileViewStyle:{alignItems:'center',flexDirection:'row',position:'absolute',right:0,paddingRight:wp('5%'),paddingTop:wp('5%')},

  });

export default stylesAndroid;
