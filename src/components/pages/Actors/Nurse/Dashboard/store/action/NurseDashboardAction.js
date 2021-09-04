import NurseDashboardService from "./NurseDashboardService";
import history from '../../../../../../../@history'

export const ON_GET_DATA_CARD_DETAILS = 'ON_GET_DATA_CARD_DETAILS';
export const ON_GET_PATIENTS_DIOGNOSIS_COUNT=['ON_GET_PATIENTS_DIOGNOSIS_COUNT']
export const ON_GET_PATIENT_AGE_DATA=['ON_GET_PATIENT_AGE_DATA']
export const ON_GET_PATIENT_COUNT_IN_CLINIC=['ON_GET_PATIENT_COUNT_IN_CLINIC']
export const ON_GET_CONSULTED_PATIENTS_DATA=['ON_GET_CONSULTED_PATIENTS_DATA']

export function getDataCardDetails(nurseId) {
    const request = NurseDashboardService.getDataCardDetails(nurseId);
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("data card response", response.data)
            dispatch({
                type: ON_GET_DATA_CARD_DETAILS,
                payload: response.data
            })


        }).catch((error) => {
            console.log("data card respoce")
        })
    };
}
export function getDiagnosis(clinicId) {  
    const request = NurseDashboardService.getDiagnosis(clinicId);
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("diognosis response", response.data)
            dispatch({
                type: ON_GET_PATIENTS_DIOGNOSIS_COUNT,
                payload: response.data
            })


        }).catch((error) => {
            console.log("diagnosis error")
        })
    };
}
export function getPatientAge(clinicId) {   
    const request = NurseDashboardService.getPatientAge(clinicId);
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("patient age", response.data)
            dispatch({
                type: ON_GET_PATIENT_AGE_DATA,
                payload: response.data
            })

        }).catch((error) => {
            console.log("diagnosis error")
        })
    };
}
export function getPatientCountInClinic(clinicId) {
    const request = NurseDashboardService.getPatientCountInClinic(clinicId);
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("patient in clinic count ", response.data)
            dispatch({
                type: ON_GET_PATIENT_COUNT_IN_CLINIC,
                payload: response.data
            })

        }).catch((error) => {
            console.log("diagnosis error")
        })
    };
}

export function getConsultedPatientsData(nurseId) {
    console.log("nurseid in getConsultedPatientsData action ")
    const request = NurseDashboardService.getConsultedPatientsData(nurseId);
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("consulted patients data ", response.data)
            dispatch({
                type: ON_GET_CONSULTED_PATIENTS_DATA,
                payload: response.data
            })

        }).catch((error) => {
            console.log("consulted patients data error")
        })
    };
}

    

