import {
  ON_GET_NURSES, 
  ON_SAVE_NURSE,
  ON_GET_CLINIC_DAYS
} from "../actions/NurseAction";

const initialState = {

    clinicDays: [],
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
        case ON_GET_CLINIC_DAYS: {            
            return {
                ...state,
                clinicDays: [...action.payload]
             
         }
        }

        default: {
            return state;
        }
    }

};

export default ManageNurseReducer;
