import React from 'react'
import logo from '../../assets/img/logo.png'
import './upperbar.css'
import {FaPhoneAlt} from "react-icons/fa";
import {MdPlace} from "react-icons/md";
// import {
//     CBadge,
//     CCard,
//     CCardBody,
//     CCardFooter,
//     CCardHeader,
//     CCol,
//     CRow,
//     CCollapse,
//     CFade,
//     CSwitch,
//     CLink
//   } from  '@coreui/react'
function Upperbar() {
    return (
        
        <div className="upperbar"  >       
                 <div className="logo"><img className="logo" src={logo} alt="logo"/></div>
                 <ul className='upper-items'>
                 <div style={{fontWeight:"bold"}}><MdPlace color="blue" size="3em"/>Location<br/><h5 style={{color:"blue"}}> Suwaya Hospital,<br/>Colombo 10 </h5></div>
                 <div style={{fontWeight:"bold"}}><FaPhoneAlt color="blue" size="3em" />Contact Informatoin Hub <br/><h4 style={{color:"blue"}}>1979</h4></div>
                 </ul>
    
        </div>
    )
}

export default Upperbar
