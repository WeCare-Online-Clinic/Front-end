import {
    ON_GET_REPORT,
    ON_SAVE_REPORT,
    ON_GET_CLINIC_DAYS,
    ON_GET_PATIENTS,
    ON_GET_TESTS,
    ON_GET_REPORT_PROFILE_BY_ID,
    ON_GET_REPORT_PROFILE_BY_PATIENT,
    ON_GET_REPORT_PROFILE_BY_TEST

} from "../actions/ReportAction";

const initialState = {

    patients: [],
    reportList: [],
    tests: [],
};

const ManageReportReducer = function (state = initialState, action) {

    switch (action.type) {

        case ON_GET_REPORT: {
            return {
                ...state,
                reportList: [...action.payload]
            }
        }
        case  ON_SAVE_REPORT: {
            return {
              ...state,
              report: [...action.payload],
            }
          }
      
          case ON_GET_CLINIC_DAYS: {
            return {
                ...state,
                clinicDays: [...action.payload]

            }
        }
        case ON_GET_PATIENTS: {
            return {
                ...state,
                patients: [...action.payload],
            }
        }

        case ON_GET_TESTS: {
            return {
                ...state,
                tests: [...action.payload],
            }
        }

        case ON_GET_REPORT_PROFILE_BY_ID: {              
            return {
                ...state,
                reportList: [...action.payload]
            }
      
        } 
        case ON_GET_REPORT_PROFILE_BY_PATIENT:{
            return{
                ...state,
                reportList:[...action.payload]
            }
        }

        case ON_GET_REPORT_PROFILE_BY_TEST:{
            return{
                ...state,
               reportList:[...action.payload]
            }
        }


        default: {
            return state;
        }
    }

};

export default ManageReportReducer;
