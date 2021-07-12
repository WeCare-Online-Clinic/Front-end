import {
  ON_GET_NURSES, 
  ON_SAVE_NURSE,
} from "../actions/NurseAction";

const initialState = {

    clinicDates: [],
    nurseList:[]
};

const ManageNurseReducer = function (state = initialState, action) {

    switch (action.type) {

        case ON_GET_NURSES:{
            return{
                ...state,
                nurseList:[...action.payload]
            }
        }  

        default: {
            return state;
        }
    }

};

export default ManageNurseReducer;
