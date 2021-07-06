import * as CryptoJS from 'crypto-js';

const secretKey = 'TfE5#$R6*1!2cL:';

export const encryptNumber = (num) => {
    return encrypt(num + '');
};

export const encrypt = (field) => {
    return CryptoJS.AES.encrypt(field, secretKey).toString();
};

export const decryptNumber = (numberStr) => {

};

export const decrypt = (cypherStr) => {
    let bytes = CryptoJS.AES.decrypt(cypherStr.toString(), secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
};
