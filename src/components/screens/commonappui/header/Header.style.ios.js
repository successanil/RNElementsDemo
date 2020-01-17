import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const stylesIOS = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#FF00FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
  homeLayout: {paddingLeft: 16, paddingTop: hp('2%')},
  homeText: {
    includeFontPadding: false,
    color: '#2546B0',
    fontFamily: 'SFProDisplay-Light',
  },
  addressText: {
    includeFontPadding: false,
    color: '#777779',
    fontFamily: 'SFProDisplay-Light',
  },
  hamburgerViewStyle: {paddingLeft: wp('10%'), paddingTop: wp('10%')},
  smileViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    paddingRight: wp('5%'),
    paddingTop: wp('5%'),
  },
});

export default stylesIOS;
