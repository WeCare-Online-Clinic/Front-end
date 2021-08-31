import {
    ON_GET_DATA_CARD_DETAILS,


} from "../action/DoctorDashboardAction";
import * as _ from 'lodash'
const initialState = {

    dataCardDetails: [],

};
const DoctorDashboardReducer = function (state = initialState, action) {

    switch (action.type) {
        case ON_GET_DATA_CARD_DETAILS: {
            return {
                ...state,
                dataCardDetails: [...action.payload]
            }

        }

        default: {

            return state;
        }
    }


};

export default DoctorDashboardReducer;
