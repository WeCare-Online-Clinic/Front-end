import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class DoctorScheduleService {
  getDoctorProfileDetailsById(id) {
    return axios.get(Constants.API_BASE_URL + '/getDoctorProfile/' + id)
  }
  getDoctorProfileDetailsByName(name) {
    return axios.get(Constants.API_BASE_URL + '/getDoctorProfileByName/' + name)
  }
  getDoctorProfileDetailsByClinic(clinicId) {
    return axios.get(
      Constants.API_BASE_URL + '/getDoctorProfileDetailsByClinic/' + clinicId
    )
  }
  getClinicSchedule(clinicId) {
    return axios.get(Constants.API_BASE_URL + '/getClinicSchedule/' + clinicId)
  }

  deleteDoctorSchedule(doctorId) {
    console.log("delete in service:",doctorId);
    return axios.delete(
      Constants.API_BASE_URL + '/deleteDoctorSchedule/' + doctorId
    )
  }

  updateDoctorSchedule(newDoctorSchedule) {
    console.log("new schedule",newDoctorSchedule);
    return axios.post(
      Constants.API_BASE_URL + '/updateDoctorSchedule/',
      newDoctorSchedule
    )
  }

  changeDoctorStatus(doctorId){
    console.log("doctor in service:",doctorId); 
    return axios.get( Constants.API_BASE_URL + '/changeDoctorStatus/'+doctorId);
  }
}

export default new DoctorScheduleService()
