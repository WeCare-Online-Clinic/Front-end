import React, { useEffect, useState } from 'react'
import withReducer from '../../../../../store/withReducer'
import * as _ from 'lodash'
import * as Actions from './store/action/AddLabTestAction'
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store/reducer'

let initFormValue = {
    patientNic: ''
}

let initError = {
    patientNicErrors: {},
}

function SearchBar() {
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({ ...initFormValue });
    const [errors, setErrors] = useState({ ...initError });

    const reducerData = useSelector(({ getNIC }) => getNIC.addLabTest);   

    useEffect(() => {
        dispatch(Actions.getTestTypes(reducerData.patientProfile));
    }, [reducerData.patientProfile])




    const onMyChange = (v) => {
        let value = v.target.value;
        let name = v.target.name;

        setFormValue({ ...formValue, [name]: value });

    } 
    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validation();
        if (isValid) {
            // console.log("patient nic...", formValue.patientNic)
            dispatch(Actions.getPatientProfileByNIC(formValue.patientNic));
        }
        else {
            console.log("fail");
            alert('Invalid Search Input');
        }

    }
    const validation = () => {
        let localErrors = _.cloneDeep(errors); //make a seperate local errors object and assign it to localErrors 
        let isValid = true;
        //validating patient request 
        if (formValue.patientNic.trim().length != 10) {
            let invalidNIC = Object.assign({}, { invalid: 'Invalid NIC number' })
            localErrors.patientNicErrors = invalidNIC;
            isValid = false;
        }
        else {
            if (!formValue.patientNic.includes('V')) {

                let invalidNIC = Object.assign({}, { invalid: 'Invalid NIC number' })
                localErrors.patientNicErrors = invalidNIC;
                isValid = false;
            }
            else{

                localErrors.patientNicErrors = null;
            }
        }

        setErrors({ ...localErrors }); //push all errors to errors object
        return isValid;
    } 
    return (
        <React.Fragment>
            <form className="form" >
                <ul className='nav-menu' >
                    <li> <input className="form-control me-2"
                        style={{ height: '40px' }}
                        type="search"
                        placeholder="Patient NIC Number -> eg: 990060754V"
                        aria-label="Search"
                        name="patientNic"
                        onChange={onMyChange}
                        value={formValue.patientNic}
                    />
                    </li>

                    <li> <button className="btn"
                        type="submit"
                        style={{ backgroundColor: '#b3246b', color: 'white', fontWeight: 'bold', width: '100px', height: '40px' }}
                        onClick={onSubmit}
                    >
                        SEARCH</button>
                    </li>
                </ul>
            </form>
        </React.Fragment>
    )
}

export default withReducer('getNIC', reducer)(SearchBar)
