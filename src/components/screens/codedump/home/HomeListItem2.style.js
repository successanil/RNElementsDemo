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
  containerItem:{flexDirection: "row",marginRight:wp('4%')},
  containerItem2:{flexDirection: "row",marginLeft:wp('2%')},
  divider:{marginTop:'2%',marginBottom:'2%',height:1,backgroundColor:'#90959F'},
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
  itemwrapper: {
    marginTop: 16
  },
  item: {
    fontWeight: "bold",
    fontSize: 14,
  },
  itemtitle: {
    flex: 1,
    padding: '5%',
    fontSize: 12,
    fontStyle: "italic"
  },
  itemImage: {
    height: 50,
    width: 50,
    borderRadius: 10
  },
  headingText: {
    fontSize: 50,
    textAlign: "center"
  },
  containerItem:{flexDirection: "row",marginRight:wp('5%')},
  containerItem2:{flexDirection:'row'},
  divider:{height:1,backgroundColor:'#90959F'},
  textHeadingItem:{color:'#000',fontSize:hp('2%'),fontFamily:'SFProDisplay-Light'},
  textCity:{color:'#000',fontSize:12,marginTop:'5%'},
  ratingText:{marginLeft:5},
  imgStyle:{width:wp('43%'),height:wp('43%')}
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
