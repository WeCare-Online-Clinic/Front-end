import AddLabTestService from "./AddLabTestService";
import history from '../../../../../../../@history'

export const ON_GET_PATIENT_PROFILE='[ON_GET_PATIENT_PROFILE] ON_GET_PATIENT_PROFILE';



export function getPatientProfileById(nic) {
    const request =AddLabTestService.getPatientProfileById(nic);
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("patient profile:",response.data)
            dispatch({
                type: ON_GET_PATIENT_PROFILE,
                payload: response.data
            })
        }).catch((error)=>{
            console.log("patient profile error",)
        })
    };
}

