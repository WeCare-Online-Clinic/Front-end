import {
    ON_GET_TEST

} from "../action/AddLabTestAction.js";

const initialState = {


    testList: [],
};

const AddLabTestReducer = function (state = initialState, action) {

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

export default AddLabTestReducer;
