import React from 'react'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { headnurseMenuItems } from '../../../../Sidebar/menuItem'
import { getStorageItem } from '../../../../../utils/StorageUtils'
import AddLabTest from './AddLabTest'

const headnurseDetails= getStorageItem('nurseInfo', true);


const AddLabTestBase=()=> {
  return (
    <Layout
      header={<Header user={headnurseDetails.name} />}
      sidebar={<Sidebar menuItems={headnurseMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ backgroundColor: '#fff' }}>
          <AddLabTest />
        </div>
      }
    ></Layout>
  )
}



export default AddLabTestBase