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
      padding:wp('5%')
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
      
    },
    container2:{
      height:'50%'
    },
    dummySpacingLayout:{
      marginTop:'10%',
      height:1
    },
    bannerImgStyle:{
      height:hp('30%'),
      width:wp('100%')
    },
    bannerBackArrowStyle:{position:'absolute',left:0,width:hp('3%'),height:hp('3%')},
    touchStyleBack:{position:'absolute',left:wp('4%'),top:hp('6%'),width:hp('3%'),height:hp('3%')},
    filterText:{fontFamily:'SFProDisplay-Light'},
    validText:{color:'#777779',marginTop:16,fontSize:hp('1.5%'),fontFamily:'SFProDisplay-Light'},
    getUptoText:{fontSize:hp('2.5%'),fontFamily:'SFProDisplay-Semibold'},
    useCodeText:{fontSize:hp('2%'),fontFamily:'SFProDisplay-Semibold'}
  });

export default stylesIOS;
