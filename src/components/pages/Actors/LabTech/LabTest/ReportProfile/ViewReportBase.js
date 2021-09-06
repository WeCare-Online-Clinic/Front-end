import React, { useEffect, useState } from 'react'
import './profile.css'
import profile from './../.././../../assets/img/pro.png'

import {useLocation} from 'react-router-dom'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { nurseMenuItems } from '../../../../Sidebar/menuItem'
import ViewReport from './ViewReport'
import * as Actions from "./store/action";
import { useDispatch } from 'react-redux'
 


function ViewReportBase() {
  const dispatch = useDispatch(); 
  const location = useLocation();
  useEffect(() => {
    console.log("id:",location.state);
    dispatch(Actions.getReportProfileDetailsById(location.state));

}, [location])


  return (
    <Layout
      header={<Header user='Kasun' />}
      sidebar={<Sidebar menuItems={nurseMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '50px' }}>
          <ViewReport />
        </div>
      }
    ></Layout>
  )
}



export default ViewReportBase;