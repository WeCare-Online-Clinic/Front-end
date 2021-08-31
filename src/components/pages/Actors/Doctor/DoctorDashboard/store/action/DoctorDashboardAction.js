import DoctorDashboardService from "./DoctorDashboardService";
import history from '../../../../../../../@history'

export const ON_GET_DATA_CARD_DETAILS = 'ON_GET_DATA_CARD_DETAILS';


export function getDataCardDetails(docotorId) {
    console.log("data card doctor id",docotorId)
    const request = DoctorDashboardService.getDataCardDetails(docotorId);  
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("data card response",response.data)
            dispatch({
                type: ON_GET_DATA_CARD_DETAILS,
                payload: response.data
            })


        }).catch((error) => {
            console.log("data card respoce")
        })
    };
}








