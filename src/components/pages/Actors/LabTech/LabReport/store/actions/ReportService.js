import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class ReportService {



  saveReport(report) {
    return axios.post(Constants.API_BASE_URL + '/addReport/', report, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
  }

  getReport() {
    return axios.get(Constants.API_BASE_URL + '/getReport')
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

  // search
  getPatientReportsByPatientName(patientName){
    return axios.get(Constants.API_BASE_URL + '/getPatientReportsByPatientName/' + patientName);
  }
  getPatientReportsByPatientNIC(patientNIC){
    return axios.get(Constants.API_BASE_URL + '/getPatientReportsByPatientNIC/' + patientNIC);
  }
  getPatientReportsByTestType(testType){
    console.log("TestType",testType)
    return axios.get(Constants.API_BASE_URL + '/getPatientReportsByTestType/' + testType);
  }


}

export default new ReportService()
