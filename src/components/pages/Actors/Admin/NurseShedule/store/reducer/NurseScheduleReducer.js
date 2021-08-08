import {
    ON_GET_NURSE_PROFILE_BY_ID,
    ON_GET_NURSE_SCHEDULE_BY_ID
} from "../action/NurseScheduleAction";
const initialState = {

    nurseProfile: {},
    nurseSchedule: [{}]

};
const NurseScheduleReducer = function (state = initialState, action) {

    switch (action.type) {
    
        case ON_GET_NURSE_PROFILE_BY_ID: {              
            return {
                ...state,
                nurseProfile: {...action.payload}
            }

        }
        case ON_GET_NURSE_SCHEDULE_BY_ID: {
            return {
                ...state,
                nurseSchedule: [...action.payload]

            }
        }

        default: {

            return state;
        }
    }


};

export default NurseScheduleReducer;
