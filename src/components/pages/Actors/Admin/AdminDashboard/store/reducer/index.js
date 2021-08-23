import {combineReducers} from 'redux';
import AdminDashboardReducer from "./AdminDashboardReducer";

const reducer = combineReducers(
  {adminDashboard: AdminDashboardReducer}
);

export default reducer;