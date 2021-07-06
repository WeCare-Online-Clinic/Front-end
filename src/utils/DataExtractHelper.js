import * as _ from 'lodash';
import Constants from "./Constants";

export const getPagedData = (data) => {
    return {
        currentPageNo: data.currentPageNo,
        noOfRecords: data.noOfRecords,
        pageLength: data.pageLength,
        startPosition: data.startPosition,
        totalNoOfPages: data.totalNoOfPages,
        totalNoOfRecords: data.totalNoOfRecords,
    }
};

export const getPagedDataFromState = (data) => {
    return {
        page: data.page,
        rows: data.rows
    }
};

export const trimData = (formValues) => {
    _.keys(formValues).forEach(key => {
        if (_.isString(formValues[key])) {
            formValues[key] = formValues[key].trim();
        }
    });

    return formValues;
};

export const getUserEligibleByCompany = (dataArray, fieldName) => {
    let eligibleCompanyIDs = Constants.LOGGED_IN_USER.companies;
    return dataArray.filter((item) => {
        return _.indexOf(eligibleCompanyIDs, item[fieldName]) != -1;
    });
};

export const replaceNullsForFormik = (data) => {
    _.keys(data).forEach((key) => {

        if (!data[key] && typeof data[key] == 'object') {
            data[key] = '';
        }
    });

    return data;
};
