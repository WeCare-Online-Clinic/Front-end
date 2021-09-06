import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class ViewDoctorService {
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
  getClinicSchedule(clinicId) {
    return axios.get(Constants.API_BASE_URL + '/getClinicSchedule/' + clinicId)
  }

}

export default new ViewDoctorService()
