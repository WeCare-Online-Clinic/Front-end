import axios from 'axios';

const NURSE_DETAILS_BASE_URL = "http://localhost:8080/wecare";

class NurseScheduleService {

//   saveNurse(nurse){
//     return axios.post(NURSE_API_BASE_URL+'/addNurse',nurse);
//   }
  
//   getDoctor() {
//     return axios.get(NURSE_API_BASE_URL+'/getNurses');
//   }

getNurseProfileDetailsById(id) {
    return axios.get(NURSE_DETAILS_BASE_URL+'/getNurseProfile/'+id);
  }
// getDoctorScheduleDetailsById(id){
//     return axios.get(DOCTOR_DETAILS_BASE_URL+'/getDoctorSchedule/'+id); 
// }



}

export default new NurseScheduleService()
