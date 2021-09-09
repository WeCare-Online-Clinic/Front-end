import PatientDashboardService from "./PatientDashboardService";
import history from '../../../../../../../@history'

export const ON_GET_NEXT_CLINIC_DETAILS = 'ON_GET_NEXT_CLINIC_DETAILS';
export const ON_GET_REQUEST_DATES = 'ON_GET_REQUEST_DATES';
// export const ON_GET_REGISTERED_USERS="ON_GET_REGISTERED_USERS";

export function getNextClinicDetails(patientId) {
    const request = PatientDashboardService.getNextClinicDetails(patientId);   
    return (dispatch, getState) => {
        request.then((response) => {
            dispatch({
                type: ON_GET_NEXT_CLINIC_DETAILS,
                payload: response.data
            })
        }).catch((error) => {
            console.log("error in next clinic details")
        })
    };
}
export function getRequestDates(clinicId,currentClinicDate) {
    console.log("Clinic id in actions",clinicId);
    const request = PatientDashboardService.getRequestDates(clinicId,currentClinicDate);   
    return (dispatch, getState) => {
        request.then((response) => {
            dispatch({
                type: ON_GET_REQUEST_DATES,
                payload: response.data
            })
        }).catch((error) => {
            console.log("error in request dates")
        })
    };
}







