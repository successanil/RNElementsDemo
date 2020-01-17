import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const stylesAndroid = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF',
    width:'100%',
    height:'100%',
    paddingRight:'5%',
    paddingLeft:'5%',  // 5% means 16
  },
  itemwrapper:{marginTop:16},
  skipLayout:{
    position:'absolute',
    right:'5%',
    top:'5%'
  },
  welcomeLayout:{
    marginTop: '10%'
  },
  container1:{
    height:'50%',
    // borderWidth:1,
    // borderColor:'#000FFF'
  },
  container2:{
    height:'50%',
  },
  dummySpacingLayout:{
    marginTop:'7%',
    height:1
  },
  verticalMarginForScreen:10,
  topRestaurantText:{ position: "absolute", left: 0 ,fontFamily:'SFProDisplayLight'},
  filterText:{fontFamily:'SFProDisplayLight'},
  locationIcon:{width:wp('10%'),height:wp('10%')},
  locationTextLayout:{paddingLeft:wp('5%')},
  locationText:{includeFontPadding:false,color:'#1c1a2f',fontFamily:'SFProDisplayLight'},
  addNewCardText:{marginLeft:10,includeFontPadding:false,color:'#F86C44',fontFamily:'SFProDisplaySemibold'},
  locationSubText:{includeFontPadding:false,color:'#284AAD',fontFamily:'SFProDisplayLight',fontSize:hp('2%')},
  payment_divider3:{marginTop:hp('10%'),marginBottom:hp('10%'),height:2,backgroundColor:'#1c1a2f'},
  // customstyles for headers

  homeLayout:{paddingLeft:wp('5%'),paddingTop:hp('2%')},
  homeText:{fontSize:hp('3%'),includeFontPadding:false,color:'#1c1a2f',fontWeight:'bold',fontFamily:'SFProDisplayLight'},
  addressText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplayLight'},
  hamburgerViewStyle:{paddingLeft:wp('5%'),paddingTop:wp('5%')},
  downArrowStyle:{marginLeft:5,width:wp('3%'),height:wp('3%')},
  searchIconStyle:{width:wp('5%'),height:wp('5%')},
  smileViewStyle:{alignItems:'center',flexDirection:'row',position:'absolute',right:0,paddingRight:wp('5%'),paddingTop:wp('5%')},

  // cc/debit cards
  ccTextInputStyle1:{height:hp('7%'),borderWidth:0.5,width:'30%'},
  ccTextInputStyle2:{marginLeft:wp('5%'),height:hp('7%'),width:'70%',backgroundColor:'#bdc0c5',color:'#FFF',textAlign:'center',textAlignVertical:'center',justifyContent:'center',alignItems:'center'},
  ccLogo:{width:wp('10%'),height:wp('10%'),marginRight:wp('5%')},

  // textInputstyles
  textInputStyle1:{width:wp('90%'),borderBottomWidth:1,borderBottomColor:'#C7CACF'},
  textInputStyle2:{width:'60%',borderBottomWidth:1,borderBottomColor:'#C7CACF'},
  textInputStyle3:{marginLeft:wp('5%'),width:'35%',borderBottomWidth:1,borderBottomColor:'#C7CACF'},

  // apply button
  applyLayout:{height:hp('7%'),width:wp('90%'),marginTop:wp('5%'),fontFamily:'SFProDisplaySemibold',backgroundColor:'#FA6C3C',color:'#FFF',alignSelf:'center',alignItems:'center',justifyContent:'center'},

  payWithCashLayout:{marginTop:10,height:hp('7%'),backgroundColor:'#63B04A',alignItems:'center',justifyContent:'center'},
  payWithCash:{includeFontPadding:false,color:'#FFF',fontFamily:'SFProDisplayLight',fontSize:hp('2%')},
  });

export default stylesAndroid;
