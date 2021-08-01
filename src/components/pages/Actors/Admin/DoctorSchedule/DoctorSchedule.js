import React, { useEffect, useState } from 'react'
import './shedule.css'
import profile from './../.././../../assets/img/pro.png'
import { useDispatch, useSelector } from 'react-redux';
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import * as Actions from "./store/action";




const DoctorSchedule = props => {
    const reducerData = useSelector(({ doctorDetails }) => doctorDetails.doctorSchedule);
    const doctorProfile = reducerData.doctorProfile;
    const dispatch = useDispatch();


    console.log("profile:", reducerData.doctorProfile);
    console.log('schedule id:', doctorProfile.doctorSchedule);





    useEffect(() => {
        console.log("doctorrrr id:", doctorProfile.id);
        dispatch(Actions.getDoctorScheduleDetailsById(doctorProfile.id));

    }, [])
    return (
        <div className="container">
            <div className="row " >
                <nav className="navbar navbar-expand ">
                    <div className="collapse navbar-collapse"   >
                        <form className="form" >
                            <ul className='nav-menu' >
                                <li> <input className="form-control me-2" style={{ height: '50px' }} type="search" placeholder="Doctor Id" aria-label="Search" /></li>
                                <li> <input className="form-control me-2" style={{ height: '50px' }} type="search" placeholder="Doctor Name" aria-label="Search" /> </li>
                                <li> <input className="form-control me-2" style={{ height: '50px' }} type="search" placeholder="Clinic" aria-label="Search" /> </li>
                                <li> <button className="btn" type="submit" style={{ backgroundColor: '#b3246b', color: 'white', fontWeight: 'bold', width: '100px', height: '50px' }}>SEARCH</button> </li>
                            </ul>
                        </form>
                    </div>
                </nav>
            </div>
            <div className="row " >
                <div className="col">
                    <div className="card  bg-light mb-3" >
                        <div className="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm' }}>

                            <div className="row align-items-center" >
                                <div className="col">
                                    <img src={profile} height="100" width="100" style={{ marginBottom: '5px' }}></img>
                                </div>
                                <div className="col">
                                    <h3>{doctorProfile.firstName}</h3>
                                </div>
                            </div>



                        </div>
                        <div className="card-body">
                            <table className="mytable mt-3">
                                <tbody>
                                    <tr className="my"><th>Id :</th><th>{doctorProfile.id}</th></tr>
                                    <tr className="my"><th>Name :</th><th>{doctorProfile.firstName + ' ' + doctorProfile.lastName}</th></tr>
                                    <tr className="my"><th>Email :</th><th>{doctorProfile.email}</th></tr>
                                    <tr className="my"><th>Phone :</th><th>{doctorProfile.mobile}</th></tr>
                                    <tr className="my"><th>NIC :</th><th>{doctorProfile.nic}</th></tr>
                                    <tr className="my"><th>Qualification :</th><th>{doctorProfile.qualification}</th></tr>
                                    <tr className="my"><th>Specialty :</th><th>{doctorProfile.specialty}</th></tr>
                                    <tr className="my"><th>Registered date :</th><th>2021.07.13</th></tr>
                                </tbody>
                            </table>



                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row align-items-center"></div>
                    <div className="card  bg-light mb-3" >
                        <div className="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm' }}><h3>Clinic Details</h3></div>
                        <div className="card-body">
                            <p>Clinic : Cadiology</p>
                            <table className="mt-3">
                                <tbody>
                                    <tr><th>Day</th><th>Time</th></tr>
                                    {reducerData.doctorProfile.doctorSchedule && reducerData.doctorProfile.doctorSchedule
                                        .map((schedule, index) => (
                                            <tr>
                                                <th>{schedule.clinicSchedule.day}</th>
                                                <th>{schedule.clinicSchedule.time}</th>

                                            </tr>


                                        )
                                        )}
                                </tbody>
                            </table>
                            <div className="mr-5">
                                <button className="btn btn-primary mt-3" style={{ height: '40px', float: 'right' }}>Update Shedule</button>
                                <button className="btn btn-primary mt-3" style={{ height: '40px', float: 'left', backgroundColor: '#b3246b' }}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}


export default withReducer('doctorDetails', reducer)(DoctorSchedule);