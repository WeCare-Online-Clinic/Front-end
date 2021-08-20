import AdminDashboardService from "./AdminDashboardService";
import history from '../../../../../../../@history'

export const ON_GET_USER_COUNTS = 'ON_GET_USER_COUNTS';


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







