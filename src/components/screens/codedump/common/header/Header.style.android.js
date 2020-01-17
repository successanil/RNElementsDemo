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
      fontSize: 20
    },
    homeLayout:{paddingLeft:16,paddingTop:hp('2%')},
    homeText:{includeFontPadding:false,color:'#2546B0',fontFamily:'SFProDisplayLight'},
    addressText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplayLight'}
  });

export default stylesAndroid;
