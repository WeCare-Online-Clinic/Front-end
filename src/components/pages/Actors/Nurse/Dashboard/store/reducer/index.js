import {combineReducers} from 'redux';
import NurseDashboardReducer from "./NurseDashboardReducer";

const reducer = combineReducers(
  {nurseDashboard: NurseDashboardReducer}
);

export default reducer;