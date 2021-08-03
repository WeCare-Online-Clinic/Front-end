import React from 'react'
import '../DoctorSchedule/shedule.css'
import profile from './../.././../../assets/img/nurse.png'
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from "./store/action/index";


const NurseSchedule = props => {
  const reducerData = useSelector(({ nurseDetails }) => nurseDetails.nurseSchedule);
  const nurseProfile = reducerData.nurseProfile;
  const dispatch = useDispatch();

  console.log("profile:", reducerData.nurseProfile);
  console.log('schedule id:', nurseProfile.nurseSchedule);
  return (
    <div className="container">
      <div className="row " >
        <nav className="navbar navbar-expand ">
          <div className="collapse navbar-collapse"   >
            <form className="form" >
              <ul className='nav-menu' >
                <li> <input className="form-control me-2" style={{ height: '50px' }} type="search" placeholder="Nurse Id" aria-label="Search" /></li>
                <li> <input className="form-control me-2" style={{ height: '50px' }} type="search" placeholder="Nurse Name" aria-label="Search" /> </li>
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
            <div clasName="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm' }}>

              <div className="row align-items-center" >
                <div className="col">
                  <img src={profile} height="100" width="100" style={{ marginBottom: '5px' }}></img>
                </div>
                <div className="col">
                  <h3>{nurseProfile.firstName}</h3>
                </div>
              </div>



            </div>
            <div className="card-body">
              <table className="mytable mt-3">
                <tr className="my"><th>Id :</th><th>{nurseProfile.id}</th></tr>
                <tr className="my"><th>Name :</th><th>{nurseProfile.firstName + ' ' + nurseProfile.lastName}</th></tr>
                <tr className="my"><th>Email :</th><th>{nurseProfile.email}</th></tr>
                <tr className="my"><th>Phone :</th><th>{nurseProfile.mobile}</th></tr>
                <tr className="my"><th>Type :</th><th>{nurseProfile.type}</th></tr>
                <tr className="my"><th>Registered date :</th><th>2021.07.13</th></tr>
              </table>



            </div>
          </div>
        </div>
        <div className="col">
          <div className="row align-items-center"></div>
          <div className="card  bg-light mb-3" >
            <div clasName="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm', verticalAlign: 'middle' }}>
              <h3>Clinic Details</h3>
            </div>
            <div className="card-body">
              <p>Clinic : {reducerData.nurseProfile.nurseSchedule && reducerData.nurseProfile.nurseSchedule[0].clinicSchedule.clinicName} </p>
              <table className="mt-3">
                <tr><th>Day</th><th>Time</th></tr>
                {reducerData.nurseProfile.nurseSchedule && reducerData.nurseProfile.nurseSchedule
                  .map((schedule, index) => (
                    <tr>
                      <th>{schedule.clinicSchedule.day}</th>
                      <th>{schedule.clinicSchedule.time}</th>

                    </tr>


                  )
                  )}
              </table>
              <div className="mr-5" >
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
export default withReducer('nurseDetails', reducer)(NurseSchedule);

