import React, { useEffect, useState } from 'react'
import Constants from '../../../../../../utils/Constants';
import * as _ from 'lodash'
import * as Actions from '../store/actions'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const TestTypes = Constants.TESTTYPES;

let initFormValue = {
    patientName: '',
    patientNIC: '',
    testType: ''

}

let initError = {
    patientNameErrors: {},
    patientNICErrors: {}
}

function SearchBar() {

    const [formValue, setFormValue] = useState({ ...initFormValue });
    const [errors, setErrors] = useState({ ...initError });

    const dispatch = useDispatch();


    const onMyChange = (v) => {
        let value = v.target.value;
        let name = v.target.name;
        if (name == 'testType') {
            switch (value) {
                case "fbc": {
                    setFormValue({ ...formValue, [name]: 1 })
                }
                    break;
                case "bio": {
                    setFormValue({ ...formValue, [name]: 2 })
                }
                    break;
                case "diagnoscic": {
                    setFormValue({ ...formValue, [name]: 3 })
                }
                    break;
                case "iron": {
                    setFormValue({ ...formValue, [name]: 4 })
                }
                    break;
                default: {
                    setFormValue({ ...formValue, [name]: '' })
                }


            }

        }
        else {
            setFormValue({ ...formValue, [name]: value });

        }


    }
    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validation();
        if (isValid) {
            console.log("formValues before submit", formValue);
            if (Object.keys(formValue.patientName).length != 0) {
                // console.log('doctor id',formValue.doctorId);
                dispatch(Actions.getPatientReportsByPatientName(formValue.patientName));

            }
            else {
                if (Object.keys(formValue.patientNIC).length != 0) {
                    // console.log('doctor name',formValue.doctorName);
                    dispatch(Actions.getPatientReportsByPatientNIC(formValue.patientNIC));
                }
                else {
                    if (Object.keys(formValue.testType.length != 0)) {
                        // console.log('clinic name',formValue.clinicName);
                        dispatch(Actions.getPatientReportsByTestType(formValue.testType));
                    }

                }
            }


        }
        else {
            console.log("fail");
            toast.error('Invalid Search Input', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        }

    }
    const validation = () => {
        let localErrors = _.cloneDeep(errors); //make a seperate local errors object and assign it to localErrors 
        let isValid = true;
        //validating patient name 
        if (formValue.patientName.trim().length > 30) {        
            isValid = false;
        }
        else {
            isValid = true;
        }

        //validating patient id 
        if (formValue.patientNIC.trim().length > 10) {
    
            isValid = false;
        }
        else {                  

                isValid = true;
           
        }



        setErrors({ ...localErrors }); //push all errors to errors object
        return isValid;
    }
    console.log('formvalues', formValue);
    return (

        <form className="form " >
            <ul className='nav-menu'  >
                <li style={{ display: 'inline-block', margin: '0px 5px' }}>
                    <input className="form-control me-2"
                        style={{ height: '50px' }}
                        type="search"
                        placeholder="Patient Name"
                        aria-label="Search"
                        name="patientName"
                        onChange={onMyChange}
                        value={formValue.patientName}
                    />
                </li>
                <li style={{ display: 'inline-block', margin: '0px 5px' }}>
                    <input className="form-control me-2"
                        style={{ height: '50px' }}
                        type="search"
                        placeholder="Patient NIC"
                        aria-label="Search"
                        name="patientNIC"
                        value={formValue.patientNIC}
                        onChange={onMyChange}
                    />
                </li>
                <li style={{ display: 'inline-block', margin: '0px 5px' }}>
                    <select
                        name="testType"
                        id="testType"
                        className="form-control"
                        style={{ height: '50px', width: '150px' }}
                        value={TestTypes.value}
                        onChange={onMyChange}
                    >
                        {
                            TestTypes.map((value, index) => {
                                return <option key={index} value={value.value} >{value.label}</option>
                            })
                        }

                    </select>
                </li>
                <li style={{ display: 'inline-block', margin: '0px 5px' }}>
                    <button className="btn"
                        type="submit"
                        style={{ backgroundColor: '#b3246b', color: 'white', fontWeight: 'bold', width: '100px', height: '50px' }}
                        onClick={onSubmit}
                    >
                        SEARCH</button>
                </li>
            </ul>
        </form>

    )
}

export default SearchBar
