import PatientDashboardService from "./PatientDashboardService";
import history from '../../../../../../../@history'

export const ON_GET_NEXT_CLINIC_DETAILS = 'ON_GET_NEXT_CLINIC_DETAILS';
export const ON_GET_ONLINE_USERS = 'ON_GET_ONLINE_USERS';
export const ON_GET_REGISTERED_USERS="ON_GET_REGISTERED_USERS";

export function getNextClinicDetails(patientId) {
    const request = PatientDashboardService.getNextClinicDetails(patientId);
    // console.log("patient id in action",patientId)
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("patient next clinic date appoinment in action:",response.data);
            dispatch({
                type: ON_GET_NEXT_CLINIC_DETAILS,
                payload: response.data
            })


        }).catch((error) => {
            console.log("error in next clinic details")
        })
    };
}








