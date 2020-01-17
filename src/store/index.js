import { createStore, combineReducers } from "redux";
import startIndexReducer from "../reducers/startIndexReducer";
import notificationReducer from "../reducers/notificationReducer";
const rootReducer = combineReducers({
  startIndexReducer: startIndexReducer,
  notificationReducer:notificationReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
