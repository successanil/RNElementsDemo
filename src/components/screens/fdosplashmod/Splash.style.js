import {Platform} from 'react-native';

var styles = '';
if(Platform.OS === 'ios'){
  const stylesIOS = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      // width: wp('100%'),
      // height: hp('100%'),
      flex:1,
      padding: wp('5%'),
    },
    starDeliveryText: {
      color: '#3CBCB4',
      fontSize: 35,
      fontFamily: 'Montserrat-SemiBold',
    },
    logoStyle: {
      width: wp('30%'),
      height: hp('5%'),
    },
    starDeliveryContainer: {
      position: 'absolute',
      width: wp('100%'),
      height: hp('100%'),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  styles = stylesIOS
} else {
  const stylesAndroid = StyleSheet.create({
    container:{
      backgroundColor:'#FFFFFF',
      width:wp('100%'),
      height:hp('100%'),
      padding:wp('5%')
    },
    starDeliveryText:{
      color:'#3CBCB4',
      fontSize:35,
      fontFamily:'SFProDisplayLight'
    },
    logoStyle:{
      width:wp('30%'),
      height:hp('5%')
    },
    starDeliveryContainer:{ position:'absolute',width: wp('100%'), height: hp('100%'), justifyContent: 'center', alignItems: 'center' }
    });
  styles = stylesAndroid
}

export default styles;
