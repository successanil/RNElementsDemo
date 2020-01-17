import {Platform, StyleSheet} from 'react-native';

var styles = '';
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
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: '2%',
  },
  headingText: {
    fontSize: 50,
    textAlign: 'center',
  },
  containerNotificationEvents: {
    flex:1,
    marginLeft: Dimens.wpThree,
    marginRight: Dimens.wpTwo,
  },
  containerNotificationInnerEvents: {
    flex:1,
    paddingRight: Dimens.wpFive,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: Dimens.hpOnePointSix,
    marginTop:Dimens.wpTwo,
    // height:hp('10%'),
    flexDirection: 'row',
  },
  notificationEventsImgStyle: {
    width: Dimens.wpTwentyFive,
    height: Dimens.wpTwentyFive,
    borderTopLeftRadius: Dimens.hpOnePointSix,
    borderBottomLeftRadius: Dimens.hpOnePointSix,
  },
  containerItem: {flexDirection: 'row', marginRight: Dimens.wpFour},
  containerItem2: {flexDirection: 'row'},
  divider: {
    marginTop: '2%',
    marginBottom: '2%',
    height: 1,
    backgroundColor: '#90959F',
  },
  containerOfferFirstList: {
    borderRadius: Dimens.wpSix,
    marginLeft: Dimens.wpSeven,
    marginTop: Dimens.hpThree,
    marginBottom: Dimens.hpThree,
  },
  textHeadingItem1FirstListOffers: {
    paddingLeft: Dimens.wpFive,
    color: cc.colorActiveTab,
    fontSize: Dimens.hpTwoPointFive,
    fontFamily: AppFonts.montserratSemiBold,
  },
  textHeadingItem2FirstListOffers: {
    paddingLeft: Dimens.wpFive,
    color: '#FFF',
    fontSize: Dimens.hpThree,
    fontFamily: AppFonts.montserratSemiBold,
  },
  textHeadingItem: {
    paddingLeft: Dimens.wpFive,
    color: '#000',
    fontSize: Dimens.hpThree,
    fontFamily: AppFonts.montserratSemiBold,
  },
  textHeadingItemNotificationEvents: {
    // marginLeft: Dimens.wpTwoPointFive,
    // includeFontPadding:false,
    // color: '#000',
    // fontSize: Dimens.hpTwoPointFive,
    // fontFamily: AppFonts.montserratSemiBold,
    color: '#000',
    fontSize: Dimens.hpTwo,
    fontFamily: AppFonts.montserratSemiBold,
  },
  textSubHeadingItemNotificationEvents: {
    paddingLeft: Dimens.wpTwo,
    color: '#000',
    fontSize: Dimens.hpOnePointSix,
    fontFamily: AppFonts.montserratItalic,
  },
  textCityNotificationEvents: {
    marginTop: Dimens.wpFive,
    //paddingLeft: wp('5%'),
    fontSize: Dimens.hpOnePointEight,
    color:cc.shivajiTextColor,
    fontFamily: AppFonts.montserratRegular,
  },
  shareAndAttendingContainers:{
    flex: 1,
    alignItems: 'flex-end',
    // paddingRight:Dimens.wpTwo,
    paddingTop:Dimens.wpTwo,
    paddingBottom: Dimens.wpOne,
  },
  textHeadingItemForNotificationOffers: {
    paddingLeft: Dimens.wpFive,
    color: '#000',
    fontSize: hp('2.6%'),
    fontFamily: AppFonts.montserratSemiBold,
  },
  textsubHeadingItemForNotificationOffers: {
    paddingLeft: wp('5%'),
    marginTop: wp('4%'),
    color: '#000',
    fontSize: hp('2.6%'),
    fontFamily: 'Montserrat-SemiBold',
  },
  containerInner2:{
    // width: wp('70%'),
    flex: 1,
    paddingLeft:Dimens.wpTwo,
    // paddingRight: Dimens.wpTwo,
    // padding: Dimens.wpTwo,
    paddingTop:Dimens.wpTwo,
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  textHeadingItem2: {
    paddingLeft: wp('5%'),
    marginTop: wp('1%'),
    color: '#000',
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Light',
  },
  textCity: {
    paddingLeft: wp('5%'),
    marginTop: wp('1%'),
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Regular',
    color: cc.colorActiveTab,
  },
  horLine: {
    marginTop: wp('2%'),
    borderBottomColor: cc.horLine,
    borderBottomWidth: wp('0.2%'),
  },
  ratingText: {marginLeft: 5},
  toastItemContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingTop: wp('2%'),
  },
  imgStyle: {width: wp('40%'), height: wp('40%'), borderRadius: wp('5%')}, // fully horizontal
  offerCodeText: {
    paddingLeft: wp('2%'),
    color: '#F7B239',
    fontSize: hp('2.6%'),
    fontFamily: 'Montserrat-SemiBold',
  },
  textHeadingItemPromoCode: {
    paddingLeft: wp('5%'),
    color: '#FFF',
    fontSize: hp('2.5%'),
    fontFamily: 'Montserrat-Regular',
  },
  textHeadingItemConditionApply: {
    paddingLeft: wp('5%'),
    color: '#FFF',
    fontSize: hp('2.5%'),
    fontFamily: 'Montserrat-Medium',
  },
  topViewForOffersFirstListItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: wp('40%'),
    borderRadius: 18,
    height: wp('40%'),
    paddingTop: wp('5%'),
  },
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
    fontWeight: 'bold',
    fontSize: 14,
  },
  itemtitle: {
    flex: 1,
    padding: '5%',
    fontSize: 12,
    fontStyle: 'italic',
  },
  itemImage: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  headingText: {
    fontSize: 50,
    textAlign: 'center',
  },
  containerItem: {flexDirection: 'row', marginRight: wp('5%')},
  containerItem2: {flexDirection: 'row'},
  divider: {height: 1, backgroundColor: '#90959F'},
  textHeadingItem1FirstListOffers: {
    paddingLeft: wp('5%'),
    color: cc.colorActiveTab,
    fontSize: hp('2.5%'),
    fontFamily: 'Montserrat-SemiBold',
  },
  textHeadingItem2FirstListOffers: {
    paddingLeft: wp('5%'),
    color: '#FFF',
    fontSize: hp('3%'),
    fontFamily: 'Montserrat-SemiBold',
  },
  containerInner2:{
    // width: wp('70%'),
    flex: 1,
    // paddingLeft:Dimens.wpTwo,
    // paddingRight: Dimens.wpTwo,
    padding: Dimens.wpTwo,
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  shareAndAttendingContainers:{
    flex: 1,
    alignItems: 'flex-end',
    paddingRight:Dimens.wpTwo,
    paddingTop:Dimens.wpTwo,
    paddingBottom: Dimens.wpOne,
  },
  containerOfferFirstList: {
    borderRadius: 18,
    marginLeft: wp('8%'),
    marginTop: hp('1%'),
    marginBottom: hp('2%'),
  },
  containerNotificationEvents: {
    flex:1,
    marginLeft: Dimens.wpThree,
    marginRight: Dimens.wpTwo,
  },
  containerNotificationInnerEvents: {
    flex:1,
    marginTop: Dimens.wpFive,
    marginBottom: Dimens.wpFive,
    // paddingRight: Dimens.wpFive,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: Dimens.hpOnePointSix,
    flexDirection: 'row',
  },
  notificationEventsImgStyle: {
    width: Dimens.wpTwentyFive,
    height: Dimens.wpTwentyFive,
    borderTopLeftRadius: Dimens.hpOnePointSix,
    borderBottomLeftRadius: Dimens.hpOnePointSix,
  },
  textHeadingItem: {
    paddingLeft: wp('5%'),
    color: '#000',
    fontSize: hp('3%'),
    fontFamily: AppFonts.montserratSemiBold,
  },
  textHeadingItemNotificationEvents: {
    //paddingLeft: Dimens.wpFive,
    color: '#000',
    fontSize: Dimens.hpTwo,
    fontFamily: AppFonts.montserratSemiBold,
  },
  textSubHeadingItemNotificationEvents: {
    paddingLeft: Dimens.wpTwo,
    color: '#000',
    fontSize: Dimens.hpOnePointSix,
    fontFamily: AppFonts.montserratItalic,
  },
  textCityNotificationEvents: {
    marginTop: Dimens.wpFive,
    //paddingLeft: wp('5%'),
    fontSize: Dimens.hpOnePointEight,
    color:cc.shivajiTextColor,
    fontFamily: AppFonts.montserratRegular,
  },
  textHeadingItemForNotificationOffers: {
    paddingLeft: wp('5%'),
    color: '#000',
    fontSize: hp('3%'),
    fontFamily: 'Montserrat-SemiBold',
  },
  textsubHeadingItemForNotificationOffers: {
    marginTop: wp('4%'),
    paddingLeft: wp('5%'),
    color: '#000',
    fontSize: hp('2.5%'),
    fontFamily: 'Montserrat-SemiBold',
  },
  textHeadingItem2: {
    paddingLeft: wp('5%'),
    marginTop: wp('5%'),
    color: '#000',
    fontSize: hp('1%'),
    fontFamily: 'Montserrat-Light',
  },
  textCity: {
    paddingLeft: wp('5%'),
    marginTop: wp('5%'),
    color: '#000',
    fontSize: 12,
    color: cc.colorActiveTab,
  },
  horLine: {
    marginTop: wp('4%'),
    borderBottomColor: cc.horLine,
    borderBottomWidth: wp('0.2%'),
  },
  ratingText: {marginLeft: 5},
  imgStyle: {width: wp('40%'), height: wp('40%'), borderRadius: wp('5%')},
  toastItemContainer: {backgroundColor: 'rgba(255, 255, 255, 0.9)'},
  textHeadingItemPromoCode: {
    paddingLeft: wp('5%'),
    color: '#FFF',
    fontSize: hp('2.5%'),
    fontFamily: 'Montserrat-Regular',
  },
  offerCodeText: {
    color: '#F7B239',
    fontSize: hp('2.6%'),
    fontFamily: 'Montserrat-SemiBold',
  },
  textHeadingItemConditionApply: {
    paddingLeft: wp('5%'),
    color: '#FFF',
    fontSize: hp('2.5%'),
    fontFamily: 'Montserrat-Medium',
  },
  topViewForOffersFirstListItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: wp('40%'),
    borderRadius: 18,
    height: wp('40%'),
    paddingTop: wp('5%'),
  },
});

if (Platform.OS === 'ios') {
  styles = stylesIOS;
} else {
  styles = stylesAndroid;
}

export default styles;
