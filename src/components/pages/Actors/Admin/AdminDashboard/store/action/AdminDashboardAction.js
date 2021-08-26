import AdminDashboardService from "./AdminDashboardService";
import history from '../../../../../../../@history'

export const ON_GET_USER_COUNTS = 'ON_GET_USER_COUNTS';
export const ON_GET_ONLINE_USERS = 'ON_GET_ONLINE_USERS';
export const ON_GET_REGISTERED_USERS="ON_GET_REGISTERED_USERS";

export function getUserCounts() {
    const request = AdminDashboardService.getUserCounts();
    return (dispatch, getState) => {
        request.then((response) => {
            dispatch({
                type: ON_GET_USER_COUNTS,
                payload: response.data
            })


        }).catch((error) => {
            console.log("error in user counts")
        })
    };
}
export function getOnlineUsers() {
    const request = AdminDashboardService.getOnlineUsers();
    return (dispatch, getState) => {
        request.then((response) => {
            dispatch({
                type: ON_GET_ONLINE_USERS,
                payload: response.data
            })


        }).catch((error) => {
            console.log("error in online users")
        })
    };
}
export function getRegisteredUsers() {
    const request = AdminDashboardService.getRegisteredUsers();
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("result:",response.data)
            dispatch({
                type: ON_GET_REGISTERED_USERS,
                payload: response.data
            })


        }).catch((error) => {
            console.log("error in registered users")
        })
    };
}






