import {combineReducers} from 'redux';
import HeadNurseDashboardReducer from "./HeadNurseDashboardReducer";

const reducer = combineReducers(
  {headNurseDashboard: HeadNurseDashboardReducer}
);

export default reducer;