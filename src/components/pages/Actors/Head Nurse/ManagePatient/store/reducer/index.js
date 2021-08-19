import {combineReducers} from 'redux';
import ManagePatientReducer from "./ManagePatientReducer";

const reducer = combineReducers(
  {managePatient: ManagePatientReducer}
);

export default reducer;