import LabDashboardService from "./LabDashboardService";
import history from '../../../../../../../@history'

export const ON_GET_LAB_DATA_CARD_DETAILS = 'ON_GET_LAB_DATA_CARD_DETAILS';
export const ON_GET_MONTHLY_ISSUED_REPORTS="ON_GET_MONTHLY_ISSUED_REPORTS";
export const ON_GET_REPORT_TYPES_COUNT="ON_GET_REPORT_TYPES_COUNT";


export function getDataCardDetails() {
    const request = LabDashboardService.getDataCardDetails();
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("data card response", response.data)
            dispatch({
                type: ON_GET_LAB_DATA_CARD_DETAILS,
                payload: response.data
            })


        }).catch((error) => {
            console.log("data card respoce")
        })
    };
}
export function getMonthlyIssuedReports() {
    const request = LabDashboardService.getMonthlyIssuedReports();
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("monthly issued response", response.data)
            dispatch({
                type: ON_GET_MONTHLY_ISSUED_REPORTS,
                payload: response.data
            })


        }).catch((error) => {
            console.log("monthly issued response error")
        })
    };
}
export function getIssuedReportTypes() {
    const request = LabDashboardService.getIssuedReportTypes();
    return (dispatch, getState) => {
        request.then((response) => {
            console.log(" issued report types response", response.data)
            dispatch({
                type: ON_GET_REPORT_TYPES_COUNT,
                payload: response.data
            })


        }).catch((error) => {
            console.log("issued report types response error")
        })
    };
}





    

