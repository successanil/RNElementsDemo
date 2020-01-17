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
  title:{ fontFamily:'SFProDisplayLight',marginLeft: 16 },
  itemwrapper: {width:'100%',height:32,backgroundColor:'#FFF',alignItems:'center',justifyContent:'center',paddingLeft:wp('5%')},
  itemwrapperNoPadding: {width:wp('100%'),backgroundColor:'#FFF',height:hp('10%'),alignItems:'flex-start',justifyContent:'center'},
  itemwrapperNoPaddingForFilter: {paddingLeft:wp('5%'),backgroundColor:'#FFF',height:hp('8%'),alignItems:'flex-start',justifyContent:'center'},
  textwrapperNoPaddingForFilter:{position:'absolute',left:0,right:0,bottom:0,height:1,borderWidth:0.3,borderColor:'#bdc0c6'},
  itemwrapperForDifferentRestaurants: {width:wp('95%'),backgroundColor:'#FFF',height:hp('5%'),alignItems:'flex-start',justifyContent:'center',paddingLeft:16},
  textwrapper:{position:'absolute',bottom:0,left:16,right:16,height:1,borderWidth:0.5,borderStyle:'dashed',borderRadius:1},
  textwrapperNoPadding:{position:'absolute',left:0,right:0,bottom:0,height:1},
  tabIndicator:{position:'absolute',bottom:0,height:2,width:wp('25%'),backgroundColor:'#284AAD'},
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
  itemwrapperInner:{flexDirection: "row", alignItems: "center",width:wp('25%')},
});

const stylesIOS = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
    // height:'100%'
  },
  title:{ fontFamily:'SFProDisplay-Light',marginLeft: 16 },
  itemwrapper: {borderWidth:1,borderColor:'#000',width:wp('80%'),backgroundColor:'#FFF',height:hp('15%'),alignItems:'flex-start',justifyContent:'center',paddingLeft:wp('5%')},
  itemwrapperForDifferentRestaurants: {width:wp('80%'),backgroundColor:'#FFF',height:hp('8%'),alignItems:'flex-start',justifyContent:'center',paddingLeft:16},
  itemwrapperNoPadding: {width:wp('80%'),backgroundColor:'#FFF',height:hp('10%'),alignItems:'flex-start',justifyContent:'center'},
  textwrapper:{position:'absolute',bottom:0,left:16,right:16,height:1,borderWidth:0.5,borderStyle:'dashed',borderRadius:1},  
  textwrapperNoPadding:{position:'absolute',bottom:0,left:0,right:0,height:1,borderWidth:0.5,borderStyle:'dashed',borderRadius:1},
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
  ratingText:{marginLeft:5,fontFamily:'SFProDisplay-Light'},
  deliverLayout:{width:'50%',alignItems:'flex-start'}
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
