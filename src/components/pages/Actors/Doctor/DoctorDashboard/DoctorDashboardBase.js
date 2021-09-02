import React, { useEffect } from 'react'
import Layout from '../../../../Layout'
import Header from '../../../../Header'
import Footer from '../../../../Footer'
import Sidebar from '../../../../Sidebar/Sidebar'
import { doctorMenuItems } from '../../../../Sidebar/menuItem'
import { getStorageItem, setStorageItem } from '../../../../../utils/StorageUtils'
import axios from 'axios'
import Constants from '../../../../../utils/Constants'
import DoctorDashboard from './DoctorDashboard'
import * as Actions from './store/action'
import { useDispatch } from 'react-redux'

async function get_doctor_info() {
    const getUserInfo = await axios
        .get(
            Constants.API_BASE_URL + '/doctor/info/' + getStorageItem('user', true).id
        )
        .then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setStorageItem('doctorInfo', res.data)
            }
        })
        .catch((e) => {
            console.log(e)
        })
}
get_doctor_info()


const doctor = getStorageItem('doctorInfo', true)
const docotorId=doctor.id;
const clinicId=doctor.clinic.id;
console.log("clinic id:",clinicId);
const doctorName = getStorageItem('doctorInfo', true).name
const doctorQualification = getStorageItem('doctorInfo', true).qualification
const isProf = doctorQualification.includes('PhD')

var fullName = ''

if (isProf) {
    fullName = 'Prof. ' + doctorName
} else {
    fullName = 'Dr. ' + doctorName
}
setStorageItem('doctorName', fullName)
console.log(fullName)




const DoctorDashboardBase = () => {
    const dispatch = useDispatch(); 
    useEffect(() => {    
        dispatch(Actions.getDataCardDetails(docotorId));
        dispatch(Actions.getDiagnosis(clinicId));
        dispatch(Actions.getPatientAge(clinicId));
        dispatch(Actions.getPatientCountInClinic(clinicId));
    
    
    }, [])
    return (
        <Layout
            header={<Header user={fullName} />}
            sidebar={<Sidebar menuItems={doctorMenuItems} />}
            footer={<Footer />}
            content={
                <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
                    <DoctorDashboard doctorProfile={doctor} />
                </div>
            }
        ></Layout>
    )
}

export default DoctorDashboardBase;