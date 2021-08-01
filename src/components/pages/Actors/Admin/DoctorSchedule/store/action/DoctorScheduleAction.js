import DoctorScheduleService from "./DoctorScheduleService";
import history from '../../../../../../../@history'

export const ON_GET_DOCTOR_PROFILE_BY_ID='[ON_GET_DOCTOR_PROFILE_BY_ID] ON_GET_DOCTOR';
export const ON_GET_DOCTOR_SCHEDULE_BY_ID='[ON_GET_DOCTOR_SCHEDULE_BY_ID] ON_GET_DOCTOR';
// export const ON_SAVE_NURSE = '[ON_SAVE_NURSE] ON_SAVE_NURSE';
// export const ON_GET_CLINIC_DAYS = '[ON_GET_CLINICS] ON_GET_CLINIC_DAYS';


// export function saveNurse(nurse) {
//     const request = NurseService.saveNurse(nurse);

//     return (dispatch, getState) => {
//         return request.then((response) => {

//             alert("Successfully Registered"); 
//             history.push('viewnurse');     
//             dispatch({
//                 type: ON_SAVE_NURSE,
//                 payload: response.data
//             })
            
//         }).catch((error)=>{          
//             alert("Register failed, please try again"); 
//         });

//     };
// }

export function getDoctorProfileDetailsById(id) {
    const request =DoctorScheduleService.getDoctorProfileDetailsById(id);
    return (dispatch, getState) => {
        request.then((response) => {                       
            dispatch({
                type: ON_GET_DOCTOR_PROFILE_BY_ID,
                payload: response.data
            })
         
        }).catch((error)=>{
            console.log("error doctor details",)
        })
    };
}


export function getDoctorScheduleDetailsById(id) {
    const request = DoctorScheduleService.getDoctorScheduleDetailsById(id);

    return (dispatch, getState) => {
        return request.then((response) => {        
            return dispatch({
                type: ON_GET_DOCTOR_SCHEDULE_BY_ID,
                payload: response.data
            });
        }
        );
    };
}