import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { headnurseMenuItems } from '../../../Sidebar/menuItem'
import { Card, CardHeader, Grid, makeStyles } from '@material-ui/core'
import HeadNurseProfileCard from '../../../ProfileCard/HeadNurseProfileCard'
import ScheduleTable from '../../../Table/ScheduleTable'
import NurseClinicHistoryTable from '../../../Table/NurseClinicHistoryTable'

const useStyles = makeStyles({
  dataCard: {
    borderRadius: '5px',
  },
})

function  HeadNurseProfile() {
  return (
    <Layout
      header={<Header user='Ms. Perera' />}
      sidebar={<Sidebar menuItems={headnurseMenuItems} />}
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
          <Grid className={classes.dataCard} item sm={6}>
            <HeadNurseProfileCard />
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
        < NurseClinicHistoryTable />
      </Grid>

      <Grid className={classes.dataCard} item sm={5}>
            <Card>
              <CardHeader
                title='Schedule Info'
                style={{ textAlign: 'center', color: '#3f51b5' }}
              ></CardHeader>
            </Card>
            <div align="center">
            <ScheduleTable />
            </div>
          </Grid>

          
    </Grid>
  )
}

export default HeadNurseProfile
