import { Platform, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

styles = "";

const stylesAndroid = StyleSheet.create({
  textInputStyle: {
    height: hp('6%'),
    width:'100%',
    borderColor: "gray",
    borderBottomWidth: 1
  },
  forgotPasswordLayout: {
    marginTop:hp('2%'),
    width:'100%',
    fontFamily:'SFProDisplayLight',
  },
  loginToYourAccountText:{ fontSize: 12,fontFamily:'SFProDisplayLight',},
  eyeStyle:{width:24,height:24},
  forgotPasswordTextStyle:{   alignSelf:'flex-end',color: "#FA6C3C" },
  loginButtonLayout: { fontFamily:'SFProDisplayLight',marginTop:hp('2%'),width: "100%" },
  loginTextStyle:{color:'#FFF',fontSize:hp('3%')},
  loginButtonLayoutInner:{backgroundColor:'#FA6C3C',width:'100%',height: hp('6%'),alignItems:'center',justifyContent:'center'}
});

const stylesIOS = StyleSheet.create({
  textInputStyle: {
    height: hp('6%'),
    width:'100%',
    borderColor: "gray",
    borderBottomWidth: 1
  },
  forgotPasswordLayout: {
    marginTop:hp('2%'),
    width:'100%',
    fontFamily:'SFProDisplay-Light',
  },
  loginToYourAccountText:{ fontSize: 12,fontFamily:'SFProDisplay-Light',},
  eyeStyle:{width:24,height:24},
  forgotPasswordTextStyle:{   alignSelf:'flex-end',color: "#FA6C3C" },
  loginButtonLayout: { fontFamily:'SFProDisplay-Light',marginTop:hp('2%'),width: "100%" },
  loginTextStyle:{color:'#FFF',fontSize:hp('3%')},
  loginButtonLayoutInner:{backgroundColor:'#FA6C3C',width:'100%',height: hp('6%'),alignItems:'center',justifyContent:'center'}
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
