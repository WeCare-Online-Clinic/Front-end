import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class ReportService { 
  saveReport(report) {
    return axios.post(Constants.API_BASE_URL + '/addReport/', report)
  }

  getReport() {
    return axios.get(Constants.API_BASE_URL + '/getReport')
  }


  getPatients() {
    return axios.get(Constants.API_BASE_URL + '/getPatients/' );
  }

  getTests() {
    return axios.get(Constants.API_BASE_URL + '/getTests')
  }

  getReportProfileDetailsById(id) {
    return axios.get(Constants.API_BASE_URL + '/getReportProfile/' + id)
  }

  getReportProfileDetailsByPatient(patientName) {
    return axios.get(
      Constants.API_BASE_URL + '/getReportProfileByPatient/' + patientName
    )
  }

  getReportProfileDetailsByTest(testId) {
    return axios.get(Constants.API_BASE_URL + '/getReportProfileDetailsByTest/' + testId);
  }


}

export default new ReportService()
