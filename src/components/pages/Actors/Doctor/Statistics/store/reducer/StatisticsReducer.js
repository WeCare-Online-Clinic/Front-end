import {
  ON_GET_DATA_CARD_DETAILS,
  ON_GET_PATIENTS_DIOGNOSIS_COUNT,
  ON_GET_PATIENT_AGE_DATA,
  ON_GET_PATIENT_COUNT_IN_CLINIC,
  ON_GET_CONSULTED_PATIENTS_DATA,
} from '../action/StatisticsAction'
import * as _ from 'lodash'
const initialState = {
  dataCardDetails: [],
  diognosisCount: [],
  patientAgeCount: [],
  patientCountInClinic: [],
  consultedPatientsData: [],
}

const StatisticsReducer = function (state = initialState, action) {
  switch (action.type) {
    case ON_GET_DATA_CARD_DETAILS: {
      return {
        ...state,
        dataCardDetails: [...action.payload],
      }
    }
    case ON_GET_PATIENTS_DIOGNOSIS_COUNT: {
      return {
        ...state,
        diognosisCount: [...action.payload],
      }
    }
    case ON_GET_PATIENT_AGE_DATA: {
      return {
        ...state,
        patientAgeCount: [...action.payload],
      }
    }
    case ON_GET_PATIENT_COUNT_IN_CLINIC: {
      return {
        ...state,
        patientCountInClinic: [...action.payload],
      }
    }
    case ON_GET_CONSULTED_PATIENTS_DATA: {
      return {
        ...state,
        consultedPatientsData: [...action.payload],
      }
    }
    default: {
      return state
    }
  }
}

export default StatisticsReducer
