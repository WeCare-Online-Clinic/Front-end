import {
    ON_GET_PATIENT_PROFILE_BY_ID,  
} from "../action/ViewPatientAction";
import * as _ from 'lodash'
const initialState = {

    patientProfile: [{}],
  

};
const ViewPatientReducer = function (state = initialState, action) {
    
    switch (action.type) {
    
        case ON_GET_PATIENT_PROFILE_BY_ID: {    
            // let localpatientProfile = _.cloneDeep(action.payload);  
            return {
                ...state,
                patientProfile: [...action.payload]
            }

        } 
        
        default: {

            return state;
        }
    }


};

export default ViewPatientReducer;
