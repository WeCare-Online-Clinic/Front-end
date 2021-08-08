import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { headnurseMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'

import LineStatCard from '../../../StatCard/LineStatCard'

import PieStatCard from '../../../StatCard/PieStatCard'
import BarStatCard from '../../../StatCard/BarStatCard'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    margin: '20px',
    marginBottom: '0px',
  },
})

function Dashboard() {
  return (
    <Layout
      header={<Header />}
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
    <Grid container style={{ padding: '20px' }} spacing={5}>
     
      <Grid item sm={12}>
        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
          <Grid className={classes.dataCard} item sm={6}>
            <LineStatCard title='Patients in Clinic' />
          </Grid>
          <Grid className={classes.dataCard} item sm={5}>
            <BarStatCard title='Diagnosis' />
          </Grid>
          <Grid className={classes.dataCard} item sm={6}>
            <LineStatCard title='New Patients' />
          </Grid>
          <Grid className={classes.dataCard} item sm={5}>
            <PieStatCard title='Diagnosis' />
          </Grid>  
        </Grid>
      </Grid>
    </Grid>
    
  )
}

export default Dashboard