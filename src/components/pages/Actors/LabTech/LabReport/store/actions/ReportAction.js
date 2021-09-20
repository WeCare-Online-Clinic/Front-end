import ReportService from "./ReportService";
import history from '../../../../../../../@history'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const ON_GET_REPORT = '[ON_GET_REPORT] ON_GET_REPORT';
export const ON_SAVE_REPORT = '[ON_SAVE_REPORT] ON_SAVE_REPORT';
export const ON_GET_CLINIC_DAYS = '[ON_GET_CLINICS] ON_GET_CLINIC_DAYS';
export const ON_GET_PATIENTS = '[ON_GET_PATIENTS] ON_GET_PATIENT';
export const ON_GET_TESTS = '[ON_GET_TESTS] ON_GET_TEST';
export const ON_GET_REPORT_PROFILE_BY_ID = '[ON_GET_REPORT_PROFILE_BY_ID] ON_GET_REPORT';
export const ON_GET_REPORT_PROFILE_BY_PATIENT = '[ON_GET_REPORT_PROFILE_BY_PATIENT] ON_GET_REPORT';
export const ON_GET_REPORT_PROFILE_BY_TEST = '[ON_GET_REPORT_PROFILE_BY_TEST] ON_GET_REPORT';
export const ON_GET_REPORT_BY_PATIENT_NAME='[ON_GET_REPORT_BY_PATIENT_NAME] ON_GET_REPORT'
export const ON_GET_REPORT_BY_PATIENT_NIC='[ON_GET_REPORT_BY_PATIENT_NIC] _ON_GET_REPORTS'
export const ON_GET_REPORT_BY_TEST_TYPE='[ON_GET_REPORT_BY_TEST_TYPE] _ON_GET_REPORTS'


export function saveReport(report) {
  const request = ReportService.saveReport(report);
  return (dispatch, getState) => {
    return request.then((response) => {
      toast.success('Successfully Added the Report', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
      history.push('viewlabreport');
      dispatch({
        type: ON_SAVE_REPORT,
        payload: response.data
      })
    }).catch((error) => {
      
    });

  };
}

export function getReport() {
  const request = ReportService.getReport();
  return (dispatch, getState) => {
    request.then((response) => {
      console.log("report list:", response.data)
      dispatch({
        type: ON_GET_REPORT,
        payload: response.data
      })
    }).catch((error) => {
      console.log("error report list",)
    })
  };
}


export function getTests() {
  const request = ReportService.getTests()

  return (dispatch, getState) => {
    return request.then((response) => {
      console.log('tests', response.data)
      return dispatch({
        type: ON_GET_TESTS,
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

export function getReportProfileDetailsByPatient(patientName) {
  console.log("name:", patientName)
  const request = ReportService.getReportProfileDetailsByPatient(patientName);
  return (dispatch, getState) => {
    request.then((response) => {
      if (response.data.length == 0) {
        alert('Sorry,  Name not found');
      }
      else {
        dispatch({
          type: ON_GET_REPORT_PROFILE_BY_PATIENT,
          payload: response.data
        })
      }
    }).catch((error) => {
      console.log("error report details",)
    })
  };
}

export function getReportProfileDetailsByTest(testId) {
  const request = ReportService.getReportProfileDetailsByTest(testId);
  return (dispatch, getState) => {
    request.then((response) => {
      if (response.data.length == 0) {
        alert('Sorry,  No reports in the clinic');
      }
      else {
        dispatch({
          type: ON_GET_REPORT_PROFILE_BY_TEST,
          payload: response.data
        })
      }
    }).catch((error) => {
      console.log("error report details",)
    })
  };
}
export function getPatientReportsByPatientName(patientName) {
  const request = ReportService.getPatientReportsByPatientName(patientName);
  return (dispatch, getState) => {
    request.then((response) => {
      if (response.data.length == 0) {
        toast.error('Patient name not found ', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
      }
      else {
        dispatch({
          type: ON_GET_REPORT_BY_PATIENT_NAME,
          payload: response.data
        })
      }
    }).catch((error) => {
      console.log("error report details",)
    })
  };
}
export function getPatientReportsByPatientNIC(patientNIC) {
  const request = ReportService.getPatientReportsByPatientNIC(patientNIC);
  return (dispatch, getState) => {
    request.then((response) => {
      if (response.data.length == 0) {
        toast.error('Patient patientNIC not found', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
      }
      else {
        dispatch({
          type: ON_GET_REPORT_BY_PATIENT_NIC,
          payload: response.data
        })
      }
    }).catch((error) => {
      console.log("error report details",)
    })
  };
}
export function getPatientReportsByTestType(reportType) {
  const request = ReportService.getPatientReportsByTestType(reportType);
  return (dispatch, getState) => {
    request.then((response) => { 
      console.log('jsdgsjdhsgdj:',response.data)    
      if (response.data.length == 0) {
        toast.error('Test Type not found', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
      }
      else {
        dispatch({
          type: ON_GET_REPORT_BY_TEST_TYPE,
          payload: response.data
        })
      }
    }).catch((error) => {
      console.log("error report details",)
    })
  };
}


