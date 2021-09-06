import {
    ON_GET_TEST_PROFILE_BY_ID,  
} from "../action/ViewTestAction";
import * as _ from 'lodash'
const initialState = {

    testProfile: [{}],
  

};
const ViewTestReducer = function (state = initialState, action) {
    
    switch (action.type) {
    
        case ON_GET_TEST_PROFILE_BY_ID: {    
            // let localtestProfile = _.cloneDeep(action.payload);  
            return {
                ...state,
                testProfile: [...action.payload]
            }

        } 
        
        default: {

            return state;
        }
    }


};

export default ViewTestReducer;
