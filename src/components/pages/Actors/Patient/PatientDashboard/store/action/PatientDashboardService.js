import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class PatientDashboardService {
  getNextClinicDetails(patientId) {
    return axios.get(Constants.API_BASE_URL + '/getNextClinicDetails/'+patientId);
  }
  getRequestDates(clinicId,currentClinicDate) {
    return axios.post(Constants.API_BASE_URL + '/getRequestDates/'+{params:{clinicId:clinicId,currentClinicDate:currentClinicDate}})
  }
  // getRegisteredUsers(){
  //   return axios.get(Constants.API_BASE_URL + '/getRegisteredUsers/')
  // }
}

export default new PatientDashboardService()
