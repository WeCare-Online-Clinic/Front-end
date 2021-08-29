import {
    ON_GET_REPORT,
    ON_SAVE_REPORT,
    ON_GET_CLINIC_DAYS,
    ON_GET_CLINICS,
    ON_GET_REPORT_PROFILE_BY_ID,
    ON_GET_REPORT_PROFILE_BY_NAME,
    ON_GET_REPORT_PROFILE_BY_CLINIC

} from "../actions/ReportAction";

const initialState = {

    clinicDays: [],
    reportList: [],
    clinics: [],
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
        case ON_GET_CLINICS: {
            return {
                ...state,
                clinics: [...action.payload],
            }
        }

        case ON_GET_REPORT_PROFILE_BY_ID: {              
            return {
                ...state,
                reportList: [...action.payload]
            }
      
        } 
        case ON_GET_REPORT_PROFILE_BY_NAME:{
            return{
                ...state,
                reportList:[...action.payload]
            }
        }

        case ON_GET_REPORT_PROFILE_BY_CLINIC:{
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
