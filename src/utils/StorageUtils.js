import {decrypt, encrypt} from "./EncryptionHelper";
import * as _ from 'lodash';
import Constants from "./Constants";

export const getStorageItem = (key, isObject) => {
    let row = localStorage.getItem(key);
    let item = null;
    if (row) {
        item = decrypt(row);
    }

    if (!item) {
        return null;
    }

    if (isObject) {
        return JSON.parse(item);
    }

    return item;
};

export const removeStorageItem = (key) => {
    localStorage.removeItem(key);
};

export const setStorageItem = (key, data) => {
    let isObject = _.isObject(data);
    if (isObject) {
        localStorage.setItem(key, encrypt(JSON.stringify(data)));
    } else {
        if (_.isNumber(data)) {
            data = data + '';
        }
        localStorage.setItem(key, encrypt(data));
    }
};

export const clearAppLocalStorage = () => {
    _.each(_.keys(Constants.STORAGE), (key) => {
        removeStorageItem(key);
    });
};

