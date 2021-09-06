import ViewPatientService from "./ViewPatientService";
import history from '../../../../../../../@history'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const ON_GET_PATIENT_PROFILE_BY_ID = '[ON_GET_PATIENT_PROFILE_BY_ID] ON_GET_PATIENT';
export const ON_GET_PATIENT_SCHEDULE_BY_ID = '[ON_GET_PATIENT_SCHEDULE_BY_ID] ON_GET_PATIENT';
export const ON_GET_PATIENT_PROFILE_BY_NAME = '[ON_GET_PATIENT_PROFILE_BY_NAME] ON_GET_PATIENT';
export const ON_GET_PATIENT_PROFILE_BY_CLINIC = '[ON_GET_PATIENT_PROFILE_BY_CLINIC] ON_GET_PATIENT';
export const ON_GET_CLINIC_SCHEDULE_BY_CLINICID = '[ON_GET_CLINIC_SCHEDULE_BY_CLINICID] ON_GET_PATIENT'

export function getPatientProfileDetailsById(id) {
    const request = ViewPatientService.getPatientProfileDetailsById(id);
    return (dispatch, getState) => {
        request.then((response) => {
            if (response.data.length == 0) {
                alert('Sorry,  Id Name found');
            }
            else {
                dispatch({
                    type: ON_GET_PATIENT_PROFILE_BY_ID,
                    payload: response.data
                })
            }

        }).catch((error) => {
            console.log("error patient details",)
        })
    };
}

export function getPatientProfileDetailsByName(name) {
    const request = ViewPatientService.getPatientProfileDetailsByName(name);
    return (dispatch, getState) => {
        request.then((response) => {
            if (response.data.length == 0) {
                alert('Sorry,  Id Name found');
            }
            else {
                dispatch({
                    type: ON_GET_PATIENT_PROFILE_BY_NAME,
                    payload: response.data
                })
            }


        }).catch((error) => {
            console.log("error patient details",)
        })
    };
}
export function getPatientProfileDetailsByClinic(clinicId) {
    const request = ViewPatientService.getPatientProfileDetailsByClinic(clinicId);
    return (dispatch, getState) => {
        request.then((response) => {
            if (response.data.length == 0) {
                alert('Sorry,  No patient incharge the clinic');
            }
            else {
                dispatch({
                    type: ON_GET_PATIENT_PROFILE_BY_CLINIC,
                    payload: response.data
                })

            }


        }).catch((error) => {
            console.log("error patient details",)
        })
    };
}
export function getClinicSchedule(clinicId) {
    const request = ViewPatientService.getClinicSchedule(clinicId);
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("clinic schedule", response.data);
            dispatch({
                type: ON_GET_CLINIC_SCHEDULE_BY_CLINICID,
                payload: response.data
            })


        }).catch((error) => {
            console.log("error Patient details",)
        })
    };
}

