import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import DoctorSideBar from '../../../Sidebar/DoctorSidebar'
import PatientDataTable from '../../../Table/PatientDataTable'

function View_Patient() {
  return (
    <Layout
      header={<Header />}
      sidebar={<DoctorSideBar />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px' }}>
          <PatientDataTable />
        </div>
      }
    ></Layout>
  )
}

export default View_Patient
