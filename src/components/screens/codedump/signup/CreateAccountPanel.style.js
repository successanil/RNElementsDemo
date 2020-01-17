import { Platform, StyleSheet } from "react-native";

styles = "";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesAndroid = StyleSheet.create({
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
  panelImageStyle:{width:24,height:24},
  iconStyle:{width:72,height:72,resizeMode:'contain'},
  container:{height:'45%',backgroundColor:'#FDF9F2',padding:'5%'},
  container2:{ flexDirection: "row", alignItems: "center" },
  loginButtonLayout: { position: "absolute", bottom: 0, width: "100%" },
  headingText:{ fontSize: 18,fontFamily:'SFProTextHeavy'},
  headingTextTwo:{marginTop:hp('1%'),fontSize: 14 ,fontFamily:'SFProTextLight'},
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
  panelImageStyle:{width:24,height:24},
  iconStyle:{width:48,height:48},
  container:{height:'40%',justifyContent: "center",backgroundColor:'#FDF9F2',padding:'5%'},
  container2:{marginTop:'5%',flexDirection: "row", alignItems: "center" },
  loginButtonLayout: { position: "absolute", bottom: 0, width: "100%" },
  headingText:{ fontSize: 18,fontFamily:'SFProText-Heavy'},
  headingTextTwo:{ fontSize: 14 ,fontFamily:'SFProText-Light'},
  loginButtonLayoutInner:{backgroundColor:'#FA6C3C',width:'100%',height: 40,alignItems:'center',justifyContent:'center'}
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
