import axios from 'axios';

const ADMIN_DASHBOARD_BASE_URL = "http://localhost:8080/wecare";

class AdminDashboardService {



  getUserCounts() {
    return axios.get(ADMIN_DASHBOARD_BASE_URL + '/getUserCounts/');
  } 



}

export default new AdminDashboardService()
