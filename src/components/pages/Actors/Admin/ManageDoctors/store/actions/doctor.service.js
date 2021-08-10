import axios from 'axios'

const DOCTOR_API_BASE_URL = 'http://localhost:8080/wecare'

class DoctorService {
  saveDoctor(doctor) {
    return axios.post(DOCTOR_API_BASE_URL + '/addDoctor', doctor)
  }

  getDoctors() {
    return axios.get(DOCTOR_API_BASE_URL + '/getDoctors')
  }

  saveOrUpdateDoctor(doctor) {
    return axios.post(DOCTOR_API_BASE_URL, doctor)
  }

  getDoctorDTOByID(doctorID) {
    return axios.get(DOCTOR_API_BASE_URL + '/' + doctorID)
  }

  getClinics() {
    return axios.get(DOCTOR_API_BASE_URL + '/getClinics')
  }

  getClinicDays(data) {
    return axios.get(DOCTOR_API_BASE_URL + '/getClinicDays/' + data)
  }
  getDoctorProfileDetailsById(id) {
    return axios.get(DOCTOR_API_BASE_URL+'/getDoctorProfile/'+id);
  }
  getDoctorProfileDetailsByName(name){
  return axios.get(DOCTOR_API_BASE_URL+'/getDoctorProfileByName/'+name);
  }
  getDoctorProfileDetailsByClinic(clinicId){
  return axios.get(DOCTOR_API_BASE_URL+'/getDoctorProfileDetailsByClinic/'+clinicId);
  }
}

export default new DoctorService()
