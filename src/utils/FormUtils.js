import React from "react";
import * as _ from "lodash"

export const getCommonStatusOptions = (includeEmpty) => {
    let result = [];
    if (includeEmpty) {
        result = [{
            key: null,
            value: ''
        }];
    }

    result = [...result, {
        key: 'ACT',
        value: 'Active'
    },
        {
            key: 'INA',
            value: 'Inactive'
        }];

    return result;
};

export const getCommonTitleOptions = (includeEmpty) => {
    let result = [];
    if (includeEmpty) {
        result = [{
            key: null,
            value: ''
        }];
    }

    result = [...result,
        {
            key: 'DR',
            value: 'Dr'
        },
        {
            key: 'MR',
            value: 'Mr'
        },
        {
            key: 'MS',
            value: 'Ms'
        },
        {
            key: 'MRS',
            value: 'Mrs'
        }

    ];

    return result;
};

export const getCommonAmountSpecifyAsOptions = (includeEmpty) => {
    let result = [];
    if (includeEmpty) {
        result = [{
            key: null,
            value: ''
        }];
    }

    result = [...result, {
        key: 'PERCENTAGE',
        value: 'Percentage'
    },
        {
            key: 'VALUE',
            value: 'value'
        }];

    return result;
};

export const getCommonGenderOptions = (includeEmpty) => {
    let result = [];
    if (includeEmpty) {
        result = [{
            key: null,
            value: ''
        }];
    }

    result = [...result, {
        key: 'M',
        value: 'Male'
    },
        {
            key: 'F',
            value: 'Female'
        }];
    return result;
};

export const getOptionsListByObject = (dataObject, includeEmpty) => {

    let optionArray = [];
    let result = [];
    if (includeEmpty) {
        optionArray.push(<option key="" value=""></option>);
    }
    let keys = Object.keys(dataObject);

    keys.map((item) => {

        optionArray.push(<option key={item} value={item}>{dataObject[item]}</option>)
    });

    return optionArray;
};

export const getOptionsList = (dataList, includeEmpty) => {

    let optionArray = [];
    let result = [];
    if (includeEmpty) {
        optionArray.push(<option key="" value=""></option>);
    }


    dataList.map((item) => {

        optionArray.push(<option key="" value={item}>{item}</option>)
    });

    return optionArray;
};

export const highlightText = (text, query) => {
    let lastIndex = 0;
    const words = query
        .split(/\s+/)
        .filter(word => word.length > 0)
        .map(escapeRegExpChars);
    if (words.length === 0) {
        return [text];
    }
    const regexp = new RegExp(words.join("|"), "gi");
    const tokens = [];
    while (true) {
        const match = regexp.exec(text);
        if (!match) {
            break;
        }
        const length = match[0].length;
        const before = text.slice(lastIndex, regexp.lastIndex - length);
        if (before.length > 0) {
            tokens.push(before);
        }
        lastIndex = regexp.lastIndex;
        tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
    }
    const rest = text.slice(lastIndex);
    if (rest.length > 0) {
        tokens.push(rest);
    }
    return tokens;
};


export const escapeRegExpChars = (text) => {
    return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
};

export const getOptionsListByObjectList = (objectList, key, value, description, includeEmpty) => {

    let optionArray = [];
    let result = [];
    if (includeEmpty) {
        optionArray.push(<option key="" value=""></option>);
    }


    objectList.map((item) => {
        if (description) {
            optionArray.push(<option key={item[key]} value={item[key]}>{item[value]} - {item[description]}</option>);
        } else {

            optionArray.push(<option key={item[key]} value={item[key]}>{item[value]}</option>);
        }
    });

    return optionArray;
};

export const getLocationNameAndCodeFromID = (objectList, locationID) => {
    console.log("in method", objectList, locationID);
    let nameAndCode = "";
    objectList.map((item) => {
        if (item.locationID === locationID) {
            nameAndCode = item.locationName + " - " + item.locationCode;
        }
    });
    return nameAndCode;
};

export const getSupplierNameAndCodeFromID = (objectList, supplierID) => {
    let nameAndCode = "";
    objectList.map((item) => {
        if (item.supplierID === supplierID) {
            nameAndCode = item.supplierCode + " - " + item.supplierName;
            console.log("uusssssssssssssssssss ", nameAndCode)
        }
    });

    return nameAndCode;
};

export const getMultiselectListByList = (objectList, key, value, description) => {

    let optionArray = [];
    if (!_.isEmpty(objectList)) {
        objectList.map((item, i) => {
            if (description) {
                optionArray.push({
                    id: item[key],
                    key: item[key],
                    value: item[value] + " - " + item[description],
                    disabled: false
                },);
            } else {
                optionArray.push({id: item[key], key: item[key], value: item[value], disabled: false},);
            }
        });
    }

    return optionArray;

};
export const getSingleSelectListByList = (objectList, key, value, description, firstEmpty) => {

    let optionArray = [];

    if (firstEmpty) {
        optionArray.push({
            id: null,
            key: '',
            value: '(No Selection)'
        });
    }

    if (!_.isEmpty(objectList)) {
        objectList.map((item, i) => {
            if (description) {
                optionArray.push({
                    id: item[key],
                    key: item[key],
                    value: item[description],
                    disabled: false
                },);
            } else {
                optionArray.push({id: item[key], key: item[key], value: item[value], disabled: false},);
            }
        });
    }

    return optionArray;

};

export const getMultiselectListByObject = (dataObject) => {

    let keys = Object.keys(dataObject);


    let optionArray = [];
    keys.map((item) => {
        optionArray.push({id: item, key: item, value: dataObject[item], disabled: false},);
    });
    return optionArray;
};

export const getPageOptions = () => {
    return [
        {
            key: 5,
            value: '5'
        },

        {
            key: 10,
            value: '10'
        },

        {
            key: 20,
            value: '20'
        },

        {
            key: 50,
            value: '50'
        },

        {
            key: 100,
            value: '100'
        },

        {
            key: 200,
            value: '200'
        },
    ];
};

export const hasValueInObject = (obj, value) => {
    let found = false;
    obj = obj ? obj : {};
    value = (value + '').trim().toLowerCase();

    let keys = _.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let objValue = obj[keys[i]];
        let type = typeof objValue;

        if (type === 'number' || type === 'string') {
            found = (objValue + '').toLowerCase().indexOf(value) !== -1;
            if (found) {
                break;
            }
        }
    }

    return found;
};

export const getConstantValueForSearch = (formValue, defaultValue) => {
    if (_.isUndefined(formValue)) {
        return defaultValue;
    }

    return formValue ? formValue : null;
};


export const getConstantValuesForSearch = (formValue, defaultValue) => {
    if (_.isUndefined(formValue)) {
        return [defaultValue];
    }

    return formValue ? [formValue] : null;
};

export const getInputFieldClassNames = (touched, error) => {
    let classNames = 'form-control';

    if (touched) {
        if (error) {
            classNames += ' is-invalid';
        } else {
            classNames += ' is-valid';
        }
    }

    return classNames;
};

export const isValueIsNumber = (value) => {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(value)
};


export const getStandardContactNumber = (value) => {
    if (isValueIsNumber(value) && value.length === 10) {
        let number = value.substring(1, 10);
        let newNumber = _.padStart(number, 12, '+94');
        return newNumber;
    } else {
        return value;
    }

};

export const getOptionsListByObjectListForCustomSelect = (objectList, value, label, name, key, includedEmpty, isFixed, isDisabled = false) => {   //FIXME

    let optionArray = [];
    if (includedEmpty) {
        optionArray = [{
            key: null,
            value: '',
            label: '',
        }];
    }
    objectList.map((item) => {
        optionArray.push({
            target: {
                value: item[value],
                label: item[label],
                name: name
            },
            value: item[value],
            label: item[label],
            key: item[key],
            isFixed: item[isFixed],
            isDisabled: item[isDisabled],
        });
    });
    return optionArray;
};

export const processMobileNumber = (value) => {

    if (isValueIsNumber(value) && value.length === 10) {
        let number = value.substring(1, 10);
        return _.padStart(number, 12, '+94');
    } else {
        return value
    }
};


export const validateDateInput = (value) => {
    let invalidDateObj = {
        isValid: false,
        errors: {
            checkupDateStr: 'Invalid date'
        }
    };

    let length = value ? value.length : 0;

    let day = '', month = '', year = '';

    if (length !== 8 && length !== 10 && length !== 16) {
        return invalidDateObj;
    }

    if (length === 8) {
        day = parseInt(value.substr(0, 2));
        month = parseInt(value.substr(2, 2));
        year = parseInt(value.substr(4, 4));
    } else {
        day = parseInt(value.substr(0, 2));
        month = parseInt(value.substr(3, 2));
        year = parseInt(value.substr(6, 4));
    }

    let currentDate = new Date();

    if (currentDate.getUTCFullYear() < year) {
        return invalidDateObj;
    }

    if (currentDate.getUTCFullYear() === year) {
        if ((currentDate.getUTCMonth() + 1) < month) {
            return invalidDateObj;
        }
    }

    if (currentDate.getUTCFullYear() === year && (currentDate.getUTCMonth() + 1) === month) {
        if (currentDate.getUTCDate() < day) {
            return invalidDateObj;
        }
    }

    if (_.isNaN(day) || _.isNaN(month) || _.isNaN(year)) {
        return invalidDateObj;
    }

    return {
        isValid: true,
        errors: {}
    };
};

