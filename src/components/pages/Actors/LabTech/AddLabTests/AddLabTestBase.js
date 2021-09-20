import React from 'react'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { labtechMenuItems } from '../../../../Sidebar/menuItem'
import { getStorageItem } from '../../../../../utils/StorageUtils'
import AddLabTest from './AddLabTest'

const labTechDetails= getStorageItem('labTechInfo', true);


const AddLabTestBase=()=> {
  return (
    <Layout
      header={<Header user={labTechDetails.name} />}
      sidebar={<Sidebar menuItems={labtechMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ backgroundColor: '#fff',minHeight: '775px', }}>
          <AddLabTest />
        </div>
      }
    ></Layout>
  )
}



export default AddLabTestBase