import React from 'react'
import Layout from '../../../../../Layout'
import Header from '../../../../../Header'
import Footer from '../../../../../Footer'
import AdminSideBar from '../../../../../Sidebar/Sidebar'
import AddDoctors from './AddDoctors'
import { adminMenuItems } from '../../../../../Sidebar/menuItem'
import { getStorageItem } from '../../../../../../utils/StorageUtils'

const adminDetails = getStorageItem('adminInfo', true)

function AddDoctorBase() {
  return (
    <Layout
      header={<Header user={adminDetails.name} />}
      sidebar={<AdminSideBar menuItems={adminMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px', minHeight: '889px' }}>
          <AddDoctors />
        </div>
      }
    ></Layout>
  )
}

export default AddDoctorBase
