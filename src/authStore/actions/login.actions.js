import { clearAppLocalStorage, setStorageItem } from '../../utils/StorageUtils'
import axios from 'axios'
import Constants from '../../utils/Constants'
import history from '../../@history'
import reducer from '../reducers/index'
import withReducer from '../../store/withReducer'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const LOGIN_SET_USER = 'LOGIN_SET_USER'

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

const USER_LOGIN_URL = Constants.API_BASE_URL + '/userlogin'
// const USER_LOG_OUT = Constants.API_BASE_URL + '/userLogout/'
export function submitLogin(data) {
  const request = axios.post(USER_LOGIN_URL, data)

  return (dispatch, getState) => {
    request
      .then((res) => {
        console.log('response', res.data)
        Constants.LOGGED_IN_USER = res.data
        if (res.status === 200) {
          // console.log("login responce data :", res.data);
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          })
          let userRole = res.data.userRole
          let userId = res.data.id
          // console.log('userRole', userRole, userId)
          setStorageItem('user', res.data)
          switch (userRole) {
            case 'admin':
              {
                history.push({
                  pathname: '/admin/dashboard',
                })
              }
              break
            case 'doctor':
              {
                history.push({
                  pathname: '/doctor/dashboard',
                })
              }
              break
            case 'nurse':
              {
                history.push({
                  pathname: '/nurse/dashboard',
                })
              }
              break
            case 'headnurse':
              {
                history.push({
                  pathname: '/headnurse/dashboard',
                })
              }
              break
            case 'labtech':
              {
                history.push({
                  pathname: '/labtech/dashboard',
                })
              }
              break
            case 'patient':
              {
                history.push({
                  pathname: '/patient/dashboard',
                })
              }
              break
            default: {
              history.push({
                pathname: '/login',
              })
            }
          }
        }
      })
      .catch((e) => {
        console.log(e)        
        toast.error('Invalid User name or Password', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        history.push({
          pathname: Constants.PAGES.login,
        })
      })
  }
}

export function setLoginUser(user) {
  return (dispatch, getState) => {
    dispatch({
      type: LOGIN_SET_USER,
      payload: user,
    })
  }
}

export function userLogOut(userId) {
  console.log("in user logout action",userId)
  const request = axios.get(Constants.API_BASE_URL + '/userLogout/'+userId)
  return (dispatch, getState) => {
    request.then((response) => {
      clearAppLocalStorage();
      history.push({
      pathname: '/login',
      })

    }).catch((error) => {
      console.log("error in log out")
    })
  
  };
}



