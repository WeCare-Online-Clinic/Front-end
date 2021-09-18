import {combineReducers} from 'redux';
import AddLabTestReducer from "./AddLabTestReducer";

const reducer = combineReducers(
  {addLabTest: AddLabTestReducer}
);

export default reducer;