import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class DoctorDashboardService {
  getDataCardDetails(docotorId) {
    return axios.get(Constants.API_BASE_URL + '/getDoctorDataCardDetails/'+docotorId)
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

}

export default new DoctorDashboardService()
