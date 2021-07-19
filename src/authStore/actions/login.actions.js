import { clearAppLocalStorage, setStorageItem } from "../../utils/StorageUtils";
import axios from 'axios';
import Constants from "../../utils/Constants";
import history from '../../@history';
import reducer from '../reducers/index';
import withReducer from "../../store/withReducer";

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_SET_USER = 'LOGIN_SET_USER';

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

const USER_LOGIN_URL = "http://localhost:8080/wecare/userlogin";


export function submitLogin(data) {

    const request = axios.post(USER_LOGIN_URL, data);

    return (dispatch, getState) => {
        request.then(res => {
            console.log("responce", res);
            Constants.LOGGED_IN_USER = res.data;
            setStorageItem('user', res.data);
            if (res.status === 200) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                });
                let userType=res.data.userType;
                console.log("userType",userType);
                switch (userType) {
                    case "admin": {
                        history.push({
                            pathname: '/admin/dashboard'
                        });
                    }
                    break;
                    case "doctor": {
                        history.push({
                            pathname: '/doctor/dashboard'
                        });
                    }
                    break;
                    case "nurse": {                     
                        history.push({
                            pathname: '/nurse/dashboard'
                        });
                    }
                    break;
                    case "headnurse": {
                        history.push({
                            pathname: '/headnurse/dashboard'
                        });
                    }
                    break;
                    case "lab": {
                        history.push({
                            pathname: '/labtech/dashboard'
                        });
                    }
                    break;
                    case "patient": {
                        history.push({
                            pathname: '/patient/dashboard'
                        });
                    }
                    break;
                    default: {
                        history.push({
                            pathname: '/login'
                        });
                    }
                  }
        
                
            }
        }).catch(e => {
            console.log(e);
            console.log("skhf");
            alert('Invalid user name or password');
            history.push({
                pathname: Constants.PAGES.login
            });
        })
    };


}



export function setLoginUser(user) {
    return (dispatch, getState) => {
        dispatch({
            type: LOGIN_SET_USER,
            payload: user
        });
    };
}

export function userLogOut() {
    return (dispatch, getState) => {

        clearAppLocalStorage();
        dispatch({
            type: USER_LOGGED_OUT,
            payload: null
        });

        history.push({
            pathname: '/'
        });
    };
}
