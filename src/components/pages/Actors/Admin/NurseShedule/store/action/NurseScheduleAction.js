import NurseScheduleService from "./NurseScheduleService";
import history from '../../../../../../../@history'


export const ON_GET_NURSE_SCHEDULE_BY_ID='[ON_GET_NURSE_SCHEDULE_BY_ID] ON_GET_NURSE';
export const ON_GET_NURSE_PROFILE_BY_ID = '[ON_GET_NURSE_PROFILE_BY_ID] ON_GET_NURSE';
export const ON_GET_NURSE_PROFILE_BY_NAME = '[ON_GET_NURSE_PROFILE_BY_NAME] ON_GET_NURSE';
export const ON_GET_NURSE_PROFILE_BY_CLINIC = '[ON_GET_NURSE_PROFILE_BY_CLINIC] ON_GET_NURSE';



// export function getNurseProfileDetailsById(id) {
//     const request =NurseScheduleService.getNurseProfileDetailsById(id);
//     return (dispatch, getState) => {
//         request.then((response) => {                       
//             dispatch({
//                 type: ON_GET_NURSE_PROFILE_BY_ID,
//                 payload: response.data
//             })
         
//         }).catch((error)=>{
//             console.log("error nurse details",)
//         })
//     };
// }

export function getNurseProfileDetailsById(id) {
    const request = NurseScheduleService.getNurseProfileDetailsById(id);
    return (dispatch, getState) => {
      request.then((response) => {
        if (response.data.length == 0) {
          alert('Sorry,  Id not found');
        }
        else {
          dispatch({
  
            type: ON_GET_NURSE_PROFILE_BY_ID,
            payload: response.data
          })
  
        }
  
  
      }).catch((error) => {
        console.log("error doctor id",)
      })
    };
  }
  
  export function getNurseProfileDetailsByName(name) {
    console.log("name:", name)
    const request = NurseScheduleService.getNurseProfileDetailsByName(name);
    return (dispatch, getState) => {
      request.then((response) => {
        if (response.data.length == 0) {
          alert('Sorry,  Name not found');
        }
        else {
          dispatch({
            type: ON_GET_NURSE_PROFILE_BY_NAME,
            payload: response.data
          })
        }
  
  
      }).catch((error) => {
        console.log("error nurse details",)
      })
    };
  }
  export function getNurseProfileDetailsByClinic(clinicId) {
    const request = NurseScheduleService.getNurseProfileDetailsByClinic(clinicId);
    return (dispatch, getState) => {
      request.then((response) => {
        if (response.data.length == 0) {
          alert('Sorry,  No nurses in the clinic');
        }
        else{
          dispatch({
            type: ON_GET_NURSE_PROFILE_BY_CLINIC,
            payload: response.data
          })
        }
     
  
      }).catch((error) => {
        console.log("error nurse details",)
      })
    };
  }

// export function getDoctorScheduleDetailsById(id) {
//     const request = DoctorScheduleService.getDoctorScheduleDetailsById(id);

//     return (dispatch, getState) => {
//         return request.then((response) => {        
//             return dispatch({
//                 type: ON_GET_DOCTOR_SCHEDULE_BY_ID,
//                 payload: response.data
//             });
//         }
//         );
//     };
// }