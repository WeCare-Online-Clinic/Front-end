import {combineReducers} from 'redux';
import NurseScheduleReducer from "./NurseScheduleReducer";

const reducer = combineReducers(
  {nurseSchedule: NurseScheduleReducer}
);

export default reducer;