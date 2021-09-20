import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { patientMenuItems } from '../../../Sidebar/menuItem'
import { Card, CardHeader, Grid, makeStyles } from '@material-ui/core'
import PatientProfileCard from '../../../ProfileCard/PatientProfileCard'
// import ScheduleTable from '../../../Table/ScheduleTable'
import PatientClinicHisTable from '../../../Table/PatientClinicHisTable'
import { getStorageItem } from '../../../../utils/StorageUtils'
import { useState, useEffect } from 'react'
import Constants from '../../../../utils/Constants'
import axios from 'axios'

const useStyles = makeStyles({
  dataCard: {
    borderRadius: '5px',
  },
})
async function get_clinic_data() {
  console.log('clinic history')

  let clinic_data = []

  try {
    await axios
      .get(Constants.API_BASE_URL + '/patient/clinic/history/list/' + patientInfo.id)
      .then((res) => {
        if (res.status == 200) {
          console.log(res)
          clinic_data = res.data
        }
      })
    return clinic_data
  } catch (error) {
    console.log(error)
  }
}

const patientInfo = getStorageItem('patientInfo', true)
console.log(patientInfo)

function Profile() {

  
  return (
    <Layout
      header={<Header user={getStorageItem('patientName')} />}
      sidebar={<Sidebar menuItems={patientMenuItems} />}
      footer={<Footer />}
      content={
        <div
          style={{
            padding: '20px',
            minHeight: '880px',
            backgroundColor: '#ebf5f7',
          }}
        >
          <Content />
        </div>
      }
    ></Layout>
  )
}

function Content() {
  const classes = useStyles()

  const [clinicData, setClinicData] = useState([])
  const [data, setData] = useState()

  const renderData = (data) => {
    setData(data)
  }

  useEffect(() => {
    get_clinic_data().then((res) => {
      setClinicData(res)
      console.log(res)
    })
  }, [])

  return (
    <Grid container spacing={5}>
      <Grid item sm={4}>
        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
          <Grid className={classes.dataCard} item sm={12}>
            <PatientProfileCard  patient={patientInfo}/>
          </Grid>
          <Grid className={classes.dataCard} item sm={12}>
            {/* <Card>
              <CardHeader
                title='Schedule Info'
                style={{ textAlign: 'center', color: '#3f51b5' }}
              ></CardHeader>
            </Card> */}
            {/* <ScheduleTable /> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={8}>
        <CardHeader
          title='Clinic History'
          style={{
            textAlign: 'center',
            backgroundColor: '#3f51b5',
            color: '#fff',
          }}
        ></CardHeader>
        <PatientClinicHisTable clinicData={clinicData} func={renderData} />
      </Grid>
    </Grid>
  )
}

export default Profile
