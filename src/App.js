import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Header/Navbar';
import Footer from './components/Navbar/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import SignUp from './components/pages/SignUp/SignUp';
import Help from './components/pages/Help/Help';
import Login from './components/pages/Login/Login';


function App() {
  return (

    <div>
      <Router>
        <Navbar />
       
          <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/help" component={Help}></Route>
              <Route path="/signup" component={SignUp}></Route>
          </Switch> 
      
         <Footer/>
        </Router>
      
    </div>
  );
}

export default App;
