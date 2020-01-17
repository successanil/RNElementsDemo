import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesAndroid = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
    width:wp('100%'),
    height:hp('100%'),
    padding:hp('3%'),  // 5% means 16
  },
  skipLayout:{
    position:'absolute',
    right:hp('3%'),
    top:hp('3%')
  },
  skipText:{fontSize:13,fontFamily:'SFProDisplayLight'},
  welcomeLayout:{
    marginTop: hp('3%'),
    fontFamily:'SFProDisplayLight',
    color:'#1c1a2f'
  },
  container1:{
    height:'50%',
    // borderWidth:1,
    // borderColor:'#000FFF'
  },
  container2:{
    height:'50%',
    // borderWidth:1,
    // borderColor:'#000FFF'
  },
  dividerLine:{height:1,backgroundColor:'#000'},
  continueWithSocialText:{color:'#1c1a2f',fontSize: 12,textAlign:'center',fontFamily:'SFProDisplayLight'},
  createNowTextStyle:{fontFamily:'SFProDisplayLight',fontSize:hp('2.2%'),marginLeft:10,width:hp('15%')},
  createNowUnderLine:{marginLeft:hp('2%'),backgroundColor:'#000',height:1,width:hp('15%')},
  dontHaveAccount:{fontFamily:'SFProDisplayLight',alignItems:'center',position:'absolute',flexDirection:'row',bottom:hp('5%'),alignSelf:'center'},
  dontHaveAccountText:{ fontSize: 14,fontFamily:'SFProDisplayLight'},
  dummySpacingLayout:{
    marginTop:hp('4%'),
    height:1
  },
  socialContainer1:{height:'40%',justifyContent:'center'},
  socialContainer2:{height:'60%',justifyContent:'center'},

  // customstyles for headers

  homeLayout:{paddingLeft:16,paddingTop:hp('2%')},
  homeText:{includeFontPadding:false,color:'#2546B0',fontFamily:'SFProDisplayLight'},
  addressText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplayLight'},
  hamburgerViewStyle:{paddingLeft:wp('5%'),paddingTop:wp('5%')},
  searchIconStyle:{width:wp('5%'),height:wp('5%')},
  downArrowStyle:{marginLeft:5,width:wp('3%'),height:wp('3%')},
  smileViewStyle:{alignItems:'center',flexDirection:'row',position:'absolute',right:0,paddingRight:wp('5%'),paddingTop:wp('5%')},
  topRestaurantText:{ position: "absolute", left: 0 ,fontFamily:'SFProDisplayLight'},
  filterText:{fontFamily:'SFProDisplayLight'},
  filterIcon:{ marginRight: wp('5%'), width: wp('5%'), height: wp('5%') }

  });

export default stylesAndroid;
