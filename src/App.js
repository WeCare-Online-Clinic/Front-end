import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Auth from './authStore/Auth'
import history from './@history'
import View_Patient from './components/pages/Actors/Doctor/View_Patient'
// import Notification from './components/Notification/Notification';




const Home = React.lazy(() => import('./components/pages/HomePage/Home'))
const SignUp = React.lazy(() => import('./components/pages/SignUp/SignUp'))
const Help = React.lazy(() => import('./components/pages/Help/Help'))
const Login = React.lazy(() => import('./components/pages/Login/Login'))
const Notification = React.lazy(() => import('./components/Notification/Notification'))

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
              <Route path='/viewpatient' exact  component={View_Patient}></Route>
              <Route path='/notification' exact  component={Notification}></Route>
            </Switch>
          </React.Suspense>
        </Router>
      </Auth>
    </Provider>

  )
}

export default App
