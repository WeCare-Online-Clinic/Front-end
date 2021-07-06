import CryptoJS from "crypto-js";
import JSEncrypt from "jsencrypt";
import Constants from "./Constants";

export function generatePassword(length = 8) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

export function getEncryptedPassword(password) {
    password = CryptoJS.SHA1(password);
    password = CryptoJS.enc.Base64.stringify(password);

    let crypt = new JSEncrypt();
    crypt.setPublicKey(Constants.PUBLIC_KEY);
    password = crypt.encrypt(password);
    return password;
}

export function getResetPassword(password) {
    password = CryptoJS.SHA1(password);
    return CryptoJS.enc.Base64.stringify(password);
}
