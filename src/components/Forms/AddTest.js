import React, { useState } from 'react'
import * as _ from 'lodash'

import ShowIcon from '@material-ui/icons/Visibility'
import ShowOffIcon from '@material-ui/icons/VisibilityOff'
import { Link } from 'react-router-dom'

let initFormValue = {
  patientName: '',
  contactNumber: '',
  email: '',
  dob: '',
}
let initError = {
  patientNameErrors: {},
  contactNumberErrors: {},
  emailErrors: {},
  dobErrors: {},
}

const PatientRegister = (props) => {
  const [formValue, setFormValue] = useState({ ...initFormValue })
  const [errors, setErrors] = useState({ ...initError })

  const onSubmit = (e) => {
    console.log('onsubmit')
    e.preventDefault()
    const isValid = validation()

    if (isValid) {
      console.log('pass')
    } else {
      console.log('fail')
    }
  }
  const validation = () => {
    let localErrors = _.cloneDeep(errors) //make a seperate local errors object and assign it to localErrors
    let isValid = true
    //validating ptient name
    if (formValue.patientName.trim().length < 1) {
      let patientNameMissing = Object.assign(
        {},
        { missing: ' name is missing' }
      ) //make a local object 'ptientNameMissing' and add the error
      localErrors.patientNameErrors = patientNameMissing //push the error to localErrors
      isValid = false
    } else {
      localErrors.patientNameErrors.missing = null
    }

    //validating contact

    if (formValue.contactNumber.trim().length > 10) {
      let contactNumberTooLong = Object.assign({}, { tooLong: 'not valid' })
      localErrors.contactNumberErrors = contactNumberTooLong
      isValid = false
    } else {
      localErrors.contactNumberErrors.tooLong = null
    }
    //validating email
    if (formValue.email.trim().length < 1) {
      let emailMissing = Object.assign({}, { missing: 'email is missing' })
      localErrors.emailErrors = emailMissing
      isValid = false
    } else {
      if (!formValue.email.includes('@')) {
        let invalidEmail = Object.assign({}, { invalidEmail: 'invalid email' })
        localErrors.emailErrors = invalidEmail
        isValid = false
      } else {
        localErrors.emailErrors.invalidEmail = null
      }
      localErrors.emailErrors.missing = null
    }
    // validating dob
    if (formValue.dob.length < 1) {
      let dobMissing = Object.assign(
        {},
        { dobMissing: 'date of birth is missing' }
      )
      localErrors.dobErrors = dobMissing
      isValid = false
    } else {
      localErrors.dobErrors.dobMissing = null
    }

    setErrors({ ...localErrors }) //push all errors to errors object
    return isValid
  }

  const onMyChange = (v) => {
    let value = v.target.value
    let name = v.target.name
    setFormValue({ ...formValue, [name]: value })
  }

  return (
    <div className='card col-md-6'>
      <h3 className='text-center'>Create Lab Test</h3>
      <div className='card-body'>
        <form>
          <div className='input-group mb-3'>
            <span
              className='input-group-text'
              style={{
                backgroundColor: '#3f51b5',
                color: '#fff',
                width: '150px',
              }}
            >
              Report Name
            </span>
            <input
              placeholder='Report Name'
              name='Report Name'
              className='form-control'
              value={formValue.reportName}
              onChange={onMyChange}
            ></input>
          </div>
          <div className='input-group mb-3'>
            <span
              className='input-group-text'
              style={{
                backgroundColor: '#3f51b5',
                color: '#fff',
                width: '150px',
              }}
            >
              Description
            </span>
            <input
              placeholder='Report Name'
              name='Report Name'
              className='form-control'
              value={formValue.reportName}
              onChange={onMyChange}
            ></input>
          </div>
          <p className='text-center'>Field 1</p>
          <hr></hr>
          <div className='input-group mb-3'>
            <span
              className='input-group-text'
              style={{
                backgroundColor: '#3f51b5',
                color: '#fff',
                width: '150px',
              }}
            >
              Name
            </span>
            <input
              placeholder='Name'
              name='fieldname'
              className='form-control'
              value={formValue.fieldname}
              onChange={onMyChange}
            ></input>
          </div>
          {/* last name errors */}
          <div className='mb-2'>
            {Object.keys(errors.contactNumberErrors).map((key, index) => {
              return (
                <div key={index} style={{ color: 'red' }}>
                  {errors.contactNumberErrors[key]}
                </div>
              )
            })}
          </div>

          <div className='input-group mb-3'>
            <span
              className='input-group-text'
              style={{
                backgroundColor: '#3f51b5',
                color: '#fff',
                width: '150px',
              }}
            >
              Description
            </span>
            <input
              placeholder='Description'
              name='email'
              className='form-control'
              value={formValue.email}
              onChange={onMyChange}
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

          <div className='input-group mb-3'>
            <span
              className='input-group-text'
              style={{
                backgroundColor: '#3f51b5',
                color: '#fff',
                width: '150px',
              }}
            >
              Measurements
            </span>
            <select>
              <option value='0'>Select Type</option>
              <option value='g/dL'>g/dL</option>
              <option value='IU/L'>IU/L</option>
              <option value='IU/ML'>IU/ML</option>
              <option value='g/DL'>g/DL</option>
            </select>
          </div>

          <div className='input-group mb-3'>
            <span
              className='input-group-text'
              style={{
                backgroundColor: '#3f51b5',
                color: '#fff',
                width: '150px',
              }}
            >
              Test Holder
            </span>
            <input
              placeholder='Test Holder'
              name='email'
              className='form-control'
              value={formValue.email}
              onChange={onMyChange}
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
          <p className='text-center'>Field 2</p>
          <hr></hr>
          <div className='input-group mb-3'>
            <span
              className='input-group-text'
              style={{
                backgroundColor: '#3f51b5',
                color: '#fff',
                width: '150px',
              }}
            >
              Name
            </span>
            <input
              placeholder='Name'
              name='fieldname'
              className='form-control'
              value={formValue.fieldname}
              onChange={onMyChange}
            ></input>
          </div>
          {/* last name errors */}
          <div className='mb-2'>
            {Object.keys(errors.contactNumberErrors).map((key, index) => {
              return (
                <div key={index} style={{ color: 'red' }}>
                  {errors.contactNumberErrors[key]}
                </div>
              )
            })}
          </div>

          <div className='input-group mb-3'>
            <span
              className='input-group-text'
              style={{
                backgroundColor: '#3f51b5',
                color: '#fff',
                width: '150px',
              }}
            >
              Description
            </span>
            <input
              placeholder='Description'
              name='email'
              className='form-control'
              value={formValue.email}
              onChange={onMyChange}
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

          <div className='input-group mb-3'>
            <span
              className='input-group-text'
              style={{
                backgroundColor: '#3f51b5',
                color: '#fff',
                width: '150px',
              }}
            >
              Measurements
            </span>
            <select>
              <option value='0'>Select Type</option>
              <option value='g/dL'>g/dL</option>
              <option value='IU/L'>IU/L</option>
              <option value='IU/ML'>IU/ML</option>
              <option value='g/DL'>g/DL</option>
            </select>
          </div>

          <div className='input-group mb-3'>
            <span
              className='input-group-text'
              style={{
                backgroundColor: '#3f51b5',
                color: '#fff',
                width: '150px',
              }}
            >
              Test Holder
            </span>
            <input
              placeholder='Test Holder'
              name='email'
              className='form-control'
              value={formValue.email}
              onChange={onMyChange}
            ></input>
          </div>

          <div
            className='input-group mb-3'
            style={{ justifyContent: 'center' }}
          >
            <button
              className='btn btn-primary'
              onClick={onSubmit}
              style={{ width: '100%' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PatientRegister
