import React from 'react'
import ReactDom from 'react-dom'
import { useState, useEffect } from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { patientMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import { Card, CardHeader } from '@material-ui/core'
import PatientReportsTable from '../../../Table/PatientReportsTable'
import ReportCard from '../../../ClinicCard/ReportCard'
import Constants from '../../../../utils/Constants'
import axios from 'axios'
import PatientHisCard from '../../../ClinicCard/PatientHisCard'
import { getStorageItem } from '../../../../utils/StorageUtils'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
    marginTop: '10px',
  },
})

const patientId = getStorageItem('patientInfo', true).id
const patientName=getStorageItem('patientInfo', true).name

async function get_all_reports(id) {
  let reports = []

  try {
    await axios
      .get(Constants.API_BASE_URL + '/getLabReportDetails/' + id)
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


function LabReports() {
  return (
    <Layout
      header={<Header user={patientName}/>}
      sidebar={<Sidebar menuItems={patientMenuItems} />}
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
  const [isData, setIsData] = useState(false)

  const [reports, setReports] = useState([])

  useEffect(() => {
    
      get_all_reports(patientId).then((res) => {
        setReports(res)
      })
    
  }, [])

  useEffect(() => {})

  const renderData = () => {
    setIsData(true)
  }

  return (
    <Grid container style={{ padding: '20px' }} spacing={5}>
      <Grid className={classes.dataCard} item sm={6}>
        <Card>
          <CardHeader
            style={{
              textAlign: 'center',
              color: '#fff',
              borderBottom: '1px solid #000',
              backgroundColor: '#3f51b5',
            }}
            title='Lab Reports'
          ></CardHeader>
        </Card>
        {reports && <PatientReportsTable reports={reports} />}
      </Grid>
      <Grid item sm={6} className={classes.dataCard}>
        {isData && <ReportCard />}
      </Grid>
    </Grid>
  )
}

export default LabReports
