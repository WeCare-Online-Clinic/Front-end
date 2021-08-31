import {combineReducers} from 'redux';
import DoctorDashboardReducer from "./DoctorDashboardReducer";

const reducer = combineReducers(
  {doctorDashboard: DoctorDashboardReducer}
);

export default reducer;