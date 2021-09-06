import React, { useEffect, useState } from 'react'
import './profile.css'
import profile from './../.././../../assets/img/pro.png'
import { useDispatch, useSelector } from 'react-redux';
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import * as Actions from "./store/action";

import * as _ from 'lodash'
import 'reactjs-popup/dist/index.css';

import { format } from 'date-format-parse';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const ViewPatient = props => {
    const dispatch = useDispatch();
    const reducerData = useSelector(({ patientDetails }) => patientDetails.viewPatient);
    let patientProfile;
    patientProfile = reducerData.patientProfile;
    let deletePatient;

    

    
    return (
        <div className="container">
            <div className="row " >
                <nav className="navbar navbar-expand ">
                    <div className="collapse navbar-collapse">
                       
                    </div>
                </nav>
            </div>

            {

                patientProfile && patientProfile.map((patientProfile, index) => (
                    <React.Fragment>
                        <div className="row mt-5 " >
                            <div className="col">
                                <div className="card  bg-light mb-3" >
                                    <div className="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm' }}>

                                        <div className="row align-items-center" >
                                            <div className="col">
                                                <img src={profile} height="100" width="100" style={{ marginBottom: '5px' }}></img>
                                            </div>
                                            <div className="col">
                                                <h3>{patientProfile.name}</h3>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="card-body">
                                        <table className="mytable mt-3">
                                            <tbody>
                                                <tr className="my"><th>Id :</th><th>{patientProfile.id}</th></tr>
                                                <tr className="my"><th>Name :</th><th>{patientProfile.name}</th></tr>
                                                <tr className="my"><th>Email :</th><th>{patientProfile.email}</th></tr>
                                                <tr className="my"><th>Phone :</th><th>{patientProfile.contact}</th></tr>
                                                <tr className="my"><th>Gender :</th><th>{patientProfile.gender}</th></tr>
                                                <tr className="my"><th>Address :</th><th>{patientProfile.address}</th></tr>
                                                <tr className="my"><th>Date of Birth :</th><th>{format(new Date(patientProfile.birthdate), 'YYYY-MM-DD')}</th></tr>

                                            </tbody>
                                        </table>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))

            }

        </div>

    )
}


export default withReducer('patientDetails', reducer)(ViewPatient);