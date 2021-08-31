import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class DoctorDashboardService {
  getDataCardDetails(docotorId) {
    return axios.get(Constants.API_BASE_URL + '/getDoctorDataCardDetails/'+docotorId)
  }

}

export default new DoctorDashboardService()
