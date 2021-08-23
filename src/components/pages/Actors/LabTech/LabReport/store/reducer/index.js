import {combineReducers} from 'redux';
import ManageReportReducer from "./ManageReportReducer";

const reducer = combineReducers(
  {manageReport: ManageReportReducer}
);

export default reducer;