import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class HeadNurseDashboardService {
  getDataCardDetails(nurseId) {
    return axios.get(Constants.API_BASE_URL + '/getNurseDataCardDetails/'+nurseId)
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
    return axios.get(Constants.API_BASE_URL+ '/getConsultedPatientsDataNurse/'+nurseId)
  }

}

export default new HeadNurseDashboardService()
