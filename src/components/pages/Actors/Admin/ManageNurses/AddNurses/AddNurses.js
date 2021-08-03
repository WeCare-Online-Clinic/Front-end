import React, { useState } from 'react'
import * as _ from 'lodash'
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';
import '../../ManageDoctors/AddDoctors//NewDoctor.css'
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../store/actions/NurseAction";
import Constants from '../../../../../../utils/Constants';
import { showSuccessMessage } from '../../../../../../utils/ToastUtil';
import withReducer from '../../../../../../store/withReducer';
import reducer from '../store/reducer';

const Clinics = Constants.CLINICS;
const NurseType = Constants.NURSETYPE;


let initFormValue = {
    firstName: '',
    lastName: '',
    email: '',
    nic: '',
    mobile: '',
    type: '',
    qualification: '',
    clinicId: '',
    nurseSchedule: []
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

const AddNurses = (props) => {
    const dispatch = useDispatch();
    const reducerData = useSelector(({ nurse }) => nurse.manageNurse);
    const dayList = reducerData.clinicDays;
    const [formValue, setFormValue] = useState({ ...initFormValue });
    const [errors, setErrors] = useState({ ...initError });


    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validation();
        if (isValid) {
            console.log("pass");
            console.log("formValues", formValue);
            dispatch(Actions.saveNurse(formValue));

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


        setErrors({ ...localErrors }); //push all errors to errors object
        return isValid;
    }

    const onMyChange = (v) => {
        let value = v.target.value;
        let name = v.target.name;
        if (name == 'clinicId') {
            switch (value) {
                case "cardiology": {
                    setFormValue({ ...formValue, [name]: "1" })
                }
                    break;
                case "dentistry": {
                    setFormValue({ ...formValue, [name]: "2" })
                }
                    break;
                case "dermatology": {
                    setFormValue({ ...formValue, [name]: "3" })
                }
                    break;
                case "neurology": {
                    setFormValue({ ...formValue, [name]: "4" })
                }
                    break;
                default: {
                    setFormValue({ ...formValue, [name]: '' })
                }


            }
            dispatch(Actions.getClinicDays(value));

        }
        else {

            setFormValue({ ...formValue, [name]: value })
        }

    }

    const onSheduleChange = (e, v) => {
        let name = console.log("name:", name);

        let d = formValue.nurseSchedule

        if (e.target.checked) {
            d.push({clinicSchedule:v});
        } else {
           let index =formValue.nurseSchedule.findIndex(x => x.id ===v.id);
           
            console.log("index:", index);
            if (index >= 0) {
                formValue.nurseSchedule.splice(index,1);
                d = formValue.nurseSchedule
                console.log("array:", d);
            }

        }



        let object = Object.assign({}, formValue, { nurseSchedule: d });
        console.log(object);
    }

    return (
        <div className="container mt-5">
            <div className="card ">
                <div className="title">
                    <h3 className="text-center">Register New Nurse</h3>
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
                                <div className="mb-2">
                                    {Object.keys(errors.nicErrors).map((key, index) => {
                                        return <div key={index} style={{ color: "red" }}>{errors.nicErrors[key]}</div>
                                    })}
                                </div>
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

                                {/* Nurse Type Input Field*/}
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Nurse Type</span>

                                    <select
                                        name="type" id="type"
                                        className="form-control"
                                        value={formValue.type}
                                        onChange={onMyChange}
                                    >
                                        {
                                            NurseType.map((value, index) => {
                                                return <option key={index} value={value.value} >{value.label}</option>
                                            })
                                        }

                                    </select>
                                </div>


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

                            {/* Clinic Input Field*/}
                            <div className="input-group mb-3">
                                <span className="input-group-text">Clinic</span>

                                <select
                                    name="clinicId"
                                    id="clinic"
                                    className="form-control"
                                    value={Clinics.value}
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

                            <div className="input-group mb-3" style={{ display: 'inline', alignContent: 'center' }}>
                                <React.Fragment>
                                    <span className="input-group-text" style={{ width: '100%', height: '50px' }}>Clinic Schedule</span>
                                    <div className="className=form-control mt-3" style={{ position: 'relative' }}>
                                        <table border="1px">
                                            <tr>
                                                <th></th>
                                                <th>SID</th>
                                                <th> Day </th>
                                                <th> Time </th>

                                            </tr>


                                            {
                                                dayList.map((value, index) => {
                                                    return (
                                                        <tr style={{ marginLeft: '5px' }}>
                                                            <td>
                                                                <input type="checkbox"
                                                                    style={{ width: '50px' }}
                                                                    key={index}
                                                                    id={value.day}
                                                                    name={{ value }} 
                                                                    value={formValue.clinicDays}
                                                                    onChange={(e) => onSheduleChange(e, value)}
                                                                />
                                                            </td>
                                                            <td>
                                                                <label htmlFor="Id"> {value.id} </label>
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

export default withReducer('nurse', reducer)(AddNurses);