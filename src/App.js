import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Auth from './authStore/Auth'
import history from './@history'

const Home = React.lazy(() => import('./components/pages/HomePage/Home'))
const SignUp = React.lazy(() => import('./components/pages/SignUp/SignUp'))
const Help = React.lazy(() => import('./components/pages/Help/Help'))
const Login = React.lazy(() => import('./components/pages/Login/Login'))
const Notification = React.lazy(() =>
  import('./components/Notification/Notification')
)
const SetPassword = React.lazy(() =>
  import('./components/pages/SetPassword/SetPassword')
)

/* --- Error Pages --- */
const SetPasswordError = React.lazy(() =>
  import('./components/Errors/SetPasswordError')
)
/* ------------------- */

/* --- Admin Pages --- */
const AdminDashboard = React.lazy(() =>
  import('./components/pages/Actors/Admin/AdminDashboard/AdminDashboardBase')
)
const AddDoctor = React.lazy(() =>
  import(
    './components/pages/Actors/Admin/ManageDoctors/AddDoctors/AddDoctorBase'
  )
)
const ViewDoctors = React.lazy(() =>
  import(
    './components/pages/Actors/Admin/ManageDoctors/ViewDoctors/ViewDoctorsBase'
  )
)
const AddNurses = React.lazy(() =>
  import('./components/pages/Actors/Admin/ManageNurses/AddNurses/AddNurseBase')
)
const ViewNurses = React.lazy(() =>
  import(
    './components/pages/Actors/Admin/ManageNurses/ViewNurses/ViewNurseBase'
  )
)
const AdminDoctorSchedule = React.lazy(() =>
  import('./components/pages/Actors/Admin/DoctorSchedule/DoctorScheduleBase')
)
const AdminNurseSchedule = React.lazy(() =>
  import('./components/pages/Actors/Admin/NurseShedule/NurseScheduleBase')
)
const AdminNotification = React.lazy(() =>
  import('./components/pages/Actors/Admin/Notification')
)
/* -------------------- */

/* --- Doctor Pages --- */
const DoctorDashboard = React.lazy(() =>
  import('./components/pages/Actors/Doctor/DoctorDashboard/DoctorDashboardBase')
)
const DoctorProfile = React.lazy(() =>
  import('./components/pages/Actors/Doctor/Profile')
)
const ViewPatient = React.lazy(() =>
  import('./components/pages/Actors/Doctor/ViewPatient')
)
const PatientData = React.lazy(() =>
  import('./components/pages/Actors/Doctor/PatientData')
)
const PatientHistory = React.lazy(() =>
  import('./components/pages/Actors/Doctor/PatientClinicHistory')
)
const PatientReport = React.lazy(() =>
  import('./components/pages/Actors/Doctor/PatientReport')
)
const Consultation = React.lazy(() =>
  import('./components/pages/Actors/Doctor/Consultation')
)
const ViewClinicHistory = React.lazy(() =>
  import('./components/pages/Actors/Doctor/ViewClinicHistory')
)
const ClinicSummary = React.lazy(() =>
  import('./components/pages/Actors/Doctor/ClinicSummary')
)
const Statistics = React.lazy(() =>
  import('./components/pages/Actors/Doctor/Statistics/StatisticsBase')
)

/* -------------------- */

/* --- Patient Pages --- */
const PatientDashboard = React.lazy(() =>
  import('./components/pages/Actors/Patient/PatientDashboard/DashboardBase')
)
const ClinicHistory = React.lazy(() =>
  import('./components/pages/Actors/Patient/ClinicHistory')
)
const LabReports = React.lazy(() =>
  import('./components/pages/Actors/Patient/LabReports')
)
/* --------------------- */

/* --- Nurse Pages --- */
const NurseDashboard = React.lazy(() =>
  import('./components/pages/Actors/Nurse/Dashboard/NurseDashboardBase')
)
const NurseProfile = React.lazy(() =>
  import('./components/pages/Actors/Nurse/Profile')
)
const NurseViewPatient = React.lazy(() =>
  import('./components/pages/Actors/Nurse/ViewPatient/ViewPatients/ViewPatient')
)
const NurseDoctorProfile = React.lazy(() =>
  import('./components/pages/Actors/Nurse/DoctorProfile/ViewDoctorBase')
)
const NursePatientProfile = React.lazy(() =>
  import('./components/pages/Actors/Nurse/PatientProfile/ViewPatientBase')
)
const NurseViewDoctor = React.lazy(() =>
  import(
    './components/pages/Actors/Nurse/ViewDoctor/ViewDoctors/ViewDoctorsBase'
  )
)
const NurseViewQueue = React.lazy(() =>
  import('./components/pages/Actors/Nurse/ViewQueue')
)
const NurseAddLabTest = React.lazy(() =>
  import('./components/pages/Actors/Nurse/AddLabTest')
)
/* ------------------ */

/* --- Lab Tech Pages --- */
const LabDashboard = React.lazy(() =>
  import('./components/pages/Actors/LabTech/Dashboard')
)
const LabProfile = React.lazy(() =>
  import('./components/pages/Actors/LabTech/Profile')
)
const LabViewLabReport = React.lazy(() =>
  import(
    './components/pages/Actors/LabTech/LabReport/ViewLabReport/ViewLabReport'
  )
)
const AddLabReport = React.lazy(() =>
  import('./components/pages/Actors/LabTech/LabReport/AddLabReport/AddLabReportBase')
)
const LabTechTestProfile = React.lazy(() =>
  import('./components/pages/Actors/LabTech/TestProfile/ViewTestBase')
)
const LabTechReportProfile = React.lazy(() =>
  import('./components/pages/Actors/LabTech/ReportProfile/ViewReportBase')
)

const LabViewLabTest = React.lazy(() =>
  import('./components/pages/Actors/LabTech/LabTest/ViewLabTest/ViewLabTest')
)
const AddLabTest = React.lazy(() =>
  import('./components/pages/Actors/LabTech/AddLabTests/AddLabTestBase')
)

/* --- Head Nurse Pages --- */
const HeadNurseDashboard = React.lazy(() =>
  import('./components/pages/Actors/Head Nurse/Dashboard/HeadNurseDashboadBase')
)
const HeadNurseViewPatient = React.lazy(() =>
  import(
    './components/pages/Actors/Head Nurse/ManagePatient/ViewPatients/ViewPatient'
  )
)
const HeadNurseViewQueue = React.lazy(() =>
  import('./components/pages/Actors/Head Nurse/ViewQueue')
)
const HeadNurseViewDoctor = React.lazy(() =>
  import(
    './components/pages/Actors/Head Nurse/Clinic/ViewDoctors/ViewDoctorsBase'
  )
)
const HeadNurseProfile = React.lazy(() =>
  import('./components/pages/Actors/Head Nurse/HeadNurseProfile')
)
const HeadNurseRegister = React.lazy(() =>
  import('./components/pages/Actors/Head Nurse/RegisterPatient')
)
const HeadNurseDoctorProfile = React.lazy(() =>
  import('./components/pages/Actors/Head Nurse/DoctorProfile/ViewDoctorBase')
)
const HeadNursePatientProfile = React.lazy(() =>
  import('./components/pages/Actors/Head Nurse/PatientProfile/ViewPatientBase')
)
const HeadNurseSendMessage = React.lazy(() =>
  import('./components/pages/Actors/Head Nurse/SendMessage/Message/SendMessage')
)
const HeadNurseAddLabTest = React.lazy(() =>
  import('./components/pages/Actors/Head Nurse/AddLabTest')
)
const HeadNurseHandleRequest = React.lazy(() =>
  import('./components/pages/Actors/Head Nurse/DateTime')
)
const HeadNurseManageRequest = React.lazy(() =>
  import('./components/pages/Actors/Head Nurse/ManageRequest')
)

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
)

const App = () => {
  return (
    <Provider store={store}>
      <Auth>
        <Router history={history}>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' component={Login}></Route>
              <Route path='/help' component={Help}></Route>
              <Route path='/signup' component={SignUp}></Route>
              <Route
                path='/notification'
                exact
                component={Notification}
              ></Route>
              <Route path='/setup/account/' component={SetPassword}></Route>

              {/* --- Error Pages --- */}
              <Route
                path='/set password/error'
                component={SetPasswordError}
              ></Route>
              {/* ------------------- */}

              {/* --- Admin Routes --- */}
              <Route
                path='/admin/dashboard'
                exact
                component={AdminDashboard}
              ></Route>
              <Route
                path='/admin/doctorschedule'
                exact
                component={AdminDoctorSchedule}
              ></Route>
              <Route
                path='/admin/nurseschedule'
                exact
                component={AdminNurseSchedule}
              ></Route>
              <Route
                path='/admin/notification'
                exact
                component={AdminNotification}
              ></Route>
              <Route path='/addDoctor' exact component={AddDoctor}></Route>
              <Route
                path='/admin/registerdoctors'
                exact
                component={AddDoctor}
              ></Route>
              <Route
                path='/admin/viewdoctors'
                exact
                component={ViewDoctors}
              ></Route>
              <Route
                path='/admin/registernurse'
                exact
                component={AddNurses}
              ></Route>
              <Route
                path='/admin/viewnurse'
                exact
                component={ViewNurses}
              ></Route>
              {/* --------------------- */}

              {/* --- Doctor Routes --- */}
              <Route
                path='/doctor/dashboard'
                exact
                component={DoctorDashboard}
              ></Route>
              <Route
                path='/doctor/profile'
                exact
                component={DoctorProfile}
              ></Route>
              <Route
                path='/doctor/viewpatient'
                exact
                component={ViewPatient}
              ></Route>
              <Route
                path='/doctor/patientdata'
                exact
                component={PatientData}
              ></Route>
              <Route
                path='/doctor/patienthistory'
                exact
                component={PatientHistory}
              ></Route>
              <Route
                path='/doctor/patientreport'
                exact
                component={PatientReport}
              ></Route>
              <Route
                path='/doctor/consultation'
                exact
                component={Consultation}
              ></Route>
              <Route
                path='/doctor/clinichistory'
                exact
                component={ViewClinicHistory}
              ></Route>
              <Route
                path='/doctor/clinicsummary'
                exact
                component={ClinicSummary}
              ></Route>
              <Route
                path='/doctor/statistics'
                exact
                component={Statistics}
              ></Route>
              {/* ------------------ */}

              {/* --- Patient Routes --- */}
              <Route
                path='/patient/dashboard'
                exact
                component={PatientDashboard}
              ></Route>
              <Route
                path='/patient/patienthistory'
                exact
                component={ClinicHistory}
              ></Route>
              <Route
                path='/patient/patientreport'
                exact
                component={LabReports}
              ></Route>
              {/* --------------------- */}

              {/* --- Nurse Routes --- */}
              <Route
                path='/nurse/dashboard'
                exact
                component={NurseDashboard}
              ></Route>
              <Route
                path='/nurse/profile'
                exact
                component={NurseProfile}
              ></Route>
              <Route
                path='/nurse/viewqueue'
                exact
                component={NurseViewQueue}
              ></Route>
              <Route
                path='/nurse/viewpatient'
                exact
                component={NurseViewPatient}
              ></Route>
              <Route
                path='/nurse/patientprofile'
                exact
                component={NursePatientProfile}
              ></Route>
              <Route
                path='/nurse/doctorprofile'
                exact
                component={NurseDoctorProfile}
              ></Route>
              <Route
                path='/nurse/viewdoctor'
                exact
                component={NurseViewDoctor}
              ></Route>
              <Route
                path='/nurse/addlabtest'
                exact
                component={NurseAddLabTest}
              ></Route>
              {/* -------------------- */}

              {/* --- Lab Tech Routes --- */}
              <Route
                path='/labtech/dashboard'
                exact
                component={LabDashboard}
              ></Route>
              <Route
                path='/labtech/viewlabtest'
                exact
                component={LabViewLabTest}
              ></Route>
              <Route
                path='/labtech/testprofile'
                exact
                component={LabTechTestProfile}
              ></Route>
              <Route
                path='/labtech/reportprofile'
                exact
                component={LabTechReportProfile}
              ></Route>
              <Route
                path='/labtech/viewlabreport'
                exact
                component={LabViewLabReport}
              ></Route>
              <Route
                path='/labtech/dashboard'
                exact
                component={LabDashboard}
              ></Route>
              <Route
                path='/labtech/profile'
                exact
                component={LabProfile}
              ></Route>

              <Route
                path='/admin/registerdoctors'
                exact
                component={AddDoctor}
              ></Route>
              <Route
                path='/admin/viewdoctors'
                exact
                component={ViewDoctors}
              ></Route>
              <Route
                path='/admin/registernurse'
                exact
                component={AddNurses}
              ></Route>
              <Route
                path='/admin/viewnurse'
                exact
                component={ViewNurses}
              ></Route>

              {/* --- Head Nurse Routes --- */}
              <Route
                path='/headnurse/dashboard'
                exact
                component={HeadNurseDashboard}
              ></Route>
              <Route
                path='/headnurse/viewqueue'
                exact
                component={HeadNurseViewQueue}
              ></Route>
              <Route
                path='/headnurse/viewdoctors'
                exact
                component={HeadNurseViewDoctor}
              ></Route>
              <Route
                path='/headnurse/viewpatients'
                exact
                component={HeadNurseViewPatient}
              ></Route>
              <Route
                path='/headnurse/profile'
                exact
                component={HeadNurseProfile}
              ></Route>
              <Route
                path='/headnurse/register/patientregister'
                exact
                component={HeadNurseRegister}
              ></Route>
              <Route
                path='/headnurse/doctorprofile'
                exact
                component={HeadNurseDoctorProfile}
              ></Route>
              <Route
                path='/headnurse/patientprofile'
                exact
                component={HeadNursePatientProfile}
              ></Route>
              <Route
                path='/headnurse/sendmessage'
                exact
                component={HeadNurseSendMessage}
              ></Route>
              <Route
                path='/headnurse/addlabtest'
                exact
                component={HeadNurseAddLabTest}
              ></Route>
              <Route
                path='/headnurse/datetime'
                exact
                component={HeadNurseHandleRequest}
              ></Route>
              <Route
                path='/headnurse/patientrequest'
                exact
                component={HeadNurseManageRequest}
              ></Route>
              {/* --------------------- */}

              <Route
                path='/labtech/viewlabreport'
                exact
                component={LabViewLabReport}
              ></Route>
              <Route
                path='/labtech/addlabreport'
                exact
                component={AddLabReport}
              ></Route>
              <Route
                path='/labtech/viewlabreport'
                exact
                component={LabViewLabReport}
              ></Route>
              <Route
                path='/labtech/addlabtest'
                exact
                component={AddLabTest}
              ></Route>
            </Switch>
          </React.Suspense>
        </Router>
      </Auth>
    </Provider>
  )
}

export default App
