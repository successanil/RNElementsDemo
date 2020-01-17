import { ADD_START_INDEX } from "../constants/actions-types";
import {ADD_LAST_SCREEN_INDEX} from '../constants/actions-types';
import {ADD_SCREEN_INDEX_TO_SCREEN_STACK} from '../constants/actions-types';
import { ADD_NOTIFICATION_TITLE_ARR } from "../constants/actions-types";


const initialState = {
  startIndex:-1,
  lastScreenIndex:-1,
  startIndexStack:[-1],
  notificationTitleArr:[]
};

const startIndexReducer = (state = initialState, action) => {
  if(action.type === ADD_START_INDEX){
    return {
      startIndex:(action.payload),
      lastScreenIndex:state.lastScreenIndex,
      startIndexStack:state.startIndexStack,
      notificationTitleArr:state.notificationTitleArr

    };
  } else if(action.type === ADD_LAST_SCREEN_INDEX){
    return {
      lastScreenIndex:(action.payload),
      startIndex:state.startIndex,
      startIndexStack:state.startIndexStack,
      notificationTitleArr:state.notificationTitleArr
    };
  } else if(action.type == ADD_SCREEN_INDEX_TO_SCREEN_STACK){
    return {
      startIndex:state.startIndex,
      lastScreenIndex:state.lastScreenIndex,
      startIndexStack:action.payload,
      notificationTitleArr:state.notificationTitleArr
    }
  } else if(action.type == ADD_NOTIFICATION_TITLE_ARR){
    return {
      startIndex:state.startIndex,
      lastScreenIndex:state.lastScreenIndex,
      startIndexStack:state.startIndexStack,
      notificationTitleArr:action.payload
    }
  }
  return state;
};

export default startIndexReducer;
