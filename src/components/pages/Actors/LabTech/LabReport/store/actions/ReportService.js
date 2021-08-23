import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class ReportService {
  getReport() {
    return axios.get(Constants.API_BASE_URL + '/getReport')
  }
  getReportProfileDetailsById(id) {
    return axios.get(Constants.API_BASE_URL + '/getReportProfile/' + id)
  }
  getReportProfileDetailsByName(name) {
    return axios.get(Constants.API_BASE_URL + '/getReportProfileByName/' + name)
  }
}

export default new ReportService()
