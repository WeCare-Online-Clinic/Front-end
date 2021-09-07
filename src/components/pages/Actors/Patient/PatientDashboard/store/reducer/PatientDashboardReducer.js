import {
    ON_GET_NEXT_CLINIC_DETAILS,
    // ON_GET_ONLINE_USERS,
    // ON_GET_REGISTERED_USERS

} from "../action/PatientDashboardAction";
import * as _ from 'lodash'
const initialState = {

    nextClinicDetails: {},
    onlineUsers:[],
    registeredUsers:[]


};
const PatientDashboardReducer = function (state = initialState, action) {    

    switch (action.type) {
        case ON_GET_NEXT_CLINIC_DETAILS: {
            return {
                ...state,
                nextClinicDetails: {...action.payload}
            }

        }


        default: {

            return state;
        }
    }


};

export default PatientDashboardReducer;
