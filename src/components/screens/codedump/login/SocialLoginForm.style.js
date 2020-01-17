import { Platform, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

styles = "";

const stylesAndroid = StyleSheet.create({
  textInputStyle: {
    marginTop: hp('1%'),
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1
  },
  forgotPasswordLayout: {
    marginTop:hp('2%'),
    width:'100%'
  },
  continueWithSocialText:{fontSize: 12,textAlign:'center',marginBottom:16 },
  forgotPasswordTextStyle:{   alignSelf:'flex-end',color: "#FA6C3C" },
  loginButtonLayout: { position: "absolute", bottom: 0, width: "100%" },
  loginTextStyle:{fontFamily:'SFProDisplayLight',color:'#FFF',fontSize:hp('2%')},
  facebookImageStyle:{position:'absolute',left:hp('2%'),width:hp('3%'),height:hp('3%')},
  dividerLine:{height:1,backgroundColor:'#000',marginTop:hp('2%'),marginBottom:hp('2%')},
  socialButtonFacebookLayoutInner:{justifyContent:'center',borderRadius:4,backgroundColor:'#546ded',width:'80%',height: hp('6%'), alignSelf:'center',flexDirection:'row',alignItems:'center'},
  socialButtonGoogleLayoutInner:{borderRadius:4,backgroundColor:'#de3535',width:'80%',height: hp('6%'), alignSelf:'center',alignItems:'center',justifyContent:'center'}
});

const stylesIOS = StyleSheet.create({
  textInputStyle: {
    marginTop: hp('1%'),
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1
  },
  forgotPasswordLayout: {
    marginTop:hp('2%'),
    width:'100%'
  },
  loginButtonLayout: { position: "absolute", bottom: 0, width: "100%" },
  loginTextStyle:{fontFamily:'SFProDisplay-Light',color:'#FFF',fontSize:hp('2%')},
  facebookImageStyle:{position:'absolute',left:hp('2%'),width:hp('3%'),height:hp('3%')},
  dividerLine:{height:1,backgroundColor:'#000',marginTop:hp('2%'),marginBottom:hp('2%')},
  socialButtonFacebookLayoutInner:{justifyContent:'center',borderRadius:4,backgroundColor:'#546ded',width:'80%',height: hp('6%'), alignSelf:'center',flexDirection:'row',alignItems:'center'},
  socialButtonGoogleLayoutInner:{borderRadius:4,backgroundColor:'#de3535',width:'80%',height: hp('6%'), alignSelf:'center',alignItems:'center',justifyContent:'center'}
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
