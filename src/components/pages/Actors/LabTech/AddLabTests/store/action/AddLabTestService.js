import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class AddLabTestService { 
  

  getPatientProfileById(nic) {   
    return axios.get(Constants.API_BASE_URL + '/getPatientProfileById'+nic);
  }





}

export default new AddLabTestService()
