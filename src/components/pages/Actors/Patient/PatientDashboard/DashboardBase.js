import React, { useEffect } from 'react'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { patientMenuItems } from '../../../../Sidebar/menuItem'
import axios from 'axios'
import Constants from '../../../../../utils/Constants'
import { getStorageItem, setStorageItem } from '../../../../../utils/StorageUtils'
import Dashboard from './Dashboard'
import * as Actions from './store/action/PatientDashboardAction'
import { useDispatch } from 'react-redux'

async function get_patient_info() {
    const getUserInfo = await axios
        .get(
            Constants.API_BASE_URL + '/patient/info/' + getStorageItem('user', true).id
        )
        .then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setStorageItem('patientInfo', res.data)
            }
        })
        .catch((e) => {
            console.log(e)
        })
}
get_patient_info();

const patientName = getStorageItem('patientInfo', true).name 
const patientId=getStorageItem('patientInfo', true).id;  
const patient = getStorageItem('patientInfo', true) 
const DashboardBase = () => {
    const dispatch = useDispatch();  

    useEffect(() => {
       
            dispatch(Actions.getNextClinicDetails(patientId));
       
    }, [])

   

    return (
        <Layout
            header={<Header user={patientName} />}
            sidebar={<Sidebar menuItems={patientMenuItems} />}
            footer={<Footer />}
            content={
                <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
                    <Dashboard patient={patient} />
                </div>
            }
        ></Layout>
    )
}

export default DashboardBase
