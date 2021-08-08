import axios from 'axios';

const DOCTOR_DETAILS_BASE_URL = "http://localhost:8080/wecare";

class DoctorScheduleService {

//   saveNurse(nurse){
//     return axios.post(NURSE_API_BASE_URL+'/addNurse',nurse);
//   }
  
//   getDoctor() {
//     return axios.get(NURSE_API_BASE_URL+'/getNurses');
//   }

getDoctorProfileDetailsById(id) {
    return axios.get(DOCTOR_DETAILS_BASE_URL+'/getDoctorProfile/'+id);
  }
getDoctorProfileDetailsByName(name){
  return axios.get(DOCTOR_DETAILS_BASE_URL+'/getDoctorProfileByName/'+name);
}
getDoctorProfileDetailsByClinic(clinicId){
  return axios.get(DOCTOR_DETAILS_BASE_URL+'/getDoctorProfileDetailsByClinic/'+clinicId);
}
// getDoctorScheduleDetailsById(id){
//     return axios.get(DOCTOR_DETAILS_BASE_URL+'/getDoctorSchedule/'+id); 
// }



}

export default new DoctorScheduleService()
