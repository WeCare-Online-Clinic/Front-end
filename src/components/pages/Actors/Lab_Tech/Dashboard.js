import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import DataCard from '../../../DataCard/DataCard'
import { labMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import { labDataItems } from '../../../DataCard/DataItems'
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
      header={<Header user='Kamal' />}
      sidebar={<Sidebar menuItems={labMenuItems} />}
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
      <Grid
        item
        sm={12}
        style={{ backgroundColor: '#fff', textAlign: 'center' }}
      >
        <Button
          variant='contained'
          color='primary'
          size='large'
          style={{
            width: '200px',
            height: '80px',
            margin: '10px 40px 10px 0px',
          }}
        >
          Add Lab Reports
        </Button>
        <Button
          variant='contained'
          color='primary'
          size='large'
          style={{
            width: '200px',
            height: '80px',
            margin: '10px 0px 10px 40px',
          }}
        >
          View Lab Reports
        </Button>
      </Grid>
      <Grid className={classes.dataCard} item sm={12}>
        <DataCard cardItems={labDataItems} />
      </Grid>
      <Grid item sm={12}>
        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
          <Grid className={classes.dataCard} item sm={6}>
            <LineStatCard title='Lab Reports Issued' />
          </Grid>
          <Grid className={classes.dataCard} item sm={6}>
            <BarStatCard title='Lab Tests - No.of Reports' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm style={{ flexGrow: 1 }}></Grid>
    </Grid>
  )
}

export default Dashboard
