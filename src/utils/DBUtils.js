import Realm from 'realm';
import constants from './constants';
import PrintUtils from './PrintUtils';

const RealmInstance = new Realm({
  schema: [
    constants.NotificationsOffersScreenSchema,
    constants.NotificationsToastScreenSchema,
    constants.NotificationsEventsScreenSchema,
  ],
});

var getNotificationToastData = () => {
  return new Promise((resolve, reject) => {
    const notificationToastData = RealmInstance.objects(
      constants.NotificationsToastScreen,
    )[0].jsonData;

    console.log(JSON.parse(notificationToastData));

    resolve(JSON.parse(notificationToastData));
  });
};

var getNotificationOffersData = () => {
  return new Promise((resolve, reject) => {
    const notificationOffersData = RealmInstance.objects(
      constants.NotificationsOffersScreen,
    )[0].jsonData;

    console.log(JSON.parse(notificationOffersData));

    resolve(JSON.parse(notificationOffersData));
  });
};

var createNotificationToastData = data => {
  return new Promise((resolve, reject) => {
    RealmInstance.write(() => {
      RealmInstance.create(constants.NotificationsToastScreen, {
        jsonData: JSON.stringify(data),
      });
      resolve('done');
    });
  });
};

var createNotificationOffersData = data => {
  return new Promise((resolve, reject) => {
    RealmInstance.write(() => {
      RealmInstance.create(constants.NotificationsOffersScreen, {
        jsonData: JSON.stringify(data),
      });
      resolve('done');
    });
  });
};

module.exports = {
  getNotificationToastData,
  RealmInstance,
  createNotificationToastData,
  getNotificationToastData
  
};
