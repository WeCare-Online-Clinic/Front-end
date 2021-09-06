import ViewPatientService from "./ViewPatientService";
import history from '../../../../../../../@history'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const ON_GET_PATIENT_PROFILE_BY_ID = '[ON_GET_PATIENT_PROFILE_BY_ID] ON_GET_PATIENT';


export function getPatientProfileDetailsById(id) {
    const request = ViewPatientService.getPatientProfileDetailsById(id);
    return (dispatch, getState) => {
        request.then((response) => {
            if (response.data.length == 0) {
                alert('Sorry,  Id Name found');
            }
            else {
                dispatch({
                    type: ON_GET_PATIENT_PROFILE_BY_ID,
                    payload: response.data
                })
            }

        }).catch((error) => {
            console.log("error patient details",)
        })
    };
}

