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
const AdminDashboard = React.lazy(() =>
  import('./components/pages/Actors/Admin/Dashboard')
)
const DoctorDashboard = React.lazy(() =>
  import('./components/pages/Actors/Doctor/Dashboard')
)
const PatientDashboard = React.lazy(() =>
  import('./components/pages/Actors/Patient/Dashboard')
)
const LabDashboard = React.lazy(() =>
  import('./components/pages/Actors/Lab_Tech/Dashboard')
)
const NurseDashboard = React.lazy(() =>
  import('./components/pages/Actors/Nurse/Dashboard')
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
const AddDoctor = React.lazy(() =>
  import('./components/pages/Actors/Admin/ManageDoctors/AddDoctors/AddDoctorBase')
)
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
                path='/doctor/viewpatient'
                exact
                component={ViewPatient}
              ></Route>
              <Route
                path='/notification'
                exact
                component={Notification}
              ></Route>
              <Route
                path='/admin/dashboard'
                exact
                component={AdminDashboard}
              ></Route>
              <Route
                path='/doctor/dashboard'
                exact
                component={DoctorDashboard}
              ></Route>
              <Route
                path='/patient/dashboard'
                exact
                component={PatientDashboard}
              ></Route>
              <Route
                path='/labtech/dashboard'
                exact
                component={LabDashboard}
              ></Route>
              <Route
                path='/nurse/dashboard'
                exact
                component={NurseDashboard}
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
              <Route path='/addDoctor' exact component={AddDoctor}></Route>
            </Switch>
          </React.Suspense>
        </Router>
      </Auth>
    </Provider>
  )
}

export default App;
