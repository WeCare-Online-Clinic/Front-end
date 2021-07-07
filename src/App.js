import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Auth from './authStore/Auth'
import history from './@history'
import View_Patient from './components/pages/Actors/Doctor/View_Patient'

const Home = React.lazy(() => import('./components/pages/HomePage/Home'))
const SignUp = React.lazy(() => import('./components/pages/SignUp/SignUp'))
const Help = React.lazy(() => import('./components/pages/Help/Help'))
const Login = React.lazy(() => import('./components/pages/Login/Login'))

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
)

// const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

function App() {
  return (
    /*  <Provider store={store}>
        <Auth>
          <Router history={history}>
            <React.Suspense fallback={loading}>
              <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/help' component={Help}></Route>
                <Route path='/signup' component={SignUp}></Route>
              </Switch>
            </React.Suspense>
          </Router>
        </Auth>
      </Provider> */
    <View_Patient />
  )
}

export default App
