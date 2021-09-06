import {combineReducers} from 'redux';
import ViewDoctorReducer from "./ViewDoctorReducer";

const reducer = combineReducers(
  {viewDoctor: ViewDoctorReducer}
);

export default reducer;