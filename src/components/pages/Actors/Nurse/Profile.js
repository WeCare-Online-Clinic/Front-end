
import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { nurseMenuItems } from '../../../Sidebar/menuItem'
import { Card, CardHeader, Grid, makeStyles } from '@material-ui/core'
import NurseProfileCard from '../../../ProfileCard/NurseProfileCard'
import ScheduleTable from '../../../Table/ScheduleTable'
import NurseClinicHistoryTable from '../../../Table/NurseClinicHistoryTable'

const useStyles = makeStyles({
  dataCard: {
    borderRadius: '5px',
  },
})

function Profile() {
  return (
    <Layout
      header={<Header user='Ms. Asanaka Perera' />}
      sidebar={<Sidebar menuItems={nurseMenuItems} />}
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
            <NurseProfileCard />
          </Grid>
          <Grid className={classes.dataCard} item sm={12}>
            
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
        <NurseClinicHistoryTable />
      </Grid>
    </Grid>
  )
}

export default Profile