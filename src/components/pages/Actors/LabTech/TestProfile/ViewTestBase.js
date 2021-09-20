import React, { useEffect, useState } from 'react'
import './profile.css'
import profile from './../.././../../assets/img/pro.png'

import {useLocation} from 'react-router-dom'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { labtechMenuItems } from '../../../../Sidebar/menuItem'
import ViewTest from './ViewTest'
import * as Actions from "./store/action";
import { useDispatch } from 'react-redux'
 


function ViewTestBase() {
  const dispatch = useDispatch(); 
  const location = useLocation();
  useEffect(() => {
    console.log("id:",location.state);
    dispatch(Actions.getTestProfileDetailsById(location.state));

}, [location])


  return (
    <Layout
      header={<Header user="madhavi" />}
      sidebar={<Sidebar menuItems={labtechMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '50px',minHeight: '890px' }}>
          <ViewTest />
        </div>
      }
    ></Layout>
  )
}



export default ViewTestBase;