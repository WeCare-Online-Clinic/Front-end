import TestService from "./TestService";
import history from '../../../../../../../@history'

export const ON_GET_TEST='[ON_GET_TEST] ON_GET_TEST';



export function getTest() {
    const request =TestService.getTest();
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("test list:",response.data)
            dispatch({
                type: ON_GET_TEST,
                payload: response.data
            })
        }).catch((error)=>{
            console.log("error test list",)
        })
    };
}

