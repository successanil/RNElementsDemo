import { Platform, StyleSheet } from "react-native";

styles = "";

const stylesAndroid = StyleSheet.create({
  textInputStyle: {
    marginTop: "1%",
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginRight:10,
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center'
  },
  forgotPasswordLayout: {
    position: "absolute",
    right: 0,
    bottom: 60
  },
  panelImageStyle:{width:24,height:24},
  iconStyle:{width:72,height:72,resizeMode:'contain'},
  container:{flexDirection:'row',justifyContent:'center'},
  container2:{ flexDirection: "row", alignItems: "center" },
  loginButtonLayout: { position: "absolute", bottom: 0, width: "100%" },
  loginButtonLayoutInner:{backgroundColor:'#FA6C3C',width:'100%',height: 40,alignItems:'center',justifyContent:'center'}
});

const stylesIOS = StyleSheet.create({
  textInputStyle: {
    marginTop: "1%",
    height: 40,
    width:30,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginRight:10,
  },
  forgotPasswordLayout: {
    position: "absolute",
    right: 0,
    bottom: 60
  },
  panelImageStyle:{width:24,height:24},
  iconStyle:{width:48,height:48,resizeMode:'contain'},
  container:{flexDirection:'row',justifyContent: "center"},
  container2:{marginTop:'5%',flexDirection: "row", alignItems: "center" },
  loginButtonLayout: { position: "absolute", bottom: 0, width: "100%" },
  loginButtonLayoutInner:{backgroundColor:'#FA6C3C',width:'100%',height: 40,alignItems:'center',justifyContent:'center'}
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
