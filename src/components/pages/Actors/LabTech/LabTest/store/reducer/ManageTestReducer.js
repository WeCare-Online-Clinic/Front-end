import {
    ON_GET_TEST

} from "../actions/TestAction";

const initialState = {


    testList: [],
};

const ManageTestReducer = function (state = initialState, action) {

    switch (action.type) {

        case ON_GET_TEST: {
            return {
                ...state,
                testList: [...action.payload]
            }
        }
        

        default: {
            return state;
        }
    }

};

export default ManageTestReducer;
