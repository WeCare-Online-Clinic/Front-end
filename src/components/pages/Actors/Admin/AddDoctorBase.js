import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import DoctorSideBar from '../../../Sidebar/Sidebar'
import AddDoctors from './AddDoctors'
import Password from './password'

function AddDoctorBase() {
  return (
    <Layout
      header={<Header />}
      sidebar={<DoctorSideBar />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px' }}>
          {/* <AddDoctors />
          <Password/> */}
        </div>
      }
    ></Layout>
  )
}

export default AddDoctorBase