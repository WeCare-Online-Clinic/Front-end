import React, { useEffect, useState } from 'react'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { adminMenuItems } from '../../../../Sidebar/menuItem'
import AdminDashboard from './AdminDashboard'
import * as Actions from './store/action'
import { useDispatch } from 'react-redux'
import {
  getStorageItem,
  setStorageItem,
} from '../../../../../utils/StorageUtils'
import axios from 'axios'
import Constants from '../../../../../utils/Constants'

async function get_admin_info() {
  const getUserInfo = await axios
    .get(
      Constants.API_BASE_URL + '/admin/info/' + getStorageItem('user', true).id
    )
    .then((res) => {
      if (res.status === 200) {
        setStorageItem('adminInfo', res.data)
        console.log('Admin Details..............:', res.data)
      }
    })
    .catch((e) => {
      console.log(e)
    })
}
const adminDetails = getStorageItem('adminInfo', true)

function AdminDashboardBase() {
  const dispatch = useDispatch()

  useEffect(() => {
    get_admin_info()
    dispatch(Actions.getUserCounts())
    dispatch(Actions.getOnlineUsers())
    dispatch(Actions.getRegisteredUsers())
  }, [])

  return (
    <Layout
      header={<Header user={adminDetails.name} />}
      sidebar={<Sidebar menuItems={adminMenuItems} />}
      footer={<Footer />}
      content={
        <div
          style={{
            padding: '20px',
            minHeight: '880px',
            backgroundColor: '#ebf5f7',
          }}
        >
          <AdminDashboard />
        </div>
      }
    ></Layout>
  )
}

export default AdminDashboardBase
