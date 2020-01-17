import constants from './constants';

export default class PrintUtils {}

var printLog = s => {
  if (constants.loggingEnabled) {
    console.log(s);
  }
};

var printLogWithClassName = (cls, s) => {
  if (
    (constants.loggingEnabled && cls.includes(constants.logFilter1)) ||
    cls.includes(constants.logFilter2) ||
    cls.includes(constants.logFilter3)
  ) {
    console.log(cls);
    console.log(s);
  }
};

var showAlertForBackScreen = lastScreen => {
  if (constants.showBackScreenAlert) {
    alert(lastScreen);
  }
};

module.exports = {
  printLog,
  printLogWithClassName,
  showAlertForBackScreen,
};
