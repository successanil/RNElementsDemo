import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesAndroid = StyleSheet.create({
    viewStyle: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      fontSize: 16,
      width:wp('100%'),
      paddingTop:5,
      paddingBottom:5,
      alignItems:'center',
      justifyContent:'center'
    },
    homeLayout:{paddingLeft:16,paddingTop:hp('2%')},
    homeText:{includeFontPadding:false,color:'#2546B0',fontFamily:'SFProDisplayLight'},
    addressText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplayLight'},
    hamburgerViewStyle:{paddingLeft:wp('5%'),paddingTop:wp('5%')},
    searchIconStyle:{width:wp('5%'),height:wp('5%')},
    TextInPlaceOfSmiley:{justifyContent:'flex-end',alignItems:'flex-end'},
    smileViewStyle:{alignItems:'center',flexDirection:'row',position:'absolute',right:0,paddingRight:wp('5%'),paddingTop:wp('5%')}
  });

export default stylesAndroid;
