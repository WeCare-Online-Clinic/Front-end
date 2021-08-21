import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class NurseService {
  saveNurse(nurse) {
    return axios.post(Constants.API_BASE_URL + '/addNurse', nurse)
  }

  getNurses() {
    return axios.get(Constants.API_BASE_URL + '/getNurses')
  }

  getClinicDays(data) {
    return axios.get(Constants.API_BASE_URL + '/getClinicDays/' + data)
  }
  getClinics() {
    return axios.get(Constants.API_BASE_URL + '/getClinics')
  }
  getNurseProfileDetailsById(id) {
    return axios.get(Constants.API_BASE_URL + '/getNurseProfile/' + id)
  }
  getNurseProfileDetailsByName(name) {
    return axios.get(Constants.API_BASE_URL + '/getNurseProfileByName/' + name)
  }
  getNurseProfileDetailsByClinic(clinicId) {
    return axios.get(
      Constants.API_BASE_URL + '/getNurseProfileDetailsByClinic/' + clinicId
    )
  }
}

export default new NurseService()
