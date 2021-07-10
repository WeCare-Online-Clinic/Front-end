import React ,{useEffect}from 'react'
import Layout from '../../../../../Layout'
import Header from '../../../../../Header'
import Footer from '../../../../../Footer'
import DoctorSideBar from '../../../../../Sidebar/Sidebar'
import { adminMenuItems } from '../../../../../Sidebar/menuItem'
import withReducer from '../../../../../../store/withReducer';
import reducer from '../store/reducer/index';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from "../store/actions/doctor.add.edit.action";
import DoctorDataTable from './DoctorDataTable'

function ViewDoctorsBase() {

//   const reducerData = useSelector(({doctor}) => doctor.doctorAddEdit);

const dispatch = useDispatch();
useEffect(() => {
    dispatch(Actions.getDoctors());

}, [])

  return (
    <Layout
      header={<Header />}    
      sidebar={<DoctorSideBar menuItems={adminMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px' }}>
        <DoctorDataTable/>
          
        </div>
      }
    ></Layout>
  )
}

export default withReducer('doctor', reducer)(ViewDoctorsBase);