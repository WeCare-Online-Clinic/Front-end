import axios from 'axios';

const DOCTOR_DETAILS_BASE_URL = "http://localhost:8080/wecare";

class DoctorScheduleService {



getDoctorProfileDetailsById(id) {
    return axios.get(DOCTOR_DETAILS_BASE_URL+'/getDoctorProfile/'+id);
  }
getDoctorProfileDetailsByName(name){
  return axios.get(DOCTOR_DETAILS_BASE_URL+'/getDoctorProfileByName/'+name);
}
getDoctorProfileDetailsByClinic(clinicId){
  return axios.get(DOCTOR_DETAILS_BASE_URL+'/getDoctorProfileDetailsByClinic/'+clinicId);
}
getClinicSchedule(clinicId){
  return axios.get(DOCTOR_DETAILS_BASE_URL+'/getClinicSchedule/'+clinicId);
}

deleteDoctorSchedule(doctorId){
  return axios.delete(DOCTOR_DETAILS_BASE_URL+'/deleteDoctorSchedule/'+doctorId);
}

updateDoctorSchedule(newDoctorSchedule){
  return axios.post(DOCTOR_DETAILS_BASE_URL+'/updateDoctorSchedule/',newDoctorSchedule);
}



}

export default new DoctorScheduleService()
