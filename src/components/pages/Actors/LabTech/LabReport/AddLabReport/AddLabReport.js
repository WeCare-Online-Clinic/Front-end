import React, { useEffect, useState } from 'react'
import './addreport.css'
import profile from '../../.././../../assets/img/patient.png'
import test from '../../.././../../assets/img/test.png'
import reducer from '../store/reducer'
import withReducer from '../../../../../../store/withReducer'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../store/actions'
import AddReportForm from './AddReportForm'



const AddLabReport = ({ testDetails }) => { 
    useEffect(() => {

    }, [])
    return (
        <React.Fragment>
            <div className="container " style={{ marginTop: '3cm' }}>

                <div className="row mt-5 " >
                    <div className="col">
                        <div className="card  bg-light mb-3" >
                            <div className="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm' }}>

                                <div className="row align-items-center" >
                                    <div className="col">
                                        <img src={test} height="100" width="100" style={{ marginBottom: '5px' }}></img>
                                    </div>
                                    <div className="col">
                                        <h3>Test Details</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="mytable mt-3">
                                    <tbody>
                                        <tr className="my"><th>Patient's Name :</th><th>{testDetails && testDetails.patient.name}</th></tr>
                                        <tr className="my"><th>Patient's NIC :</th><th>{testDetails && testDetails.patient.nic}</th></tr>
                                        <tr className="my"><th>Gender:</th><th>{testDetails.patient.gender ? (testDetails.patient.gender == 'm' ? 'male' : 'female') : ''}</th></tr>
                                        <tr className="my"><th>Phone :</th><th>{testDetails && testDetails.patient.contact}</th></tr>
                                        <tr className="my"><th><hr /> </th><th><hr /></th></tr>

                                    </tbody>
                                    
                                    <tbody>
                                        <tr className="my"><th>Test :</th><th>{testDetails && testDetails.test.name}</th></tr>
                                        <tr className="my"><th>Tested Date :</th><th>{testDetails && testDetails.testDate}</th></tr>
                                        <tr className="my"><th>Tested Time :</th><th>{testDetails && testDetails.testTime}</th></tr>
                                        
                                    </tbody>
                                </table>
                               
                  




                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row align-items-center"></div>
                        <div className="card  bg-light mb-3" >
                            <div clasName="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm', verticalAlign: 'middle' }}>
                                <h3 className="mt-5">Add  Lab Report</h3>
                            </div>
                            <div className="card-body">

                                <div className="">

                                    <AddReportForm testDetails={testDetails} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default AddLabReport
// export default withReducer('patientProfile', reducer)(AddLabTest);