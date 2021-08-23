import {
    ON_GET_USER_COUNTS
} from "../action/AdminDashboardAction";
import * as _ from 'lodash'
const initialState = {

    userCounts: []


};
const AdminDashboardReducer = function (state = initialState, action) {

    switch (action.type) {

        case ON_GET_USER_COUNTS: {
            return {
                ...state,
                userCounts: [...action.payload]
            }

        }

        default: {

            return state;
        }
    }


};

export default AdminDashboardReducer;
