import React, { useEffect, useState } from 'react'
import './addlabtest.css'
import profile from './../.././../../assets/img/patient.png'
import test from  './../.././../../assets/img/test.png'
import SearchBar from './SearchBar'
import reducer from './store/reducer'
import withReducer from '../../../../../store/withReducer'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from './store/action/AddLabTestAction'
import AddLabTestForm from './AddLabTestForm'


const AddLabTest = () => {

    const dispatch = useDispatch();
    const reducerData = useSelector(({ patientProfile }) => patientProfile.addLabTest);


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
                                        <img src={profile} height="100" width="100" style={{ marginBottom: '5px' }}></img>
                                    </div>
                                    <div className="col">
                                        <h3>Patient Details</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="" style={{ maxWidth: '500px', float: 'left' }}>
                                    <SearchBar />
                                </div>
                                <table className="mytable mt-3">
                                    <tbody>
                                        <tr className="my"><th>NIC :</th><th>{reducerData.patientProfile.nic && reducerData.patientProfile.nic}</th></tr>
                                        <tr className="my"><th>Name :</th><th>{reducerData.patientProfile.name && reducerData.patientProfile.name}</th></tr>
                                        <tr className="my"><th>Email :</th><th>{reducerData.patientProfile.email && reducerData.patientProfile.email}</th></tr>
                                        <tr className="my"><th>Phone :</th><th>{reducerData.patientProfile.contact && reducerData.patientProfile.contact}</th></tr>
                                        <tr className="my"><th>Gender:</th><th>{reducerData.patientProfile.gender ? (reducerData.patientProfile.gender == 'm' ? 'male' : 'female') : ''}</th></tr>
                                        <tr className="my"><th>Registered Clinics:</th><th>{reducerData.patientProfile.clinicNames && reducerData.patientProfile.clinicNames.map((clinic, i) => {
                                            return (
                                                <li className="mt-2" key={i} value={i}>
                                                    {clinic}
                                                </li>
                                            )
                                        })}</th></tr>

                                    </tbody>
                                </table>



                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row align-items-center"></div>
                        <div className="card  bg-light mb-3" >                      
                            <div clasName="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm', verticalAlign: 'middle' }}>
                                <h3 className="mt-5">Add Lab Test</h3>
                            </div>
                            <div className="card-body">

                                <div className="mt-4">

                                    <AddLabTestForm patientProfile={reducerData.patientProfile} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default withReducer('patientProfile', reducer)(AddLabTest);