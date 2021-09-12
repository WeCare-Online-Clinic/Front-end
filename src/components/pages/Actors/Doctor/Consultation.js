import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { doctorMenuItems } from '../../../Sidebar/menuItem'
import { Button, Grid, makeStyles } from '@material-ui/core'
import QueueBar from '../../../Misc/QueueBar'
import ClinicForm from '../../../Forms/ClinicForm'
import { getStorageItem, setStorageItem } from '../../../../utils/StorageUtils'
import Constants from '../../../../utils/Constants'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Alert, AlertTitle } from '@material-ui/lab'

const useStyles = makeStyles({
  textTitle: {
    padding: '5px',
    color: '#4c5355',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textField: {
    padding: '5px',
    color: '#4c5355',
    fontSize: '16px',
  },
  textBox: {
    minHeight: '200px',
    margin: '5px 40px 5px 40px',
    padding: '10px',
    color: '#4c5355',
    fontSize: '14px',
    border: '1px solid #4c5355',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 40px 20px 40px',
    width: '100%',
  },
})

const clinicId = getStorageItem('doctorInfo', true).clinic.id

async function clinic_date_available() {
  //console.log('clinic date available')

  let available = null

  try {
    await axios
      .get(Constants.API_BASE_URL + '/consultation/available/' + clinicId)
      .then((res) => {
        if (res.status == 200) {
          //console.log(res)
          if (res.data != '') {
            available = res.data
          }
        }
      })
    return available
  } catch (error) {
    console.log(error)
  }
}

async function current_queue(id) {
  //console.log('current queue')
  //console.log(id)

  let number = 1

  try {
    await axios
      .get(Constants.API_BASE_URL + '/consultation/queue/no/' + id)
      .then((res) => {
        if (res.status == 200) {
          //console.log(res)
          if (res.data != '') {
            number = res.data
          }
        }
      })
    return number
  } catch (error) {
    console.log(error)
  }
}

async function patient_info(id) {
  //console.log('patient info')
  //console.log(id)

  let patient = null

  try {
    await axios
      .get(Constants.API_BASE_URL + '/clinic/profile/' + id + '/' + clinicId)
      .then((res) => {
        if (res.status == 200) {
          //console.log(res)
          if (res.data != '') {
            patient = res.data
          }
        }
      })
    return patient
  } catch (error) {
    console.log(error)
  }
}

async function no_clinic() {
  await toast.error('No Clinic Date Available Today', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  })
}

function Consultation() {
  const history = useHistory()
  const [clinicDate, setClinicDate] = useState(null)
  const [clinicStarted, setClinicStarted] = useState(false)
  const [clinicEnded, setClinicEnded] = useState(false)
  const [currQueue, setCurrQueue] = useState(0)
  const [getData, setGetData] = useState(false)
  const [patientInfo, setPatientInfo] = useState(null)
  const [noClinic, setNoClinic] = useState(false)

  useEffect(() => {
    clinic_date_available().then((res) => {
      if (res != null) {
        setClinicStarted(res.started)
        setClinicEnded(res.ended)
        setClinicDate(res)
        setCurrQueue(res.currQueue)
      } else {
        setNoClinic(true)
      }
      setGetData(true)
    })
  }, [currQueue, clinicStarted, clinicEnded, getData])

  useEffect(() => {
    if (currQueue >= 1) {
      patient_info(clinicDate.queue[currQueue - 1]).then((res) => {
        setPatientInfo(res)
      })
    }
  }, [currQueue])

  console.log(noClinic)

  return (
    <Layout
      header={<Header user={getStorageItem('doctorName')} />}
      sidebar={<Sidebar menuItems={doctorMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ backgroundColor: '#ebf5f7', padding: '20px' }}>
          {clinicStarted && clinicDate && (
            <Content
              clinicInfo={clinicDate}
              queueNo={currQueue}
              patientInfo={patientInfo}
            />
          )}

          {noClinic && (
            <Alert
              severity='info'
              onClose={() => history.push('/doctor/dashboard')}
            >
              <AlertTitle>No Clinic</AlertTitle>
              No Clinic Available Today
            </Alert>
          )}

          {clinicEnded && (
            <Alert
              severity='info'
              action={
                <React.Fragment>
                  <Button
                    color='inherit'
                    size='large'
                    onClick={() =>
                      history.push({
                        pathname: '/doctor/clinicsummary',
                      })
                    }
                  >
                    Clinic Summary
                  </Button>
                  <Button
                    color='inherit'
                    size='large'
                    onClick={() =>
                      history.push({
                        pathname: '/doctor/dashboard',
                      })
                    }
                  >
                    Back
                  </Button>
                </React.Fragment>
              }
            >
              <AlertTitle>Clinic has ended</AlertTitle>
              Clinic has ended — <strong>Please see the summary</strong>
            </Alert>
          )}

          {getData && !clinicStarted && !noClinic && (
            <Alert
              severity='info'
              action={
                <React.Fragment>
                  <Button
                    color='inherit'
                    size='large'
                    onClick={() => window.location.reload(false)}
                  >
                    Check Again
                  </Button>
                  <Button
                    color='inherit'
                    size='large'
                    onClick={() =>
                      history.push({
                        pathname: '/doctor/dashboard',
                      })
                    }
                  >
                    Go Back
                  </Button>
                </React.Fragment>
              }
            >
              <AlertTitle>Clinic Not Started</AlertTitle>
              Clinic has not started yet — <strong>Please check again!</strong>
            </Alert>
          )}
        </div>
      }
    ></Layout>
  )
}

function Content(props) {
  console.log(props)
  const classes = useStyles()
  return (
    <React.Fragment>
      <QueueBar
        clinicInfo={props.clinicInfo}
        queueNo={props.queueNo}
        patientInfo={props.patientInfo}
      />
      <Grid container style={{ padding: '20px' }}>
        <Grid item sm={12}>
          <ClinicForm
            clinicInfo={props.clinicInfo}
            queueNo={props.queueNo}
            patientInfo={props.patientInfo}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Consultation
