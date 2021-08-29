import {combineReducers} from 'redux';
import ManageTestReducer from "./ManageTestReducer";

const reducer = combineReducers(
  {manageTest: ManageTestReducer}
);

export default reducer;