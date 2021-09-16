import React from 'react'
import Layout from '../../../../../Layout'
import Header from '../../../../../Header'
import Footer from '../../../../../Footer'
import Sidebar from '../../../../../Sidebar/Sidebar'
import { labtechMenuItems } from '../../../../../Sidebar/menuItem'
import { getStorageItem } from '../../../../../../utils/StorageUtils'
import AddLabReport from './AddLabReport'
import {useLocation} from 'react-router-dom'

const labTechDetails= getStorageItem('labTechInfo', true);


const AddLabReportBase=()=> {
    const location = useLocation();
    const testDetails=location.state;

  return (
    <Layout
      header={<Header user={labTechDetails && labTechDetails.name} />}
      sidebar={<Sidebar menuItems={labtechMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ backgroundColor: '#fff' }}>
          <AddLabReport testDetails={testDetails} />
        </div>
      }
    ></Layout>
  )
}



export default AddLabReportBase