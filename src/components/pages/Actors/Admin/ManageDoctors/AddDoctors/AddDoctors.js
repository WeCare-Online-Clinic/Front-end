import React, { useState } from 'react'
import * as _ from 'lodash'
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';
import './NewDoctor.css';
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../store/actions/doctor.add.edit.action";
import Constants from '../../../../../../utils/Constants';
import { showSuccessMessage } from '../../../../../../utils/ToastUtil';
import reducer from '../store/reducer';
import withReducer from '../../../../../../store/withReducer';
const Clinics = Constants.CLINICS;
const  Specialty = Constants.SPECIALTY;  


let initFormValue = {
    firstName: '',
    lastName: '',
    email: '',
    nic: '',
    address1: '',
    address2: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    qualification: '',
    specialty: '',
    clinic: ''

}
let initError = {
    firstNameErrors: {},
    lastNameErrors: {},
    emailErrors: {},
    nicErrors: {},
    address1Errors: {},
    passwordErrors: {},
    confirmPasswordErrors: {},
    mobileErrors: {},
    qualificationsError: {}

}

const AddDoctors = (props) => {
    const dispatch = useDispatch();
    const reducerData = useSelector(({ doctor }) => doctor.doctorAddEdit);
    const dayList = reducerData.clinicDays;


    const [formValue, setFormValue] = useState({ ...initFormValue });
    const [errors, setErrors] = useState({ ...initError });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); 



    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validation();
        if (isValid) {
            console.log("pass");
            console.log("formValues", formValue);
            dispatch(Actions.saveDoctor(formValue));


        }
        else {
            console.log("fail");
        }

    }
    const validation = () => {
        let localErrors = _.cloneDeep(errors); //make a seperate local errors object and assign it to localErrors 
        let isValid = true;
        //validating first name
        if (formValue.firstName.trim().length < 1) {
            let firstNameMissing = Object.assign({}, { missing: 'first name is missing' }); //make a local object 'firstNameMissing' and add the error 
            localErrors.firstNameErrors = firstNameMissing;  //push the error to localErrors   
            isValid = false;
        }
        else {
            localErrors.firstNameErrors.missing = null;
        }
        if (formValue.firstName.trim().length > 30) {
            let firstNameTooLong = Object.assign({}, { tooLong: 'first name is too long' })
            localErrors.firstNameErrors = firstNameTooLong;
            isValid = false;
        }
        else {
            localErrors.firstNameErrors.tooLong = null;
        }
        //validating last name
        if (formValue.lastName.trim().length < 1) {
            let lastNameMissing = Object.assign({}, { missing: 'last name is missing' });
            localErrors.lastNameErrors = lastNameMissing;
            isValid = false;

        }
        else {
            localErrors.lastNameErrors.missing = null;
        }
        if (formValue.lastName.trim().length > 30) {
            let lastNameTooLong = Object.assign({}, { tooLong: 'last name is too Long' });
            localErrors.lastNameErrors = lastNameTooLong;
            isValid = false;
        }
        else {
            localErrors.lastNameErrors.tooLong = null;
        }
        //validating email
        if (formValue.email.trim().length < 1) {
            let emailMissing = Object.assign({}, { missing: 'email is missing' });
            localErrors.emailErrors = emailMissing;
            isValid = false;
        }
        else {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValue.email)) {
                let invalidEmail = Object.assign({}, { invalidEmail: 'invalid email' });
                localErrors.emailErrors = invalidEmail;
                isValid = false;
            }
            else {
                localErrors.emailErrors.invalidEmail = null;
            }
            localErrors.emailErrors.missing = null;

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
        //validating Address line 1
        if (formValue.address1.trim().length < 1) {
            let addressLine1Missing = Object.assign({}, { missing: 'address is missing' });
            localErrors.address1Errors = addressLine1Missing;
            isValid = false;

        }
        else {
            localErrors.address1Errors.missing = null;
        }
        //validating Mobile
        if (!/^\d{10}$/i.test(formValue.mobile)) {
            let mobileMissing = Object.assign({}, { missing: 'mobile number is missing or invalid' });
            localErrors.mobileErrors = mobileMissing;
            isValid = false;
        }
        else {
            localErrors.mobileErrors.missing = null;
        }
        //validating qualifications
        if (formValue.qualification.trim().length < 1) {
            let qualificationMissing = Object.assign({}, { missing: 'qualification is missing' });
            localErrors.qualificationsError = qualificationMissing;
            isValid = false;
        }
        else {
            localErrors.qualificationsError.missing = null;
        }
        // validating password
        if (formValue.password.length < 1) {
            let passwordMissing = Object.assign({}, { passwordMissing: 'password is missing' })
            localErrors.passwordErrors = passwordMissing;
            isValid = false;
        }
        else {
            localErrors.passwordErrors.passwordMissing = null;
        }
        //validating confirm password
        if (formValue.confirmPassword !== formValue.password) {
            let confirmPasswordWrong = Object.assign({}, { confirmPasswordWrong: 'password is wrong' });
            localErrors.confirmPasswordErrors = confirmPasswordWrong;
            isValid = false;
        }
        else {
            localErrors.confirmPasswordErrors.confirmPasswordWrong = null;
        }

        setErrors({ ...localErrors }); //push all errors to errors object
        return isValid;
    }

    const onMyChange = (v) => {
        let value = v.target.value;
        let name = v.target.name;
        if (name == 'clinic') {
            console.log(value);
            dispatch(Actions.getClinicDays(value));
            
        }
        setFormValue({ ...formValue, [name]: value })




    }

    return (
        <div className="container mt-5">
            <div className="card ">
                <div className="title">
                    <h3 className="text-center">Register New Doctor</h3>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card-body">
                            <form >
                                {/* first Name Input Field */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text">First Name</span>
                                    <input placeholder="First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={formValue.firstName}
                                        onChange={onMyChange}>
                                    </input>
                                </div>
                                {/* first name errors */}
                                <div className="mb-2">
                                    {Object.keys(errors.firstNameErrors).map((key, index) => {
                                        return <div key={index} style={{ color: "red" }}>{errors.firstNameErrors[key]}</div>
                                    })}
                                </div>
                                {/* Last Name Input Field */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Last Name</span>
                                    <input placeholder="Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={formValue.lastName}
                                        onChange={onMyChange}>
                                    </input>
                                </div>
                                {/* last name errors */}
                                <div className="mb-2">
                                    {Object.keys(errors.lastNameErrors).map((key, index) => {
                                        return <div key={index} style={{ color: "red" }}>{errors.lastNameErrors[key]}</div>
                                    })}
                                </div>
                                {/* Email Input Field */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Email</span>
                                    <input placeholder="Email"
                                        name="email"
                                        className="form-control"
                                        value={formValue.email}
                                        onChange={onMyChange}>
                                    </input>
                                </div>
                                {/* email erros */}
                                <div className="mb-2">
                                    {Object.keys(errors.emailErrors).map((key, index) => {
                                        return <div key={index} style={{ color: "red" }}>{errors.emailErrors[key]}</div>
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
                                        onChange={onMyChange}>
                                    </input>
                                </div>
                                {/* nic errors */}
                                {/* <div className="mb-2">
                                    {Object.keys(errors.nicErrors).map((key, index) => {
                                        return <div key={index} style={{ color: "red" }}>{errors.nicErrors[key]}</div>
                                    })}
                                </div> */}
                                {/* Address Line 1 Input Field */}
                                {/* <div className="input-group mb-3">
                                    <span className="input-group-text">Address</span>
                                    <input type="text"
                                        placeholder="Address line 1"
                                        name="address1"
                                        className="form-control"
                                        value={formValue.address1}
                                        onChange={onMyChange}>
                                    </input>
                                </div> */}
                                {/* address line 1 errors */}
                                {/* <div className="mb-2">
                                    {Object.keys(errors.address1Errors).map((key, index) => {
                                        return <div key={index} style={{ color: "red" }}>{errors.address1Errors[key]}</div>
                                    })}
                                </div> */}
                                {/* Address Line 2 Input Field */}
                                {/* <div className="input-group mb-3">
                                    <span className="input-group-text">Address</span>
                                    <input type="text"
                                        placeholder="Address line 2"
                                        name="address2"
                                        className="form-control"
                                        value={formValue.address2}
                                        onChange={onMyChange}>
                                    </input>
                                </div> */}
                                {/* Mobile Input Field*/}
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Moblie</span>
                                    <input type="text"
                                        placeholder="Mobile Number"
                                        name="mobile"
                                        className="form-control"
                                        value={formValue.mobile}
                                        onChange={onMyChange}>
                                    </input>
                                </div>
                                {/* mobile errors */}
                                <div className="mb-2">
                                    {Object.keys(errors.mobileErrors).map((key, index) => {
                                        return <div key={index} style={{ color: "red" }}>{errors.mobileErrors[key]}</div>
                                    })}
                                </div>
                                {/* Password Input Field*/}
                                {/* <div className="input-group mb-3">
                                    <span className="input-group-text">Password</span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        name="password"
                                        className="form-control"
                                        value={formValue.password}
                                        onChange={onMyChange}>
                                    </input>
                                    <button type="reset" className="btn btn-primary" onClick={() => setShowPassword(showPassword => !showPassword)}>
                                        {showPassword ? <ShowIcon /> : <ShowOffIcon />}
                                    </button>
                                </div> */}
                                {/* password errors */}
                                {/* <div className="mb-2">
                                    {Object.keys(errors.passwordErrors).map((key, index) => {
                                        return <div key={index} style={{ color: "red" }}>{errors.passwordErrors[key]}</div>
                                    })}
                                </div> */}
                                {/* Confirm password Field*/}
                                {/* <div className="input-group mb-3">
                                    <span className="input-group-text">Confirm Password</span>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        className="form-control"
                                        value={formValue.confirmPassword}
                                        onChange={onMyChange}>
                                    </input>
                                    <button type="reset" className="btn btn-primary" onClick={() => setShowConfirmPassword(showConfirmPassword => !showConfirmPassword)}>
                                        {showConfirmPassword ? <ShowIcon /> : <ShowOffIcon />}
                                    </button>
                                </div> */}
                                    {/* confirm password errors */}
                                {/* <div className="mb-2">
                                    {Object.keys(errors.confirmPasswordErrors).map((key, index) => {
                                        return <div key={index} style={{ color: "red" }}>{errors.confirmPasswordErrors[key]}</div>
                                    })}
                                </div> */}


                            </form>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-body">
                            {/* Qualification Input Field*/}
                            <div className="input-group mb-3">
                                <span className="input-group-text">Qualifications</span>
                                <input placeholder="Degree"
                                    name="qualification"
                                    className="form-control"
                                    value={formValue.qualification}
                                    onChange={onMyChange}>
                                </input>
                            </div>
                            {/* qualifications errors */}
                            <div className="mb-2">
                                {Object.keys(errors.qualificationsError).map((key, index) => {
                                    return <div key={index} style={{ color: "red" }}>{errors.qualificationsError[key]}</div>
                                })}
                            </div>
                            {/* Speciality Input Field*/}
                            <div className="input-group mb-3">
                                <span className="input-group-text">Specialty</span>

                                <select name="specialty" id="specialty"
                                    className="form-control"
                                    value={formValue.specialty}
                                    onChange={onMyChange}
                                >
                                    {
                                        Specialty.map((value, index) => {
                                            return <option key={index} value={value.value} >{value.label}</option>
                                        })
                                    }
                                </select>
                            </div>

                            {/* Clinic Input Field*/}
                            <div className="input-group mb-3">
                                <span className="input-group-text">Clinic</span>

                                <select
                                    name="clinic" id="clinic"
                                    className="form-control"
                                    value={formValue.clinic}
                                    onChange={onMyChange}
                                >
                                    {
                                        Clinics.map((value, index) => {
                                            return <option key={index} value={value.value} >{value.label}</option>
                                        })
                                    }

                                </select>
                            </div>

                            {/* Clinic Date Field*/}

                            <div className="input-group mb-3" style={{ display: 'inline',alignContent:'center'}}>
                                <React.Fragment>
                                    <span className="input-group-text" style={{width:'100%',height:'50px'}}>Clinic Schedule</span>
                                    <div className="className=form-control mt-3" style={{ position: 'relative' }}>
                                                <table border="1px">                                                    
                                                        <tr> 
                                                            <th></th>
                                                            <th> Day </th>
                                                            <th> Time </th>
                                                        
                                                        </tr>
                                                   
                                               
                                        {
                                            dayList.map((value, index) => {
                                                return (
                                                    <tr style={{marginLeft:'5px'}}>
                                                        <td>
                                                        <input type="checkbox"
                                                            style={{width:'50px'}}
                                                            key={index}
                                                            id={value.day}
                                                            name={value.day}
                                                            value={formValue.clinicDays}
                                                            onChange={onMyChange}
                                                        />
                                                        </td>
                                                        <td>
                                                        <label htmlFor="Days"> {value.day} </label>
                                                        </td>
                                                        <td>
                                                        <label htmlFor="Time"> {value.time}</label>
                                                        </td>

                                                    </tr>
                                                )

                                            })
                                        }
                                                 </table>
                                    </div>
                                </React.Fragment>

                            </div>

                            <div className="input-group mb-3 mt-5">
                                <button className="btn " onClick={onSubmit} style={{ width: "100%" }}><h6>Save</h6></button>
                            </div>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default withReducer('doctor', reducer)(AddDoctors);