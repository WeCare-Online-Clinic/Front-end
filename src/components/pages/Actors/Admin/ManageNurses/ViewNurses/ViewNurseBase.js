import React ,{useEffect}from 'react'
import Layout from '../../../../../Layout'
import Header from '../../../../../Header'
import Footer from '../../../../../Footer'
import AdminSideBar from '../../../../../Sidebar/Sidebar'
import { adminMenuItems } from '../../../../../Sidebar/menuItem'
import withReducer from '../../../../../../store/withReducer';
import reducer from '../store/reducer/index';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from "../store/actions/NurseAction";
import NurseDataTable from './NurseDataTable'

function ViewNurseBase() {

const reducerData = useSelector(({nurse}) => nurse.manageNurse);

const dispatch = useDispatch();
useEffect(() => {
    dispatch(Actions.getNurse());

}, [])

  return (
    <Layout
      header={<Header />}    
      sidebar={<AdminSideBar menuItems={adminMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px' }}>
        <NurseDataTable/>
          
        </div>
      }
    ></Layout>
  )
}

export default withReducer('nurse', reducer)(ViewNurseBase);