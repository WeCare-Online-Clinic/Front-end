import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { headnurseMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles, Box } from '@material-ui/core'
import PatientQueueTable from '../../../Table/PatientQueueTable'
import ManageQueue from '../../../Misc/ManageQueue'
import PatientProfileCard from '../../../ProfileCard/PatientProfileCard'
import ClinicQueue from '../../../ClinicCard/ClinicQueue'

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
    <React.Fragment>
      <ManageQueue />
      <Grid container style={{ padding: '20px' }}>
      <Grid item sm={12}>
        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
          <Grid className={classes.dataCard} item sm={4}>
            <div align = "center">
           <PatientProfileCard />
           </div>
          </Grid>
          <Grid className={classes.dataCard} item sm={7}>
            <PatientQueueTable />
          </Grid>
          <Grid className={classes.dataCard} item sm={4}>
          <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
          Next Queue Numbers
        </Box>
          <h5 style={{ color: '#3f51b5' }}>Ms.Perera    Queue   #25</h5>
          <h5 style={{ color: '#3f51b5' }}>Ms.Silva     Queue   #26</h5>
          <h5 style={{ color: '#3f51b5' }}>Mr.Jayalath  Queue   #27</h5>
          <h5 style={{ color: '#3f51b5' }}>Ms.Vithane   Queue   #28</h5>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </React.Fragment>
  )
}


export default ViewQueue