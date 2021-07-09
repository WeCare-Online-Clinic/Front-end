import {combineReducers} from 'redux';
import doctorAddEditReducer from "./doctor.add.edit.recuder";

const reducer = combineReducers(
  {doctorAddEdit: doctorAddEditReducer}
);

export default reducer;