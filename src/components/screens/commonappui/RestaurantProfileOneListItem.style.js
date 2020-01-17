import { Platform, StyleSheet } from "react-native";

styles = "";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesAndroid = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,

    // height:'100%'
  },
  itemwrapper: {
    // borderWidth: 1,
    marginTop: 16
  },
  item: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom:'2%'
  },
  itemtitle: {
    fontSize: 12,
    fontStyle: "italic"
  },
  itemImage: {
    height: hp('20%'),
    width: hp('20%'),
    borderRadius: 4
  },
  headingText: {
    fontSize: 50,
    textAlign: "center"
  },
  dishName:{fontFamily:'SFProDisplayLight',fontSize:12},
  dishNameSemibold:{fontFamily:'SFProDisplaySemibold',fontSize:12},
  containerItem:{flexDirection: "column",marginRight:wp('2%'),height:hp('31%')},
  containerItem2:{flexDirection: "column",marginLeft:wp('2%'),height:hp('31%')},
  divider:{marginTop:'2%',marginBottom:'2%',height:1,backgroundColor:'#90959F'},
  textHeadingItem:{color:'#000',fontSize:hp('2%'),fontFamily:'SFProDisplayLight'},
  textCity:{color:'#000',fontSize:hp('1.2%'),fontFamily:'SFProDisplayLight'},
  ratingText:{marginLeft:5},
  priceLayout:{position:'absolute',paddingLeft:16,paddingRight:16,paddingTop:10,paddingBottom:10},
  addButtonLayout:{position:'absolute',right:0,borderWidth:1,borderColor:'#D6D6D6',paddingLeft:18,paddingRight:18,paddingTop:2,paddingBottom:2},
  imgStyle:{width:wp('42%'),height:hp('15%')}   // fully horizontal
});

const stylesIOS = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,

    // height:'100%'
  },
  itemwrapper: {
    // borderWidth: 1,
    marginTop: 16
  },
  item: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom:'2%'
  },
  itemtitle: {
    fontSize: 12,
    fontStyle: "italic"
  },
  itemImage: {
    height: hp('20%'),
    width: hp('20%'),
    borderRadius: 4
  },
  headingText: {
    fontSize: 50,
    textAlign: "center"
  },
  dishName:{fontFamily:'SFProDisplay-Light',fontSize:12},
  dishNameSemibold:{fontFamily:'SFProDisplay-Semibold',fontSize:12},
  containerItem:{flexDirection: "column",marginRight:wp('2%'),height:hp('31%')},
  containerItem2:{flexDirection: "column",marginLeft:wp('2%'),height:hp('31%')},
  divider:{marginTop:'2%',marginBottom:'2%',height:1,backgroundColor:'#90959F'},
  textHeadingItem:{color:'#000',fontSize:hp('2%'),fontFamily:'SFProDisplay-Light'},
  textCity:{color:'#000',fontSize:hp('1.2%'),fontFamily:'SFProDisplay-Light'},
  ratingText:{marginLeft:5},
  priceLayout:{position:'absolute',paddingLeft:16,paddingRight:16,paddingTop:10,paddingBottom:10},
  addButtonLayout:{position:'absolute',right:0,borderWidth:1,borderColor:'#D6D6D6',paddingLeft:18,paddingRight:18,paddingTop:2,paddingBottom:2},
  imgStyle:{width:wp('42%'),height:hp('15%')}   // fully horizontal
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
