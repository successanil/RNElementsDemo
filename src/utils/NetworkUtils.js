const axios = require('axios');
import constants from './constants';
import PrintUtils from './PrintUtils';

var fetchNotificationEventsForCustomer = customerId => {
  if (customerId !== '') {
    constants.CUSTOMER_ID = customerId;
  }
  return new Promise((resolve, reject) => {
    axios
      .get(constants.EVENTS_FOR_CUSTOMER_URL)
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      })
      .finally(() => {
        // always executed
      });
  });
};

var fetchNotificationOffersForCustomer = customerId => {
  if (customerId !== '') {
    constants.CUSTOMER_ID = customerId;
  }
  console.log(constants.OFFERS_FOR_CUSTOMER_URL);
  return new Promise((resolve, reject) => {
    axios
      .get(constants.OFFERS_FOR_CUSTOMER_URL)
      .then(result => {
        var data = result.data.data;
        
        var seg1Arr = [];  // paid
        var seg2Arr = [];
        //data[0].paid=true;
        //data[1].paid=false;
        data.forEach(child => {
          console.log(child.paid);
          if(child.paid == true){
            seg1Arr.push(child);
          } else {
            seg2Arr.push(child);
          }
        });

        

        var result1 = {
          data1:seg1Arr,
          data2:seg2Arr
        }
        resolve(result1);
      })
      .catch(err => {
        reject(err);
      })
      .finally(() => {
        // always executed
      });
  });
};

var fetchNotificationSettingsForCustomer = customerId => {
  if (customerId !== '') {
    constants.CUSTOMER_ID = customerId;
  }
  PrintUtils.printLogWithClassName('NetworkUtils',constants.SETTINGS_FOR_CUSTOMER_URL)
  return new Promise((resolve, reject) => {
    axios
      .get(constants.SETTINGS_FOR_CUSTOMER_URL)
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      })
      .finally(() => {
        // always executed
      });
  });
};

module.exports = {
  fetchNotificationOffersForCustomer,
  fetchNotificationEventsForCustomer,
  fetchNotificationSettingsForCustomer,
};
