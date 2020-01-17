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
  outerContainer:{paddingBottom:wp('3%'),borderColor:'#90959F',borderWidth:0.5,borderRadius:10},
  itemwrapper: {
    // borderWidth: 1,
    marginTop: 16
  },
  item: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom:'2%'
  },
  itemHeading: {
    fontSize: 14,
    fontFamily:'SFProDisplayLight',
    includeFontPadding:false
  },
  itemHeadingStatus: {
    fontSize: 14,
    color:'#FFF',
    backgroundColor:'#60b243',
    fontFamily:'SFProDisplayLight',
    includeFontPadding:false
  },
  itemtitle: {
    fontSize: 12,
    fontFamily:'SFProDisplayLight',
  },
  item2title: {
    fontSize: 14,
    fontFamily:'SFProDisplaySemibold',
    includeFontPadding:false
  },
  itemImage: {
    height: hp('5%'),
    width: hp('5%'),
    borderRadius: 4
  },
  headingText: {
    fontSize: 50,
    textAlign: "center"
  },
  container1:{paddingLeft:wp('3%'),paddingTop:wp('3%'),paddingBottom:wp('3%')},
  container2:{paddingLeft:wp('3%'),paddingTop:wp('3%'),paddingBottom:wp('3%')},
  containerOrderStatus:{backgroundColor:'#60b243',marginLeft:wp('3%'),width:wp('35%'),paddingLeft:wp('3%'),paddingRight:wp('3%'),paddingTop:wp('1%'),paddingBottom:wp('1%')},
  containerItem:{flexDirection: "row",marginRight:wp('4%')},
  containerItem2:{flexDirection: "row",marginLeft:wp('2%')},
  divider:{marginTop:'2%',marginBottom:'2%',height:0.5,backgroundColor:'#90959F'},
  textHeadingItem:{color:'#000',fontSize:hp('2%'),fontFamily:'SFProDisplayLight'},
  textCity:{color:'#000',fontSize:hp('1.2%'),fontFamily:'SFProDisplayLight'},
  ratingText:{marginLeft:5},
  imgStyle:{width:wp('42%'),height:wp('42%')}   // fully horizontal
});

const stylesIOS = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
    // height:'100%'
  },
  outerContainer:{paddingBottom:wp('3%'),borderColor:'#90959F',borderWidth:0.5,borderRadius:10},
  itemwrapper: {
    // borderWidth: 1,
    marginTop: 16
  },
  item: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom:'2%'
  },
  itemHeading: {
    fontSize: 14,
    fontFamily:'SFProDisplay-Light',
    includeFontPadding:false
  },
  itemHeadingStatus: {
    fontSize: 14,
    color:'#FFF',
    backgroundColor:'#60b243',
    fontFamily:'SFProDisplay-Light',
    includeFontPadding:false
  },
  itemtitle: {
    fontSize: 12,
    fontFamily:'SFProDisplay-Light',
  },
  item2title: {
    fontSize: 14,
    fontFamily:'SFProDisplay-Semibold',
    includeFontPadding:false
  },
  itemImage: {
    height: hp('5%'),
    width: hp('5%'),
    borderRadius: 4
  },
  headingText: {
    fontSize: 50,
    textAlign: "center"
  },
  container1:{paddingLeft:wp('3%'),paddingTop:wp('3%'),paddingBottom:wp('3%')},
  container2:{paddingLeft:wp('3%'),paddingTop:wp('3%'),paddingBottom:wp('3%')},
  containerOrderStatus:{backgroundColor:'#60b243',marginLeft:wp('3%'),width:wp('35%'),paddingLeft:wp('3%'),paddingRight:wp('3%'),paddingTop:wp('1%'),paddingBottom:wp('1%')},
  containerItem:{flexDirection: "row",marginRight:wp('4%')},
  containerItem2:{flexDirection: "row",marginLeft:wp('2%')},
  divider:{marginTop:'2%',marginBottom:'2%',height:0.5,backgroundColor:'#90959F'},
  textHeadingItem:{color:'#000',fontSize:hp('2%'),fontFamily:'SFProDisplay-Light'},
  textCity:{color:'#000',fontSize:hp('1.2%'),fontFamily:'SFProDisplay-Light'},
  ratingText:{marginLeft:5},
  imgStyle:{width:wp('42%'),height:wp('42%')}   // fully horizontal
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
