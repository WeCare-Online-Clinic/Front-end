import {combineReducers} from 'redux';
import PatientDashboardReducer from "./PatientDashboardReducer";

const reducer = combineReducers(
  {patientDashboard: PatientDashboardReducer}
);

export default reducer;