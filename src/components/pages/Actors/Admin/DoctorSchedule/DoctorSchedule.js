import React, { useEffect, useState } from 'react'
import './shedule.css'
import profile from './../.././../../assets/img/pro.png'
import { useDispatch, useSelector } from 'react-redux';
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import * as Actions from "./store/action";
import SearchBar from './SearchBar';
import * as _ from 'lodash'
import 'reactjs-popup/dist/index.css';
import UpdateSchedule from './UpdateSchedule';
import { format } from 'date-format-parse';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const DoctorSchedule = props => {
    const dispatch = useDispatch();
    const reducerData = useSelector(({ doctorDetails }) => doctorDetails.doctorSchedule);
    let doctorProfile;
    doctorProfile = reducerData.doctorProfile;
    let deleteDoctor;

    const ChangeStatus = ({closeToast}) => {
        // console.log('delete doctor profile 25', deleteDoctor);
        return (
            <div >
                <h4>{deleteDoctor.doctorId } will no longer exist in the system <br/>
                 Are you sure want to perform the task ?</h4>
                <button onClick={closeToast} style={{ float: 'left', backgroundColor: '#FF0000' }}>No</button>
                <button onClick={() => dispatch(Actions.changeDoctorStatus(deleteDoctor))} style={{ float: 'right', backgroundColor: '#3f51b5' }}>Yes</button>
            </div>
        )
    }

    const onDeactivate = (doctorId) => {        
        for (var i = 0; i < doctorProfile.length; i++) { 
            if (doctorProfile[i].id == doctorId) { //search for selected doctor object
                deleteDoctor=doctorProfile[i];
                // console.log("doctor object", doctor);
                toast.error(<ChangeStatus/>, { position: toast.POSITION.TOP_CENTER, autoClose: false })
            }
         
        }

        //types -success,info,warn,error
    }

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


                                            <UpdateSchedule doctorProfile={doctorProfile} />
                                            <button className="btn btn-primary mt-3" style={{ height: '40px', float: 'left', backgroundColor: '#b3246b' }} onClick={() => onDeactivate(doctorProfile.id)}>Delete</button>
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