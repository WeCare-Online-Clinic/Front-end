import {combineReducers} from 'redux';
import ViewPatientReducer from "./ViewPatientReducer";

const reducer = combineReducers(
  {viewPatient: ViewPatientReducer}
);

export default reducer;