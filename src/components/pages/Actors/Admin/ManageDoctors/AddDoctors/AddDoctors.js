import React, { useState } from 'react'
import { useEffect } from 'react'
import * as _ from 'lodash'
import './NewDoctor.css'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../store/actions/doctor.add.edit.action'
import Constants from '../../../../../../utils/Constants'
import reducer from '../store/reducer'
import withReducer from '../../../../../../store/withReducer'

const Specialization = Constants.SPECIALIZATION

let initFormValue = {
  name: '',
  email: '',
  doctorId: '',
  contact: '',
  qualification: '',
  specialization: '',
  status:'true',
  registeredDate:'',
  clinic: {},
  doctorSchedules: [],
}

let initError = {
  nameErrors: {},
  emailErrors: {}, 
  contactErrors: {},
  qualificationError: {},
}

const AddDoctors = (props) => {
  const dispatch = useDispatch()
  const reducerData = useSelector(({ doctor }) => doctor.doctorAddEdit)
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
      dispatch(Actions.saveDoctor(formValue))
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
    // validating doctorId
    /*  if (formValue.doctorId < 1) {
      let doctorIdMissing = Object.assign(
        {},
        { doctorIdMissing: 'doctorId is missing' }
      )
      localErrors.doctorIdErrors = doctorIdMissing
      isValid = false
    } else {
      if (!formValue.doctorId.includes('V')) {
        let invalidDoctorId = Object.assign(
          {},
          { invalidDoctorId: 'invalid doctorId' }
        )
        localErrors.doctorIdErrors = invalidDoctorId
        isValid = false
      } else {
        localErrors.doctorIdErrors.invalidDoctorId = null
      }
      localErrors.doctorIdErrors.doctorIdMissing = null
    } */
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
      formValue.clinic = clinic
      console.log('clinic:', clinic)
      onClinicChange(v)
    } else {
      setFormValue({ ...formValue, [name]: value })
    }
  }

  const onSheduleChange = (e, v) => {
    let d = formValue.doctorSchedules
    let doctorSchedule = {
      clinicSchedule: v,
    }

    if (e.target.checked) {
      d.push(doctorSchedule)
    } else {
      let index = formValue.doctorSchedules.findIndex(
        (x) => x.clinicSchedule.id === v.id
      )
      if (index >= 0) {
        formValue.doctorSchedules.splice(index, 1)
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
          <h3 className='text-center'>Register New Doctor</h3>
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
              {/* full name errors */}
              <div className='mb-2'>
                {Object.keys(errors.nameErrors).map((key, index) => {
                  return (
                    <div key={index} style={{ color: 'red' }}>
                      {errors.nameErrors[key]}
                    </div>
                  )
                })}
              </div>
              {/* Doctor ID Input Field */}
              <div className='input-group mb-3'>
                <span className='input-group-text'>Doctor ID</span>
                <input
                  type='text'
                  placeholder='Doctor ID'
                  name='doctorId'
                  className='form-control'
                  value={formValue.doctorId}
                  onChange={onValueChange}
                ></input>
              </div>
              {/* nic errors */}
              {/*  <div className='mb-2'>
                {Object.keys(errors.doctorIdErrors).map((key, index) => {
                  return (
                    <div key={index} style={{ color: 'red' }}>
                      {errors.doctorIdErrors[key]}
                    </div>
                  )
                })}
              </div> */}

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
              {/* Specialition Input Field*/}
              <div className='input-group mb-3'>
                <span className='input-group-text'>Specialization</span>

                <select
                  name='specialization'
                  id='specialization'
                  className='form-control'
                  value={formValue.specialization}
                  onChange={onValueChange}
                >
                  {Specialization.map((value, index) => {
                    return (
                      <option key={index} value={value.value}>
                        {value.label}
                      </option>
                    )
                  })}
                </select>
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
                            {/* <td>
                              <label htmlFor='Id'> {clinicSchedule.id} </label>
                            </td> */}
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

export default withReducer('doctor', reducer)(AddDoctors)
