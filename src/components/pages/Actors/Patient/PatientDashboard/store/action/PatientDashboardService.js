import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class PatientDashboardService {
  getNextClinicDetails(patientId) {
    return axios.get(Constants.API_BASE_URL + '/getNextClinicDetails/'+patientId);
  }
  getOnlineUsers() {
    return axios.get(Constants.API_BASE_URL + '/getOnlineUsers/')
  }
  getRegisteredUsers(){
    return axios.get(Constants.API_BASE_URL + '/getRegisteredUsers/')
  }
}

export default new PatientDashboardService()
