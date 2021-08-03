import React from 'react'
import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { adminMenuItems } from '../../../../Sidebar/menuItem'
import DoctorSchedule from './DoctorSchedule'
import * as Actions from "./store/action";
import { useDispatch } from 'react-redux'
 


function DoctorScheduleBase() {
  const dispatch = useDispatch(); 
  const location = useLocation();
  useEffect(() => {
    console.log("doctorId:",location.state);
    dispatch(Actions.getDoctorProfileDetailsById(location.state));

}, [location])
  return (
    <Layout
      header={<Header user='Kasun' />}
      sidebar={<Sidebar menuItems={adminMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '50px' }}>
          <DoctorSchedule />
        </div>
      }
    ></Layout>
  )
}



export default DoctorScheduleBase;