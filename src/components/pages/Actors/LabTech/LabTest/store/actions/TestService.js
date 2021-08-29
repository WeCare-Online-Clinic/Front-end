import axios from 'axios'
import Constants from '../../../../../../../utils/Constants'

class TestService { 
  

  getTest() {
    return axios.get(Constants.API_BASE_URL + '/getTest')
  }





}

export default new TestService()
