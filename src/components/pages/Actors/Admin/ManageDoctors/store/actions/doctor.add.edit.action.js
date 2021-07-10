import { showErrorMessage, showSuccessMessage } from "../../../../../../../utils/ToastUtil";
import DoctorService from "./doctor.service";

export const ON_ADD_EDIT_FORM_CHANGE = '[DOCTOR ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_GET_DOCTORS='[DOCTOR ADD EDIT] ON_GET_DOCTORS';
export const ON_SAVE_UPDATE_DOCTOR = '[DOCTOR ADD EDIT] ON_SAVE_UPDATE_DOCTOR';
export const ON_RESET_DOCTOR_FORM_DATA = '[DOCTOR ADD EDIT] ON_RESET_DOCTOR_FORM_DATA';
export const GET_DOCTOR = '[DOCTOR ADD EDIT] GET_DOCTOR';
export const ON_RESET_DOCTOR_DATA = '[DOCTOR ADD EDIT] ON_RESET_DOCTOR_DATA';
export const ON_GET_CLINIC_DATES = '[DOCTOR ADD EDIT] ON_GET_CLINIC_DATES';
export const ON_SAVE_DOCTOR = '[DOCTOR ADD] ON_SAVE_DOCTOR';


export function saveDoctor(doctor) {
    const request = DoctorService.saveDoctor(doctor);

    return (dispatch, getState) => {
        return request.then((response) => {
            console.log("re",response);
            showSuccessMessage("Save or Update Success");
            dispatch({
                type: ON_SAVE_DOCTOR,
                payload: response.data
            })
        }).catch((error)=>{
            console.log("error");
            showErrorMessage("Please Contact Administrator" + error);
        });

    };
}

export function getDoctors() {
    const request = DoctorService.getDoctors();
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("doctor list:",response.data)
            dispatch({
                type: ON_GET_DOCTORS,
                payload: response.data
            })
        }).catch((error)=>{
            console.log("error doctor list",)
        })
    };
}

export function onFormChange(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_ADD_EDIT_FORM_CHANGE,
            payload: data
        })
    };
}

export function saveOrUpdateDoctor(data) {
    const request = DoctorService.saveOrUpdateDoctor(data);

    return (dispatch, getState) => {
        return request.then((response) => {
            console.log(response);
            return dispatch({
                type: ON_SAVE_UPDATE_DOCTOR,
                payload: response.data
            });
        }
        );
    };
}

export function getDoctorDTOByID(doctorID) {
    const request = DoctorService.getDoctorDTOByID(doctorID);
    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_DOCTOR,
                payload: response.data.result
            })
        );
    };
}

export function onResetFromData() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_DOCTOR_FORM_DATA,
            payload: {}
        })
    };
}

export function onResetDoctorData() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_DOCTOR_DATA,
            payload: {}
        })
    };
}

export function setDoctor(data) {
    return (dispatch, getState) => {
        dispatch({
            type: GET_DOCTOR,
            payload: data
        })
    };
}


export function getClinicDates(data) {
    const request = DoctorService.getClinicDates(data);

    return (dispatch, getState) => {
        return request.then((response) => {
            console.log(response);
            return dispatch({
                type: ON_GET_CLINIC_DATES,
                payload: response.data
            });
        }
        );
    };
}