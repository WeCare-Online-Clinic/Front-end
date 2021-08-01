import {combineReducers} from 'redux';
import DoctorScheduleReducer from "./DoctorScheduleReducer";

const reducer = combineReducers(
  {doctorSchedule: DoctorScheduleReducer}
);

export default reducer;