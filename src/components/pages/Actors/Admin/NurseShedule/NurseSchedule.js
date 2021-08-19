import React from 'react'
import '../DoctorSchedule/shedule.css'
import profile from './../.././../../assets/img/nurse.png'
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import {useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import 'reactjs-popup/dist/index.css';
import UpdateSchedule from './UpdateSchedule';


const NurseSchedule = props => {
  const reducerData = useSelector(({ nurseDetails }) => nurseDetails.nurseSchedule);
  const nurseProfile = reducerData.nurseProfile;


  console.log("profile:", nurseProfile); 
  return (
    <div className="container">
      <div className="row " >
        <nav className="navbar navbar-expand ">
          <div className="collapse navbar-collapse"   >
              <SearchBar/>
          </div>
        </nav>
      </div>
      {

nurseProfile && nurseProfile.map((nurseProfile, index) => (
    <React.Fragment>
      <div className="row " >
        <div className="col">
          <div className="card  bg-light mb-3" >
            <div clasName="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm' }}>

              <div className="row align-items-center" >
                <div className="col">
                  <img src={profile} height="100" width="100" style={{ marginBottom: '5px' }}></img>
                </div>
                <div className="col">
                  <h3>{nurseProfile.name}</h3>
                </div>
              </div>



            </div>
            <div className="card-body">
              <table className="mytable mt-3">
                <tr className="my"><th>Id :</th><th>{nurseProfile.id}</th></tr>
                <tr className="my"><th>Name :</th><th>{nurseProfile.name}</th></tr>
                <tr className="my"><th>Email :</th><th>{nurseProfile.email}</th></tr>
                <tr className="my"><th>Phone :</th><th>{nurseProfile.contact}</th></tr>
                <tr className="my"><th>Gender :</th><th>{nurseProfile.gender=='f'? 'female':'male'}</th></tr>
                <tr className="my"><th>Type :</th><th>{nurseProfile.isHead == true ? 'head' : 'regular'  }</th></tr>
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
              <p>Clinic : {nurseProfile.clinic && nurseProfile.clinic.name}</p>
              <table className="mt-3">
                <tr><th>Day</th><th>Time</th></tr>
                {nurseProfile.nurseSchedule && nurseProfile.nurseSchedule
                  .map((schedule, index) => (
                    <tr>
                      <th>{schedule.clinicSchedule.day}</th>
                      <th>{schedule.clinicSchedule.time}</th>

                    </tr>


                  )
                  )}
              </table>
              <div className="mr-5" >
                <UpdateSchedule nurseProfile={nurseProfile} />
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
export default withReducer('nurseDetails', reducer)(NurseSchedule);

