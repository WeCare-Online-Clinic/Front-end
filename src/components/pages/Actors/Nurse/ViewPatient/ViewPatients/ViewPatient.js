import React ,{useEffect}from 'react'
import Layout from '../../../../../Layout'
import Header from '../../../../../Header'
import Footer from '../../../../../Footer'
import SideBar from '../../../../../Sidebar/Sidebar'
import { nurseMenuItems } from '../../../../../Sidebar/menuItem'
import withReducer from '../../../../../../store/withReducer';
import reducer from '../store/reducer/index';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from "../store/actions/PatientAction";
import PatientDataTable from './PatientDataTable'

function ViewPatient() {

const reducerData = useSelector(({patient}) => patient.managePatient);

const dispatch = useDispatch();
useEffect(() => {
    dispatch(Actions.getPatient());

}, [])

  return (
    <Layout
      header={<Header />}    
      sidebar={<SideBar menuItems={nurseMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px' }}>
        <PatientDataTable/>
          
        </div>
      }
    ></Layout>
  )
}

export default withReducer('patient', reducer)(ViewPatient);