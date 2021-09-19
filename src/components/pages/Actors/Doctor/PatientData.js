import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
import Constants from '../../../../utils/Constants'
import PatientStaticChart from './PatientStaticChart'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
    marginTop: '10px',
  },
})
async function get_patient_stats(patientId) {
  const clinicId = getStorageItem('doctorInfo', true).clinic.id
  let patientClinicStat = []
  let doctorPatientStats = Object.assign({}, { patientId: patientId, clinicId: clinicId })
  try {
    await axios
      .post(Constants.API_BASE_URL + '/getPatientClinicStatistics/', doctorPatientStats
      )
      .then((res) => {
        if (res.status == 200) {
          console.log("patient stat", res.data)
          patientClinicStat = res.data
        }
      })
    return patientClinicStat
  } catch (error) {
    console.log(error)
  }
}

function PatientData(props) {
  let patient = props.location.state.patient
  const [patientClinicStats, setpatientClinicStats] = useState([]);
  console.log("patientClinicStats ", patientClinicStats);
  useEffect(() => {

    get_patient_stats(patient.id).then((res) => {
      setpatientClinicStats(res)
    })


  }, [])
  return (
    <Layout
      header={<Header user={getStorageItem('doctorName')} />}
      sidebar={<Sidebar menuItems={doctorMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
          <Content patient={patient} stat={patientClinicStats} />
        </div>
      }
    ></Layout>
  )
}

function Content(props) {
  const classes = useStyles()
  let patient = props.patient
  let patientClinicStats = props.stat
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
          {patientClinicStats && patientClinicStats
            .map((stat, index) => (
              <React.Fragment>
                <Grid className={classes.dataCard} item sm={6}>
                  <PatientStaticChart stat={stat} />
                </Grid>
              </React.Fragment>
            )
            )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PatientData
