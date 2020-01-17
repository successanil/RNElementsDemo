import { Platform, StyleSheet } from "react-native";

styles = "";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const cc = require('../../../../utils/ColorsContants');
import Dimens from '../../../../utils/Dimens';
import AppFonts from '../../../../utils/AppFonts';

const stylesAndroid = StyleSheet.create({
  textNotificationTitle:{fontSize:Dimens.hpTwo,color:cc.notificationSettingTextColor,fontFamily:AppFonts.montserratBold},
  notificationTextSwitchContainer:{flexDirection:'row',alignItems:'center',marginTop:Dimens.wpFour},
  textStyleForNotificationText:{fontSize:Dimens.hpTwo,color:cc.notificationSettingTextColor,fontFamily:AppFonts.montserratBold},
});

const stylesIOS = StyleSheet.create({
  textNotificationTitle:{fontSize:Dimens.hpTwo,color:cc.notificationSettingTextColor,fontFamily:AppFonts.montserratBold},
  notificationTextSwitchContainer:{flexDirection:'row',alignItems:'center',marginTop:Dimens.wpSeven},
  textStyleForNotificationText:{fontSize:Dimens.hpTwo,color:cc.notificationSettingTextColor,fontFamily:AppFonts.montserratBold},
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
