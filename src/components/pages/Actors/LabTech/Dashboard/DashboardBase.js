import React ,{useEffect} from 'react'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { labtechMenuItems } from '../../../../Sidebar/menuItem'
import { getStorageItem ,setStorageItem} from '../../../../../utils/StorageUtils'
import axios from 'axios'
import Constants from '../../../../../utils/Constants'
import Dashboard from './Dashboard'
import { useDispatch } from 'react-redux'
import * as Actions from './store/action'



async function get_labTech_info() {  
  const getUserInfo = await axios
    .get(
      Constants.API_BASE_URL +'/labTech/info/' + getStorageItem('user', true).id )
    .then((res) => {
      if (res.status === 200) {
        setStorageItem('labTechInfo', res.data);
        console.log("LabTech Details..............:",res.data)
      }
      else{
        console.log("djfdfjdgfhg")
      }
    })
    .catch((e) => {
      console.log("error in labtech login")
      console.log(e)
    })
}
const labTechDetails= getStorageItem('labTechInfo', true);
console.log("labTechDetails",labTechDetails)

const DashboardBase=()=> {
    const dispatch = useDispatch(); 

  useEffect(() => {  
    get_labTech_info();  
    dispatch(Actions.getDataCardDetails());
    dispatch(Actions.getMonthlyIssuedReports());
    dispatch(Actions.getIssuedReportTypes());

     
  }, []) 

  return (
    <Layout
      header={<Header user="madhavi" />}
      sidebar={<Sidebar menuItems={labtechMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px' }}>
          <Dashboard />
        </div>
      }
    ></Layout>
  )
}

export default DashboardBase
