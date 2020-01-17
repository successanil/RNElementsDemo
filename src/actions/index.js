import {ADD_START_INDEX} from '../constants/actions-types';
import {ADD_SCREEN_INDEX_TO_SCREEN_STACK} from '../constants/actions-types';
import {ADD_NOTIFICATION_TITLE_ARR} from '../constants/actions-types';
import {ADD_NOTIFICATION_EVENTS_ARR} from '../constants/actions-types';
import {ADD_NOTIFICATION_OFFERS_ARR} from '../constants/actions-types';
import {ADD_NOTIFICATION_TOAST_ARR} from '../constants/actions-types';
import {ADD_NOTIFICATION_OFFERS_HEADER_ARR} from '../constants/actions-types';

export const addStartIndex = payloadL => {
  return {
    type: ADD_START_INDEX,
    payload: payloadL,
  };
};
export const addStartIndexToScreenStack = payloadL => {
  return {
    type: ADD_SCREEN_INDEX_TO_SCREEN_STACK,
    payload: payloadL,
  };
};

export const addNotificationTitleDataListToRedux = payloadL => {
  return {
    type: ADD_NOTIFICATION_TITLE_ARR,
    payload: payloadL,
  };
};

export const addNotificationEventsForCustomerDataList = payloadL => {
  return {
    type: ADD_NOTIFICATION_EVENTS_ARR,
    payload: payloadL,
  };
};

export const addNotificationOffersForCustomerDataList = payloadL => {
  return {
    type: ADD_NOTIFICATION_OFFERS_ARR,
    payload: payloadL,
  };
};
export const addNotificationOffersHeadersForCustomerDataList = payloadL => {
  return {
    type: ADD_NOTIFICATION_OFFERS_HEADER_ARR,
    payload: payloadL,
  };
};

export const addNotificationToastForCustomerDataList = payloadL => {
  return {
    type: ADD_NOTIFICATION_TOAST_ARR,
    payload: payloadL,
  };
};
