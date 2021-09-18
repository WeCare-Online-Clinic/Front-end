import React, { useEffect, useState } from 'react'
import withReducer from '../../../../../store/withReducer'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from './store/action/AddLabTestAction'
import reducer from './store/reducer'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './addlabtest.css'

toast.configure()

let initFormValue = {
    testType: ''
}
const AddLabTestForm = ({ patientProfile }) => {
    const dispatch = useDispatch();
    const reducerData = useSelector(({ labTest }) => labTest.addLabTest);  
    const [formValue, setFormValue] = useState({ ...initFormValue })


    const onMyChange = (v) => {
        let value = v.target.value;
        let name = v.target.name;

        setFormValue({ ...formValue, [name]: value });

    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (formValue.testType) {
            let patientTestObject = Object.assign({}, {
                patientNIC: patientProfile.nic,
                testType: formValue.testType
            })            
            dispatch(Actions.savePatientTest(patientTestObject));
        }
        else {
            toast.error('Please Select a Test !!', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })

        }


        

    }

    return (
        <div>
            <form>
                <div className='input-group mb-3'>
                    <span className='input-group-text' style={{fontSize:'14px'}}>Clinic</span>

                    <select
                        name='testType'
                        id='tests'
                        className='form-control'
                        onChange={onMyChange}
                        style={{height: '50px',fontSize:'14px',fontWeight:'bold'}}
                    >
                        <option value='' selected disabled hidden>
                            Select Test
                        </option>
                        {reducerData.testTypes && reducerData.testTypes.map((test, i) => {

                            return (
                                <option key={i} value={test.id}>
                                    {test.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className="mt-5">
                    <button className="btn btn-primary mt-3" style={{ height: '40px', marginLeft: '7cm', backgroundColor: '#b3246b',fontWeight:'bold' }} onClick={onSubmit} >Add Test</button>
                </div>
            </form>

        </div>
    )
}

export default withReducer('labTest', reducer)(AddLabTestForm);

