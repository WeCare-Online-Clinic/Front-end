import {
  showErrorMessage,
  showSuccessMessage,
} from '../../../../../../../utils/ToastUtil'
import history from '../../../../../../../@history'
import DoctorService from './doctor.service'

export const ON_ADD_EDIT_FORM_CHANGE = '[DOCTOR ADD EDIT] ON_ADD_EDIT_FORM_CHANGE'
export const ON_GET_DOCTORS = '[DOCTOR ADD EDIT] ON_GET_DOCTORS'
export const ON_SAVE_UPDATE_DOCTOR = '[DOCTOR ADD EDIT] ON_SAVE_UPDATE_DOCTOR'
export const ON_RESET_DOCTOR_FORM_DATA = '[DOCTOR ADD EDIT] ON_RESET_DOCTOR_FORM_DATA'
export const GET_DOCTOR = '[DOCTOR ADD EDIT] GET_DOCTOR'
export const ON_RESET_DOCTOR_DATA = '[DOCTOR ADD EDIT] ON_RESET_DOCTOR_DATA'
export const ON_GET_CLINICS = '[DOCTOR ADD EDIT] ON_GET_CLINICS'
export const ON_GET_CLINIC_DAYS = '[DOCTOR ADD EDIT] ON_GET_CLINIC_DAYS'
export const ON_SAVE_DOCTOR = '[DOCTOR ADD] ON_SAVE_DOCTOR'
export const ON_GET_DOCTOR_PROFILE_BY_ID = '[ON_GET_DOCTOR_PROFILE_BY_ID] ON_GET_DOCTOR';
export const ON_GET_DOCTOR_PROFILE_BY_NAME = '[ON_GET_DOCTOR_PROFILE_BY_NAME] ON_GET_DOCTOR';
export const ON_GET_DOCTOR_PROFILE_BY_CLINIC = '[ON_GET_DOCTOR_PROFILE_BY_CLINIC] ON_GET_DOCTOR';
export const ON_GET_DOCTOR_PROFILE_BY_DOCTOR_ID="[ON_GET_DOCTOR_PROFILE_BY_DOCTOR_ID] ON_GET_DOCTOR";


export function saveDoctor(doctor) {
  const request = DoctorService.saveDoctor(doctor)

  return (dispatch, getState) => {
    return request
      .then((response) => {
        alert('Successfully Registered')
        history.push('viewdoctors')
        dispatch({
          type: ON_SAVE_DOCTOR,
          payload: response.data,
        })
      })
      .catch((error) => {
        // alert('Register failed, please try again')
      })
  }
}

export function getDoctors() {
  const request = DoctorService.getDoctors()
  return (dispatch, getState) => {
    request
      .then((response) => {
        console.log('doctor list in action:', response.data)
        dispatch({
          type: ON_GET_DOCTORS,
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log('error doctor list hhfhfh')
      })
  }
}

export function onFormChange(data) {
  return (dispatch, getState) => {
    dispatch({
      type: ON_ADD_EDIT_FORM_CHANGE,
      payload: data,
    })
  }
}

export function saveOrUpdateDoctor(data) {
  const request = DoctorService.saveOrUpdateDoctor(data)

  return (dispatch, getState) => {
    return request.then((response) => {
      console.log(response)
      return dispatch({
        type: ON_SAVE_UPDATE_DOCTOR,
        payload: response.data,
      })
    })
  }
}

export function getDoctorDTOByID(doctorID) {
  const request = DoctorService.getDoctorDTOByID(doctorID)
  return (dispatch, getState) => {
    request.then((response) =>
      dispatch({
        type: GET_DOCTOR,
        payload: response.data.result,
      })
    )
  }
}

export function onResetFromData() {
  return (dispatch, getState) => {
    dispatch({
      type: ON_RESET_DOCTOR_FORM_DATA,
      payload: {},
    })
  }
}

export function onResetDoctorData() {
  return (dispatch, getState) => {
    dispatch({
      type: ON_RESET_DOCTOR_DATA,
      payload: {},
    })
  }
}

export function setDoctor(data) {
  return (dispatch, getState) => {
    dispatch({
      type: GET_DOCTOR,
      payload: data,
    })
  }
}

export function getClinics() {
  const request = DoctorService.getClinics()

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

export function getClinicDays(data) {
  console.log('data clinic', data)
  const request = DoctorService.getClinicDays(data)

  return (dispatch, getState) => {
    return request.then((response) => {
      // console.log("days",response.data);
      return dispatch({
        type: ON_GET_CLINIC_DAYS,
        payload: response.data,
      })
    })
  }
}

export function getDoctorProfileDetailsById(id) {
  const request = DoctorService.getDoctorProfileDetailsById(id);
  return (dispatch, getState) => {
    request.then((response) => {
      if (response.data.length == 0) {
        alert('Sorry,  Id not found');
      }
      else {
        dispatch({

          type: ON_GET_DOCTOR_PROFILE_BY_ID,
          payload: response.data
        })

      }


    }).catch((error) => {
      console.log("error doctor id",)
    })
  };
}

export function getDoctorProfileDetailsByName(name) {
  console.log("name:", name)
  const request = DoctorService.getDoctorProfileDetailsByName(name);
  return (dispatch, getState) => {
    request.then((response) => {
      if (response.data.length == 0) {
        alert('Sorry,  Name not found');
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
  const request = DoctorService.getDoctorProfileDetailsByClinic(clinicId);
  return (dispatch, getState) => {
    request.then((response) => {
      if (response.data.length == 0) {
        alert('Sorry,  No doctors incharge the clinic');
      }
      else{
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
export function getDoctorProfileDetailsByDoctorId(doctorId) {
  const request = DoctorService.getDoctorProfileDetailsByDoctorId(doctorId);
  return (dispatch, getState) => {
    request.then((response) => {
      if (response.data.length == 0) {
        alert('Sorry,  Id not found');
      }
      else {
        dispatch({

          type: ON_GET_DOCTOR_PROFILE_BY_DOCTOR_ID,
          payload: response.data
        })

      }


    }).catch((error) => {
      console.log("error doctor id",)
    })
  };
}