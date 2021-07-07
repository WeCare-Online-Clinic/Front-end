import { clearAppLocalStorage, setStorageItem } from "../../utils/StorageUtils";
import axios from 'axios';
import Constants from "../../utils/Constants";
import history from '../../@history';

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
            if (res.status === 200) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                });
                history.push({
                    pathname: '/help'
                });
                Constants.LOGGED_IN_USER = res.data;
                setStorageItem('user', res.data);
            }
        }).catch(e => {
            console.log(e);
            console.log("skhf");
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
