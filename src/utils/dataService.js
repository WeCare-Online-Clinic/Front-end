import axios from "axios/index";
import {hideLoading, showLoading} from '../utils/LoaderHelper';
import {showErrorMessage, showSuccessMessage} from "../utils/ToastUtil";
import history from '../@history';
import Constants from "../utils/Constants";
// import loginAppEndpoints from "./auth/store/actions/login.api";

class dataService {

  client;

  init = () => {
    this.client = axios.create({
      baseURL: '/',
      responseType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
      }
    });

    let client = this.client;

    this.client.interceptors.request.use(function (config) {

      if (config.headers.showLoading) {
        showLoading();
      }

      config.headers.Authorization = "Bearer " + accessToken;

      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    this.client.interceptors.response.use(function (response) {
      if (response.config.headers.showLoading) {
        hideLoading();
      }

      if (response.data && response.data.status === 'FAILED') {
        let errors = response.data.appsErrorMessages;
        if (errors) {
          showErrorMessage(errors[0].errorMessage);
        }
        throw errors;
      }

      if (response.config.headers.message) {
        showSuccessMessage(response.config.headers.message);
      }

      return response;
    }, function (error) {
      hideLoading();

      const {config, response: {status}} = error;

      if (status === 403 || status === 401 || status === 405) {
        if (config.url && config.url.indexOf(loginAppEndpoints.login.url) !== -1) {
          showErrorMessage('Invalid credentials');
        }
      } else {
        if (status === 500 || status === 504) {
          showErrorMessage('Please contact system administrator');
        } else if (error && error.config.headers.showToast && error.message) {
          showErrorMessage(error.message);
        }
        return Promise.reject(error);
      }
    });
  };

  get = (config, data) => {
    return this.request(config.url, 'GET', data, config.headerParam);
  };

  post = (config, data) => {
    return this.request(config.url, 'POST', data, config.headerParam);
  };

  request = (url, method, data, headerParams) => {
    let config = {
      url: url,
      method: method,
      withCredentials: true,
      timeout: 0,
      headers: {}
    };

    if (headerParams.isFileUpload) {
      config.data = data;
    } else if (headerParams.isFileDownload) {
      config.responseType = 'blob';
    } else {
      if (data) {
        if (method === 'PUT'
          || method === 'POST'
          || method === 'DELETE'
          || method === 'PATCH'
        ) {
          config.data = JSON.stringify(data);
        }
      }
    }

    config.headers.showLoading = headerParams.showLoading;
    config.headers.message = headerParams.message;
    config.headers.showToast = headerParams.showToast;

    return this.client.request(config);
  };
}

const instance = new dataService();

export default instance;
