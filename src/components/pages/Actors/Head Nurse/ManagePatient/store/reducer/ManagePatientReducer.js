import {
    ON_GET_PATIENT,
    ON_SAVE_PATIENT,
    // ON_GET_CLINIC_DAYS,
    // ON_GET_CLINICS,
    ON_GET_PATIENT_PROFILE_BY_ID,
    ON_GET_PATIENT_PROFILE_BY_NAME,
    ON_GET_PATIENT_PROFILE_BY_CLINIC

} from "../actions/PatientAction";

const initialState = {

    clinicDays: [],
    patientList: [],
    clinics: [],
};

const ManagePatientReducer = function (state = initialState, action) {

    switch (action.type) {

        case ON_GET_PATIENT: {
            return {
                ...state,
                patientList: [...action.payload]
            }
        }
        case  ON_SAVE_PATIENT: {
            return {
              ...state,
              patient: [...action.payload],
            }
          }
      
        case ON_GET_PATIENT_PROFILE_BY_ID: {              
            return {
                ...state,
                patientList: [...action.payload]
            }
      
        } 
        case ON_GET_PATIENT_PROFILE_BY_NAME:{
            return{
                ...state,
                patientList:[...action.payload]
            }
        }

        default: {
            return state;
        }
    }

};

export default ManagePatientReducer;
