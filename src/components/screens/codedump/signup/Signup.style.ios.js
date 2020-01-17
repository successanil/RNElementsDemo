import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesIOS =  StyleSheet.create({
    container:{
      backgroundColor:'#FFFFFF',
      width:'100%',
      height:'100%'
    },
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
      height:'50%',
      width:'100%',
      paddingLeft:'5%',
      paddingRight:'5%',
      paddingBottom:'3%',
      alignItems:'center',
      justifyContent:'flex-end'

    },
    dummySpacingLayout:{
      marginTop:'10%',
      height:1
    },
    createAccountBtnLayout:{
      backgroundColor:'#BDC0C6',
      width:'100%',
      height:50,
      alignItems:'center',
      justifyContent:'center'
    },
    createAccountText:{color:'#FFF',fontSize:14},
    // customstyles for headers

  searchTxtStyle:{
    fontFamily: "SFProDisplay-Light",
    fontSize: 14,
    marginRight: 5,
    color: "#90959f",
  },  
  bgStyle:{ backgroundColor:'#FDF9F2',flexDirection: "row", width: "100%" },  
  homeLayout:{paddingLeft:wp('5%'),paddingTop:hp('2%')},
  homeText:{fontSize:hp('3%'),includeFontPadding:false,color:'#1c1a2f',fontWeight:'bold',fontFamily:'SFProDisplay-Light'},
  addressText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplay-Light'},
  hamburgerViewStyle:{paddingLeft:wp('5%'),paddingTop:wp('5%')},
  downArrowStyle:{marginLeft:5,width:wp('3%'),height:wp('3%')},
  searchIconStyle:{width:wp('5%'),height:wp('5%')},
  TextInPlaceOfSmiley:{width:wp('35%'),paddingTop:wp('5%'),alignItems:'flex-end'},
  smileViewStyle:{alignItems:'center',flexDirection:'row',position:'absolute',right:0,paddingRight:wp('5%'),paddingTop:wp('5%')},
  });

export default stylesIOS;
