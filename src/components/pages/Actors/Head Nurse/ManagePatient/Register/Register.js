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
    address:'',
    email: '',
    gender: '',
    contact: '',
    birthdate: '',
    clinic: {}
   
}

let initError = {
    nameErrors: {},
    emailErrors: {},
    contactErrors: {},
    nicErrors: {},
    addressErrors:{},
    birthdateErrors:{},   
}

const Register = (props) => {
    const dispatch = useDispatch()
    const reducerData = useSelector(({ patient }) => patient.managePatient)
    useEffect(() => {
        dispatch(Actions.getClinics())
    }, [])

    const [ClinicSchedules, setClinicSchedules] = useState([])
    const Clinics = reducerData.clinics
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

        // validating birthdate
        if(formValue.birthdate.length<1){
            let birthdateMissing=Object.assign({},{birthdateMissing:'date of birth is missing'});
            localErrors.birthdateErrors=birthdateMissing;
            isValid=false;
        }
        else{
            localErrors.birthdateErrors.birthdateMissing=null;
        }
       
            //validating ptient adress
            if(formValue.address.trim().length<1){               
                let addressMissing=Object.assign({},{missing:' addressess is missing'}); //make a local object 'ptientNameMissing' and add the error 
                localErrors.addressErrors=addressMissing;  //push the error to localErrors   
                isValid=false;
            }
            else{
                localErrors.addressErrors.missing=null;
            }  

        setErrors({ ...localErrors }) //push all errors to errors object
        return isValid
    }
    
   

    const onValueChange = (v) => {
        let value = v.target.value
        let name = v.target.name
        if (name == 'clinic') {
            let clinic = Clinics[value]
            console.log("clinic me", clinic);
            formValue.clinic = clinic
            console.log('clinic:', clinic)
            onClinicChange(v)
        } else {
            setFormValue({ ...formValue, [name]: value })
        }
    }

      const onClinicChange = (v) => {
        let value = v.target.value
        let ClinicSchedule = Clinics[value].clinicSchedules
        setClinicSchedules(ClinicSchedule)
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
                            {/* addressess */}
                            <div className="input-group mb-3">
                                    <span className="input-group-text">Address:</span>
                                    <textarea placeholder="Patient Address"                                            
                                           name="address" 
                                           className="form-control"
                                           value={formValue.address}                                    
                                           onChange={onValueChange}>
                                    </textarea>                                 
                                 </div>
                                 {/* first address errors */}
                                 <div className="mb-2">
                                    {Object.keys(errors.addressErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.addressErrors[key]}</div>
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
                                   {/* birthdate */}
                                   <div className="input-group mb-3">
                                                <span className="input-group-text">Date of Birth:</span>
                                                <input type="date"
                                                    placeholder="Date of Birth" 
                                                    name="birthdate" 
                                                    className="form-control"
                                                    value={formValue.birthdate}
                                                    onChange={onValueChange}>
                                                </input>                
                                            </div>
                                            {/* date of birth errors */}
                                            <div className="mb-2">
                                                {Object.keys(errors.birthdateErrors).map((key,index)=>{
                                                        return <div key={index} style={{color:"red"}}>{errors.birthdateErrors[key]}</div>
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
                            {/* Clinic Input Field*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'>Clinic</span>

                                <select
                                    name='clinic'
                                    id='clinic'
                                    className='form-control'
                                    onChange={onValueChange}
                                >
                                    <option value='' selected disabled hidden>
                                        Select Clinic
                                    </option>
                                    {Clinics.map((clinic, i) => {
                                        console.log(clinic, i)
                                        return (
                                            <option key={i} value={i}>
                                                {clinic.name}
                                            </option>
                                        )
                                    })}
                                </select>
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