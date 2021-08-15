import React, { useState,useEffect } from 'react'
import Modal from 'react-modal'
import withReducer from '../../../../../store/withReducer';
import reducer from './store/reducer/index';
import * as Actions from "./store/action";
import { useDispatch, useSelector } from 'react-redux';

Modal.setAppElement('#root')
const UpdateSchedule = (props) => {
    const [modalIsopen, setmodalIsopen] = useState(false);

    const dispatch = useDispatch();
    let doctorProfile = props.doctorProfile;
    let clinicId = doctorProfile.clinic && doctorProfile.clinic.id;
    const reducerData = useSelector(({ doctorClinicSchedule }) => doctorClinicSchedule.doctorSchedule);
    let clinicSchedule = reducerData.clinicSchedule && reducerData.clinicSchedule;
    console.log("clinic schedule in update---- : ", clinicSchedule.clinicSchedules);

    useEffect(() => {
        dispatch(Actions.getClinicSchedule(clinicId));
    }, [modalIsopen])
 
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
                            right: '300px',
                            left: '300px',
                            bottom: '50px',


                        }
                    }
                }
            >


                <div
                    className='input-group mb-3'
                    style={{ display: 'inline', alignContent: 'center' }}
                >
                    <React.Fragment>
                        <span
                            className='input-group-text'
                            style={{ width: '100%', height: '50px', display: 'inline', float: 'left' }}
                        >
                            Clinic Schedule -
                        </span>
                        <div
                            className='className=form-control mt-3'
                            style={{ position: 'relative' }}
                        >
                            <table border='1px'>
                                <tr>
                                    <th></th>
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
                                                // onChange={(e) =>
                                                //     onSheduleChange(e, clinicSchedule)
                                                // }
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
                    </React.Fragment>
                </div>



                <div>
                    <button onClick={() => setmodalIsopen(false)}>close</button>
                </div>
            </Modal>
        </div>
    )
}
// export default UpdateSchedule;
export default withReducer('doctorClinicSchedule', reducer)(UpdateSchedule);
