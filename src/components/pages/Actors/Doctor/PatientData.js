import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { doctorMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import LineStatCard from '../../../StatCard/LineStatCard'
import PatientInfoCard from '../../../ClinicCard/PatientInfoCard'
import ClinicDataCard from '../../../ClinicCard/ClinicDataCard'
import { getStorageItem } from '../../../../utils/StorageUtils'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
    marginTop: '10px',
  },
})

function PatientData(props) {
  let patient = props.location.state.patient
  return (
    <Layout
      header={<Header user={getStorageItem('doctorName')} />}
      sidebar={<Sidebar menuItems={doctorMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
          <Content patient={patient} />
        </div>
      }
    ></Layout>
  )
}

function Content(props) {
  const classes = useStyles()
  let patient = props.patient
  return (
    <Grid
      container
      style={{ paddingLeft: '20px', minHeight: '880px', paddingRight: '20px' }}
      spacing={5}
    >
      <Grid className={classes.dataCard} item sm={12}>
        <Grid container>
          <Grid item sm={4}>
            <PatientInfoCard patient={patient} />
          </Grid>
          <Grid item sm={8}>
            <ClinicDataCard patient={patient} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12}>
        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
          <Grid className={classes.dataCard} item sm={6}>
            <LineStatCard title='Attribute 1' />
          </Grid>
          <Grid className={classes.dataCard} item sm={6}>
            <LineStatCard title='Attribute 2' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PatientData
