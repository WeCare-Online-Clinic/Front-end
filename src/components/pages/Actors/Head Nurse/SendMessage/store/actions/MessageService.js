import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class MessageService { 
  // savePatient(patient) {
  //   return axios.post(Constants.API_BASE_URL + '/addPatient', patient)
  // }

  
  getClinics() {
    return axios.get(Constants.API_BASE_URL + '/getClinics')
  }

  

}

export default new MessageService()
