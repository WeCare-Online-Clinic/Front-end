import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class StatisticsService {
  getDataCardDetails(doctorId) {
    return axios.get(
      Constants.API_BASE_URL + '/getDoctorDataCardDetails/' + doctorId
    )
  }
  getDiagnosis(clinicId) {
    return axios.get(
      Constants.API_BASE_URL + '/getDiognosisDetails/' + clinicId
    )
  }
  getPatientAge(clinicId) {
    return axios.get(Constants.API_BASE_URL + '/getPatientAgeData/' + clinicId)
  }
  getPatientCountInClinic(clinicId) {
    return axios.get(
      Constants.API_BASE_URL + '/getPatientsCountInClinic/' + clinicId
    )
  }
  getConsultedPatientsData(doctorId) {
    return axios.get(
      Constants.API_BASE_URL + '/getConsultedPatientsData/' + doctorId
    )
  }
}

export default new StatisticsService()
