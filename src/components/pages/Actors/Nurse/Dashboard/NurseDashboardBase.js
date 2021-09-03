import React,{useEffect} from 'react'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { nurseMenuItems } from '../../../../Sidebar/menuItem'
import NurseDashboard from './NurseDashboard'
import * as Actions from './store/action'
import { useDispatch } from 'react-redux'
import Constants from '../../../../../utils/Constants'
import axios from 'axios'
import { getStorageItem, setStorageItem } from '../../../../../utils/StorageUtils'

async function get_nurse_info() {
  const getUserInfo = await axios
      .get(
          Constants.API_BASE_URL + '/nurse/info/' + getStorageItem('user', true).id
      )
      .then((res) => {
          if (res.status === 200) {
              console.log("responce nurse data",res.data)
              setStorageItem('nurseInfo', res.data)
          }
      })
      .catch((e) => {
          console.log(e)
      })
}

get_nurse_info()

const nurse = getStorageItem('nurseInfo', true)
const nurseId=nurse.id;
const clinicId=nurse.clinic.id;
console.log("clinic id:",clinicId);
const nurseName = getStorageItem('nurseInfo', true).name


const NurseDashboardBase=()=> {
  const dispatch = useDispatch(); 
  useEffect(() => {    
      // dispatch(Actions.getDataCardDetails(nurseId));
      dispatch(Actions.getDiagnosis(clinicId));
      dispatch(Actions.getPatientAge(clinicId));
      dispatch(Actions.getPatientCountInClinic(clinicId));
      dispatch(Actions.getConsultedPatientsData(nurseId));
  
  
  }, [])
  return (
    <Layout
      header={<Header user={nurseName} />}
      sidebar={<Sidebar menuItems={nurseMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
            <NurseDashboard nurseProfile={nurse} />
        </div>
      }
    ></Layout>
  )
}



export default NurseDashboardBase