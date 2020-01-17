import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesIOS =  StyleSheet.create({
  container:{
    backgroundColor:'#FA6C3C',
    width:'100%',
    height:'100%'
  },
  starDeliveryText:{
    color:'#FFFFFF',
    fontSize:35,
    fontFamily:'SFProDisplay-Light'
  },
  starDeliveryAdditionalText:{
    color:'#FFFFFF',
    textAlign:'center',
    fontSize:15,
    fontFamily:'SFProDisplay-Light'
  },
  starDeliveryContainer:{ width: wp('100%'), height: hp('100%'), justifyContent: 'center', alignItems: 'center' }
  });

export default stylesIOS;
