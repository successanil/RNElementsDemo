import { Platform, StyleSheet } from "react-native";

styles = "";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesAndroid = StyleSheet.create({
  searchTabStyle:{width:wp('5%'),height:wp('5%')},
  container: {
    flex: 1,
    paddingTop: 50
    // height:'100%'
  },
  itemwrapper: {width:wp('95%'),backgroundColor:'#FFF',height:hp('10%'),alignItems:'flex-start',justifyContent:'center',paddingLeft:16},
  itemwrapperNoPadding: {width:wp('100%'),backgroundColor:'#FFF',height:hp('10%'),alignItems:'flex-start',justifyContent:'center'},
  itemwrapperNoPaddingForFilter: {paddingLeft:wp('5%'),backgroundColor:'#FFF',height:hp('8%'),alignItems:'flex-start',justifyContent:'center'},
  textwrapperNoPaddingForFilter:{position:'absolute',left:0,right:0,bottom:0,height:1,borderWidth:0.3,borderColor:'#bdc0c6'},
  itemwrapperForDifferentRestaurants: {width:wp('95%'),backgroundColor:'#FFF',height:hp('5%'),alignItems:'flex-start',justifyContent:'center',paddingLeft:16},
  textwrapper:{position:'absolute',bottom:0,left:16,right:16,height:1,borderWidth:0.5,borderStyle:'dashed',borderRadius:1},
  textwrapperNoPadding:{position:'absolute',left:0,right:0,bottom:0,height:1,borderWidth:0.3,borderRadius:1},
  textCentral:{fontFamily:'SFProDisplaySemibold'},
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
    height: wp('20%'),
    width: wp('20%'),
    borderRadius: 4
  },
  headingText: {
    fontSize: 50,
    textAlign: "center"
  },
  container1:{ width: "20%" },
  container2:{
    width: "80%",
    flexDirection: "column",
    paddingLeft: wp('10%'),
  },
  divider:{marginTop:hp('1%'),marginBottom:hp('1%'),height:1,backgroundColor:'#90959F'},
  ratingText:{marginLeft:5,right:0,fontFamily:'SFProDisplayLight',fontSize: hp('2%'),includeFontPadding:false},
  deliverLayout:{width:'50%',alignItems:'flex-end'},
  title:{paddingLeft:16,fontFamily:'SFProDisplayLight'}
});

const stylesIOS = StyleSheet.create({
  searchTabStyle:{width:wp('5%'),height:wp('5%')},
  container: {
    flex: 1,
    paddingTop: 50
    // height:'100%'
  },
  itemwrapper: {width:wp('95%'),backgroundColor:'#FFF',height:hp('10%'),alignItems:'flex-start',justifyContent:'center',paddingLeft:16},
  itemwrapperNoPadding: {width:wp('100%'),backgroundColor:'#FFF',height:hp('8%'),alignItems:'flex-start',justifyContent:'center'},
  itemwrapperNoPaddingForFilter: {paddingLeft:wp('5%'),backgroundColor:'#FFF',height:hp('8%'),alignItems:'flex-start',justifyContent:'center'},
  textwrapperNoPaddingForFilter:{position:'absolute',left:0,right:0,bottom:0,height:1,borderWidth:0.3,borderColor:'#bdc0c6'},
  itemwrapperForDifferentRestaurants: {width:wp('95%'),backgroundColor:'#FFF',height:hp('5%'),alignItems:'flex-start',justifyContent:'center',paddingLeft:16},
  textwrapper:{position:'absolute',bottom:0,left:16,right:16,height:1,borderWidth:0.5,borderStyle:'dashed',borderRadius:1},
  textwrapperNoPadding:{position:'absolute',left:0,right:0,bottom:0,height:1,borderWidth:0.3,borderRadius:1},
  textCentral:{fontFamily:'SFProDisplay-Semibold'},
  item: {
    fontSize: hp('2%'),
    marginBottom:'2%',
    fontFamily:'SFProDisplay-Semibold',
    includeFontPadding:false,
  },
  itemtitle: {
    fontSize: hp('2%'),
    flex:1,
    fontFamily:'SFProDisplay-Light',
    includeFontPadding:false,
  },
  itemImage: {
    height: wp('20%'),
    width: wp('20%'),
    borderRadius: 4
  },
  headingText: {
    fontSize: 50,
    textAlign: "center"
  },
  container1:{ width: "20%" },
  container2:{
    width: "80%",
    flexDirection: "column",
    paddingLeft: wp('10%'),
  },
  divider:{marginTop:hp('1%'),marginBottom:hp('1%'),height:1,backgroundColor:'#90959F'},
  ratingText:{marginLeft:5,right:0,fontFamily:'SFProDisplay-Light',fontSize: hp('2%'),includeFontPadding:false},
  deliverLayout:{width:'50%',alignItems:'flex-end'},
  title:{paddingLeft:16,fontFamily:'SFProDisplay-Light'}
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
