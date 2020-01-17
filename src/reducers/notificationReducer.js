import {ADD_NOTIFICATION_EVENTS_ARR} from '../constants/actions-types';
import {ADD_NOTIFICATION_OFFERS_ARR} from '../constants/actions-types';
import {ADD_NOTIFICATION_TOAST_ARR} from '../constants/actions-types';
import {ADD_NOTIFICATION_OFFERS_HEADER_ARR} from '../constants/actions-types';

const initialState = {
  notificationEventsForCustomerArr: [],
  notificationOffersForCustomerArr: [],
  notificationToastForCustomerArr: [],
  notificationOffersHeaderArr:[],
};

const startIndexReducer = (state = initialState, action) => {
  if (action.type === ADD_NOTIFICATION_EVENTS_ARR) {
    return {
      ...state,
      notificationEventsForCustomerArr: action.payload,
    };
  } else if (action.type === ADD_NOTIFICATION_OFFERS_ARR) {
    return {
      ...state,
      notificationOffersForCustomerArr: action.payload,
    };
  } else if (action.type === ADD_NOTIFICATION_TOAST_ARR) {
    return {
      ...state,
      notificationToastForCustomerArr: action.payload,
    };
  } else if (action.type === ADD_NOTIFICATION_OFFERS_HEADER_ARR) {
    return {
      ...state,
      notificationOffersHeaderArr: action.payload,
    };
  }
  return state;
};

export default startIndexReducer;
