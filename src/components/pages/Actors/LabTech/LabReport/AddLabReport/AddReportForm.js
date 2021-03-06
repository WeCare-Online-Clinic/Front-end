import React, { useState, useEffect } from 'react'
import './addreport.css'
import * as _ from 'lodash'
import * as Actions from '../store/actions/ReportAction'
import { useDispatch } from 'react-redux'
import ViewPDFComponent from './ViewPDFComponent'

let initFormValue = {
    reportId: '',
    field1: '',
    field2: '',


}
let initError = {
    field1Errors: {},
    field2Errors: {},

}

const AddReportForm = ({ testDetails }) => {
    const dispatch = useDispatch();
    const field1Name = testDetails.test.field1;
    const field2Name = testDetails.test.field2;
    const [formValue, setFormValue] = useState({ ...initFormValue })
    const [errors, setErrors] = useState({ ...initError })
    const [pdfError, setPdfError] = useState('')
    const [pdfFile,setPdfFile]=useState()
    const [viewPdf, setViewPdf] = useState(null)

    useEffect(() => {
        setFormValue({ ...formValue, reportId: testDetails.id && testDetails.id })
    }, [])

    const onValueChange = (v) => {
        let value = v.target.value
        let name = v.target.name

        setFormValue({ ...formValue, [name]: value })

    }

    const onSubmit = (e) => {
        e.preventDefault()
        const isValid = validation()
        if (isValid) {
            if (pdfFile != null) {

                // console.log("Form values after convert in to byte array", formValue)
                let formData = new FormData();
                formData.append("uploadingFile",pdfFile );
                formData.append("uploadRequestData", JSON.stringify(formValue));
                console.log(formData);
                // setViewPdf(pdfFile)
                dispatch(Actions.saveReport(formData))
       

            }
            else {
                alert("please add a pdf")
            }
        } else {
            console.log('fail')
        }
    }

    const fileType = ['application/pdf']
    const handlePdfFileChange = (e) => {
        let selectedFile = e.target.files[0]; 
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                setPdfFile(selectedFile); 
                console.log("Selected file :",selectedFile)
                setPdfError('')         
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) => {
                    console.log("e.target.result :",e.target.result)
                    setViewPdf(e.target.result)   
                }
            }
            else {
                setFormValue({ ...formValue, pdf: null });
                setPdfError('please select valid pdf file');
            }
        }
        else {
            alert("select your file")
        }
    }

    const validation = () => {
        let localErrors = _.cloneDeep(errors) //make a seperate local errors object and assign it to localErrors
        let isValid = true
        let numbers = /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/
        //validating first field
        if (!formValue.field1.match(numbers)) {
            let field1Missing = Object.assign({}, { missing: `${field1Name} amount is missing or invalid input format` }) //make a local object 'name Missing' and add the error
            localErrors.field1Errors = field1Missing //push the error to localErrors
            isValid = false
        } else {
            localErrors.field1Errors.missing = null
        }

        //validating second field
        if (!formValue.field2.match(numbers)) {
            let field2Missing = Object.assign({}, { missing: `${field2Name}  is missing or invalid invalid input format` }) //make a local object 'name Missing' and add the error
            localErrors.field2Errors = field2Missing //push the error to localErrors
            isValid = false
        } else {
            localErrors.field2Errors.missing = null
        }



        setErrors({ ...localErrors }) //push all errors to errors object
        return isValid
    }
    return (
        <React.Fragment>
            <form>
                <div className='card-body '>
                    {/* field1 Input Field */}
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>{field1Name}</span>
                        <input
                            placeholder='Enter amount'
                            name='field1'
                            className='form-control'
                            value={formValue.field1}
                            onChange={onValueChange}
                        ></input>
                    </div>
                    {/* field1 Input Field error */}
                    <div className='mb-2'>
                        {Object.keys(errors.field1Errors).map((key, index) => {
                            return (
                                <div key={index} style={{ color: 'red' }}>
                                    {errors.field1Errors[key]}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='card-body'>
                    {/* field2 Input Field */}
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>{field2Name}</span>
                        <input
                            placeholder='Enter amount'
                            name='field2'
                            className='form-control'
                            value={formValue.field2}
                            onChange={onValueChange}
                        ></input>
                    </div>
                    {/* field2 Input Field error */}
                    <div className='mb-2'>

                    </div>
                </div>
                <div className='card-body'>
                    {/* field2 Input Field */}
                    <div className='input-group mb-3'>
                        {/* <span className='input-group-text'>Upload PDF </span> */}
                        <input
                            type="file"
                            title="Choose a video please"
                            placeholder='Enter amount'                                                        
                            className='form-group'                           
                            onChange={handlePdfFileChange}
                            
                        ></input>
                    </div>
                    {/* pdf Field error */}
                    {
                        pdfError && <div className="" style={{ color: 'red' }}> {pdfError}</div>
                    }
                </div>

                <div className='input-group mb-3 mt-5'>
                    <button
                        className='btn '
                        onClick={onSubmit}
                        style={{ width: '100%' }}
                    >
                        <h6>Save Report</h6>
                    </button>
                </div>
            </form>
            <div>
                {/* <ViewPDFComponent viewPdf={viewPdf} /> */}
            </div>
        </React.Fragment>
    )
}

export default AddReportForm
