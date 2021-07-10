import React from 'react'
import Layout from '../../../../../Layout'
import Header from '../../../../../Header'
import Footer from '../../../../../Footer'
import AdminSideBar from '../../../../../Sidebar/Sidebar'
import { adminMenuItems } from '../../../../../Sidebar/menuItem'
import withReducer from '../../../../../../store/withReducer';
import reducer from '../store/reducer/index';
import { useDispath, useSelector } from 'react-redux';
import * as Actions from "../store/actions/NurseAction";
import AddNurses from './AddNurses'

function AddNurseBase() {

  const reducerData = useSelector(({nurse}) => nurse.manageNurse);

  return (
    <Layout
      header={<Header />}
      sidebar={<AdminSideBar menuItems={adminMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px' }}>
          <AddNurses />    
        </div>
      }
    ></Layout>
  )
}

export default withReducer('nurse', reducer)(AddNurseBase);