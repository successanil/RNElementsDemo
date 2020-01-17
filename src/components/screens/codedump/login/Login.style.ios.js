import { Platform, StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesIOS = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
    width:wp('100%'),
    height:hp('100%'),
    padding:hp('3%'),  // 5% means 16
  },
  skipLayout:{
    // position:'absolute',
    // right:hp('3%'),
    // top:hp('3%')
    width:'100%',
    alignItems:'flex-end'
  },
  skipText:{fontSize:hp('2%'),fontFamily:'SFProDisplay-Light'},
  welcomeLayout:{
    marginTop: hp('3%'),
    fontFamily:'SFProDisplay-Light',
    color:'#1c1a2f'
  },
  container1:{
    height:'40%',
    // borderWidth:1,
    // borderColor:'#000FFF'
  },
  container2:{
    height:'50%',
    // borderWidth:1,
    // borderColor:'#000FFF'
  },
  dividerLine:{marginTop:hp('5%'),height:1,backgroundColor:'#000'},
  continueWithSocialText:{color:'#1c1a2f',fontSize: 12,textAlign:'center',fontFamily:'SFProDisplay-Light'},
  createNowTextStyle:{textAlign:'right',marginLeft:wp('20%'),fontFamily:'SFProDisplay-Light',fontSize:hp('2.2%'),marginLeft:10,width:hp('15%')},
  createNowUnderLine:{backgroundColor:'#000',height:1,width:hp('15%')},
  dontHaveAccount:{fontFamily:'SFProDisplay-Light',alignItems:'center',position:'absolute',flexDirection:'row',bottom:hp('10%'),alignSelf:'center'},
  dontHaveAccountText:{ fontSize: 14,fontFamily:'SFProDisplay-Light'},
  dummySpacingLayout:{
    marginTop:hp('4%'),
    height:1
  },
  socialContainer1:{justifyContent:'center',height:'20%'},
  socialContainer2:{height:'80%'},

    // customstyles for headers

    homeLayout:{paddingLeft:16,paddingTop:hp('2%')},
    homeText:{includeFontPadding:false,color:'#2546B0',fontFamily:'SFProDisplay-Light'},
    addressText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplay-Light'},
    hamburgerViewStyle:{paddingLeft:wp('5%'),paddingTop:wp('5%')},
    searchIconStyle:{width:wp('5%'),height:wp('5%')},
    downArrowStyle:{marginLeft:5,width:wp('3%'),height:wp('3%')},
    smileViewStyle:{alignItems:'center',flexDirection:'row',position:'absolute',right:0,paddingRight:wp('5%'),paddingTop:wp('5%')}

  });

export default stylesIOS;
