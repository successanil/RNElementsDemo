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
  // customstyles for headers

  homeLayout:{paddingLeft:16,paddingTop:hp('2%')},
  homeText:{includeFontPadding:false,color:'#2546B0',fontFamily:'SFProDisplayLight'},
  addressText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplayLight'},
  hamburgerViewStyle:{paddingLeft:wp('5%'),paddingTop:wp('5%')},
  searchIconStyle:{width:wp('5%'),height:wp('5%')},
  downArrowStyle:{marginLeft:5,width:wp('3%'),height:wp('3%')},
  smileViewStyle:{alignItems:'center',flexDirection:'row',position:'absolute',right:0,paddingRight:wp('5%'),paddingTop:wp('5%')},
  topRestaurantText:{ marginTop:hp('3%'),position: "absolute", left: 0 ,fontFamily:'SFProDisplayLight'},
  filterText:{marginTop:hp('2.5%'),fontFamily:'SFProDisplayLight'},
  topView:{ height:hp('8%'),flexDirection:'row', width: "100%" },
  filterIcon:{ marginTop:hp('2.5%'),marginRight: wp('5%'), width: wp('5%'), height: wp('5%') }
  });

export default stylesAndroid;
