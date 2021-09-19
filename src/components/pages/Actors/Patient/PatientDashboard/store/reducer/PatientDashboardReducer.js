import {
    ON_GET_NEXT_CLINIC_DETAILS,
    ON_GET_REQUEST_DATES,
    PATIENT_STATISTICS

} from "../action/PatientDashboardAction";
import * as _ from 'lodash'
const initialState = {
    
    nextClinicDetails: [],
    requestDateList:[],
    patientStats:[]



};
const PatientDashboardReducer = function (state = initialState, action) {    

    switch (action.type) {
        case ON_GET_NEXT_CLINIC_DETAILS: {        
            return {
                ...state,
                nextClinicDetails: [...action.payload]
            }

        }
        case ON_GET_REQUEST_DATES: {            
            return {
                ...state,
                requestDateList: [...action.payload]
            }

        }
        case PATIENT_STATISTICS: {            
            return {
                ...state,
                patientStats: [...action.payload]
            }

        }

        default: {

            return state;
        }
    }


};

export default PatientDashboardReducer;
