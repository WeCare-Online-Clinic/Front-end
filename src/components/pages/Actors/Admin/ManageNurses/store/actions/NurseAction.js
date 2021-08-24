
import NurseService from "./NurseService";
import history from '../../../../../../../@history'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const ON_GET_NURSES='[ON_GET_NURSE] ON_GET_NURSES';
export const ON_SAVE_NURSE = '[ON_SAVE_NURSE] ON_SAVE_NURSE';
export const ON_GET_CLINIC_DAYS = '[ON_GET_CLINICS] ON_GET_CLINIC_DAYS';
export const ON_GET_CLINICS='[ON_GET_CLINICS] ON_GET_CLINIC';
export const ON_GET_NURSE_PROFILE_BY_ID = '[ON_GET_NURSE_PROFILE_BY_ID] ON_GET_NURSE';
export const ON_GET_NURSE_PROFILE_BY_NAME = '[ON_GET_NURSE_PROFILE_BY_NAME] ON_GET_NURSE';
export const ON_GET_NURSE_PROFILE_BY_CLINIC = '[ON_GET_NURSE_PROFILE_BY_CLINIC] ON_GET_NURSE';
export const ON_GET_NURSE_PROFILE_BY_NURSE_ID= '[ON_GET_NURSE_PROFILE_BY_NURSE_ID] ON_GET_NURSE';

export function saveNurse(nurse) {
    const request = NurseService.saveNurse(nurse);

    return (dispatch, getState) => {
        return request.then((response) => {

           toast.success('Successfully Registered', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
            history.push('viewnurse');     
            dispatch({
                type: ON_SAVE_NURSE,
                payload: response.data
            })
            
        }).catch((error)=>{          
          toast.error('Register failed , Please try agin', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        });

    };
}

export function getNurse() {
    const request =NurseService.getNurses();
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("nurse list:",response.data)
            dispatch({
                type: ON_GET_NURSES,
                payload: response.data
            })
        }).catch((error)=>{
            console.log("error nurse list",)
        })
    };
}


export function getClinicDays(data) {
    console.log("data clinic",data);
    const request = NurseService.getClinicDays(data)

    return (dispatch, getState) => {
        return request.then((response) => {
            // console.log("days",response.data);
            return dispatch({
                type: ON_GET_CLINIC_DAYS,
                payload: response.data
            });
        }
        );
    };
}
export function getClinics() {
    const request = NurseService.getClinics()
  
    return (dispatch, getState) => {
      return request.then((response) => {
        console.log('clinics', response.data)
        return dispatch({
          type: ON_GET_CLINICS,
          payload: response.data,
        })
      })
    }
  }

  export function getNurseProfileDetailsById(id) {
    const request = NurseService.getNurseProfileDetailsById(id);
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
        console.log("error nurse id",)
      })
    };
  }
  
  export function getNurseProfileDetailsByName(name) {
    console.log("name:", name)
    const request = NurseService.getNurseProfileDetailsByName(name);
    return (dispatch, getState) => {
      request.then((response) => {
        if (response.data.length == 0) {        
          toast.error('Sorry,  Name not found', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
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
    const request = NurseService.getNurseProfileDetailsByClinic(clinicId);
    return (dispatch, getState) => {
      request.then((response) => {
        if (response.data.length == 0) {         
          toast.error('Sorry,  No nurses in the clinic', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
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
  export function getNurseProfileByNurseId(nurseId) {
    const request = NurseService.getNurseProfileByNurseId(nurseId);
    return (dispatch, getState) => {
      request.then((response) => {
        if (response.data.length == 0) {        
          toast.error('Sorry,  Id not found', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        }
        else {
          dispatch({
  
            type: ON_GET_NURSE_PROFILE_BY_NURSE_ID,
            payload: response.data
          })
  
        }
  
  
      }).catch((error) => {
        console.log("error doctor id",)
      })
    };
  }
  