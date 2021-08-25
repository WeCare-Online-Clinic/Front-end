import {
    ON_GET_DOCTOR_PROFILE_BY_ID,  
    ON_GET_DOCTOR_PROFILE_BY_NAME,
    ON_GET_DOCTOR_PROFILE_BY_CLINIC,
    ON_GET_CLINIC_SCHEDULE_BY_CLINICID
} from "../action/ViewDoctorAction";
import * as _ from 'lodash'
const initialState = {

    doctorProfile: [{}],
    clinicSchedule:[]
  

};
const ViewDoctorReducer = function (state = initialState, action) {
    
    switch (action.type) {
    
        case ON_GET_DOCTOR_PROFILE_BY_ID: {    
            // let localdoctorProfile = _.cloneDeep(action.payload);  
            return {
                ...state,
                doctorProfile: [...action.payload]
            }

        } 
        case ON_GET_DOCTOR_PROFILE_BY_NAME:{
            return{
                ...state,
                doctorProfile:[...action.payload]
            }
        }
        case ON_GET_DOCTOR_PROFILE_BY_CLINIC:{
            return{
                ...state,
                doctorProfile:[...action.payload]
            }
        }
        case ON_GET_CLINIC_SCHEDULE_BY_CLINICID:{      
            // console.log("clinic schedule in reducer:",action.payload);     
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

export default ViewDoctorReducer;
