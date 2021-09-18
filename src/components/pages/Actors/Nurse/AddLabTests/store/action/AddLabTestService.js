import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class AddLabTestService { 
  

  getPatientProfileByNIC(patientNIC) {   
    return axios.get(Constants.API_BASE_URL + '/getPatientProfileByNIC/'+patientNIC);
  }
  getTestTypes(patientProfile){    
    return axios.post(Constants.API_BASE_URL + '/getTestTypes/',patientProfile);
  }
  savePatientTest(patientTestObject){
    return axios.post(Constants.API_BASE_URL + '/savePatientTest/',patientTestObject);
  }





}

export default new AddLabTestService()
