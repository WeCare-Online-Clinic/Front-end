import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import SideBar from '../../../Sidebar/Sidebar'
import PatientDataTable from '../../../Table/PatientDataTable'
import { doctorMenuItems } from '../../../Sidebar/menuItem'

function View_Patient() {
  return (
    <Layout
      header={<Header />}
      sidebar={<SideBar menuItems={doctorMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
          <PatientDataTable />
        </div>
      }
    ></Layout>
  )
}

export default View_Patient
