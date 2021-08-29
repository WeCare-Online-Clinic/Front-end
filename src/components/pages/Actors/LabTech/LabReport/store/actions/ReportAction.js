import ReportService from "./ReportService";
import history from '../../../../../../../@history'

export const ON_GET_REPORT='[ON_GET_REPORT] ON_GET_REPORT';
export const ON_SAVE_REPORT = '[ON_SAVE_REPORT] ON_SAVE_REPORT';
export const ON_GET_CLINIC_DAYS = '[ON_GET_CLINICS] ON_GET_CLINIC_DAYS';
export const ON_GET_CLINICS='[ON_GET_CLINICS] ON_GET_CLINIC';
export const ON_GET_REPORT_PROFILE_BY_ID = '[ON_GET_REPORT_PROFILE_BY_ID] ON_GET_REPORT';
export const ON_GET_REPORT_PROFILE_BY_NAME = '[ON_GET_REPORT_PROFILE_BY_NAME] ON_GET_REPORT';
export const ON_GET_REPORT_PROFILE_BY_CLINIC = '[ON_GET_REPORT_PROFILE_BY_CLINIC] ON_GET_REPORT';


export function saveReport(report) {
    const request = ReportService.saveReport(report);
    return (dispatch, getState) => {
        return request.then((response) => {

            alert("Successfully Registered"); 
            history.push('viewreport');     
            dispatch({
                type: ON_SAVE_REPORT,
                payload: response.data
            })            
        }).catch((error)=>{          
            alert("Register failed, please try again"); 
        });

    };
}

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


export function getClinicDays(data) {
  console.log("data clinic",data);
  const request = ReportService.getClinicDays(data)

  return (dispatch, getState) => {
      return request.then((response) => {
          // console.log("days",response.data);
          return dispatch({
              type: ON_GET_CLINIC_DAYS,
              payload: response.data
          });
      }
      );
  };
}

export function getClinics() {
  const request = ReportService.getClinics()

  return (dispatch, getState) => {
    return request.then((response) => {
      console.log('clinics', response.data)
      return dispatch({
        type: ON_GET_CLINICS,
        payload: response.data,
      })
    })
  }
}


export function getReportProfileDetailsById(id) {
    const request = ReportService.getReportProfileDetailsById(id);
    return (dispatch, getState) => {
      request.then((response) => {
        if (response.data.length == 0) {
          alert('Sorry,  Id not found');
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
          alert('Sorry,  Name not found');
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

export function getReportProfileDetailsByClinic(clinicId) {
    const request = ReportService.getReportProfileDetailsByClinic(clinicId);
    return (dispatch, getState) => {
      request.then((response) => {
        if (response.data.length == 0) {
          alert('Sorry,  No reports in the clinic');
        }
        else{
          dispatch({
            type: ON_GET_REPORT_PROFILE_BY_CLINIC,
            payload: response.data
          })
        } 
      }).catch((error) => {
        console.log("error report details",)
      })
    };
}