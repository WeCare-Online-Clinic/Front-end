import {
    ON_GET_REPORT_BY_ID,
} from "../action/ViewReportAction";


const initialState = {

    reportProfile: {}


};
const ViewReportReducer = function (state = initialState, action) {
    switch (action.type) {
        case ON_GET_REPORT_BY_ID: {
            return {
                ...state,
                reportProfile: { ...action.payload }
            }

        }

        default: {

            return state;
        }
    }


};

export default ViewReportReducer;
