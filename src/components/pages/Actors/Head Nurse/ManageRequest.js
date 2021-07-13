import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { headnurseMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import PatientQueueTable from '../../../Table/PatientQueueTable'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    margin: '20px',
    marginBottom: '0px',
  },
})

function ManageRequest() {
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
     
      <Grid className={classes.dataCard} item sm={12}>
      <h3 style={{ color: '#000000' }} align='center'>Manage Request</h3>
      <div width="250px">
      <Button variant="contained" color="primary" style={{ "min-height": "56px", width: "20%" }}>Change</Button>
      </div>
      <PatientQueueTable />
          </Grid>
     
          
    </Grid>
   
  )
}


export default ManageRequest