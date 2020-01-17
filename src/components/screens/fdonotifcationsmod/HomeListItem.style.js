import {Platform, StyleSheet} from 'react-native';

styles = '';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const cc = require('../../../utils/ColorsContants');
import Dimens from '../../../utils/Dimens';
import AppFonts from '../../../utils/AppFonts';

const stylesAndroid = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    // height:'100%'
  },
  itemwrapper: {
    // borderWidth: 1,
    marginTop: 16,
  },
  item: {
    fontSize: hp('2%'),
    marginBottom: '2%',
    fontFamily: 'SFProDisplaySemibold',
    includeFontPadding: false,
  },
  itemtitle: {
    fontSize: hp('2%'),
    flex: 1,
    fontFamily: 'SFProDisplayLight',
    includeFontPadding: false,
  },
  itemImage: {
    height: wp('20%'),
    width: wp('20%'),
    borderRadius: 4,
  },
  headingText: {
    fontSize: 50,
    textAlign: 'center',
  },
  container1: {width: '20%'},
  container2: {
    width: '80%',
    flexDirection: 'column',
    paddingLeft: wp('7%'),
  },
  divider: {
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
    height: 1,
    backgroundColor: '#90959F',
  },
  ratingText: {
    marginLeft: 5,
    right: 0,
    fontFamily: 'SFProDisplayLight',
    fontSize: hp('2%'),
    includeFontPadding: false,
  },
  deliverLayout: {width: '50%', alignItems: 'flex-end'},
  pageBg: {width: '100%', backgroundColor: cc.horLine, paddingTop: hp('1%')},
  notificationsEventsPageBg: {flex:1, backgroundColor: cc.horLine},
  notificationHeaderItemStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: Dimens.hpTwo,
  },
  notificationHeaderContainer:{width: Dimens.wpTwentyTwo,padding:Dimens.wpTwo},
});

const stylesIOS = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    // height:'100%'
  },
  itemwrapper: {
    marginTop: 16,
  },
  item: {
    fontSize: hp('2%'),
    marginBottom: hp('0.5%'),
    fontFamily: 'SFProDisplay-Semibold',
    includeFontPadding: false,
  },
  notificationsEventsPageBg: {
    //width: '100%',
    flex:1,
    backgroundColor: cc.horLine,
    paddingTop: wp('2.5%'),
  },
  notificationHeaderItemStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: Dimens.hpTwo,
  },
  notificationHeaderContainer:{width: Dimens.wpTwentyTwo,padding:Dimens.wpTwo},
});

if (Platform.OS === 'ios') {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
