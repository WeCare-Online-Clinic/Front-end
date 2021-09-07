import MessageService from "./MessageService";
import history from '../../../../../../../@history'


// export const ON_SAVE_PATIENT = '[ON_SAVE_PATIENT] ON_SAVE_PATIENT';

export const ON_GET_CLINICS='[ON_GET_CLINICS] ON_GET_CLINIC';



// export function savePatient(patient) {
//     const request = MessageService.savePatient(patient);
//     return (dispatch, getState) => {
//         return request.then((response) => {

//             alert("Successfully Registered"); 
//             history.push('viewpatient');     
//             dispatch({
//                 type: ON_SAVE_PATIENT,
//                 payload: response.data
//             })
            
//         }).catch((error)=>{          
//             alert("Register failed, please try again"); 
//         });

//     };
// }





export function getClinics() {
  const request = MessageService.getClinics()

  return (dispatch, getState) => {
    return request.then((response) => {
      console.log('clinics', response.data)
      return dispatch({
        type: ON_GET_CLINICS,
        payload: response.data,
      })
    })
  }
}


  
  
  
  
  
  
     
  
  