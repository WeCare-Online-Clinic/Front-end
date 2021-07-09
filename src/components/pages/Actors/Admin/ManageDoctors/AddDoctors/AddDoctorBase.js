import React from 'react'
import Layout from '../../../../../Layout'
import Header from '../../../../../Header'
import Footer from '../../../../../Footer'
import DoctorSideBar from '../../../../../Sidebar/Sidebar'
import AddDoctors from './AddDoctors'
import { adminMenuItems } from '../../../../../Sidebar/menuItem'
import withReducer from '../../../../../../store/withReducer';
import reducer from '../store/reducer/index';
import { useDispath, useSelector } from 'react-redux';
import * as Actions from "../store/actions/doctor.add.edit.action";

function AddDoctorBase() {

  const reducerData = useSelector(({doctor}) => doctor.doctorAddEdit);

  return (
    <Layout
      header={<Header />}
      // sidebar={<SideBar menuItems={doctorMenuItems} />}
      sidebar={<DoctorSideBar menuItems={adminMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px' }}>
          <AddDoctors />
          {/* <Password/>  */}
        </div>
      }
    ></Layout>
  )
}

export default withReducer('doctor', reducer)(AddDoctorBase);