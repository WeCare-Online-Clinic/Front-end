import React, { useEffect, useState } from 'react'
import './shedule.css'
import profile from './../.././../../assets/img/pro.png'
import { useDispatch, useSelector } from 'react-redux';
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import * as Actions from "./store/action";
import SearchBar from './SearchBar';
import * as _ from 'lodash'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';







const DoctorSchedule = props => {
    const reducerData = useSelector(({ doctorDetails }) => doctorDetails.doctorSchedule);
    let doctorProfile;
    doctorProfile = reducerData.doctorProfile;

    return (
        <div className="container">
            <div className="row " >
                <nav className="navbar navbar-expand ">
                    <div className="collapse navbar-collapse">
                        <SearchBar />
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
                                                <h3>{doctorProfile.firstName}</h3>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="card-body">
                                        <table className="mytable mt-3">
                                            <tbody>
                                                <tr className="my"><th>Id :</th><th>{doctorProfile.id}</th></tr>
                                                <tr className="my"><th>Name :</th><th>{doctorProfile.name}</th></tr>
                                                <tr className="my"><th>Email :</th><th>{doctorProfile.email}</th></tr>
                                                <tr className="my"><th>Phone :</th><th>{doctorProfile.contact}</th></tr>
                                                <tr className="my"><th>Qualification :</th><th>{doctorProfile.qualification}</th></tr>
                                                <tr className="my"><th>Specialty :</th><th>{doctorProfile.specialization}</th></tr>
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
                                        <p>Clinic : {doctorProfile.clinic && doctorProfile.clinic.name} </p>
                                        <table className="mt-3">
                                            <tbody>
                                                <tr><th>Day</th><th>Time</th></tr>
                                                {doctorProfile.doctorSchedules && doctorProfile.doctorSchedules
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
                                            <Popup trigger={<button> Trigger</button>} position="">
                                               <div>
                                                   <h1>jhdfjhgS</h1>
                                               </div>
                                                {/* {close => (
                                                    <div>
                                                        Content here
                                                        <a className="close" onClick={close}>
                                                            &times;
                                                        </a>
                                                    </div>
                                                )} */}
                                            </Popup>
                                            <button className="btn btn-primary mt-3" style={{ height: '40px', float: 'right' }} >Update Shedule</button>
                                            <button className="btn btn-primary mt-3" style={{ height: '40px', float: 'left', backgroundColor: '#b3246b' }}>Delete</button>
                                        </div>
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


export default withReducer('doctorDetails', reducer)(DoctorSchedule);