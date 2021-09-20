import {
    ON_GET_REPORT,
    ON_SAVE_REPORT,  
    ON_GET_TESTS,
    ON_GET_REPORT_PROFILE_BY_ID,
    ON_GET_REPORT_PROFILE_BY_PATIENT,
    ON_GET_REPORT_PROFILE_BY_TEST,
    ON_GET_REPORT_BY_PATIENT_NAME,
    ON_GET_REPORT_BY_PATIENT_NIC,
    ON_GET_REPORT_BY_TEST_TYPE

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
        
    
        case ON_GET_REPORT_BY_PATIENT_NAME:{
            return{
                ...state,
               reportList:[...action.payload]
            }
        }
        case ON_GET_REPORT_BY_PATIENT_NIC:{
            return{
                ...state,
               reportList:[...action.payload]
            }
        }
        case  ON_GET_REPORT_BY_TEST_TYPE:{
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
