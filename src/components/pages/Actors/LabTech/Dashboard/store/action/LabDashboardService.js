import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class LabDashboardService {
  getDataCardDetails() {
    return axios.get(Constants.API_BASE_URL + '/getLabTechDataCardDetails/')
  }
  getMonthlyIssuedReports(){
    return axios.get(Constants.API_BASE_URL + '/getMonthlyIssuedReportsCount/')
  }
  getIssuedReportTypes(){
    return axios.get(Constants.API_BASE_URL + '/getIssuedReportTypes/')
  }


}

export default new LabDashboardService()
