import {Platform, StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesAndroid = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF',
    paddingLeft:wp('4%'),
    paddingRight:wp('4%'),
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

  },
  container2:{
    height:'50%',
  },
  dummySpacingLayout:{
    marginTop:'7%',
    height:1
  },
  bannerImgStyle:{
    height:hp('30%'),
    width:wp('100%')
  },
  bannerBackArrowStyle:{position:'absolute',width:hp('4%'),height:hp('4%')},
  touchStyleBack:{position:'absolute',left:wp('4%'),top:hp('3%'),width:hp('4%'),height:hp('4%')},
  filterText:{fontFamily:'SFProDisplayLight'},
  validText:{color:'#777779',marginTop:16,fontSize:hp('2%'),fontFamily:'SFProDisplayLight'},
  getUptoText:{fontSize:hp('3%'),fontFamily:'SFProDisplaySemibold'},
  useCodeText:{fontSize:hp('2.2%'),fontFamily:'SFProDisplayLight'}
  });

export default stylesAndroid;
