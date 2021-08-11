import React, { useState } from 'react'
import { useEffect } from 'react'
import * as _ from 'lodash'
import './NewNurse.css'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../store/actions/NurseAction'
import Constants from '../../../../../../utils/Constants'
import reducer from '../store/reducer'
import withReducer from '../../../../../../store/withReducer'



let initFormValue = {
    name: '',
    email: '',
    gender: '',
    contact: '',
    isHead:'',
    qualification: '',
    clinic: {},
    nurseSchedule: [],
}

let initError = {
    nameErrors: {},
    emailErrors: {},
    contactErrors: {},
    qualificationError: {},
}

const AddNurses = (props) => {
    const dispatch = useDispatch()
    const reducerData = useSelector(({ nurse }) => nurse.manageNurse)
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
            dispatch(Actions.saveNurse(formValue));
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
        //validating qualifications
        if (formValue.qualification.trim().length < 1) {
            let qualificationMissing = Object.assign(
                {},
                { missing: 'Qualification is missing' }
            )
            localErrors.qualificationsError = qualificationMissing
            isValid = false
        } else {
            if (formValue.qualification.trim().length > 256) {
                let qualificationTooLong = Object.assign(
                    {},
                    { tooLong: 'Qualification is too long' }
                )
                localErrors.qualificationErrors = qualificationTooLong
                isValid = false
            } else {
                localErrors.nameErrors.tooLong = null
            }
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

    const onSheduleChange = (e, v) => {
        let d = formValue.nurseSchedule
        let nurseSchedule = {
            clinicSchedule: v,
        }

        if (e.target.checked) {
            d.push(nurseSchedule)
        } else {
            let index = formValue.nurseSchedule.findIndex(
                (x) => x.clinicSchedule.id === v.id
            )
            if (index >= 0) {
                formValue.nurseSchedule.splice(index, 1)
            }
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
                    <h3 className='text-center'>Register New Nurse</h3>
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

                            {/* Gender Input Field */}
                            <div className='input-group mb-3' >
                                <span className='input-group-text'>Head Nurse</span>
                                <div className="genderdiv" style={{marginLeft:'7px'}} >
                                    <input type="radio"  className="gender" name="isHead" value="true" onChange={onValueChange} />
                                    <label for="html">Yes</label><br />
                                </div>
                                <div className="genderdiv" >
                                <input type="radio"  className="gender" name="isHead" value="false" onChange={onValueChange} />
                                <label for="html">No</label><br />
                                </div>
                            </div>

                            {/* Qualification Input Field*/}
                            <div className='input-group mb-3'>
                                <span className='input-group-text'>Qualifications</span>
                                <input
                                    placeholder='Qualifications'
                                    name='qualification'
                                    className='form-control'
                                    value={formValue.qualification}
                                    onChange={onValueChange}
                                ></input>
                            </div>
                            {/* qualifications errors */}
                            <div className='mb-2'>
                                {Object.keys(errors.qualificationError).map((key, index) => {
                                    return (
                                        <div key={index} style={{ color: 'red' }}>
                                            {errors.qualificationError[key]}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card-body'>
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

                            {/* Clinic Date Field*/}

                            <div
                                className='input-group mb-3'
                                style={{ display: 'inline', alignContent: 'center' }}
                            >
                                <React.Fragment>
                                    <span
                                        className='input-group-text'
                                        style={{ width: '100%', height: '50px' }}
                                    >
                                        Clinic Schedule
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

                                            {ClinicSchedules.map((clinicSchedule, i) => {
                                                return (
                                                    <tr style={{ marginLeft: '5px' }}>
                                                        <td>
                                                            <input
                                                                type='checkbox'
                                                                style={{ width: '50px' }}
                                                                key={i}
                                                                id={clinicSchedule.id}
                                                                name={{ clinicSchedule }}
                                                                onChange={(e) =>
                                                                    onSheduleChange(e, clinicSchedule)
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            <label htmlFor='Id'> {clinicSchedule.id} </label>
                                                        </td>
                                                        <td>
                                                            <label htmlFor='Days'>
                                                                {' '}
                                                                {clinicSchedule.day}{' '}
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label htmlFor='Time'>
                                                                {' '}
                                                                {clinicSchedule.time}
                                                            </label>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </table>
                                    </div>
                                </React.Fragment>
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

export default withReducer('nurse', reducer)(AddNurses);
