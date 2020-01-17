import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesIOS =  StyleSheet.create({
    container:{
      backgroundColor:'#FFFFFF',
      width:'100%',
      height:'100%',
      padding:16
    },
    itemwrapper:{marginTop:16},
    skipLayout:{
      position:'absolute',
      right:16,
      top:32
    },
    welcomeLayout:{
      marginTop: '10%'
    },
    container1:{
      height:'50%'
    },
    container2:{
      height:'50%'
    },
    dummySpacingLayout:{
      marginTop:'10%',
      height:1
    },
    topView:{ height:hp('5%'),flexDirection:'row', width: "100%" },
    topRestaurantText:{ marginTop:hp('2.5%'),position: "absolute", left: 0 ,fontFamily:'SFProDisplay-Light'},
    filterText:{marginTop:hp('2.5%'),height: wp('5%'),color:'#000',fontFamily:'SFProDisplay-Light',includeFontPadding:false},
    filterIcon:{ marginTop:hp('2.5%'),marginRight: wp('5%'), width: wp('5%'), height: wp('5%') },

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
