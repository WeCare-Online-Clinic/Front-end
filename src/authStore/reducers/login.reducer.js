import * as Actions from '../actions';

const initialState = {
    success: false,
    user: null,
    error: null
};

const login = function (state = initialState, action) {
    switch (action.type) {
        case Actions.LOGIN_SUCCESS: {
            return {
                ...initialState,
                success: true,
                user: action.payload,
                error: null
            };
        }
        case Actions.LOGIN_ERROR: {
            return {
                success: false,
                user: null,
                error: action.payload
            };
        }

        case Actions.LOGIN_SET_USER : {
            return {
                ...initialState,
                success: true,
                user: action.payload,
                error: null
            };
        }

        case Actions.USER_LOGGED_OUT : {
            return {
                ...initialState,
                success: false,
                user: action.payload,
                error: null
            };
        }

        default: {
            return state
        }
    }
};

export default login;
