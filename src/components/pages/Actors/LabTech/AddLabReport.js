import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import AddReport from '../../../Forms/AddReport'
import { labMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'

import LineStatCard from '../../../StatCard/LineStatCard'
import Register from '../../../Register'
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

function CreateLabReport() {
  return (
    <Layout
      header={<Header />}
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
      <Grid className={classes.dataCard} item sm={12}>
        <Grid container>
          <Grid item>
            <h3 style={{ color: '#3f51b5' }}>05.30 P.M</h3>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <h3 style={{ color: '#3f51b5' }}>Welcome Mr. Mahesh Withanage</h3>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.dataCard} item sm={12}>
      <h3 style={{ color: '#000000' }} align='center'>Create Lab Report</h3>
      <AddReport />
          </Grid>
     
          
    </Grid>
   
  )
}


export default CreateLabReport