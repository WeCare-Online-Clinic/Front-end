import React,{useEffect,useState} from 'react'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { adminMenuItems } from '../../../../Sidebar/menuItem'
import AdminDashboard from './AdminDashboard'
import * as Actions from './store/action'
import { useDispatch } from 'react-redux'



function AdminDashboardBase() {
  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(Actions.getUserCounts());
    dispatch(Actions.getOnlineUsers());
    dispatch(Actions.getRegisteredUsers());
    
     
  }, []) 

  return (
    <Layout
      header={<Header user='Kasun' />}
      sidebar={<Sidebar menuItems={adminMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
          <AdminDashboard />
        </div>
      }
    ></Layout>
  )
}



export default AdminDashboardBase
