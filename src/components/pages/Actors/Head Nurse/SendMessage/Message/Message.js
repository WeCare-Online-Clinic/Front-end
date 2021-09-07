import React, { useState } from 'react'
import { useEffect } from 'react'
import * as _ from 'lodash'
import './Message.css'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../store/actions/MessageAction'
import Constants from '../../../../../../utils/Constants'
import reducer from '../store/reducer'
import withReducer from '../../../../../../store/withReducer'



let initFormValue = {
    name: '',
    
    clinic: {}
   
}

let initError = {
    nameErrors: {},
    
}

const Message = (props) => {
    const dispatch = useDispatch()
    const reducerData = useSelector(({ message }) => message.sendMessage)
    useEffect(() => {
        dispatch(Actions.getClinics())
    }, [])

   
    const Clinics = reducerData.clinics
    const [formValue, setFormValue] = useState({ ...initFormValue })
    const [errors, setErrors] = useState({ ...initError })

    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     const isValid = validation()
    //     if (isValid) {
    //         console.log('formValues before submit', formValue)
    //         dispatch(Actions.savePatient(formValue));
    //     } else {
    //         console.log('fail')
    //     }
    // }

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
          
        } else {
            setFormValue({ ...formValue, [name]: value })
        }
    }

    
    
    return (
        <div >
            
            <div className='card '>
                <div className='title'>
                    <h3 className='text-center'>Message</h3>
                </div>
                    <div className='card-body'>
                        {/* Clinic Input Field*/}
                            <div><span >Clinic</span>
                            <div className='feild'>
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
                            </div>  </div>
                        

                            <div>
                                <span>Message</span>
                                <input
                                    placeholder='Message'
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
                            

                           
                            <div className='input-group  mt-5'>
                                <button 
                                    className='btn '
                                    // onClick={onSubmit}
                                    style={{ width: '100%' }}
                                >
                                    <h6>Send</h6>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
          
       
    )
}

export default withReducer('message', reducer)(Message);