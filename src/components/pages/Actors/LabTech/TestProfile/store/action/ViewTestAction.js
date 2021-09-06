import ViewTestService from "./ViewTestService";
import history from '../../../../../../../@history'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const ON_GET_TEST_PROFILE_BY_ID = '[ON_GET_TEST_PROFILE_BY_ID] ON_GET_TEST';


export function getTestProfileDetailsById(id) {
    const request = ViewTestService.getTestProfileDetailsById(id);
    return (dispatch, getState) => {
        request.then((response) => {
            if (response.data.length == 0) {
                alert('Sorry,  Id Name found');
            }
            else {
                dispatch({
                    type: ON_GET_TEST_PROFILE_BY_ID,
                    payload: response.data
                })
            }

        }).catch((error) => {
            console.log("error test details",)
        })
    };
}

