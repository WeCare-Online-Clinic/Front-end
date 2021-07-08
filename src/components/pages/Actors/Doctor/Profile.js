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

const useStyles = makeStyles({
  dataCard: {
    borderRadius: '5px',
  },
})

function Profile() {
  return (
    <Layout
      header={<Header user='Dr. Asela' />}
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
    <Grid container spacing={5}>
      <Grid item sm={4}>
        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
          <Grid className={classes.dataCard} item sm={12}>
            <DoctorProfileCard />
          </Grid>
          <Grid className={classes.dataCard} item sm={12}>
            <Card>
              <CardHeader
                title='Schedule Info'
                style={{ textAlign: 'center', color: '#3f51b5' }}
              ></CardHeader>
            </Card>
            <ScheduleTable />
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
        <ClinicHistoryTable />
      </Grid>
    </Grid>
  )
}

export default Profile
