import {
  GET_DOCTOR,
  ON_GET_CLINIC_DAYS,
  ON_GET_DOCTORS,
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

    case GET_DOCTOR: {
      return {
        ...state,
        doctor: action.payload,
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
