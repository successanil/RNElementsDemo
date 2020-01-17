import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesIOS =  StyleSheet.create({
  verticalMarginForScreen:wp('5%'),
  container:{
    backgroundColor:'#FFFFFF',
    width:'100%',
    height:'100%',
    padding:'5%',  // 5% means 16
  },
  itemwrapper:{marginTop:this.verticalMarginForScreen},
  skipLayout:{
    position:'absolute',
    right:'5%',
    top:'5%'
  },
  welcomeLayout:{
    marginTop: '10%'
  },
  container1:{
    height:hp('16%'),
    padding:'5%'
    // borderWidth:1,
    // borderColor:'#000FFF'
    // backgroundColor:'#FF00FF'
  },
  container2:{
    height:hp('13%'),
    paddingLeft:'5%',
    paddingRight:'5%',
    // backgroundColor:'#00FFFF'
  } ,
  container3:{
    height: hp('15%'),
    padding:'5%'
    // backgroundColor:'#FFABFF'
  },
  container4:{
    height:hp('35%'),
    padding:'5%'
    // backgroundColor:'#0000FF'
  },
  container5:{
    height:hp('35%'),
    padding:'5%',
    // backgroundColor:'#FF00FF'
  },
  dummySpacingLayout:{
    marginTop:'7%',
    height:1
  },
  topRestaurantText:{includeFontPadding:false,color:'#1c1a2f',fontFamily:'SFProDisplay-Heavy',fontSize:hp('3%')},
  filterText:{fontFamily:'SFProDisplay-Light'},
  dishName:{includeFontPadding:false,fontFamily:'SFProDisplay-Semibold'},
  price:{includeFontPadding:false,fontFamily:'SFProDisplay-Semibold',color:'#79797B'},
  instructions:{color:'#90959F',includeFontPadding:false,fontFamily:'SFProDisplay-Light'},
  billStyle:{fontFamily:'SFProDisplay-Semibold'},
  billStyleBold:{fontFamily:'SFProDisplay-Semibold'},
  roadNameText:{includeFontPadding:false,color:'#fa6c3c',fontFamily:'SFProDisplay-Light'},
  locationIcon:{width:wp('5%'),height:wp('5%')},
  locationTextLayout:{paddingLeft:wp('5%')},
  locationText:{includeFontPadding:false,color:'#2546b0',fontFamily:'SFProDisplay-Light'},
  locationSubText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplay-Light',fontSize:hp('2%')},
  changeAddress:{
    fontFamily: "SFProDisplay-Semibold",
    color: "#F86C44",
    marginTop: this.verticalMarginForScreen
  },


  // customstyles for headers

  homeLayout:{paddingLeft:wp('5%'),paddingTop:hp('2%')},
  homeText:{includeFontPadding:false,color:'#fa6c3c',fontFamily:'SFProDisplay-Light'},
  addressText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplay-Light'},
  hamburgerViewStyle:{paddingLeft:wp('5%'),paddingTop:wp('5%')},
  downArrowStyle:{marginLeft:5,width:wp('3%'),height:wp('3%')},
  searchIconStyle:{width:wp('5%'),height:wp('5%')},
  smileViewStyle:{alignItems:'center',flexDirection:'row',position:'absolute',right:0,paddingRight:wp('5%'),paddingTop:wp('5%')}

  });

export default stylesIOS;
