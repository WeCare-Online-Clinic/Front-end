import {combineReducers} from 'redux';
import ManageNurseReducer from "./ManageNurseReducer";

const reducer = combineReducers(
  {manageNurse: ManageNurseReducer}
);

export default reducer;