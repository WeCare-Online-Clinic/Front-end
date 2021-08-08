import React, { useEffect, useState } from 'react'
import Constants from '../../../../../utils/Constants';
import * as _ from 'lodash'
import * as Actions from "./store/action";
import { useDispatch, useSelector } from 'react-redux';
const Clinics = Constants.CLINICS;

let initFormValue = {
    doctorName: '',
    doctorId: '',
    clinicId: ''

}

let initError = {
    doctorNameErrors: {},
    doctorIdErrors: {}
}

function SearchBar() {

    const [formValue, setFormValue] = useState({ ...initFormValue });
    const [errors, setErrors] = useState({ ...initError });

    const dispatch = useDispatch();

    const onMyChange = (v) => {
        let value = v.target.value;
        let name = v.target.name;      
        if (name == 'clinicId') {
            switch (value) {
                case "cardiology": {               
                    setFormValue({ ...formValue, [name]: 1 })
                }
                    break;
                case "dentistry": {
                    setFormValue({ ...formValue, [name]: 2 })
                }
                    break;
                case "dermatology": {
                    setFormValue({ ...formValue, [name]: 3 })
                }
                    break;
                case "neurology": {
                    setFormValue({ ...formValue, [name]: 4 })
                }
                    break;
                default: {
                    setFormValue({ ...formValue, [name]: '' })
                }


            }            

        }
        else{
            setFormValue({ ...formValue, [name]: value });

        }


    }
    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validation();
        if (isValid) {
            console.log("formValues before submit", formValue);
            if(Object.keys(formValue.doctorId).length!=0){
                // console.log('doctor id',formValue.doctorId);
                dispatch(Actions.getDoctorProfileDetailsById(formValue.doctorId));
                
            }
            else{
                if(Object.keys(formValue.doctorName).length!=0){                   
                    // console.log('doctor name',formValue.doctorName);
                    dispatch(Actions.getDoctorProfileDetailsByName(formValue.doctorName));
                }
                else{
                    if(Object.keys(formValue.clinicId.length!=0)){                        
                        // console.log('clinic name',formValue.clinicName);
                        dispatch(Actions.getDoctorProfileDetailsByClinic(formValue.clinicId));
                    }
                    
                }
            }
            

        }
        else {
            console.log("fail");
            alert('Invalid Search Input');
        }

    }
    const validation = () => {
        let localErrors = _.cloneDeep(errors); //make a seperate local errors object and assign it to localErrors 
        let isValid = true;
        //validating doctor name 
        if (formValue.doctorName.trim().length > 30) {
            let doctorNameTooLong = Object.assign({}, { tooLong: 'Too long' })
            localErrors.doctorNameErrors = doctorNameTooLong;
            isValid = false;
        }
        else {
            localErrors.doctorNameErrors.tooLong = null;
        }

        //validating doctor id 
        if (formValue.doctorId.trim().length > 10) {
            let doctorIdInvalid = Object.assign({}, { invalidId: 'Invalid Id' })
            localErrors.doctorIdErrors = doctorIdInvalid;
            isValid = false;
        }
        else {
            localErrors.doctorIdErrors.invalidId = null;
        }



        setErrors({ ...localErrors }); //push all errors to errors object
        return isValid;
    }
    console.log('formvalues', formValue);
    return (
        <React.Fragment>
            <form className="form" >
                <ul className='nav-menu' >
                    <li> <input className="form-control me-2"
                        style={{ height: '50px' }}
                        type="search"
                        placeholder="Doctor Id"
                        aria-label="Search"
                        name="doctorId"
                        onChange={onMyChange}
                        value={formValue.doctorId}
                    />
                    </li>
                    <li> <input className="form-control me-2"
                        style={{ height: '50px' }}
                        type="search"
                        placeholder="Doctor Name"
                        aria-label="Search"
                        name="doctorName"
                        value={formValue.doctorName}
                        onChange={onMyChange}
                    />
                    </li>
                    <li>
                        <select
                            name="clinicId"
                            id="clinic"
                            className="form-control"
                            style={{ height: '50px', width: '150px' }}
                            value={Clinics.value}
                            onChange={onMyChange}
                        >
                            {
                                Clinics.map((value, index) => {
                                    return <option key={index} value={value.value} >{value.label}</option>
                                })
                            }

                        </select>
                    </li>
                    <li> <button className="btn"
                        type="submit"
                        style={{ backgroundColor: '#b3246b', color: 'white', fontWeight: 'bold', width: '100px', height: '50px' }}
                        onClick={onSubmit}
                    >
                        SEARCH</button>
                    </li>
                </ul>
            </form>
        </React.Fragment>
    )
}

export default SearchBar
