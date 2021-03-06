import {
    ON_GET_NURSE_PROFILE_BY_ID,
    ON_GET_NURSE_SCHEDULE_BY_ID,
    ON_GET_NURSE_PROFILE_BY_NAME,
    ON_GET_NURSE_PROFILE_BY_CLINIC,
    ON_GET_CLINIC_SCHEDULE_BY_CLINICID
} from "../action/NurseScheduleAction";
const initialState = {

    nurseProfile: [{}],
    nurseSchedule: [{}],
    clinicSchedule:[]

};
const NurseScheduleReducer = function (state = initialState, action) {

    switch (action.type) {
    
   
        case ON_GET_NURSE_SCHEDULE_BY_ID: {
            return {
                ...state,
                nurseSchedule: [...action.payload]

            }
        }
        case ON_GET_NURSE_PROFILE_BY_ID: {    
            // let localdoctorProfile = _.cloneDeep(action.payload);  
            return {
                ...state,
                nurseProfile: [...action.payload]
            }

        } 
        case ON_GET_NURSE_PROFILE_BY_NAME:{
            return{
                ...state,
                nurseProfile:[...action.payload]
            }
        }
        case ON_GET_NURSE_PROFILE_BY_CLINIC:{
            return{
                ...state,
                nurseProfile:[...action.payload]
            }
        }
        case ON_GET_CLINIC_SCHEDULE_BY_CLINICID:{          
            return{
                ...state,
                clinicSchedule:{...action.payload}
            }
        }

        default: {

            return state;
        }
    }


};

export default NurseScheduleReducer;
