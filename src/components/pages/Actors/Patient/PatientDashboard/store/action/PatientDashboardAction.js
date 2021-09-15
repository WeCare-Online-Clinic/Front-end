import PatientDashboardService from "./PatientDashboardService";
import history from '../../../../../../../@history'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

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
export function getRequestDates(requestDateObject) {  
    const request = PatientDashboardService.getRequestDates(requestDateObject);   
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("Request date responce",response.data)
            dispatch({
                type: ON_GET_REQUEST_DATES,
                payload: response.data
            })
        }).catch((error) => {
            console.log("error in request dates")
        })
    };
}

export function saveRequest(requestObject) {   
    const request = PatientDashboardService.saveRequest(requestObject);   
    return (dispatch, getState) => {
        request.then((response) => {  
            if(response.data=='Patient Request save pass'){
                toast.info('Request Sent', { position: toast.POSITION.TOP_CENTER, autoClose: 3000 })
            }
            else{
                toast.error(response.data, { position: toast.POSITION.TOP_CENTER, autoClose: 3000 })
            }

        }).catch((error) => {
            console.log("error in save request")
        })
    };
}






