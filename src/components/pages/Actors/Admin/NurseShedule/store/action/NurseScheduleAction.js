import NurseScheduleService from "./NurseScheduleService";
import history from '../../../../../../../@history'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()


export const ON_GET_NURSE_SCHEDULE_BY_ID='[ON_GET_NURSE_SCHEDULE_BY_ID] ON_GET_NURSE';
export const ON_GET_NURSE_PROFILE_BY_ID = '[ON_GET_NURSE_PROFILE_BY_ID] ON_GET_NURSE';
export const ON_GET_NURSE_PROFILE_BY_NAME = '[ON_GET_NURSE_PROFILE_BY_NAME] ON_GET_NURSE';
export const ON_GET_NURSE_PROFILE_BY_CLINIC = '[ON_GET_NURSE_PROFILE_BY_CLINIC] ON_GET_NURSE';
export const ON_GET_CLINIC_SCHEDULE_BY_CLINICID ='[ON_GET_CLINIC_SCHEDULE_BY_CLINICID] ON_GET_NURSE'


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

  export function getClinicSchedule(clinicId) {
    const request = NurseScheduleService.getClinicSchedule(clinicId);
    return (dispatch, getState) => {
        request.then((response) => { 
            console.log("clinic schedule",response.data);         
                dispatch({
                    type: ON_GET_CLINIC_SCHEDULE_BY_CLINICID,
                    payload: response.data
                })         


        }).catch((error) => {
            console.log("error clinic schedules",)
        })
    };
}

export function deleteNurseSchedule(doctorId) {
    const request = NurseScheduleService.deleteNurseSchedule(doctorId);
    return (dispatch, getState) => {
        request.then((response) => {          
            console.log("delete doctor schedule",response.data);       


        }).catch((error) => {
            console.log("delete nurse schedule error",)
        })
    };
}

export function updateNurseSchedule(newDoctorSchedule,doctorId) {
    const request = NurseScheduleService.updateNurseSchedule(newDoctorSchedule);
    return (dispatch, getState) => {
        request.then((response) => { 
             window.location.reload(false);
            toast.info('Successfully Updated', { position: toast.POSITION.TOP_CENTER, autoClose: false })       
            console.log("update nurse schedule success",response.data);         
                    


        }).catch((error) => {
            console.log("update nurse schedule error",)
        })
    };
}
export function changeNurseStatus(nurseId) {
  const request = NurseScheduleService.changeNurseStatus(nurseId);
  return (dispatch, getState) => {
      request.then((response) => {
          toast.info('Successfully Deleted', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
          history.push('viewnurse');
          console.log("delete nurse profile success", response.data);

      }).catch((error) => {
          console.log("delete doctor error",)
      })
  };
}