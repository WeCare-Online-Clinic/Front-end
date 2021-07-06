import Constants from "./Constants";
import * as _ from 'lodash';

export function hasUserPrivilege(privilege) {
    if (!privilege) {
        return true;
    }

    if (!Constants.LOGGED_IN_USER) {
        return false;
    }

    return _.indexOf(Constants.LOGGED_IN_USER.privileges, privilege.trim()) !== -1;
}

export function hasAnyUserPrivilege(privileges) {
    if (!privileges || privileges.length === 0) {
        return true;
    }

    if (!Constants.LOGGED_IN_USER) {
        return false;
    }

    let hasAny = false;
    for (let i = 0; i < privileges.length; i++) {
        hasAny = hasUserPrivilege(privileges[i]);
        if (hasAny) {
            break;
        }
    }

    return hasAny;
}
