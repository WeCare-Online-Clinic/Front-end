import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class HeadNurseDashboardService {
  getDataCardDetails(headnurseId) {
    return axios.get(Constants.API_BASE_URL + '/getDoctorDataCardDetails/'+headnurseId)
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
  getConsultedPatientsData(headnurseId){
    return axios.get(Constants.API_BASE_URL+ '/getConsultedPatientsData/'+headnurseId)
  }

}

export default new HeadNurseDashboardService()
