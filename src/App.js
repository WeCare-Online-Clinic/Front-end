import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import store from './store/index'
import Auth from './authStore/Auth'
import history from './@history'

const Home = React.lazy(() => import('./components/pages/HomePage/Home'))
const SignUp = React.lazy(() => import('./components/pages/SignUp/SignUp'))
const Help = React.lazy(() => import('./components/Register'))
const Login = React.lazy(() => import('./components/pages/Login/Login'))
const Notification = React.lazy(() =>
  import('./components/Notification/Notification')
)

/* --- Admin Pages --- */
const AdminDashboard = React.lazy(() =>
  import('./components/pages/Actors/Admin/Dashboard')
)
const AddDoctor = React.lazy(() =>
  import(
    './components/pages/Actors/Admin/ManageDoctors/AddDoctors/AddDoctorBase'
  )
)
/* -------------------- */

/* --- Doctor Pages --- */
const DoctorDashboard = React.lazy(() =>
  import('./components/pages/Actors/Doctor/Dashboard')
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
/* -------------------- */

/* --- Patient Pages --- */
const PatientDashboard = React.lazy(() =>
  import('./components/pages/Actors/Patient/Dashboard')
)

/* --------------------- */

/* --- Nurse Pages --- */
const NurseDashboard = React.lazy(() =>
  import('./components/pages/Actors/Nurse/Dashboard')
)
/* ------------------ */

/* --- Lab Tech Pages --- */
const LabDashboard = React.lazy(() =>
  import('./components/pages/Actors/Lab_Tech/Dashboard')
)
const ViewLabTest = React.lazy(() =>
  import('./components/pages/Actors/Lab_Tech/ViewLabTest')
)
const ViewLabReport = React.lazy(() =>
  import('./components/pages/Actors/Lab_Tech/ViewLabReport')
)
/* ---------------------- */

//

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

              {/* --- Admin Routes --- */}
              <Route
                path='/admin/dashboard'
                exact
                component={AdminDashboard}
              ></Route>
              {/* --------------------- */}

              {/* --- Doctor Routes --- */}
              <Route
                path='/doctor/dashboard'
                exact
                component={DoctorDashboard}
              ></Route>
              <Route
                path='/doctor/viewpatient'
                exact
                component={ViewPatient}
              ></Route>
              <Route
                path='/doctor/profile'
                exact
                component={DoctorProfile}
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
              {/* ------------------ */}

              {/* --- Patient Routes --- */}
              <Route
                path='/patient/dashboard'
                exact
                component={PatientDashboard}
              ></Route>
              {/* --------------------- */}

              {/* --- Nurse Routes --- */}
              <Route
                path='/nurse/dashboard'
                exact
                component={NurseDashboard}
              ></Route>
              {/* -------------------- */}

              {/* --- Head Nurse Routes --- */}

              {/* --------------------- */}

              {/* --- Lab Tech Routes --- */}
              <Route
                path='/labtech/dashboard'
                exact
                component={LabDashboard}
              ></Route>
              <Route
                path='/labtech/viewlabtest'
                exact
                component={ViewLabTest}
              ></Route>
              <Route
                path='/labtech/viewlabreport'
                exact
                component={ViewLabReport}
              ></Route>
              {/* -------------------- */}

              <Route path='/addDoctor' exact component={AddDoctor}></Route>
            </Switch>
          </React.Suspense>
        </Router>
      </Auth>
    </Provider>
  )
}

export default App
