
import NurseService from "./NurseService";
import history from '../../../../../../../@history'

export const ON_GET_NURSES='[ON_GET_NURSE] ON_GET_NURSES';
export const ON_SAVE_NURSE = '[ON_SAVE_NURSE] ON_SAVE_NURSE';
export const ON_GET_CLINIC_DAYS = '[ON_GET_CLINICS] ON_GET_CLINIC_DAYS';


export function saveNurse(nurse) {
    const request = NurseService.saveNurse(nurse);

    return (dispatch, getState) => {
        return request.then((response) => {

            alert("Successfully Registered"); 
            history.push('viewnurse');     
            dispatch({
                type: ON_SAVE_NURSE,
                payload: response.data
            })
            
        }).catch((error)=>{          
            alert("Register failed, please try again"); 
        });

    };
}

export function getNurse() {
    const request =NurseService.getNurses();
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("nurse list:",response.data)
            dispatch({
                type: ON_GET_NURSES,
                payload: response.data
            })
        }).catch((error)=>{
            console.log("error nurse list",)
        })
    };
}


export function getClinicDays(data) {
    console.log("data clinic",data);
    const request = NurseService.getClinicDays(data)

    return (dispatch, getState) => {
        return request.then((response) => {
            // console.log("days",response.data);
            return dispatch({
                type: ON_GET_CLINIC_DAYS,
                payload: response.data
            });
        }
        );
    };
}