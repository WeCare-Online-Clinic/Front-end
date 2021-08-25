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
const ViewDoctor = props => {
    const dispatch = useDispatch();
    const reducerData = useSelector(({ doctorDetails }) => doctorDetails.viewDoctor);
    let doctorProfile;
    doctorProfile = reducerData.doctorProfile;
    let deleteDoctor;

    

    
    return (
        <div className="container">
            <div className="row " >
                <nav className="navbar navbar-expand ">
                    <div className="collapse navbar-collapse">
                       
                    </div>
                </nav>
            </div>

            {

                doctorProfile && doctorProfile.map((doctorProfile, index) => (
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
                                                <h3>{doctorProfile.name}</h3>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="card-body">
                                        <table className="mytable mt-3">
                                            <tbody>
                                                <tr className="my"><th>Id :</th><th>{doctorProfile.id}</th></tr>
                                                <tr className="my"><th>Name :</th><th>{doctorProfile.name}</th></tr>
                                                <tr className="my"><th>Doctor ID :</th><th>{doctorProfile.doctorId}</th></tr>
                                                <tr className="my"><th>Email :</th><th>{doctorProfile.email}</th></tr>
                                                <tr className="my"><th>Phone :</th><th>{doctorProfile.contact}</th></tr>
                                                <tr className="my"><th>Qualification :</th><th>{doctorProfile.qualification}</th></tr>
                                                <tr className="my"><th>Specialty :</th><th>{doctorProfile.specialization}</th></tr>
                                                <tr className="my"><th>Registered date :</th><th>{format(new Date(doctorProfile.registeredDate), 'YYYY-MM-DD')}</th></tr>

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


export default withReducer('doctorDetails', reducer)(ViewDoctor);