import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
// import withReducer from '../../../../../store/withReducer';
// import reducer from './store/reducer/index';
// import * as Actions from "./store/action";
import { useDispatch, useSelector } from 'react-redux';
import history from '../../../../../@history'
import { toast } from 'react-toastify'
import {
    Button,
} from '@material-ui/core'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

Modal.setAppElement('#root')
const ChangeRequest = (props) => {
    const dispatch = useDispatch();
    const [modalIsopen, setmodalIsopen] = useState(false);
    return (
        <div>
            <Button
                style={{ width: '300px' }}
                variant='contained'
                color='secondary'
                onClick={() => setmodalIsopen(true)}
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
                            top: '50px',
                            right: '400px',
                            left: '450px',
                            bottom: '250px',


                        }
                    }
                }
            >


                <div>
                    <form>
                        <div className="mt-5">
                            <button className="btn btn-primary mt-3" style={{ height: '40px', width: '25%', float: 'right', backgroundColor: '#b3246b' }} onClick={() => setmodalIsopen(false)}>close</button>
                            <button className="btn btn-primary mt-3" style={{ height: '40px', width: '25%', float: 'left', backgroundColor: '#3f51b5' }} >Submit</button>
                        </div>
                    </form>
                </div>

            </Modal>
        </div>
    )
}
export default ChangeRequest
// export default withReducer('doctorClinicSchedule', reducer)(UpdateSchedule);
