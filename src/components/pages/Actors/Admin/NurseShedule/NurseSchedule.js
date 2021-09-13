import React from 'react'
import '../DoctorSchedule/shedule.css'
import profile from './../.././../../assets/img/nurse.png'
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import { useSelector,useDispatch} from 'react-redux';
import SearchBar from './SearchBar';
import 'reactjs-popup/dist/index.css';
import UpdateSchedule from './UpdateSchedule';
import { format } from 'date-format-parse';
import * as Actions from './store/action'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const NurseSchedule = props => {
  const dispatch = useDispatch();
  const reducerData = useSelector(({ nurseDetails }) => nurseDetails.nurseSchedule);
  const nurseProfile = reducerData.nurseProfile;
  console.log("profile:", nurseProfile);
  let deleteNurse;

  const ChangeStatus = ({closeToast}) => {
      // console.log('delete doctor profile 25', deleteNurse);
      return (
          <div >
              <h4>{deleteNurse.nurseId } will no longer exist in the system <br/>
               Are you sure want to perform the task ?</h4>
              <button onClick={closeToast} style={{ float: 'left', backgroundColor: '#3f51b5',color:'white' }}>No</button>
              <button onClick={() => dispatch(Actions.changeNurseStatus(deleteNurse.id))} style={{ float: 'right', backgroundColor: '#FF0000',color:'white' }}>Yes</button>
          </div>
      )
  }

  const onDeactivate = (nurseId) => {        
    for (var i = 0; i < nurseProfile.length; i++) { 
        if (nurseProfile[i].id == nurseId) { //search for selected nurse object(As nurse profile is an Array of object)
            deleteNurse=nurseProfile[i];        
            toast.error(<ChangeStatus/>, { position: toast.POSITION.TOP_CENTER, autoClose: false })
        }
     
    }

    //types -success,info,warn,error
}
  return (
    <div className="container">
      <div className="row " >
        <nav className="navbar navbar-expand ">
          <div className="collapse navbar-collapse"   >
            {/* <SearchBar /> */}
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
                      <tr className="my"><th>Id :</th><th>{nurseProfile.nurseId}</th></tr>
                      <tr className="my"><th>Name :</th><th>{nurseProfile.name}</th></tr>
                      <tr className="my"><th>Email :</th><th>{nurseProfile.email}</th></tr>
                      <tr className="my"><th>Phone :</th><th>{nurseProfile.contact}</th></tr>
                      <tr className="my"><th>Gender :</th><th>{nurseProfile.gender == 'f' ? 'female' : 'male'}</th></tr>
                      <tr className="my"><th>Type :</th><th>{nurseProfile.isHead == true ? 'head' : 'regular'}</th></tr>
                      <tr className="my"><th>Registered date :</th><th>{format(new Date(nurseProfile.registeredDate), 'YYYY-MM-DD')}</th></tr>
                    </table>



                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row align-items-center"></div>
                <div className="card  bg-light mb-3" >
                  <div clasName="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm', verticalAlign: 'middle' }}>
                    <h3 className="mt-5">Clinic Details</h3>
                  </div>
                  <div className="card-body">
                    <p style={{fontWeight:'bold'}}>Clinic : {nurseProfile.clinic && nurseProfile.clinic.name}</p>
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
                      <button className="btn btn-primary mt-3" style={{ height: '40px', float: 'left', backgroundColor: '#b3246b' }} onClick={() => onDeactivate(nurseProfile.id)}>Block Nurse</button>
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

