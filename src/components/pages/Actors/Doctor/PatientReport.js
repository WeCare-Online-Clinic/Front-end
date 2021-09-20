import React from 'react'
import ReactDom from 'react-dom'
import { useState, useEffect } from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { doctorMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import { Card, CardHeader } from '@material-ui/core'
import PatientReportsTable from '../../../Table/PatientReportsTable'
import { getStorageItem } from '../../../../utils/StorageUtils'
import axios from 'axios'
import Constants from '../../../../utils/Constants'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
    marginTop: '10px',
  },
})

async function get_clinic_reports(id) {
  let reports = []

  try {
    await axios
      .get(
        Constants.API_BASE_URL +
          '/clinic/report/list/' +
          id +
          '/' +
          getStorageItem('doctorInfo', true).clinic.id
      )
      .then((res) => {
        if (res.status == 200) {
          console.log(res)
          reports = res.data
        }
      })
    return reports
  } catch (error) {
    console.log(error)
  }
}

function PatientReport(props) {
  let patient = props.location.state
  return (
    <Layout
      header={<Header user={getStorageItem('doctorName')} />}
      sidebar={<Sidebar menuItems={doctorMenuItems} />}
      footer={<Footer />}
      content={
        <div
          style={{
            padding: '20px',
            minHeight: '880px',
            backgroundColor: '#ebf5f7',
          }}
        >
          <Content patient={patient} />
        </div>
      }
    ></Layout>
  )
}

function Content(props) {
  const classes = useStyles()
  const [reports, setReports] = useState([])

  useEffect(() => {
    get_clinic_reports(props.patient.id).then((res) => {
      setReports(res)
    })
  }, [])

  return (
    <Grid container style={{ padding: '20px' }} spacing={5}>
      <Grid className={classes.dataCard} item sm={12}>
        <Card>
          <CardHeader
            style={{
              textAlign: 'center',
              color: '#fff',
              borderBottom: '1px solid #000',
              backgroundColor: '#3f51b5',
            }}
            title={props.patient.name}
          ></CardHeader>
        </Card>
        {reports && <PatientReportsTable reports={reports} />}
      </Grid>
    </Grid>
  )
}

export default PatientReport
