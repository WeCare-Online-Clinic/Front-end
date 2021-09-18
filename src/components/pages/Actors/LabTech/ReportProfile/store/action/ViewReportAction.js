import ViewReportService from "./ViewReportService";
import history from '../../../../../../../@history'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const ON_GET_REPORT_BY_ID = '[ON_GET_REPORT_BY_ID] ON_GET_REPORT';


export function getReportProfileDetailsById(id) {
    const request = ViewReportService.getReportProfileDetailsById(id);
    return (dispatch, getState) => {
        request.then((response) => {         
            dispatch({
                type: ON_GET_REPORT_BY_ID,
                payload: response.data
            })


        }).catch((error) => {
            console.log("error report details",)
        })
    };
}

