import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class ViewPatientService {
  getPatientProfileDetailsById(id) {
    return axios.get(Constants.API_BASE_URL + '/getPatientProfile/' + id)
  }
  

}

export default new ViewPatientService()
