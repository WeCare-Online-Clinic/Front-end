import React, {useState } from 'react'
import Constants from '../../../../../../utils/Constants';
import * as _ from 'lodash'
import * as Actions from '../store/actions/NurseAction'
import { useDispatch} from 'react-redux';
const Clinics = Constants.CLINICS;

let initFormValue = {
    nurseName: '',
    nurseId: '',
    clinicId: ''

}

let initError = {
    nurseNameErrors: {},
    nurseIdErrors: {}
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
                case "gastroenterology": {
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
        else {
            setFormValue({ ...formValue, [name]: value });

        }


    }
    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validation();
        if (isValid) {
            console.log("formValues before submit", formValue);
            if (Object.keys(formValue.nurseId).length != 0) {
                // console.log('nurse id',formValue.nurseId);
                dispatch(Actions.getNurseProfileByNurseId(formValue.nurseId));

            }
            else {
                if (Object.keys(formValue.nurseName).length != 0) {
                    // console.log('nurse name',formValue.nurseName);
                    dispatch(Actions.getNurseProfileDetailsByName(formValue.nurseName));
                }
                else {
                    if (Object.keys(formValue.clinicId.length != 0)) {
                        // console.log('clinic name',formValue.clinicName);
                        dispatch(Actions.getNurseProfileDetailsByClinic(formValue.clinicId));
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
        //validating nurse name 
        if (formValue.nurseName.trim().length > 30) {
            let nurseNameTooLong = Object.assign({}, { tooLong: 'Too long' })
            localErrors.nurseNameErrors = nurseNameTooLong;
            isValid = false;
        }
        else {
            localErrors.nurseNameErrors.tooLong = null;
        }

        //validating nurse id 
        if (formValue.nurseId.trim().length > 10) {
            let nurseIdInvalid = Object.assign({}, { invalidId: 'Invalid Id' })
            localErrors.nurseIdErrors = nurseIdInvalid;
            isValid = false;
        }
        else {
            localErrors.nurseIdErrors.invalidId = null;
        }



        setErrors({ ...localErrors }); //push all errors to errors object
        return isValid;
    }
    console.log('formvalues', formValue);
    return (

        <form className="form " >
            <ul className='nav-menu'  >
                <li style={{ display: 'inline-block',margin:'0px 5px' }}>
                    <input className="form-control me-2"
                        style={{ height: '50px' }}
                        type="search"
                        placeholder="Nurse Id"
                        aria-label="Search"
                        name="nurseId"
                        onChange={onMyChange}
                        value={formValue.nurseId}
                    />
                </li>
                <li style={{ display: 'inline-block', margin:'0px 5px' }}>
                    <input className="form-control me-2"
                        style={{ height: '50px' }}
                        type="search"
                        placeholder="Nurse Name"
                        aria-label="Search"
                        name="nurseName"
                        value={formValue.nurseName}
                        onChange={onMyChange}
                    />
                </li>
                <li style={{ display: 'inline-block',margin:'0px 5px' }}>
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
                <li style={{ display: 'inline-block' ,margin:'0px 5px'}}>
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
