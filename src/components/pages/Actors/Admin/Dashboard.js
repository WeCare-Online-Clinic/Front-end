import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import DataCard from '../../../DataCard/DataCard'
import { adminMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import { adminDataItems } from '../../../DataCard/DataItems'
import OnlineUserTable from '../../../Table/OnlineUsersTable'
import LineStatCard from '../../../StatCard/LineStatCard'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    margin: '20px',
    marginBottom: '0px',
  },
})

function View_Patient() {
  return (
    <Layout
      header={<Header />}
      sidebar={<Sidebar menuItems={adminMenuItems} />}
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
      <Grid className={classes.dataCard} item sm={12}>
        <DataCard cardItems={adminDataItems} />
      </Grid>
      <Grid item sm={12}>
        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
          <Grid className={classes.dataCard} item sm={4}>
            <OnlineUserTable />
          </Grid>
          <Grid className={classes.dataCard} item sm={7}>
            <LineStatCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default View_Patient
