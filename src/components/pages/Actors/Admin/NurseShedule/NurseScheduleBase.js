import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { adminMenuItems } from '../../../../Sidebar/menuItem'
import NurseSchedule from './NurseSchedule'
import * as Actions from './store/action'
import { useDispatch } from 'react-redux'
import { getStorageItem } from '../../../../../utils/StorageUtils'

const adminDetails = getStorageItem('adminInfo', true)

function NurseScheduleBase() {
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    console.log('nurseId:', location.state)
    dispatch(Actions.getNurseProfileDetailsById(location.state))
  }, [location])
  return (
    <Layout
      header={<Header user={adminDetails.name} />}
      sidebar={<Sidebar menuItems={adminMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '100px', minHeight: '889px' }}>
          <NurseSchedule />
        </div>
      }
    ></Layout>
  )
}

export default NurseScheduleBase
