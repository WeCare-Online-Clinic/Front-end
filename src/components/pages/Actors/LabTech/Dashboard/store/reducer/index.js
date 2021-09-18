import {combineReducers} from 'redux';
import LabDashboardReducer from "./LabDashboardReducer";

const reducer = combineReducers(
  {LabDashboard: LabDashboardReducer}
);

export default reducer;