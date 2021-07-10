import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import DataCard from '../../../DataCard/DataCard'
import { nurseMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import LineStatCard from '../../../StatCard/LineStatCard'
import PieStatCard from '../../../StatCard/PieStatCard'
import BarStatCard from '../../../StatCard/BarStatCard'
import { Button } from '@material-ui/core'

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
    <Grid container style={{ padding: '20px' }} spacing={5}>
      <Grid className={classes.dataCard} item sm={12}>
        <Grid container>
          <Grid item>
            <h3 style={{ color: '#3f51b5' }}>04.30 P.M</h3>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <h3 style={{ color: '#3f51b5' }}>Welcome Ms. Asanka Perera</h3>
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.dataCard} item sm={12}>
       
        <Button
          variant='contained'
          color='primary'
          size='large'
          style={{
            width: '200px',
            height: '80px',
            margin: '10px 40px 10px 200px',
          }}
        >
          View Queue
        </Button>
        <Button
          variant='contained'
          color='primary'
          size='large'
          style={{
            width: '200px',
            height: '80px',
            margin: '10px 40px 10px 40px',
          }}
        >
          View Doctor List
        </Button>
        <Button
          variant='contained'
          color='primary'
          size='large'
          style={{
            width: '200px',
            height: '80px',
            margin: '10px 35px 10px 40px',
          }}
        >
          Add lAb Tests
        </Button>
      </Grid>
     
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