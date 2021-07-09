import axios from 'axios';

const DOCTOR_API_BASE_URL = "http://localhost:8080/wecare/addDoctor";

class DoctorService {

  saveDoctor(doctor){
    return axios.post(DOCTOR_API_BASE_URL,doctor);
  }
  getDoctors() {
    return axios.get(DOCTOR_API_BASE_URL);
  }

  saveOrUpdateDoctor(doctor) {
    return axios.post(DOCTOR_API_BASE_URL, doctor);
  }

  getDoctorDTOByID(doctorID) {
    return axios.get(DOCTOR_API_BASE_URL + '/' + doctorID);
  }

  getClinicDates(data) {
    return axios.post(DOCTOR_API_BASE_URL+'/getClinicDates', data);
  }



}

export default new DoctorService()
