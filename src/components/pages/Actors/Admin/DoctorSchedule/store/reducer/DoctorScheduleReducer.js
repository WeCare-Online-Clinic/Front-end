import {
    ON_GET_DOCTOR_PROFILE_BY_ID,
    ON_GET_DOCTOR_SCHEDULE_BY_ID
} from "../action/DoctorScheduleAction";
import * as _ from 'lodash'
const initialState = {

    doctorProfile: {},
    doctorSchedule: [{}]

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
        case ON_GET_DOCTOR_SCHEDULE_BY_ID: {
            return {
                ...state,
                doctorSchedule: [...action.payload]

            }
        }

        default: {

            return state;
        }
    }


};

export default DoctorScheduleReducer;
