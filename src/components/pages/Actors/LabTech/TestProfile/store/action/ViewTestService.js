import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class ViewTestService {
  getTestProfileDetailsById(id) {
    return axios.get(Constants.API_BASE_URL + '/getTestProfile/' + id)
  }
  

}

export default new ViewTestService()
