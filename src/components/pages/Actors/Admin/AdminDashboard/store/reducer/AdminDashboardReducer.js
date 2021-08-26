import {
    ON_GET_USER_COUNTS,
    ON_GET_ONLINE_USERS,
    ON_GET_REGISTERED_USERS

} from "../action/AdminDashboardAction";
import * as _ from 'lodash'
const initialState = {

    userCounts: [],
    onlineUsers:[],
    registeredUsers:[]


};
const AdminDashboardReducer = function (state = initialState, action) {    

    switch (action.type) {
        case ON_GET_USER_COUNTS: {
            return {
                ...state,
                userCounts: [...action.payload]
            }

        }
        case ON_GET_ONLINE_USERS: {            
            return {
                ...state,
                onlineUsers: [...action.payload]
            }

        }
        case ON_GET_REGISTERED_USERS: {            
            return {
                ...state,
                registeredUsers: [...action.payload]
            }

        }

        default: {

            return state;
        }
    }


};

export default AdminDashboardReducer;
