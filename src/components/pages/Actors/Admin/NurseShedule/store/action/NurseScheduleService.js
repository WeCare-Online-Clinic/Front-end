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
  getClinicSchedule(clinicId){
    return axios.get(NURSE_DETAILS_BASE_URL+'/getClinicSchedule/'+clinicId);
  }
  
  deleteNurseSchedule(nurseId){
    return axios.delete(NURSE_DETAILS_BASE_URL+'/deleteNurseSchedule/'+nurseId);
  }
  
  updateNurseSchedule(newNurseSchedule){
    return axios.post(NURSE_DETAILS_BASE_URL+'/updateNurseSchedule/',newNurseSchedule);
  }
}

export default new NurseScheduleService()
