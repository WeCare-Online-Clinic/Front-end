import DoctorScheduleService from "./DoctorScheduleService";
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
    const request = DoctorScheduleService.getDoctorProfileDetailsById(id);
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
    const request = DoctorScheduleService.getDoctorProfileDetailsByName(name);
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
    const request = DoctorScheduleService.getDoctorProfileDetailsByClinic(clinicId);
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
    const request = DoctorScheduleService.getClinicSchedule(clinicId);
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

export function deleteDoctorSchedule(doctorId) {
    const request = DoctorScheduleService.deleteDoctorSchedule(doctorId);
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("delete doctor schedule", response.data);


        }).catch((error) => {
            console.log("delete doctor schedule error",)
        })
    };
}

export function updateDoctorSchedule(newDoctorSchedule, doctorId) {
    const request = DoctorScheduleService.updateDoctorSchedule(newDoctorSchedule);    
    return (dispatch, getState) => {
        request.then((response) => {
            window.location.reload(false);
            toast.info('Successfully Updated', { position: toast.POSITION.TOP_CENTER, autoClose: false })
            console.log("update doctor schedule success", response.data);



        }).catch((error) => {
            console.log("update doctor schedule error",)
        })
    };
}
export function changeDoctorStatus(doctor) {  
    const request = DoctorScheduleService.changeDoctorStatus(doctor);

    return (dispatch, getState) => {
        request.then((response) => {
            toast.info('Successfully Deleted', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
            history.push('viewdoctors')
            console.log("delete doctor profile success", response.data);



        }).catch((error) => {
            console.log("delete doctor error",)
        })
    };
}