
import React, {useState } from 'react'
import Constants from '../../../../../../utils/Constants';
import * as _ from 'lodash'
import * as Actions from '../store/actions/ReportAction'
import { useDispatch} from 'react-redux';
// const Tests = Constants.TESTS;

let initFormValue = {
  
    reportId: '',
   

}

let initError = {
   
    reportIdErrors: {}
}

function SearchBar() {

    const [formValue, setFormValue] = useState({ ...initFormValue });
    const [errors, setErrors] = useState({ ...initError });

    const dispatch = useDispatch();


    const onMyChange = (v) => {
        let value = v.target.value;
        let name = v.target.name;
        setFormValue({ ...formValue, [name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validation();
        if (isValid) {
            console.log("formValues before submit", formValue);
            if (Object.keys(formValue.reportId).length != 0) {
                // console.log('report id',formValue.reportId);
                dispatch(Actions.getReportProfileDetailsById(formValue.reportId));

            }
        
        else {
            console.log("fail");
            alert('Invalid Search Input');
        }
    }
 }
    const validation = () => {
        let localErrors = _.cloneDeep(errors); //make a seperate local errors object and assign it to localErrors 
        let isValid = true;
        //validating test name 
       

        //validating report id 
        if (formValue.reportId.trim().length > 10) {
            let reportIdInvalid = Object.assign({}, { invalidId: 'Invalid Id' })
            localErrors.reportIdErrors = reportIdInvalid;
            isValid = false;
        }
        else {
            localErrors.reportIdErrors.invalidId = null;
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
                        placeholder="Report Id"
                        aria-label="Search"
                        name="reportId"
                        onChange={onMyChange}
                        value={formValue.reportId}
                    />
                </li>
                {/* <li style={{ display: 'inline-block', margin:'0px 5px' }}>
                    <input className="form-control me-2"
                        style={{ height: '50px' }}
                        type="search"
                        placeholder="Test Name"
                        aria-label="Search"
                        name="testName"
                        value={formValue.testName}
                        onChange={onMyChange}
                    />
                </li> */}
                {/* <li style={{ display: 'inline-block',margin:'0px 5px' }}>
                    <select
                        name="testId"
                        id="test"
                        className="form-control"
                        style={{ height: '50px', width: '150px' }}
                        value={Tests.value}
                        onChange={onMyChange}
                    >
                        {
                            Tests.map((value, index) => {
                                return <option key={index} value={value.value} >{value.label}</option>
                            })
                        }

                    </select>
                </li> */}
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



