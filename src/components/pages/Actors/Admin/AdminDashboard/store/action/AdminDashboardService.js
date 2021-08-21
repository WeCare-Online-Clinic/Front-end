import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class AdminDashboardService {
  getUserCounts() {
    return axios.get(Constants.API_BASE_URL + '/getUserCounts/')
  }
}

export default new AdminDashboardService()
