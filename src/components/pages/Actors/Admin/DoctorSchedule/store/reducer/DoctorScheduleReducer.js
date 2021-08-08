import {
    ON_GET_DOCTOR_PROFILE_BY_ID,  
    ON_GET_DOCTOR_PROFILE_BY_NAME,
    ON_GET_DOCTOR_PROFILE_BY_CLINIC
} from "../action/DoctorScheduleAction";
import * as _ from 'lodash'
const initialState = {

    doctorProfile: [{}]
  

};
const DoctorScheduleReducer = function (state = initialState, action) {

    switch (action.type) {
    
        case ON_GET_DOCTOR_PROFILE_BY_ID: {    
            // let localdoctorProfile = _.cloneDeep(action.payload);  
            return {
                ...state,
                doctorProfile: {...action.payload}
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

        default: {

            return state;
        }
    }


};

export default DoctorScheduleReducer;
