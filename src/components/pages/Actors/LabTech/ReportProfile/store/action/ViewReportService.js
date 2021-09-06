import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class ViewReportService {
  getReportProfileDetailsById(id) {
    return axios.get(Constants.API_BASE_URL + '/getReportProfile/' + id)
  }
  

}

export default new ViewReportService()
