import axios from 'axios';

const NURSE_API_BASE_URL = "http://localhost:8080/wecare";

class NurseService {

  saveNurse(nurse){
    return axios.post(NURSE_API_BASE_URL+'/addNurse',nurse);
  }
  
  getNurses() {
    return axios.get(NURSE_API_BASE_URL+'/getNurses');
  }

  // saveOrUpdateDoctor(doctor) {
  //   return axios.post(DOCTOR_API_BASE_URL, doctor);
  // }

  // getDoctorDTOByID(doctorID) {
  //   return axios.get(DOCTOR_API_BASE_URL + '/' + doctorID);
  // }

  // getClinicDates(data) {
  //   return axios.post(DOCTOR_API_BASE_URL+'/getClinicDays', data);
  // }



}

export default new NurseService()
