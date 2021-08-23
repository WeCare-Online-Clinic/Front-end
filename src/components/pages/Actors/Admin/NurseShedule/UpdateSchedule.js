import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import withReducer from '../../../../../store/withReducer';
import reducer from './store/reducer/index'
import * as Actions from "./store/action";
import { useDispatch, useSelector } from 'react-redux';


Modal.setAppElement('#root')

const UpdateSchedule = (props) => {
    const dispatch = useDispatch();
    let nurseProfile = props.nurseProfile;
    console.log("nurse props profile :",nurseProfile);
    let clinicId = nurseProfile.clinic && nurseProfile.clinic.id;
    const reducerData = useSelector(({ nurseClinicSchedule }) => nurseClinicSchedule.nurseSchedule);
    let clinicSchedule = reducerData.clinicSchedule && reducerData.clinicSchedule;
 

    const [modalIsopen, setmodalIsopen] = useState(false);
    const [newnurseSchedule, setNurseSchedule] = useState([]);
    const [formValue,setFormValue]=useState(nurseProfile);
 
   

    useEffect(() => {
        setFormValue(nurseProfile);
        dispatch(Actions.getClinicSchedule(clinicId));        
       
    }, [modalIsopen])

    const onUpdateSubmit=(e)=>{
        e.preventDefault();      

        console.log("new nurse schedule",newnurseSchedule);   
        const m= parseInt(nurseProfile.id) ;   
        console.log("nurse id submit:",m);        
        console.log("formVlaues before submit :: ",formValue);
        dispatch(Actions.deleteNurseSchedule(m)); //delete existing schedule form nurse_schedule table

        updateSchedule(newnurseSchedule);
             

    }
    const updateSchedule=(newnurseSchedule)=>{
        dispatch(Actions.updateNurseSchedule(newnurseSchedule,nurseProfile.id));      
       setmodalIsopen(false);
       setNurseSchedule([]);
  

    }
    const  onScheduleChange=(v,schedule)=>{      
        let name = parseInt(v.target.name)       
        let d={
            nurse:{id:nurseProfile.id},
            clinicSchedule: {id:name}
        }

        if(v.target.checked){           
            newnurseSchedule.push(d)
        }  
        else{
            let index=newnurseSchedule.findIndex(
                (x)=>x.clinicSchedule.id===v.id
            )
            if(index>=0){
                newnurseSchedule.splice(index,1)
            }
          //  doctorSchedule.pop(d);
        }         
    
      

    }

    return (
        <div>
            <button className="btn btn-primary mt-3" onClick={() => setmodalIsopen(true)} style={{ height: '40px', float: 'right' }}>
                Update Shedule
            </button>
            <Modal isOpen={modalIsopen}
                onRequestClose={() => setmodalIsopen(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'rgba(0,0,240,0.25)',
                            top: '0px',
                            right: '0px',
                            left: '240px',
                            bottom: '0px',
                            position: 'fixed'
                        },
                        content: {
                            // color: 'orange',
                            top: '50px',
                            right: '400px',
                            left: '450px',
                            bottom: '250px'


                        }
                    }
                }
            >
                <form className="form" >
                    <React.Fragment>
                        <span className='input-group-text'   style={{ width: '100%', height: '50px', display: 'inline', float: 'left', backgroundColor: '#3f51b5', fontWeight: 'bold', fontSize: '18px', color: 'white' }}
                        >
                            Update Clinic Schedule - {clinicSchedule.name}
                        </span>
                        <div className='className=form-control mt-3' style={{ position: 'relative' }}                        >
                            <table border='1px'>
                                <tr>
                                    <th></th>
                                    <th>Id</th>
                                    <th> Day </th>
                                    <th> Time </th>
                                </tr>

                                {clinicSchedule.clinicSchedules && clinicSchedule.clinicSchedules.map((schedule, index) => {
                                    return (
                                        <tr style={{ marginLeft: '5px' }}>
                                            <td>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '50px' }}
                                                    key={index}
                                                    id={schedule.id}
                                                    name={schedule.id}
                                                    onChange={(e) =>
                                                        onScheduleChange(e,schedule)
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <label htmlFor='Id'> {schedule.id} </label>
                                            </td>
                                            <td>
                                                <label htmlFor='Days'>

                                                    {schedule.day}
                                                </label>
                                            </td>
                                            <td>
                                                <label htmlFor='Time'>

                                                    {schedule.time}
                                                </label>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>
                        <div className="mt-5">
                            <button className="btn btn-primary mt-3" style={{ height: '40px', width: '25%', float: 'right', backgroundColor: '#b3246b' }} onClick={() => setmodalIsopen(false)}>close</button>
                            <button className="btn btn-primary mt-3" style={{ height: '40px', width: '25%', float: 'left', backgroundColor: '#3f51b5' }} onClick={onUpdateSubmit}>Submit</button>
                        </div>
                    </React.Fragment>
                </form>

            </Modal>
        </div>
    )
}
export default withReducer('nurseClinicSchedule', reducer)(UpdateSchedule);
