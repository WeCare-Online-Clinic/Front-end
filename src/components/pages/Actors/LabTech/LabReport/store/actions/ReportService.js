import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class ReportService { 
  saveReport(report) {
    return axios.post(Constants.API_BASE_URL + '/addReport', report)
  }

  getReport() {
    return axios.get(Constants.API_BASE_URL + '/getReport')
  }


  getClinicDays(data) {
    return axios.get(Constants.API_BASE_URL + '/getClinicDays/' + data);
  }
  getClinics() {
    return axios.get(Constants.API_BASE_URL + '/getClinics')
  }

  getReportProfileDetailsById(id) {
    return axios.get(Constants.API_BASE_URL + '/getReportProfile/' + id)
  }
  getReportProfileDetailsByName(name) {
    return axios.get(
      Constants.API_BASE_URL + '/getReportProfileByName/' + name
    )
  }

  getReportProfileDetailsByClinic(clinicId) {
    return axios.get(Constants.API_BASE_URL + '/getReportProfileDetailsByClinic/' + clinicId);
  }


}

export default new ReportService()
