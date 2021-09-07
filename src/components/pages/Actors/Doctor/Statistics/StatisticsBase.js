import React, { useEffect } from 'react'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { doctorMenuItems } from '../../../../Sidebar/menuItem'
import { getStorageItem } from '../../../../../utils/StorageUtils'
import Statistics from './Statistics'
import * as Actions from './store/action'
import { useDispatch } from 'react-redux'

const doctor = getStorageItem('doctorInfo', true)
const doctorId = doctor.id
const clinicId = doctor.clinic.id
const doctorName = getStorageItem('doctorName')

const StatisticsBase = () => {
  return (
    <Layout
      header={<Header user={doctorName} />}
      sidebar={<Sidebar menuItems={doctorMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
          <Statistics />
        </div>
      }
    ></Layout>
  )
}

export default StatisticsBase
