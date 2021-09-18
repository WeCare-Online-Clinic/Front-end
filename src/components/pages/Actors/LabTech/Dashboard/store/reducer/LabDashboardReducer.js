import {
    ON_GET_LAB_DATA_CARD_DETAILS,
    ON_GET_MONTHLY_ISSUED_REPORTS,
    ON_GET_REPORT_TYPES_COUNT

} from "../action/LabDashboardAction";
const initialState = {
    dataCardDetails: [],
    monthlyIssuedReports:[],
    reportTypesCount:[]

};
const LabDashboardReducer = function (state = initialState, action) {

    switch (action.type) {
        case ON_GET_LAB_DATA_CARD_DETAILS: {
            return {
                ...state,
                dataCardDetails: [...action.payload]
            }

        }
        case ON_GET_MONTHLY_ISSUED_REPORTS: {
            return {
                ...state,
                monthlyIssuedReports: [...action.payload]
            }

        }
        case ON_GET_REPORT_TYPES_COUNT: {
            return {
                ...state,
                reportTypesCount: [...action.payload]
            }

        }

        default: {

            return state;
        }
    }


};

export default LabDashboardReducer;
