import axios from 'axios';

const DOCTOR_API_BASE_URL = "http://localhost:8080/wecare";

class DoctorService {

  saveDoctor(doctor){
    return axios.post(DOCTOR_API_BASE_URL+'/addDoctor',doctor);
  }
  
  getDoctors() {
    return axios.get(DOCTOR_API_BASE_URL+'/getDoctors');
  }

  saveOrUpdateDoctor(doctor) {
    return axios.post(DOCTOR_API_BASE_URL, doctor);
  }

  getDoctorDTOByID(doctorID) {
    return axios.get(DOCTOR_API_BASE_URL + '/' + doctorID);
  }

  getClinicDays(data) {
    return axios.get(DOCTOR_API_BASE_URL+'/getClinicDays/'+data);
  }



}

export default new DoctorService()
