import DoctorScheduleService from "./DoctorScheduleService";
import history from '../../../../../../../@history'

export const ON_GET_DOCTOR_PROFILE_BY_ID='[ON_GET_DOCTOR_PROFILE_BY_ID] ON_GET_DOCTOR';
export const ON_GET_DOCTOR_SCHEDULE_BY_ID='[ON_GET_DOCTOR_SCHEDULE_BY_ID] ON_GET_DOCTOR';
export const ON_GET_DOCTOR_PROFILE_BY_NAME='[ON_GET_DOCTOR_PROFILE_BY_NAME] ON_GET_DOCTOR';
export const ON_GET_DOCTOR_PROFILE_BY_CLINIC='[ON_GET_DOCTOR_PROFILE_BY_CLINIC] ON_GET_DOCTOR';


export function getDoctorProfileDetailsById(id) {
    const request =DoctorScheduleService.getDoctorProfileDetailsById(id);
    return (dispatch, getState) => {
        request.then((response) => {   
            console.log('responce object :',response.data)                       
            dispatch({
                type: ON_GET_DOCTOR_PROFILE_BY_ID,
                payload: response.data
            })
         
        }).catch((error)=>{
            console.log("error doctor details",)
        })
    };
}

export function getDoctorProfileDetailsByName(name) {
    const request =DoctorScheduleService.getDoctorProfileDetailsByName(name);
    return (dispatch, getState) => {
        request.then((response) => {    
            console.log('responce.. :',response.data)                   
            dispatch({
                type: ON_GET_DOCTOR_PROFILE_BY_NAME,
                payload: response.data
            })
         
        }).catch((error)=>{
            console.log("error doctor details",)
        })
    };
}
export function getDoctorProfileDetailsByClinic(clinicId) {
    const request =DoctorScheduleService.getDoctorProfileDetailsByClinic(clinicId);
    return (dispatch, getState) => {
        request.then((response) => {    
            console.log('responce.. :',response.data)                   
            dispatch({
                type: ON_GET_DOCTOR_PROFILE_BY_CLINIC,
                payload: response.data
            })
         
        }).catch((error)=>{
            console.log("error doctor details",)
        })
    };
}
// export function getDoctorScheduleDetailsById(id) {
//     const request = DoctorScheduleService.getDoctorScheduleDetailsById(id);

//     return (dispatch, getState) => {
//         return request.then((response) => {  
//             console.log('responce.. : ',request.data)      
//             return dispatch({
//                 type: ON_GET_DOCTOR_SCHEDULE_BY_ID,
//                 payload: response.data
//             });
//         }
//         );
//     };
// }