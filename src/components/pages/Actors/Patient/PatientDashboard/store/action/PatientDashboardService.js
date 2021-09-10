import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class PatientDashboardService {
  getNextClinicDetails(patientId) {
    return axios.get(Constants.API_BASE_URL + '/getNextClinicDetails/'+patientId);
  }
  getRequestDates(requestDateObject) {
    return axios.post(Constants.API_BASE_URL + '/getRequestDates/',requestDateObject)
  }  
  saveRequest(requestObject) {
    return axios.post(Constants.API_BASE_URL + '/savePatientRequest/',requestObject)
  }

}

export default new PatientDashboardService()
