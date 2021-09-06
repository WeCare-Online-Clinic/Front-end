import ViewDoctorService from "./ViewDoctorService";
import history from '../../../../../../../@history'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const ON_GET_DOCTOR_PROFILE_BY_ID = '[ON_GET_DOCTOR_PROFILE_BY_ID] ON_GET_DOCTOR';
export const ON_GET_DOCTOR_SCHEDULE_BY_ID = '[ON_GET_DOCTOR_SCHEDULE_BY_ID] ON_GET_DOCTOR';
export const ON_GET_DOCTOR_PROFILE_BY_NAME = '[ON_GET_DOCTOR_PROFILE_BY_NAME] ON_GET_DOCTOR';
export const ON_GET_DOCTOR_PROFILE_BY_CLINIC = '[ON_GET_DOCTOR_PROFILE_BY_CLINIC] ON_GET_DOCTOR';
export const ON_GET_CLINIC_SCHEDULE_BY_CLINICID = '[ON_GET_CLINIC_SCHEDULE_BY_CLINICID] ON_GET_DOCTOR'

export function getDoctorProfileDetailsById(id) {
    const request = ViewDoctorService.getDoctorProfileDetailsById(id);
    return (dispatch, getState) => {
        request.then((response) => {
            if (response.data.length == 0) {
                alert('Sorry,  Id Name found');
            }
            else {
                dispatch({
                    type: ON_GET_DOCTOR_PROFILE_BY_ID,
                    payload: response.data
                })
            }

        }).catch((error) => {
            console.log("error doctor details",)
        })
    };
}

export function getDoctorProfileDetailsByName(name) {
    const request = ViewDoctorService.getDoctorProfileDetailsByName(name);
    return (dispatch, getState) => {
        request.then((response) => {
            if (response.data.length == 0) {
                alert('Sorry,  Id Name found');
            }
            else {
                dispatch({
                    type: ON_GET_DOCTOR_PROFILE_BY_NAME,
                    payload: response.data
                })
            }


        }).catch((error) => {
            console.log("error doctor details",)
        })
    };
}
export function getDoctorProfileDetailsByClinic(clinicId) {
    const request = ViewDoctorService.getDoctorProfileDetailsByClinic(clinicId);
    return (dispatch, getState) => {
        request.then((response) => {
            if (response.data.length == 0) {
                alert('Sorry,  No doctor incharge the clinic');
            }
            else {
                dispatch({
                    type: ON_GET_DOCTOR_PROFILE_BY_CLINIC,
                    payload: response.data
                })

            }


        }).catch((error) => {
            console.log("error doctor details",)
        })
    };
}
export function getClinicSchedule(clinicId) {
    const request = ViewDoctorService.getClinicSchedule(clinicId);
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("clinic schedule", response.data);
            dispatch({
                type: ON_GET_CLINIC_SCHEDULE_BY_CLINICID,
                payload: response.data
            })


        }).catch((error) => {
            console.log("error doctor details",)
        })
    };
}

