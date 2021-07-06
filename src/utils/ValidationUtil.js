import * as _ from 'lodash';
import validator from 'validator';
import {isValidPhoneNumber} from 'react-phone-number-input';

/*
* formValues
*
* validationObj {
*   form_field_name : {
*       'label' : ''
*       'type' : {value : 'number', message : 'Not a number'}
*       'max' : {value : 10, message : 'max value is 10'},
*       'min' : {},
*       'maxLength' : {},
*       'required' : {message : 'required'}
*   }
* }
* **/

const excludingItems = ['label'];

export default function customValidator(formValues, validationObj) {
    let result = {
        isValid: true,
        errors: {}
    };

    let fields = _.keys(validationObj);
    if (fields) {
        for (let i = 0; i < fields.length; i++) {
            let field = fields[i];
            let fieldValidations = validationObj[field];
            let fieldValue = formValues[field];

            let validationItems = _.keys(fieldValidations);

            for (let j = 0; j < validationItems.length; j++) {
                let item = validationItems[j];
                if (excludingItems.indexOf(item) === -1) {
                    let validatorFunction = item + 'ValidatorNotebook';
                    let fieldValidation = execute({
                        validatorFunction,
                        fieldValue,
                        item: fieldValidations[item],
                        label: fieldValidations.label
                    });
                    if (!fieldValidation.isValid) {
                        result.isValid = false;
                        result.errors[field] = fieldValidation.errorMessage;
                        break;
                    }
                }
            }
        }
    }

    return result;
};


function execute(obj) {
    let {validatorFunction, fieldValue, item, label} = obj;
    switch (validatorFunction) {
        case 'typeValidatorNotebook' :
            return typeValidatorNotebook(fieldValue, item, label);

        case 'requiredValidatorNotebook' :
            return requiredValidatorNotebook(fieldValue, item, label);

        case 'maxLengthValidatorNotebook' :
            return maxLengthValidatorNotebook(fieldValue, item, label);

        case 'emailValidatorNotebook' :
            return emailValidatorNotebook(fieldValue, item, label);

        case 'phoneValidatorNotebook' :
            return phoneValidatorNotebook(fieldValue, item, label);

        case 'urlValidatorNotebook' :
            return urlValidatorNotebook(fieldValue, item, label);

        case 'nicLKValidatorNotebook' :
            return nicLKValidatorNotebook(fieldValue, item, label);

        case 'defaultDateValidatorNotebook' :
            return defaultDateValidatorNotebook(fieldValue, item, label);

        case 'defaultDateTimeValidatorNotebook' :
            return defaultDateTimeValidatorNotebook(fieldValue, item, label);

        case 'hh24mmValidatorNotebook' :
            return hh24mmTimeValidatorNotebook(fieldValue, item, label);

        case 'numberValidatorNotebook' :
            return numberValidatorNotebook(fieldValue, item, label);

        case 'decimalValidatorNotebook' :
            return decimalValidatorNotebook(fieldValue, item, label);

        case 'maxValidatorNotebook':
            return maxValidatorNotebook(fieldValue, item, label);

        case 'minValidatorNotebook':
            return minValidatorNotebook(fieldValue, item, label);

        case 'uppercaseValidatorNotebook':
            return uppercaseValidatorNotebook(fieldValue, item, label);

    }
}

function typeValidatorNotebook(value, validationItem) {
    let type = validationItem.value;
    let isValid = true;
    let errorMessage = validationItem.message ? validationItem.message : `Not a ${type}`;

    switch (type) {
        case 'string' :
            isValid = typeof value === 'string';
            break;

        case 'number' :
            isValid = _.isNumber(value);
            break;
    }

    return {
        isValid,
        errorMessage
    };
}

function requiredValidatorNotebook(value, validationItem, label) {

    let isValid = !_.isEmpty((value + '').trim());
    label = label ? label + ' is' : '';
    let errorMessage = validationItem.message ? validationItem.message : (label ? `${label} Required` : 'Required');
    return {
        isValid,
        errorMessage
    };
}

function maxLengthValidatorNotebook(value, validationItem, label) {
    value = value + '';
    let isValid = value ? value.length <= validationItem.value : true;
    let errorMessage = validationItem.message ? validationItem.message : `Max length is ${validationItem.value}`;
    return {
        isValid,
        errorMessage
    };
}

function emailValidatorNotebook(value, validationItem, label) {
    let isValid = true;
    let errorMessage = '';

    if (value) {
        isValid = validator.isEmail(value);
        errorMessage = validationItem.message ? validationItem.message : `Not a valid email`;
    }

    return {
        isValid,
        errorMessage
    };
}

function phoneValidatorNotebook(value, validationItem, label) {
    let isValid = true;
    let errorMessage = '';

    if (value) {
        isValid = isValidPhoneNumber(value);
        errorMessage = validationItem.message ? validationItem.message : `Not a valid number`;
    }

    return {
        isValid,
        errorMessage
    };
}

function urlValidatorNotebook(value, validationItem, label) {
    let isValid = true;
    let errorMessage = '';

    if (value) {
        isValid = validator.isURL(value);
        errorMessage = validationItem.message ? validationItem.message : `Not a URL`;
    }

    return {
        isValid,
        errorMessage
    };
}

function nicLKValidatorNotebook(value, validationItem, label) {
    let isValid = true;
    let errorMessage = '';

    if (value) {
        isValid = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/.test(value);
        errorMessage = validationItem.message ? validationItem.message : `Invalid NIC`;
    }

    return {
        isValid,
        errorMessage
    };
}


function defaultDateValidatorNotebook(value, validationItem, label) {
    let isValid = true;
    let errorMessage = '';

    if (value) {
        isValid = /((0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/[12]\d{3})/.test(value);
        errorMessage = validationItem.message ? validationItem.message : `Invalid Date`;
    }

    return {
        isValid,
        errorMessage
    };
}

function defaultDateTimeValidatorNotebook(value, validationItem, label) {
    let isValid = true;
    let errorMessage = '';

    if (value) {
        isValid = /((0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/[12]\d{3}) (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])/.test(value);
        errorMessage = validationItem.message ? validationItem.message : `Invalid Date Time`;
    }

    return {
        isValid,
        errorMessage
    };
}

function hh24mmTimeValidatorNotebook(value, validationItem, label) {
    let isValid = true;
    let errorMessage = '';

    if (value) {
        isValid = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(value);
        errorMessage = validationItem.message ? validationItem.message : `Invalid Time`;
    }

    return {
        isValid,
        errorMessage
    };
}

function numberValidatorNotebook(value, validationItem, label) {
    let isValid = true;
    let errorMessage = '';

    if (value) {
        isValid = _.isNumber(value);
        errorMessage = validationItem.message ? validationItem.message : `Not a Number`;
    }

    return {
        isValid,
        errorMessage
    };
}

function decimalValidatorNotebook(value, validationItem, label) {
    let isValid = true;
    let errorMessage = '';

    if (value) {
        let maxDecimalPlaces = validationItem.value;
        let decimals = (value + '').split('.')[1];
        if (decimals && decimals.length > maxDecimalPlaces) {
            isValid = false;
            errorMessage = validationItem.message ? validationItem.message : `Can have only ${maxDecimalPlaces} decimals`;
        }

    }

    return {
        isValid,
        errorMessage
    };
}

function maxValidatorNotebook(value, validationItem, label) {
    let isValid = value ? value <= validationItem.value : true;
    let errorMessage = validationItem.message ? validationItem.message : `Max Value is ${validationItem.value}`;
    return {
        isValid,
        errorMessage
    }
}

function minValidatorNotebook(value, validationItem, label) {
    let isValid = value ? value >= validationItem.value : true;
    let errorMessage = validationItem.message ? validationItem.message : `Min Value is ${validationItem.value}`;
    return {
        isValid,
        errorMessage
    }
}

function uppercaseValidatorNotebook(value, validationItem, label) {
    let isValid = true;
    let errorMessage = '';

    if (value) {
        isValid = /^(.[A-Z0-9!@#$%^&*]*)$/.test(value);
        errorMessage = validationItem.message ? validationItem.message : `Invalid entry`;
    }

    return {
        isValid,
        errorMessage
    };

}



