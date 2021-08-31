import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class ViewPatientService {
  getPatientProfileDetailsById(id) {
    return axios.get(Constants.API_BASE_URL + '/getPatientProfile/' + id)
  }
  getPatientProfileDetailsByName(name) {
    return axios.get(Constants.API_BASE_URL + '/getPatientProfileByName/' + name)
  }
  getPatientProfileDetailsByClinic(clinicId) {
    return axios.get(
      Constants.API_BASE_URL + '/getPatientProfileDetailsByClinic/' + clinicId
    )
  }
  getClinicSchedule(clinicId) {
    return axios.get(Constants.API_BASE_URL + '/getClinicSchedule/' + clinicId)
  }

}

export default new ViewPatientService()
