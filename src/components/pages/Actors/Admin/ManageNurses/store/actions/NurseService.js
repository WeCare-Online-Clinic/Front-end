import axios from 'axios';

const NURSE_API_BASE_URL = "http://localhost:8080/wecare";

class NurseService {

  saveNurse(nurse) {
    return axios.post(NURSE_API_BASE_URL + '/addNurse', nurse);
  }

  getNurses() {
    return axios.get(NURSE_API_BASE_URL + '/getNurses');
  }

  getClinicDays(data) {
    return axios.get(NURSE_API_BASE_URL + '/getClinicDays/' + data);
  }
  getClinics() {
    return axios.get(NURSE_API_BASE_URL + '/getClinics')
  }
  getNurseProfileDetailsById(id) {
    return axios.get(NURSE_API_BASE_URL + '/getNurseProfile/' + id);
  }
  getNurseProfileDetailsByName(name) {
    return axios.get(NURSE_API_BASE_URL + '/getNurseProfileByName/' + name);
  }
  getNurseProfileDetailsByClinic(clinicId) {
    return axios.get(NURSE_API_BASE_URL + '/getNurseProfileDetailsByClinic/' + clinicId);
  }


}

export default new NurseService()
