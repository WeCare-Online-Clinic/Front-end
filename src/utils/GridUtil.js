import Constants from "./Constants";
import React from "react";

export const getCommonStringForGrid = (value) => {
    return value ? value : '-';
};

export const getTitleFromConstantForGrid = (value) => {
    return value ? Constants.TITLE[value] : '-';
};

export const getUserTypeFromConstantForGrid = (value) => {
    return value ? Constants.USER_TYPE[value] : '-';
};

export const getGenderFromConstantForGrid = (value) => {
    return value ? Constants.GENDER[value] : '-';
};

export const getDateOfWeekFromConstantForGrid = (value) => {
    return value ? Constants.DAYS_OF_WEEK[value] : '-';
};

export const getSupplierSubGroupFromConstantForGrid = (value) => {
    return value ? Constants.SUPPLIER_SUB_GROUPS[value] : '-';
};

export const getSupplierTypeFromConstantForGrid = (value) => {
    return value ? Constants.SUPPLIER_TYPE[value] : '-';
};

export const getActInaFromConstantForGrid = (value) => {
    if (!value) {
        return '-';
    }

    return <span className={`${value === Constants.STATUS_CONST.ACT ? 'color-active' : 'color-inactive'}`}>
         {Constants.STATUS[value]}
    </span>
};

export const getPhoneNumberForGrid = (value) => {
    if (!value) {
        return '-';
    }

    return (value + '').replace('+94', '0');
};


export const getLocationTypeFromConstantForGrid = (value) => {
    return value ? Constants.LOCATION_TYPE[value] : '-';
};

export const getFuelTypeFromConstantForGrid = (value) => {
    return value ? Constants.VEHICLE_FUEL_TYPE[value] : '-';
};


export const getTimeFromDateStr = (value) => {
    if (value) {
        let timeString = value.substr(-5);
        let hour24String = timeString.substring(0, 2);
        let tempHours = _.parseInt(hour24String) % 12;
        let hour12String = _.padStart(tempHours.toString(), 2, '0');
        return (hour12String + ':' + timeString.substr(3) + ' ' + (_.parseInt(hour24String) < 12 ? 'am' : 'pm'));
    } else {
        return '-';
    }

};

export const getDateFromDateStr = (value) => {
    if (value) {
        let date = value.substr(0, 10);
        return date;
    } else {
        return '-';
    }

};