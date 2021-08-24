import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class DoctorService {
 

  getDoctors() {
    return axios.get(Constants.API_BASE_URL + '/getDoctors')
  }


  getDoctorDTOByID(doctorID) {
    return axios.get(Constants.API_BASE_URL + '/' + doctorID)
  }

  getClinics() {
    return axios.get(Constants.API_BASE_URL + '/getClinics')
  }

  getClinicDays(data) {
    return axios.get(Constants.API_BASE_URL + '/getClinicDays/' + data)
  }

  getDoctorProfileDetailsById(id) {
    return axios.get(Constants.API_BASE_URL + '/getDoctorProfile/' + id)
  }
  getDoctorProfileDetailsByName(name) {
    return axios.get(Constants.API_BASE_URL + '/getDoctorProfileByName/' + name)
  }
  getDoctorProfileDetailsByClinic(clinicId) {
    return axios.get(
      Constants.API_BASE_URL + '/getDoctorProfileDetailsByClinic/' + clinicId
    )
  }
  getDoctorProfileDetailsByDoctorId(doctorId) { 
    return axios.get(Constants.API_BASE_URL + '/getDoctorProfileByDoctorId/' + doctorId)
  }
}

export default new DoctorService()
