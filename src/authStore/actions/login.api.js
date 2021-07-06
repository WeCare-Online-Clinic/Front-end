import {DEFAULT_PASSWORD_CHANGE} from "../../../utils/MessageUtil";

let loginAppEndpoints = {
    login: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: true
        },
        url: '/api/auth/login',
        type: 'POST'
    },

    changeAdminUserPassword: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_PASSWORD_CHANGE
        },
        url: '/api/adminUser/changeAdminUserPassword',
        type: 'POST'
    },

    expireUseCache: {
        headerParam: {
            showLoading: false,
            showToast: false,
            skipAuth: false,
        },
        url: '/api/security/expire-user-cache',
        type: 'POST'
    },

};

export default loginAppEndpoints;
