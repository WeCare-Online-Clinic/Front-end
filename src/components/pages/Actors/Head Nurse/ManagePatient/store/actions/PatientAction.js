import PatientService from "./PatientService";
import history from '../../../../../../../@history'

export const ON_GET_PATIENT='[ON_GET_PATIENT] ON_GET_PATIENT';
export const ON_SAVE_PATIENT = '[ON_SAVE_PATIENT] ON_SAVE_PATIENT';
export const ON_GET_CLINIC_DAYS = '[ON_GET_CLINICS] ON_GET_CLINIC_DAYS';
export const ON_GET_CLINICS='[ON_GET_CLINICS] ON_GET_CLINIC';
export const ON_GET_PATIENT_PROFILE_BY_ID = '[ON_GET_PATIENT_PROFILE_BY_ID] ON_GET_PATIENT';
export const ON_GET_PATIENT_PROFILE_BY_NAME = '[ON_GET_PATIENT_PROFILE_BY_NAME] ON_GET_PATIENT';
export const ON_GET_PATIENT_PROFILE_BY_CLINIC = '[ON_GET_PATIENT_PROFILE_BY_CLINIC] ON_GET_PATIENT';


export function savePatient(patient) {
    const request = PatientService.savePatient(patient);
    return (dispatch, getState) => {
        return request.then((response) => {

            alert("Successfully Registered"); 
            history.push('viewpatient');     
            dispatch({
                type: ON_SAVE_PATIENT,
                payload: response.data
            })
            
        }).catch((error)=>{          
            alert("Register failed, please try again"); 
        });

    };
}

export function getPatient() {
    const request =PatientService.getPatient();
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("patient list:",response.data)
            dispatch({
                type: ON_GET_PATIENT,
                payload: response.data
            })
        }).catch((error)=>{
            console.log("error patient list",)
        })
    };
}


export function getClinicDays(data) {
  console.log("data clinic",data);
  const request = PatientService.getClinicDays(data)

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
  const request = PatientService.getClinics()

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


  export function getPatientProfileDetailsById(id) {
    const request = PatientService.getPatientProfileDetailsById(id);
    return (dispatch, getState) => {
      request.then((response) => {
        if (response.data.length == 0) {
          alert('Sorry,  Id not found');
        }
        else {
          dispatch({
  
            type: ON_GET_PATIENT_PROFILE_BY_ID,
            payload: response.data
          })
  
        }
  
  
      }).catch((error) => {
        console.log("error patient id",)
      })
    };
  }
  
  export function getPatientProfileDetailsByName(name) {
    console.log("name:", name)
    const request = PatientService.getPatientProfileDetailsByName(name);
    return (dispatch, getState) => {
      request.then((response) => {
        if (response.data.length == 0) {
          alert('Sorry,  Name not found');
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
    const request = PatientService.getPatientProfileDetailsByClinic(clinicId);
    return (dispatch, getState) => {
      request.then((response) => {
        if (response.data.length == 0) {
          alert('Sorry,  No Patients in the clinic');
        }
        else{
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