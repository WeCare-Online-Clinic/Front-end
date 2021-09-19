import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { doctorMenuItems } from '../../../Sidebar/menuItem'
import { Card, CardHeader, Grid, makeStyles } from '@material-ui/core'
import DoctorProfileCard from '../../../ProfileCard/DoctorProfileCard'
import ScheduleTable from '../../../Table/ScheduleTable'
import ClinicHistoryTable from '../../../Table/ClinicHistoryTable'
import { getStorageItem } from '../../../../utils/StorageUtils'
import ClinicHistoryCard from '../../../ClinicCard/ClinicHistoryCard'
import ClinicHistoryQueue from '../../../Table/ClinicHistoryQueue'

const useStyles = makeStyles({
  dataCard: {
    borderRadius: '5px',
  },
})

const doctorInfo = getStorageItem('doctorInfo', true)
console.log(doctorInfo)

function ClinicHistory(props) {
  let clinic_history = props.location.state
  return (
    <Layout
      header={<Header user={getStorageItem('doctorName')} />}
      sidebar={<Sidebar menuItems={doctorMenuItems} />}
      footer={<Footer />}
      content={
        <div
          style={{
            padding: '20px',
            minHeight: '880px',
            backgroundColor: '#ebf5f7',
          }}
        >
          <Content clinic_history={clinic_history} />
        </div>
      }
    ></Layout>
  )
}

function Content(props) {
  const classes = useStyles()
  return (
    <Grid container spacing={5}>
      <Grid item sm={4}>
        <ClinicHistoryCard clinic_history={props.clinic_history} />
      </Grid>
      <Grid item sm={8}>
        <CardHeader
          title='Clinic Queue'
          style={{
            textAlign: 'center',
            backgroundColor: '#3f51b5',
            color: '#fff',
          }}
        ></CardHeader>
        <ClinicHistoryQueue clinic_did={props.clinic_history.id} />
      </Grid>
    </Grid>
  )
}

export default ClinicHistory
