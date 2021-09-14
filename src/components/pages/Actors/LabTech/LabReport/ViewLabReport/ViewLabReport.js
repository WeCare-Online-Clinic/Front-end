import React ,{useEffect}from 'react'
import Layout from '../../../../../Layout'
import Header from '../../../../../Header'
import Footer from '../../../../../Footer'
import SideBar from '../../../../../Sidebar/Sidebar'
import { labtechMenuItems } from '../../../../../Sidebar/menuItem'
import withReducer from '../../../../../../store/withReducer';
import reducer from '../store/reducer/index';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from "../store/actions/ReportAction";
import LabReportTable from './LabReportTable'
import { getStorageItem } from '../../../../../../utils/StorageUtils'
 

const labTechDetails= getStorageItem('labTechInfo', true);

function ViewReport() {

const reducerData = useSelector(({report}) => report.manageReport);

const dispatch = useDispatch();
useEffect(() => {
    dispatch(Actions.getReport());

}, [])

  return (
    <Layout
      header={<Header user="madhavi"/>}    
      sidebar={<SideBar menuItems={labtechMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px' }}>
        <LabReportTable/>
          
        </div>
      }
    ></Layout>
  )
}

export default withReducer('report', reducer)(ViewReport);