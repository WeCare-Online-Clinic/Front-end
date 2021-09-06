import {combineReducers} from 'redux';
import ViewTestReducer from "./ViewTestReducer";

const reducer = combineReducers(
  {viewTest: ViewTestReducer}
);

export default reducer;