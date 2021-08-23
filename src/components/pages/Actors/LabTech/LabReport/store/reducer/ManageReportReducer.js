import {
    ON_GET_REPORT,
    ON_GET_REPORT_PROFILE_BY_ID,
    ON_GET_REPORT_PROFILE_BY_NAME

} from "../actions/ReportAction";

const initialState = {

    reportList: [],

};

const ManageReportReducer = function (state = initialState, action) {

    switch (action.type) {

        case ON_GET_REPORT: {
            return {
                ...state,
                reportList: [...action.payload]
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

        default: {
            return state;
        }
    }

};

export default ManageReportReducer;
