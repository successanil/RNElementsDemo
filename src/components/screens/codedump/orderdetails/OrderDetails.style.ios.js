import {Platform, StyleSheet} from 'react-native';

const stylesIOS =  StyleSheet.create({
    container:{
      backgroundColor:'#FFFFFF',
      width:'100%',
      height:'100%',
      padding:16
    },
    itemwrapper:{marginTop:16},
    skipLayout:{
      position:'absolute',
      right:16,
      top:32
    },
    welcomeLayout:{
      marginTop: '10%'
    },
    container1:{
      height:'50%'
    },
    container2:{
      height:'50%'
    },
    dummySpacingLayout:{
      marginTop:'10%',
      height:1
    },
    topRestaurantText:{ position: "absolute", left: 0 ,fontFamily:'SFProDisplay-Light'},
    filterText:{fontFamily:'SFProDisplay-Light'},
    subtotal:{
      includeFontPadding: false,
      color: "#1c1a2f",
      fontSize: 12,
      fontFamily: "SFProDisplay-Semibold"
    },
    rsStyle:{
      includeFontPadding: false,
      color: "#90959F",
      fontSize: 10,
      fontFamily: "SFProDisplay-Light"
    },
    paidViaCashStyle:{
      includeFontPadding: false,
      color: "#BDC0C5",
      fontSize: 12,
      fontFamily: "SFProDisplay-Light"
    }
  });

export default stylesIOS;
