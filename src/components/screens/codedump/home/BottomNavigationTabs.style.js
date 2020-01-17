import { Platform, StyleSheet } from "react-native";

styles = "";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesAndroid = {
    tabInactiveColor:'#8C8C8C',
    tabActiveColor:'#2546B0',
    tab:{
      flexDirection:'column',
      width:wp('20%'),
      height:50,
      borderTopWidth:0.2,
      borderBottomWidth:0.2,
      justifyContent:'center',
      alignItems:'center'
    },
    tabImageDimen:wp('5%'),
    tabBar:{ flexDirection:'row',height: 50},
    tabLabelStyle:{fontFamily:'SFProDisplaySemibold',fontSize: 10}
}

const stylesIOS = {
    tabInactiveColor:'#2546B0',
    tabActiveColor:'#71DBFF',
    tab:{
      flexDirection:'column',
      width:wp('20%'),
      height:hp('10%'),
      justifyContent:'center',
      alignItems:'center'
    },
    tabBar:{ flexDirection:'row',height: 50,marginBottom:hp('3%')},
    tabImageDimen:wp('7%'),
    tabLabelStyle:{fontFamily:'SFProDisplay-Semibold',fontSize: 10}
}

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
