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
    padding:'5%',  // 5% means 16
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
  topRestaurantText:{ position: "absolute", left: 0 ,fontFamily:'SFProDisplayLight'},
  filterText:{fontFamily:'SFProDisplayLight'},
  locationIcon:{width:wp('5%'),height:wp('5%')},
  locationTextLayout:{paddingLeft:wp('5%'),paddingTop:wp('5%')},
  locationText:{includeFontPadding:false,color:'#1c1a2f',fontFamily:'SFProDisplaySemibold',fontSize:hp('3%')},
  locationSubText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplayLight',fontSize:hp('2%')},
  
  // customstyles for headers

  homeLayout:{paddingLeft:wp('5%'),paddingTop:hp('2%')},
  homeText:{fontSize:hp('3%'),includeFontPadding:false,color:'#1c1a2f',fontWeight:'bold',fontFamily:'SFProDisplayLight'},
  addressText:{includeFontPadding:false,color:'#777779',fontFamily:'SFProDisplayLight'},
  hamburgerViewStyle:{paddingLeft:wp('5%'),paddingTop:wp('5%')},
  downArrowStyle:{marginLeft:5,width:wp('3%'),height:wp('3%')},
  searchIconStyle:{width:wp('5%'),height:wp('5%')},
  smileViewStyle:{alignItems:'center',flexDirection:'row',position:'absolute',right:0,paddingRight:wp('5%'),paddingTop:wp('5%')},

  // favorite list item style
  divider:{marginTop:hp('1%'),marginBottom:hp('1%'),height:1,backgroundColor:'#90959F'},
  ratingText:{marginLeft:5,right:0,fontFamily:'SFProDisplayLight',fontSize: hp('2%'),includeFontPadding:false},
  deliverLayout:{width:'50%',alignItems:'flex-end'},
  containerList1:{ width: "20%" },
  containerList2:{
    width: "80%",
    flexDirection: "column",
    paddingLeft: wp('10%'),
  },
  itemImage: {
    height: wp('20%'),
    width: wp('20%'),
    borderRadius: 4
  }

  });

export default stylesAndroid;
