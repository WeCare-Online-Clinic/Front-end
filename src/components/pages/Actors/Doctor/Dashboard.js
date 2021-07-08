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

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
    marginTop: '10px',
  },
})

function Dashboard() {
  return (
    <Layout
      header={<Header />}
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
        <Grid container>
          <Grid item>
            <Button variant='contained' color='primary' size='large'>
              Consultation Room
            </Button>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <h3 style={{ color: '#3f51b5' }}>Welcome Doctor</h3>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.dataCard} item sm={12}>
        <DataCard cardItems={doctorDataItems} />
      </Grid>
      <Grid item sm={12}>
        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
          <Grid className={classes.dataCard} item sm={6}>
            <LineStatCard title='Patients in Clinic' />
          </Grid>
          <Grid className={classes.dataCard} item sm={6}>
            <BarStatCard title='Diagnosis' />
          </Grid>
          <Grid className={classes.dataCard} item sm={6}>
            <PieStatCard title='Diagnosis' />
          </Grid>
          <Grid className={classes.dataCard} item sm={6}>
            <LineStatCard title='New Patients' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Dashboard
