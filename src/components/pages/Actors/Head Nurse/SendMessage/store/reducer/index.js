import {combineReducers} from 'redux';
import SendMessageReducer from "./SendMessageReducer";

const reducer = combineReducers(
  {sendMessage: SendMessageReducer}
);

export default reducer;