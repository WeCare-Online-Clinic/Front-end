import React, { useEffect, useState } from 'react'
import './profile.css'
import profile from './../.././../../assets/img/pro.png'

import {useLocation} from 'react-router-dom'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { nurseMenuItems } from '../../../../Sidebar/menuItem'
import ViewDoctor from './ViewDoctor'
import * as Actions from "./store/action";
import { useDispatch } from 'react-redux'
 


function ViewDoctorBase() {
  const dispatch = useDispatch(); 
  const location = useLocation();
  useEffect(() => {
    console.log("doctorId:",location.state);
    dispatch(Actions.getDoctorProfileDetailsById(location.state));

}, [location])
  return (
    <Layout
      header={<Header user="J.T.Prasadi Thilakarathne" />}
      sidebar={<Sidebar menuItems={nurseMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '50px' }}>
          <ViewDoctor />
        </div>
      }
    ></Layout>
  )
}



export default ViewDoctorBase;