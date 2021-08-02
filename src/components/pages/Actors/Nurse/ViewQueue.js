import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { nurseMenuItems } from '../../../Sidebar/menuItem'
import { Grid, Box, makeStyles } from '@material-ui/core'
import PatientQueueTable from '../../../Table/PatientQueueTable'
import ManageQueue from '../../../Misc/ManageQueue'
import PatientProfileCard from '../../../ProfileCard/PatientProfileCard'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    margin: '20px',
    marginBottom: '0px',
  },
})

function ViewQueue() {
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
    <React.Fragment>
      <ManageQueue />
      <Grid container style={{ padding: '20px' }}>
        <Grid item sm={12}>
          <Grid container style={{ marginBottom: '10px' }} spacing={5}>
            <Grid className={classes.dataCard} item sm={4}>
              <div align='center'>
                <PatientProfileCard />
              </div>
            </Grid>
            <Grid className={classes.dataCard} item sm={7}>
              <PatientQueueTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default ViewQueue
