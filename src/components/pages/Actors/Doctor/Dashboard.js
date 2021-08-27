import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import DataCard from '../../../DataCard/DataCard'
import { doctorMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import { doctorDataItems } from '../../../DataCard/DataItems'
import LineStatCard from '../../../StatCard/LineStatCard'
import PieStatCard from '../../../StatCard/PieStatCard'
import BarStatCard from '../../../StatCard/BarStatCard'
import { Button } from '@material-ui/core'
import { getStorageItem, setStorageItem } from '../../../../utils/StorageUtils'
import axios from 'axios'
import Constants from '../../../../utils/Constants'

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

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
    marginTop: '10px',
  },
})

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

function Dashboard() {
  return (
    <Layout
      header={<Header user={fullName} />}
      sidebar={<Sidebar menuItems={doctorMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
          <Content />
        </div>
      }
    ></Layout>
  )
}

function Content() {
  const classes = useStyles()
  return (
    <Grid container style={{ padding: '20px' }} spacing={5}>
      <Grid className={classes.dataCard} item sm={12}>
        <DataCard cardItems={doctorDataItems} />
      </Grid>
      <Grid item sm={12}>
        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
          <Grid className={classes.dataCard} item sm={6}>
            <PieStatCard title='Diagnosis' />
          </Grid>
          <Grid className={classes.dataCard} item sm={6}>
            <LineStatCard title='Consulted Patients' />
          </Grid>
          <Grid className={classes.dataCard} item sm={6}>
            <LineStatCard title='Patients in Clinic' />
          </Grid>
          <Grid className={classes.dataCard} item sm={6}>
            <BarStatCard title='Patients ( Age )' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Dashboard
