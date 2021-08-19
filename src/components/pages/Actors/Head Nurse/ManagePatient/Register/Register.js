import React, { useState } from 'react'
import { useEffect } from 'react'
import * as _ from 'lodash'
import './Register.css'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../store/actions/PatientAction'
import Constants from '../../../../../../utils/Constants'
import reducer from '../store/reducer'
import withReducer from '../../../../../../store/withReducer'



let initFormValue = {
    name: '',
    nic: '',
    addr:'',
    email: '',
    gender: '',
    contact: '',
    dob: '',
    clinic: '',
   
}

let initError = {
    nameErrors: {},
    emailErrors: {},
    contactErrors: {},
    nicErrors: {},
    clinicErrors:  {},
    addrErrors:{},
    dobErrors:{},   
}

const Register = (props) => {
    const dispatch = useDispatch()
    const [formValue, setFormValue] = useState({ ...initFormValue })
    const [errors, setErrors] = useState({ ...initError })

    const onSubmit = (e) => {
        e.preventDefault()
        const isValid = validation()
        if (isValid) {
            console.log('formValues before submit', formValue)
            dispatch(Actions.savePatient(formValue));
        } else {
            console.log('fail')
        }
    }
    const validation = () => {
        let localErrors = _.cloneDeep(errors) //make a seperate local errors object and assign it to localErrors
        let isValid = true
        //validating first name
        if (formValue.name.trim().length < 1) {
            let nameMissing = Object.assign({}, { missing: 'Name is missing' }) //make a local object 'name Missing' and add the error
            localErrors.nameErrors = nameMissing //push the error to localErrors
            isValid = false
        } else {
            localErrors.nameErrors.missing = null
        }
        if (formValue.name.trim().length > 256) {
            let nameTooLong = Object.assign({}, { tooLong: 'Name is too long' })
            localErrors.nameErrors = nameTooLong
            isValid = false
        } else {
            localErrors.nameErrors.tooLong = null
        }


        //validating clinic
        if (formValue.clinic.trim().length < 1) {
            let clinicMissing = Object.assign({}, { missing: 'clinic is missing' }) //make a local object 'name Missing' and add the error
            localErrors.clinicErrors = clinicMissing //push the error to localErrors
            isValid = false
        } else {
            localErrors.clinicErrors.missing = null
        }

        //validating email
        if (formValue.email.trim().length < 1) {
            let emailMissing = Object.assign({}, { missing: 'Email is missing' })
            localErrors.emailErrors = emailMissing
            isValid = false
        } else {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValue.email)) {
                let invalidEmail = Object.assign({}, { invalidEmail: 'Invalid email' })
                localErrors.emailErrors = invalidEmail
                isValid = false
            } else {
                localErrors.emailErrors.invalidEmail = null
            }
            localErrors.emailErrors.missing = null
        }
        //validating Mobile
        if (!/^\d{9}$/i.test(formValue.contact)) {
            let contactMissing = Object.assign(
                {},
                { missing: 'Contact number is missing or invalid' }
            )
            localErrors.contactErrors = contactMissing
            isValid = false
        } else {
            localErrors.contactErrors.missing = null
        }
        
        
          // validating nic
          if (formValue.nic < 1) {
            let nicMissing = Object.assign({}, { nicMissing: 'nic is missing' });
            localErrors.nicErrors = nicMissing;
            isValid = false;
        }
        else {
            if (!formValue.nic.includes('V')) {
                let invalidNic = Object.assign({}, { invalidNic: 'invalid nic' });
                localErrors.nicErrors = invalidNic;
                isValid = false;
            }
            else {
                localErrors.nicErrors.invalidNic = null;
            }
            localErrors.nicErrors.nicMissing = null;
        }

        // validating dob
        if(formValue.dob.length<1){
            let dobMissing=Object.assign({},{dobMissing:'date of birth is missing'});
            localErrors.dobErrors=dobMissing;
            isValid=false;
        }
        else{
            localErrors.dobErrors.dobMissing=null;
        }
       
            //validating ptient adress
            if(formValue.addr.trim().length<1){               
                let addrMissing=Object.assign({},{missing:' Address is missing'}); //make a local object 'ptientNameMissing' and add the error 
                localErrors.addrErrors=addrMissing;  //push the error to localErrors   
                isValid=false;
            }
            else{
                localErrors.addrErrors.missing=null;
            }  

        setErrors({ ...localErrors }) //push all errors to errors object
        return isValid
    }

    const onValueChange = (v) => {
        let value=v.target.value;
        let name=v.target.name;
        setFormValue({ ...formValue, [name]: value })
        }

    return (
        <div className='container mt-5'>
            <div className='card '>
                <div className='title'>
                    <h3 className='text-center'>Register New Patient</h3>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='card-body'>
                            {/* first Name Input Field */}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'>Full Name</span>
                                <input
                                    placeholder='Full Name'
                                    name='name'
                                    className='form-control'
                                    value={formValue.name}
                                    onChange={onValueChange}
                                ></input>
                            </div>
                            {/* first name errors */}
                            <div className='mb-2'>
                                {Object.keys(errors.nameErrors).map((key, index) => {
                                    return (
                                        <div key={index} style={{ color: 'red' }}>
                                            {errors.nameErrors[key]}
                                        </div>
                                    )
                                })}
                            </div>
                            {/* Address */}
                            <div className="input-group mb-3">
                                    <span className="input-group-text">Address:</span>
                                    <textarea placeholder="Patient Address"                                            
                                           name="addr" 
                                           className="form-control"
                                           value={formValue.addr}                                    
                                           onChange={onValueChange}>
                                    </textarea>                                 
                                 </div>
                                 {/* first address errors */}
                                 <div className="mb-2">
                                    {Object.keys(errors.addrErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.addrErrors[key]}</div>
                                        })}
                                 </div>

                                 {/* NIC Input Field */}
                                 <div className="input-group mb-3">
                                            <span className="input-group-text">NIC</span>
                                            <input type="text"
                                                placeholder="National Identity Card"
                                                name="nic"
                                                className="form-control"
                                                value={formValue.nic}
                                                onChange={onValueChange}>
                                            </input>
                                        </div>
                                        {/* nic errors */}
                                        <div className="mb-2">
                                            {Object.keys(errors.nicErrors).map((key, index) => {
                                                return <div key={index} style={{ color: "red" }}>{errors.nicErrors[key]}</div>
                                            })}
                                        </div>
                                   {/* DoB */}
                                   <div className="input-group mb-3">
                                                <span className="input-group-text">Date of Birth:</span>
                                                <input type="date"
                                                    placeholder="Date of Birth" 
                                                    name="dob" 
                                                    className="form-control"
                                                    value={formValue.dob}
                                                    onChange={onValueChange}>
                                                </input>                
                                            </div>
                                            {/* date of birth errors */}
                                            <div className="mb-2">
                                                {Object.keys(errors.dobErrors).map((key,index)=>{
                                                        return <div key={index} style={{color:"red"}}>{errors.dobErrors[key]}</div>
                                                })} 
                                            </div>   

                                   

                            {/* Gender Input Field */}
                            <div className='input-group mb-3' >
                                <span className='input-group-text'>Gender</span>
                                <div className="genderdiv" style={{marginLeft:'7px'}} >
                                    <input type="radio"  className="gender" name="gender" value='m' onChange={onValueChange} />
                                    <label for="html">Male</label><br />
                                </div>
                                <div className="genderdiv" >
                                <input type="radio"  className="gender" name="gender" value='f' onChange={onValueChange} />
                                <label for="html">Female</label><br />
                                </div>
                            </div>


                            {/* Email Input Field */}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'>Email</span>
                                <input
                                    placeholder='Email'
                                    name='email'
                                    className='form-control'
                                    value={formValue.email}
                                    onChange={onValueChange}
                                ></input>
                            </div>
                            {/* email erros */}
                            <div className='mb-2'>
                                {Object.keys(errors.emailErrors).map((key, index) => {
                                    return (
                                        <div key={index} style={{ color: 'red' }}>
                                            {errors.emailErrors[key]}
                                        </div>
                                    )
                                })}
                            </div>
                            {/* Contact Input Field*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'>Contact</span>
                                <input
                                    type='text'
                                    placeholder='Contact Number'
                                    name='contact'
                                    className='form-control'
                                    value={formValue.contact}
                                    onChange={onValueChange}
                                ></input>
                            </div>
                            {/* mobile errors */}
                            <div className='mb-2'>
                                {Object.keys(errors.contactErrors).map((key, index) => {
                                    return (
                                        <div key={index} style={{ color: 'red' }}>
                                            {errors.contactErrors[key]}
                                        </div>
                                    )
                                })}
                            </div>
                            {/* Clinic Type Input Field */}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'>Clinic</span>
                                <input
                                    placeholder='Clinic'
                                    name='clinic'
                                    className='form-control'
                                    value={formValue.clinic}
                                    onChange={onValueChange}
                                ></input>
                            </div>
                            {/* first name errors */}
                            <div className='mb-2'>
                                {Object.keys(errors.clinicErrors).map((key, index) => {
                                    return (
                                        <div key={index} style={{ color: 'red' }}>
                                            {errors.clinicErrors[key]}
                                        </div>
                                    )
                                })}
                            </div>                      
                            <div className='input-group mb-3 mt-5'>
                                <button
                                    className='btn '
                                    onClick={onSubmit}
                                    style={{ width: '100%' }}
                                >
                                    <h6>Save</h6>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withReducer('patient', reducer)(Register);