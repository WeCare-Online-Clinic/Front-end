import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Auth from './authStore/Auth'
import history from './@history'
// import Notification from './components/Notification/Notification';

//pages
const Home = React.lazy(() => import('./components/pages/HomePage/Home'))
const SignUp = React.lazy(() => import('./components/pages/SignUp/SignUp'))
const Help = React.lazy(() => import('./components/pages/Help/Help'))
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
const View_Patient = React.lazy(() =>
  import('./components/pages/Actors/Doctor/View_Patient')
)
//

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
)

function App() {
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
                component={View_Patient}
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
            </Switch>
          </React.Suspense>
        </Router>
      </Auth>
    </Provider>
  )
}

export default App
