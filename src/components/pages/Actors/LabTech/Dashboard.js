import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import DataCard from '../../../DataCard/DataCard'
import { labtechMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import { labtechDataItems } from '../../../DataCard/DataItems'
import LineStatCard from '../../../StatCard/LineStatCard'
import PieStatCard from '../../../StatCard/PieStatCard'
import BarStatCard from '../../../StatCard/BarStatCard'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'

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
      header={<Header user='Mr. Mahesh Withanage' />}
      sidebar={<Sidebar menuItems={labtechMenuItems} />}
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
  const history = useHistory()
  return (
    <Grid container style={{ padding: '20px' }} spacing={5}>

      <Grid className={classes.dataCard} item sm={12}>
        <DataCard cardItems={labtechDataItems} />
      </Grid>
      <Grid item sm={12}>
        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
          <Grid className={classes.dataCard} item sm={6}>
            <LineStatCard title='Lab Reports Issued' />
          </Grid>
          <Grid className={classes.dataCard} item sm={5}>
            <BarStatCard title='Lab Tests - No.of Reports' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm style={{ flexGrow: 1 }}></Grid>
    </Grid>
  )
}

export default Dashboard
