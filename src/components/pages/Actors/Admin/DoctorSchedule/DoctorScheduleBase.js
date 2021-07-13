import React from 'react'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { adminMenuItems } from '../../../../Sidebar/menuItem'
import DoctorSchedule from './DoctorSchedule'


function DoctorScheduleBase() {
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