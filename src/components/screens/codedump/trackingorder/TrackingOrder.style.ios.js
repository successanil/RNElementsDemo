import {Platform, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesIOS = StyleSheet.create({
  verticalMarginForScreen:13,
  container:{
    backgroundColor:'#FFFFFF',
    paddingTop:wp('5%'),
    height:'100%'
  },
  skipLayout:{
    position:'absolute',
    right:'5%',
    top:'5%'
  },
  welcomeLayout:{
    marginTop: '10%'
  },
  itemwrapper:{marginTop:16},
  container1:{
   height:'50%'
  },
  container2:{
    height:'50%'
  },
  dummySpacingLayout:{
    marginTop:'7%',
    height:1
  },
  bannerImgStyle:{
    height:hp('50%'),
    width:wp('100%')
  }, 
  bannerImgStyleFull:{
    height:hp('100%'),
    width:wp('100%')
  },   
  bannerBackArrowStyle:{position:'absolute',width:hp('4%'),height:hp('4%')},
  touchStyleBack:{position:'absolute',left:wp('4%'),top:hp('3%'),width:hp('4%'),height:hp('4%')},
  filterText:{fontFamily:'SFProDisplay-Light'},
  applyLayout:{position:'absolute',bottom:0,height:hp('7%'),width:wp('100%'),fontFamily:'SFProDisplay-Semibold',backgroundColor:'#FA6C3C',color:'#FFF',alignSelf:'center',alignItems:'center',justifyContent:'center'},
  validText:{color:'#777779',marginTop:16,fontSize:hp('2%'),fontFamily:'SFProDisplay-Light'},
  getUptoText:{fontSize:hp('3%'),fontFamily:'SFProDisplay-Semibold'},
  useCodeText:{fontSize:hp('2.2%'),fontFamily:'SFProDisplay-Light'},

  // customstyles for headers

  homeLayout:{paddingLeft:wp('5%'),paddingTop:hp('2%')},
  homeText:{fontSize:hp('2%'),includeFontPadding:false,color:'#1c1a2f',fontWeight:'bold',fontFamily:'SFProDisplay-Light'},
  addressText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplay-Light'},
  hamburgerViewStyle:{paddingLeft:wp('5%'),paddingTop:wp('5%')},
  downArrowStyle:{marginLeft:5,width:wp('3%'),height:wp('3%')},
  searchIconStyle:{width:wp('5%'),height:wp('5%')},
  TextInPlaceOfSmiley:{width:wp('35%'),paddingTop:wp('5%'),alignItems:'flex-end'},
  smileViewStyle:{alignItems:'center',flexDirection:'row',position:'absolute',right:0,paddingRight:wp('5%'),paddingTop:wp('5%')},
  helpStyle:{
    fontSize: 18,
    fontFamily: "SFProDisplay-Semibold",
    includeFontPadding: false,
    color: "#F86C44"
  }
  });

export default stylesIOS;
