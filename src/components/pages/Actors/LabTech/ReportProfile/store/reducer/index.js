import {combineReducers} from 'redux';
import ViewReportReducer from "./ViewReportReducer";

const reducer = combineReducers(
  {viewReport: ViewReportReducer}
);

export default reducer;