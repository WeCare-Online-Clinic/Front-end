import {
    ON_GET_PATIENT_PROFILE,
    ON_GET_TEST_TYPES,

} from "../action/AddLabTestAction.js";

const initialState = {
    patientProfile: {},
    testTypes:[]
};

const AddLabTestReducer = function (state = initialState, action) {

    switch (action.type) {

        case ON_GET_PATIENT_PROFILE: {
            return {
                ...state,
                patientProfile: {...action.payload}
            }
        }
        case ON_GET_TEST_TYPES: {      
            return {
                ...state,
                testTypes: [...action.payload]
            }
        }        

        default: {
            return state;
        }
    }

};

export default AddLabTestReducer;
