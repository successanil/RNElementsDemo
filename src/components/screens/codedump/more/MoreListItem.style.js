import { Platform, StyleSheet } from "react-native";

styles = "";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesAndroid = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
    // height:'100%'
  },
  itemwrapper: {
    // borderWidth: 1,
    marginTop: 16
  },
  item: {
    fontSize: hp('2%'),
    marginBottom:'2%',
    fontFamily:'SFProDisplaySemibold',
    includeFontPadding:false,
  },
  itemtitle: {
    fontSize: hp('2%'),
    flex:1,
    fontFamily:'SFProDisplayLight',
    includeFontPadding:false,
  },
  itemImage: {
    height: hp('35%'),
    width: wp('90%')
  },
  headingText: {
    fontSize: 50,
    textAlign: "center"
  },
  container1:{ width: "100%" },
  container2:{
    width: "80%",
    flexDirection: "column",
    paddingLeft: wp('10%'),
  },
  divider:{marginTop:hp('1%'),marginBottom:hp('1%'),height:1,backgroundColor:'#90959F'},
  ratingText:{marginLeft:5,right:0,fontFamily:'SFProDisplayLight',fontSize: hp('2%'),includeFontPadding:false},
  deliverLayout:{width:'50%',alignItems:'flex-end'}
});

const stylesIOS = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
    // height:'100%'
  },
  itemwrapper: {
    marginTop: 16
  },
  item: {
    fontSize: hp('2%'),
    marginBottom:'2%',
    fontFamily:'SFProDisplay-Semibold'
  },
  itemtitle: {
    flex: 1,
    paddingTop:hp('0.5%'),
    fontSize: 12,
    fontFamily:'SFProDisplay-Light'
  },
  itemImage: {
    height: hp('10%'),
    width: hp('10%'),
    borderRadius: 10
  },
  headingText: {
    fontSize: 50,
    textAlign: "center"
  },
  container1:{ width: "20%" },
  container2:{
    width: "80%",
    flexDirection: "column",
    marginLeft: wp('5%'),
    paddingBottom: "5%"
  },
  divider:{height:1,backgroundColor:'#90959F'},
  ratingText:{marginLeft:5},
  deliverLayout:{width:'50%',alignItems:'flex-start'}
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
