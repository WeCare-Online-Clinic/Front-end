import {
  GET_DOCTOR,
  ON_SAVE_DOCTOR,
  ON_ADD_EDIT_FORM_CHANGE,
  ON_GET_CLINIC_DAYS,
  ON_GET_DOCTORS,
  ON_RESET_DOCTOR_DATA,
  ON_RESET_DOCTOR_FORM_DATA,
  ON_SAVE_UPDATE_DOCTOR,
  ON_GET_CLINICS,
  ON_GET_DOCTOR_PROFILE_BY_ID,
  ON_GET_DOCTOR_PROFILE_BY_NAME,
  ON_GET_DOCTOR_PROFILE_BY_CLINIC,
  ON_GET_DOCTOR_PROFILE_BY_DOCTOR_ID
} from '../actions/doctor.add.edit.action'

const initialState = {
  formData: {},
  doctor: {},
  clinics: [],
  clinicDays: [],
  doctorList: [],
}

const doctorAddEditReducer = function (state = initialState, action) {
  switch (action.type) {
    case ON_GET_DOCTORS: {
      return {
        ...state,
        doctorList: [...action.payload],
      }
    }

    case ON_SAVE_DOCTOR: {
      return {
        ...state,
        doctor: [...action.payload],
      }
    }

    case ON_ADD_EDIT_FORM_CHANGE: {
      return {
        ...state,
        formData: action.payload,
      }
    }

    case ON_SAVE_UPDATE_DOCTOR: {
      return {
        ...state,
        doctor: action.payload,
      }
    }

    case GET_DOCTOR: {
      return {
        ...state,
        doctor: action.payload,
      }
    }

    case ON_RESET_DOCTOR_FORM_DATA: {
      return {
        ...state,
        formData: {},
      }
    }

    case ON_RESET_DOCTOR_DATA: {
      return {
        ...state,
        ...initialState,
      }
    }

    case ON_GET_CLINICS: {
      return {
        ...state,
        clinics: [...action.payload],
      }
    }

    case ON_GET_CLINIC_DAYS: {
      return {
        ...state,
        clinicDays: [...action.payload],
      }
    }
    case ON_GET_DOCTOR_PROFILE_BY_ID: {    
      // let localdoctorProfile = _.cloneDeep(action.payload);  
      return {
          ...state,
          doctorList: [...action.payload]
      }

  } 
  case ON_GET_DOCTOR_PROFILE_BY_NAME:{
      return{
          ...state,
          doctorList:[...action.payload]
      }
  }
  case ON_GET_DOCTOR_PROFILE_BY_CLINIC:{
      return{
          ...state,
          doctorList:[...action.payload]
      }
  }  
  case ON_GET_DOCTOR_PROFILE_BY_DOCTOR_ID:{
    return{
        ...state,
        doctorList:[...action.payload]
    }
}


    default: {
      return state
    }
  }
}

export default doctorAddEditReducer
