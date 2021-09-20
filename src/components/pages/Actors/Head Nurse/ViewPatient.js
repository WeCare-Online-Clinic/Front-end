import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import SideBar from '../../../Sidebar/Sidebar'
import PatientViewTable from '../../../Table/PatientViewTable'
import { headnurseMenuItems } from '../../../Sidebar/menuItem'
import { getStorageItem } from '../../../../utils/StorageUtils'

function View_Patient() {
  return (
    <Layout
      header={<Header user={getStorageItem('nurseInfo', true).name} />}
      sidebar={<SideBar menuItems={headnurseMenuItems} />}
      footer={<Footer />}
      content={
        <div
          style={{
            padding: '20px',
            minHeight: '880px',
            backgroundColor: '#ebf5f7',
          }}
        >
          <PatientViewTable />
        </div>
      }
    ></Layout>
  )
}

export default View_Patient
