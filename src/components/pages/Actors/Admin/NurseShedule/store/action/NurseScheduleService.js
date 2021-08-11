import axios from 'axios';

const NURSE_DETAILS_BASE_URL = "http://localhost:8080/wecare";

class NurseScheduleService {




  getNurseProfileDetailsById(id) {
    return axios.get(NURSE_DETAILS_BASE_URL + '/getNurseProfile/' + id);
  }
  getNurseProfileDetailsByName(name) {
    return axios.get(NURSE_DETAILS_BASE_URL + '/getNurseProfileByName/' + name);
  }
  getNurseProfileDetailsByClinic(clinicId) {
    return axios.get(NURSE_DETAILS_BASE_URL + '/getNurseProfileDetailsByClinic/' + clinicId);



}
}

export default new NurseScheduleService()
