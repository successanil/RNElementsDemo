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
    padding:'5%',  // 5% means 16
  },
  itemwrapper:{marginTop:16},
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
    // borderWidth:1,
    // borderColor:'#000FFF'
  },
  container2:{
    height:'50%',
  },
  dummySpacingLayout:{
    marginTop:'7%',
    height:1
  },
  topRestaurantText:{ position: "absolute", left: 0 ,fontFamily:'SFProDisplayLight'},
  filterText:{fontFamily:'SFProDisplayLight'},
  restaurantShortSummaryStyle:{width:'33%',alignItems:'center'},
  opensAtContainer:{ borderColor:'rgba(250, 108, 60, 0.72)',borderWidth:0.5,borderStyle:'dashed',borderRadius:1,alignItems:'center',justifyContent:'center',backgroundColor: 'rgba(250, 108, 60, 0.12)', height: hp('8%') },
  opensAtText:{fontFamily:'SFProDisplayLight'},
  textStyleSubHeading:{marginLeft:5,includeFontPadding:false,fontFamily:'SFProDisplaySemibold'},
  restaurantName:{fontSize:14,fontFamily:'SFProDisplaySemibold'},
  restaurantRatings:{fontSize:12,color:'#777779',fontFamily:'SFProDisplayLight'},
  restuarantCusines:{includeFontPadding:false,fontSize:10,fontFamily:'SFProDisplayLight',color:'#777779'},
  restuarantAddress:{includeFontPadding:false,fontSize:12,fontFamily:'SFProDisplayLight',color:'#fa6c3c'},
  dividerView:{backgroundColor:'#000',height:hp('0.2%'),marginTop:hp('3.5%')},


  // customstyles for headers

  homeLayout:{paddingLeft:wp('5%'),paddingTop:hp('2%')},
  homeText:{includeFontPadding:false,color:'#fa6c3c',fontFamily:'SFProDisplayLight'},
  addressText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplayLight'},
  hamburgerViewStyle:{paddingLeft:wp('5%'),paddingTop:wp('5%')},
  downArrowStyle:{marginLeft:5,width:wp('3%'),height:wp('3%')},
  searchIconStyle:{width:wp('5%'),height:wp('5%')},
  smileViewStyle:{alignItems:'center',flexDirection:'row',position:'absolute',right:0,paddingRight:wp('5%'),paddingTop:wp('5%')}
  });

export default stylesAndroid;
