import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class PatientService { 
  savePatient(patient) {
    return axios.post(Constants.API_BASE_URL + '/addPatient', patient)
  }

  getPatient() {
    return axios.get(Constants.API_BASE_URL + '/getPatient')
  }


  getClinicDays(data) {
    return axios.get(Constants.API_BASE_URL + '/getClinicDays/' + data);
  }
  getClinics() {
    return axios.get(Constants.API_BASE_URL + '/getClinics')
  }

  getPatientProfileDetailsById(id) {
    return axios.get(Constants.API_BASE_URL + '/getPatientProfile/' + id)
  }
  getPatientProfileDetailsByName(name) {
    return axios.get(
      Constants.API_BASE_URL + '/getPatientProfileByName/' + name
    )
  }

  getPatientProfileDetailsByClinic(clinicId) {
    return axios.get(Constants.API_BASE_URL + '/getPatientProfileDetailsByClinic/' + clinicId);
  }


}

export default new PatientService()
