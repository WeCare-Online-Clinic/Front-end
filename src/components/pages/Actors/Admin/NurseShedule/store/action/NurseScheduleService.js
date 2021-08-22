import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class NurseScheduleService {
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
  getClinicSchedule(clinicId) {
    return axios.get(Constants.API_BASE_URL + '/getClinicSchedule/' + clinicId)
  }

  deleteNurseSchedule(nurseId) {
    return axios.delete(
      Constants.API_BASE_URL + '/deleteNurseSchedule/' + nurseId
    )
  }

  updateNurseSchedule(newNurseSchedule) {
    return axios.post(
      Constants.API_BASE_URL + '/updateNurseSchedule/',
      newNurseSchedule
    )
  }
  changeNurseStatus(nurse){
    return axios.put( Constants.API_BASE_URL + '/changeNurseStatus/',nurse);
  }
}

export default new NurseScheduleService()
