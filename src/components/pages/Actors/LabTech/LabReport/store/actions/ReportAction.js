
import ReportService from "./ReportService";
import history from '../../../../../../../@history'

export const ON_GET_REPORT='[ON_GET_REPORT] ON_GET_REPORT';
export const ON_GET_REPORT_PROFILE_BY_ID = '[ON_GET_REPORT_PROFILE_BY_ID] ON_GET_REPORT';
export const ON_GET_REPORT_PROFILE_BY_NAME = '[ON_GET_REPORT_PROFILE_BY_NAME] ON_GET_REPORT';



export function getReport() {
    const request =ReportService.getReport();
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("report list:",response.data)
            dispatch({
                type: ON_GET_REPORT,
                payload: response.data
            })
        }).catch((error)=>{
            console.log("error report list",)
        })
    };
}

export function getReportProfileDetailsById(id) {
    const request = ReportService.getReportProfileDetailsById(id);
    return (dispatch, getState) => {
      request.then((response) => {
        if (response.data.length == 0) {
          alert('Sorry, Id not found');
        }
        else {
          dispatch({
  
            type: ON_GET_REPORT_PROFILE_BY_ID,
            payload: response.data
          })
  
        }
    
      }).catch((error) => {
        console.log("error report id",)
      })
    };
}
  
export function getReportProfileDetailsByName(name) {
    console.log("name:", name)
    const request = ReportService.getReportProfileDetailsByName(name);
    return (dispatch, getState) => {
      request.then((response) => {
        if (response.data.length == 0) {
          alert('Sorry,Name not found');
        }
        else {
          dispatch({
            type: ON_GET_REPORT_PROFILE_BY_NAME,
            payload: response.data
          })
        }
  
  
      }).catch((error) => {
        console.log("error report details",)
      })
    };
}
