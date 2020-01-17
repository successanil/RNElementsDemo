import { Platform, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

styles = "";

const stylesAndroid = StyleSheet.create({
  container: {width:'100%',height:'100%',backgroundColor:'#00000000'},
  container1:{width:'100%',height:'20%',backgroundColor:'#FFF',paddingLeft:16,paddingRight:16,alignItems:'center',justifyContent:'center'},
  container2:{paddingLeft:wp('5%'),width:'100%',backgroundColor:'#EFEFEF',borderRadius:10,alignItems:'center',justifyContent:'center'},
  searchTabStyle:{position:'absolute',width:18,height:18},
  touchSearchTabStyle:{position:'absolute',width:18,height:18,left:26},
  touchCancelStyle:{position:'absolute',right:26,width:14,height:14},
  cancelButtonStyle:{position:'absolute',width:14,height:14},
  itemwrapper: {
    // borderWidth: 1,
    marginTop: 16
  },
  item: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    height: 44
  },
  itemtitle: {
    flex: 1,
    padding: 12,
    fontSize: 12,
    height: 30,
    fontStyle: "italic"
  },
  itemImage: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2
  },
  headingText: {
    fontSize: 50,
    textAlign: "center"
  }
});

const stylesIOS = StyleSheet.create({
  container:{width:'100%',height:'100%',backgroundColor:'#00000000'},
  container1:{width:'100%',height:'20%',backgroundColor:'#FFF',paddingLeft:16,paddingRight:16,alignItems:'center',justifyContent:'center'},
  container2:{width:'100%',backgroundColor:'#EFEFEF',borderRadius:10,alignItems:'center',justifyContent:'center'},
  searchTabStyle:{position:'absolute',width:18,height:18},
  touchSearchTabStyle:{position:'absolute',width:18,height:18,left:26},
  touchCancelStyle:{position:'absolute',right:26,width:14,height:14},
  cancelButtonStyle:{position:'absolute',width:14,height:14},
  itemwrapper: {
    // borderWidth: 1,
    // borderRadius: 10,
    marginTop: 16
  },
  item: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    height: 44
  },
  itemtitle: {
    flex: 1,
    padding: 12,
    fontSize: 12,
    height: 30,
    fontStyle: "italic"
  },
  itemImage: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2
  },
  headingText: {
    fontSize: 50,
    textAlign: "center"
  }
});

if (Platform.OS === "ios") {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
