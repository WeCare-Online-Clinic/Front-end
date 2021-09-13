import React from 'react'
import axios from 'axios'
import ReactDom from 'react-dom'
import { useState, useEffect } from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import DataCard from '../../../DataCard/DataCard'
import { patientMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import { Card, CardHeader } from '@material-ui/core'
import PatientClinicHisTable from '../../../Table/PatientClinicHisTable'
import PatientHisCard from '../../../ClinicCard/PatientHisCard'
import { getStorageItem } from '../../../../utils/StorageUtils'
import Constants from '../../../../utils/Constants'
import {useLocation} from 'react-router-dom'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
    marginTop: '10px',
  },
})

const patientId = getStorageItem('patientInfo', true).id

async function get_clinic_data() {
  console.log('clinic history')

  let clinic_data = []

  try {
    await axios
      .get(Constants.API_BASE_URL + '/patient/clinic/history/list/' + patientId)
      .then((res) => {
        if (res.status == 200) {
          console.log(res)
          clinic_data = res.data
        }
      })
    return clinic_data
  } catch (error) {
    console.log(error)
  }
}

function ClinicHistory(props) {
  const location = useLocation();
  const [patient,setPatient]=useState({})
  useEffect(() => {
    const patient=location.state
    setPatient(patient)
    console.log("patient clinic history:",location.state);    
  }, [])
  return (
    <Layout
      header={<Header user={patient.name} />}
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
  const [clinicData, setClinicData] = useState([])
  const [data, setData] = useState()

  const renderData = (data) => {
    setData(data)
  }

  useEffect(() => {
    get_clinic_data().then((res) => {
      setClinicData(res)
      console.log(res)
    })
  }, [])

  return (
    <Grid container style={{ padding: '20px' }} spacing={5}>
      <Grid className={classes.dataCard} item sm={7}>
        <Card>
          <CardHeader
            style={{
              textAlign: 'center',
              color: '#fff',
              borderBottom: '1px solid #000',
              backgroundColor: '#3f51b5',
            }}
            title='Clinic History'
          ></CardHeader>
        </Card>
        <PatientClinicHisTable clinicData={clinicData} func={renderData} />
      </Grid>
      <Grid item sm={5} className={classes.dataCard}>
        {data && <PatientHisCard clinicData={data} />}
      </Grid>
    </Grid>
  )
}

export default ClinicHistory
