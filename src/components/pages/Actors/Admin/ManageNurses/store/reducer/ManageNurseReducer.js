import {
    ON_GET_NURSES,
    ON_SAVE_NURSE,
    ON_GET_CLINIC_DAYS,
    ON_GET_CLINICS,
    ON_GET_NURSE_PROFILE_BY_ID,
    ON_GET_NURSE_PROFILE_BY_NAME,
    ON_GET_NURSE_PROFILE_BY_CLINIC,
    ON_GET_NURSE_PROFILE_BY_NURSE_ID

} from "../actions/NurseAction";

const initialState = {

    clinicDays: [],
    nurseList: [],
    clinics: [],
};

const ManageNurseReducer = function (state = initialState, action) {

    switch (action.type) {

        case ON_GET_NURSES: {
            return {
                ...state,
                nurseList: [...action.payload]
            }
        }
        case ON_GET_CLINIC_DAYS: {
            return {
                ...state,
                clinicDays: [...action.payload]

            }
        }
        case ON_GET_CLINICS: {
            return {
                ...state,
                clinics: [...action.payload],
            }
        }
        case ON_GET_NURSE_PROFILE_BY_ID: {              
            return {
                ...state,
                nurseList: [...action.payload]
            }
      
        } 
        case ON_GET_NURSE_PROFILE_BY_NAME:{
            return{
                ...state,
                nurseList:[...action.payload]
            }
        }
        case ON_GET_NURSE_PROFILE_BY_CLINIC:{
            return{
                ...state,
                nurseList:[...action.payload]
            }
        }
        case ON_GET_NURSE_PROFILE_BY_NURSE_ID:{
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
