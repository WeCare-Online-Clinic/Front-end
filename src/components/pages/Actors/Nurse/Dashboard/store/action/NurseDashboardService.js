import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class NurseDashboardService {
  getDataCardDetails(nurseId) {
    return axios.get(Constants.API_BASE_URL + '/getDoctorDataCardDetails/'+nurseId)
  }
  getDiagnosis(clinicId){
    return axios.get(Constants.API_BASE_URL + '/getDiognosisDetails/'+clinicId)
  }
  getPatientAge(clinicId){
    return axios.get(Constants.API_BASE_URL+ '/getPatientAgeData/'+clinicId)
  }
  getPatientCountInClinic(clinicId){
    return axios.get(Constants.API_BASE_URL+ '/getPatientsCountInClinic/'+clinicId)
  }
  getConsultedPatientsData(nurseId){
    return axios.get(Constants.API_BASE_URL+ '/getConsultedPatientsData/'+nurseId)
  }

}

export default new NurseDashboardService()
