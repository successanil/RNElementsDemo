import { Platform, StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

styles = "";

const stylesAndroid = StyleSheet.create({
  textInputStyle: {
    height: hp('7%'),
    width:'100%',
    borderColor: "gray",
    borderBottomWidth: 1
  },
  forgotPasswordLayout: {
    position: "absolute",
    right: 0,
    bottom: 60
  },
  panelContainer:{height:'65%'},
  eyeStyle:{width:24,height:24},
  loginButtonLayout: { position: "absolute", bottom: 0, width: "100%" },
  loginButtonLayoutInner:{backgroundColor:'#FA6C3C',width:'100%',height: 40,alignItems:'center',justifyContent:'center'}
});

const stylesIOS = StyleSheet.create({
  textInputStyle: {
    marginTop: "1%",
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1
  },
  forgotPasswordLayout: {
    position: "absolute",
    right: 0,
    bottom: 60
  },
  panelContainer:{height:'65%'},
  loginButtonLayout: { position: "absolute", bottom: 0, width: "100%" },
  loginButtonLayoutInner:{backgroundColor:'#FA6C3C',width:'100%',height: 40,alignItems:'center',justifyContent:'center'}
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
