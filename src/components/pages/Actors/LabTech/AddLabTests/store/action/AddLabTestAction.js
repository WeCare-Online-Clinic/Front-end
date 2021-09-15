import AddLabTestService from "./AddLabTestService";
import history from '../../../../../../../@history'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const ON_GET_PATIENT_PROFILE='[ON_GET_PATIENT_PROFILE] ON_GET_PATIENT_PROFILE';
export const ON_GET_TEST_TYPES='[ON_GET_TEST_TYPES] ON_GET_TEST_TYPES';
export const ON_SAVE_PATIENT_TEST_OBJECT='[ON_SAVE_PATIENT_TEST_OBJECT] ON_SAVE_PATIENT_TEST_OBJECT'



export function getPatientProfileByNIC(nic) {
    const request =AddLabTestService.getPatientProfileByNIC(nic);
    return (dispatch, getState) => {
        request.then((response) => {
            // console.log("patient profile:",response.data)
            // getTestTypes(response.data);
            dispatch({
                type: ON_GET_PATIENT_PROFILE,
                payload: response.data
            })
        }).catch((error)=>{
            // console.log("patient profile error",)
        })
    };
}

export function getTestTypes(patientProfile){
    const request=AddLabTestService.getTestTypes(patientProfile);
    return(dispatch,getState)=>{
        request.then((response)=>{
            // console.log("test types",response.data);
            dispatch({
                type:ON_GET_TEST_TYPES,
                payload:response.data
            })
        }).catch((error)=>{
            console.log("errors");
        })
    }
}
export function savePatientTest(patientTestObject){
    const request=AddLabTestService.savePatientTest(patientTestObject);
    return(dispatch,getState)=>{
        request.then((response)=>{
            if(response.data=='successfully added the test '){
                toast.info(response.data, { position: toast.POSITION.TOP_CENTER, autoClose: 3000 });
                history.push('viewlabreport')
            }
            else{
                toast.error(response.data, { position: toast.POSITION.TOP_CENTER, autoClose: 3000 })
            } 
        }).catch((error)=>{
            console.log("errors");
        })
    }
}


