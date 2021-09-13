import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import withReducer from '../../../../../store/withReducer';
import reducer from './store/reducer/index';
import * as Actions from "./store/action";
import { useDispatch, useSelector } from 'react-redux';
import history from '../../../../../@history'
import { toast } from 'react-toastify'
import './ChangeDate.css'
import {    Button,} from '@material-ui/core'
import 'react-toastify/dist/ReactToastify.css'
import ScheduleIcon from '@material-ui/icons/Schedule'
toast.configure()

Modal.setAppElement('#root')
const ChangeRequest = (props) => {
    const dispatch = useDispatch();
    const reducerData = useSelector(({ requestDates }) => requestDates.patientDashboard);
    const requestDateList = reducerData.requestDateList;
    // console.log("requestDateList :",requestDateList);   
    const [modalIsopen, setmodalIsopen] = useState(false);

    const nextClinic = props.nextClinic;
    console.log("nextClinic....", nextClinic)

    const currentClinicDate = nextClinic.clinicDate && nextClinic.clinicDate.date;
    const sendRequest = () => {
        let requestObject = Object.assign({}, {
            clinic: nextClinic.clinicDate.nurse.clinic,
            patient: nextClinic.patient,
            clinicDate: nextClinic.clinicDate
        }) //requestdate object  
        dispatch(Actions.saveRequest(requestObject)); //this is to save the request data
        setmodalIsopen(false);
    }

    const requestChange = () => {
        setmodalIsopen(true);
        let reqestDateObject = Object.assign({}, {
            clinicId: nextClinic.clinicDate.nurse.clinic.id,
            currentClinicDate: currentClinicDate
        }) //requestdate object    
        dispatch(Actions.getRequestDates(reqestDateObject));// this is to bring the alternative day list
    }

    return (
        <div>
            <Button
                style={{ width: '300px' }}
                variant='contained'
                color='secondary'
                onClick={requestChange}
            >
                Request Change
            </Button>
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
                            top: '180px',
                            right: '500px',
                            left: '550px',
                            bottom: '450px',
                        }
                    }
                }
            >



                <div className="mt-3">
                    <div>
                        <span className='input-group-text'
                            style={{ width: '100%', height: '50px', display: 'inline', float: 'left', backgroundColor: '#3f51b5', fontSize: '18px', color: 'white' }}
                        >
                            Alternative dates will be
                        </span>

                        <ul style={{ fontSize: '13px' }} >
                            {requestDateList.map((date, i) => {
                                return (

                                    <li ><label ><ScheduleIcon style={{ color: 'blue',marginRight:'5px' }} /> {date}</label></li>

                                )
                            })}
                        </ul>
                    </div>
                    <div className="">
                       
                        <button type="button" className="btn btn-primary " style={{ height: '40px', width: '25%', float: 'right', backgroundColor: '#b3246b' ,marginTop:'2cm'}} onClick={() => setmodalIsopen(false)}>close</button>
                        <button type="button" className="btn btn-primary " style={{ height: '40px', width: '25%', float: 'left', backgroundColor: '#3f51b5', marginTop:'2cm' }} onClick={sendRequest} >Send Request</button>
                    </div>
                </div>


            </Modal>
        </div>
    )
}
export default withReducer('requestDates', reducer)(ChangeRequest);
