import PrintUtils from './PrintUtils';
const DBUtils = require('./DBUtils');

export default class AppUtils {}
var retrieveStateDataInRedux = state => {
  return {
    startIndexFromRedux: state.startIndexReducer.startIndex,
    startIndexStack: state.startIndexReducer.startIndexStack,
    notificationTitleArr: state.startIndexReducer.notificationTitleArr,
    notificationEventsForCustomerArr:state.notificationReducer.notificationEventsForCustomerArr,
    notificationOffersForCustomerArr:state.notificationReducer.notificationOffersForCustomerArr,
    notificationOffersHeaderArr:state.notificationReducer.notificationOffersHeaderArr  

  };
};

var backScreenFetch = (startIndexArr, callback) => {
  let thisScreen = startIndexArr.pop(); // remove this thisScreen
  let lastScreen = startIndexArr[startIndexArr.length - 1];
  callback(lastScreen);
};

var validateEmail = mail => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

var populateReduxStateFromRealm = () => {
  return new Promise((resolve, reject) => {
    DBUtils.getNotificationToastData()
      .then(result => {
        PrintUtils.printLogWithClassName('AppUtils', result);
        resolve(result);
      })
      .catch(error => {});
  });
};

var populateReduxToastDataFromRealm = () => {
  return new Promise((resolve, reject) => {
    DBUtils.getNotificationToastData()
      .then(result => {
        PrintUtils.printLogWithClassName('AppUtils', result);
        resolve(result);
      })
      .catch(error => {});
  });
};
var populateReduxOffersDataFromRealm = () => {
  return new Promise((resolve, reject) => {
    DBUtils.getNotificationOffersData()
      .then(result => {
        PrintUtils.printLogWithClassName('AppUtils', result);
        resolve(result);
      })
      .catch(error => {});
  });
};
module.exports = {
  retrieveStateDataInRedux,
  validateEmail,
  backScreenFetch,
  populateReduxStateFromRealm,
  populateReduxToastDataFromRealm,
  populateReduxOffersDataFromRealm
};

