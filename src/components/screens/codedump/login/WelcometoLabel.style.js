import { Platform, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

styles = "";

const stylesAndroid = StyleSheet.create({
  welcomeToText:{color:'#90959f',fontSize:14,includeFontPadding:false,fontFamily:'SFProDisplayLight'},
  starDeliveryText:{fontSize:18,includeFontPadding:false,fontFamily:'SFProDisplaySemibold'}
});

const stylesIOS = StyleSheet.create({
  welcomeToText:{color:'#90959f',fontSize:14,includeFontPadding:false,fontFamily:'SFProDisplay-Light'},
  starDeliveryText:{fontSize:18,includeFontPadding:false,fontFamily:'SFProDisplay-Semibold'}
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
