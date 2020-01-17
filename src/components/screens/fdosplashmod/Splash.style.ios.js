import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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

export default stylesIOS;
