import {
    ON_GET_REPORT_PROFILE_BY_ID,  
} from "../action/ViewReportAction";
import * as _ from 'lodash'
const initialState = {

    reportProfile: [{}],
  

};
const ViewReportReducer = function (state = initialState, action) {
    
    switch (action.type) {
    
        case ON_GET_REPORT_PROFILE_BY_ID: {    
            // let localreportProfile = _.cloneDeep(action.payload);  
            return {
                ...state,
                reportProfile: [...action.payload]
            }

        } 
        
        default: {

            return state;
        }
    }


};

export default ViewReportReducer;
