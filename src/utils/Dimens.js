import {Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Dimens = {
  wpOne: wp('1%'),
  wpOnePointFive: wp('1.5'),
  wpTwo: wp('2%'),
  wpTwoPointFive: wp('2.5%'),
  wpTwoPointSeven: wp('2.7%'),
  wpThree: wp('3%'),
  wpThreePointFive: wp('3.5%'),
  wpSix: wp('6%'),
  wpTen: wp('10%'),
  hpOne:hp('1%'),
  hpOnePointThree:hp('1.3%'),
  hpOnePointFive:hp('1.5%'),
  hpTwo: hp('2%'),
  wpFour: wp('4%'),
  wpFive: wp('5%'),
  wpSeven: wp('7%'),
  wpTwentyFive: wp('25%'),
  wpTwentyTwo: wp('22%'),
  wpEight: wp('8%'),
  hpThree: hp('3%'),
  hpTwoPointFive: hp('2.5%'),
  hpOnePointFour: hp('1.4%'),
  hpOnePointFive: hp('1.5%'),
  hpOnePointSix: hp('1.6%'),
  hpOnePointSeven: hp('1.7%'),
  hpOnePointEight:hp('1.8%'),
  hpPointOne: hp('0.1%'),
  hpTwoPointFour: hp('2.4%'),
  hpThree: hp('3%'),
  hpThreePointFive:hp('3.5%'),
  hpFour: hp('4%'),
  hpFive: hp('5%'),
  hpSix: hp('6%'),
  hpSeven: hp('7%'),
  hpEight: hp('8%'),
  hpNine: hp('9%'),
  hpTen: hp('10%'),
  hpElevent: hp('11%'),
};

if (Platform.isPad) {
  Dimens.wpOne = wp('1%');
  Dimens.wpOnePointFive = wp('1.5');
  Dimens.wpTwo = wp('2%');
  Dimens.wpTwoPointFive = wp('2.5%');
  Dimens.wpTwoPointSeven = wp('2.7%');
  Dimens.wpThree = wp('3%');
  Dimens.wpThreePointFive = wp('3.5%');
  Dimens.wpSix = wp('6%');
  Dimens.wpTen = wp('10%');
  Dimens.hpTwo = hp('2%');
  Dimens.wpFour = wp('4%');
  Dimens.wpFive = wp('5%');
  Dimens.wpSeven = wp('7%');
  Dimens.wpTwentyFive = wp('25%');
  Dimens.wpTwentyTwo = wp('22%');
  Dimens.wpEight = wp('8%');
  Dimens.hpThree = hp('3%');
  Dimens.hpTwoPointFive = hp('2.5%');
  Dimens.hpOnePointFive = hp('1.5%');
  Dimens.hpOnePointSix = hp('1.6%');
  Dimens.hpOnePointSeven = hp('1.7%');
  Dimens.hpPointOne = hp('0.1%');
  Dimens.hpTwoPointFour = hp('2.4%');
  Dimens.hpThree = hp('3%');
} else if (Platform.OS === 'ios') {
  Dimens.wpOne = wp('1%');
  Dimens.wpOnePointFive = wp('1.5');
  Dimens.wpTwo = wp('2%');
  Dimens.wpTwoPointFive = wp('2.5%');
  Dimens.wpTwoPointSeven = wp('2.7%');
  Dimens.wpThree = wp('3%');
  Dimens.wpThreePointFive = wp('3.5%');
  Dimens.wpSix = wp('6%');
  Dimens.wpTen = wp('10%');
  Dimens.hpTwo = hp('2%');
  Dimens.wpFour = wp('4%');
  Dimens.wpFive = wp('5%');
  Dimens.wpSeven = wp('7%');
  Dimens.wpTwentyFive = wp('25%');
  Dimens.wpTwentyTwo = wp('22%');
  Dimens.wpEight = wp('8%');
  Dimens.hpThree = hp('3%');
  Dimens.hpTwoPointFive = hp('2.5%');
  Dimens.hpOnePointFive = hp('1.5%');
  Dimens.hpOnePointSix = hp('1.6%');
  Dimens.hpOnePointSeven = hp('1.7%');
  Dimens.hpPointOne = hp('0.1%');
  Dimens.hpTwoPointFour = hp('2.4%');
  Dimens.hpThree = hp('3%');
} else {
  // android
  Dimens.wpOne = wp('1%');
  Dimens.wpOnePointFive = wp('1.5');
  Dimens.wpTwo = wp('2%');
  Dimens.wpTwoPointFive = wp('2.5%');
  Dimens.wpTwoPointSeven = wp('2.7%');
  Dimens.wpThree = wp('3%');
  Dimens.wpThreePointFive = wp('3.5%');
  Dimens.wpSix = wp('6%');
  Dimens.wpTen = wp('10%');
  Dimens.hpTwo = hp('2%');
  Dimens.wpFour = wp('4%');
  Dimens.wpFive = wp('5%');
  Dimens.wpSeven = wp('7%');
  Dimens.wpTwentyFive = wp('25%');
  Dimens.wpTwentyTwo = wp('22%');
  Dimens.wpEight = wp('8%');
  Dimens.hpThree = hp('3%');
  Dimens.hpTwoPointFive = hp('2.5%');
  Dimens.hpOnePointFive = hp('1.5%');
  Dimens.hpOnePointSix = hp('1.6%');
  Dimens.hpOnePointSeven = hp('1.7%');
  Dimens.hpPointOne = hp('0.1%');
  Dimens.hpTwoPointFour = hp('2.4%');
  Dimens.hpThree = hp('3%');
}

export default Dimens;
