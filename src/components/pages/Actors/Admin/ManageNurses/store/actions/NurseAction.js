import { showErrorMessage, showSuccessMessage } from "../../../../../../../utils/ToastUtil";
import NurseService from "./NurseService";

export const ON_GET_NURSES='[ON_GET_NURSE] ON_GET_NURSES';
export const ON_SAVE_NURSE = '[ON_SAVE_NURSE] ON_SAVE_NURSE';


export function saveNurse(nurse) {
    const request = NurseService.saveNurse(nurse);

    return (dispatch, getState) => {
        return request.then((response) => {
            console.log("re",response);
            showSuccessMessage("Save or Update Success");
            dispatch({
                type: ON_SAVE_NURSE,
                payload: response.data
            })
        }).catch((error)=>{
            console.log("error nurse");
            showErrorMessage("Please Contact Administrator" + error);
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









// export function getClinicDates(data) {
//     const request = DoctorService.getClinicDates(data);

//     return (dispatch, getState) => {
//         return request.then((response) => {
//             console.log(response);
//             return dispatch({
//                 type: ON_GET_CLINIC_DATES,
//                 payload: response.data
//             });
//         }
//         );
//     };
// }