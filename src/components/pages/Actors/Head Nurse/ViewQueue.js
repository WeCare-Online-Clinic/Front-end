import React, { useState, useEffect } from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { headnurseMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles, Button } from '@material-ui/core'
import PatientQueueTable from '../../../Table/PatientQueueTable'
import ManageQueue from '../../../Misc/ManageQueue'
import PatientProfileCard from '../../../ProfileCard/PatientProfileCard'
import { useHistory } from 'react-router'
import axios from 'axios'
import { getStorageItem } from '../../../../utils/StorageUtils'
import Constants from '../../../../utils/Constants'
import { toast } from 'react-toastify'
import { Alert, AlertTitle } from '@material-ui/lab'
import PatientInfoCard from '../../../ClinicCard/PatientInfoCard'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    margin: '20px',
    marginBottom: '0px',
  },
})

const clinicId = getStorageItem('nurseInfo', true).clinic.id

async function clinic_date_available() {
  console.log('clinic date available')

  let available = null

  try {
    await axios
      .get(Constants.API_BASE_URL + '/manage/queue/available/' + clinicId)
      .then((res) => {
        if (res.status == 200) {
          console.log(res)
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
      .get(Constants.API_BASE_URL + '/manage/queue/no/' + id)
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

async function get_queue(id) {
  let queue = []

  try {
    await axios
      .get(Constants.API_BASE_URL + '/manage/queue/list/' + id)
      .then((res) => {
        if (res.status == 200) {
          console.log(res)
          if (res.data != '') {
            queue = res.data
          }
        }
      })
    return queue
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
      .get(
        Constants.API_BASE_URL + '/nurse/clinic/profile/' + id + '/' + clinicId
      )
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

function calculate_age(dob) {
  var dob = new Date(dob)
  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime()

  //convert the calculated difference in date format
  var age_dt = new Date(month_diff)

  //extract year from date
  var year = age_dt.getUTCFullYear()

  //now calculate the age of the user
  var age = Math.abs(year - 1970)

  return age
}

function show_gender(gender) {
  if (gender == 'f') {
    return 'Female'
  } else {
    return 'Male'
  }
}

function ViewQueue() {
  const history = useHistory()
  const [clinicDate, setClinicDate] = useState(null)
  const [clinicStarted, setClinicStarted] = useState(false)
  const [clinicEnded, setClinicEnded] = useState(false)
  const [currQueue, setCurrQueue] = useState(0)
  const [getData, setGetData] = useState(false)
  const [patientInfo, setPatientInfo] = useState(null)
  const [noClinic, setNoClinic] = useState(false)
  const [queue, setQueue] = useState([])

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

  useEffect(() => {
    if (clinicDate) {
      get_queue(clinicDate.id).then((res) => {
        setQueue(res)
      })
    }
  }, [clinicDate])

  console.log(noClinic)
  return (
    <Layout
      header={<Header user={getStorageItem('nurseInfo', true).name} />}
      sidebar={<Sidebar menuItems={headnurseMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ backgroundColor: '#ebf5f7' }}>
          {clinicDate && (
            <Content
              clinicInfo={clinicDate}
              queueNo={currQueue}
              patientInfo={patientInfo}
              queue={queue}
            />
          )}

          {noClinic && (
            <Alert
              severity='info'
              onClose={() => history.push('/nurse/dashboard')}
            >
              <AlertTitle>No Clinic</AlertTitle>
              No Clinic Available Today
            </Alert>
          )}
        </div>
      }
    ></Layout>
  )
}

function Content(props) {
  const history = useHistory()
  console.log(props)
  const classes = useStyles()
  return (
    <React.Fragment>
      {props.clinicInfo.ended && (
        <>
          <Alert
            severity='info'
            action={
              <React.Fragment>
                <Button
                  color='inherit'
                  size='large'
                  onClick={() =>
                    history.push({
                      pathname: '/nurse/dashboard',
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
          <Grid container style={{ padding: '20px', backgroundColor: '#fff' }}>
            <Grid
              item
              sm={12}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <PatientQueueTable queue={props.queue} queueNo={props.queueNo} />
            </Grid>
          </Grid>
        </>
      )}
      {!props.clinicInfo.ended && (
        <>
          <ManageQueue
            clinicInfo={props.clinicInfo}
            queueNo={props.queueNo}
            patientInfo={props.patientInfo}
          />
          <Grid container style={{ padding: '20px', backgroundColor: '#fff' }}>
            <Grid
              item
              sm={5}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              {props.patientInfo && props.clinicInfo.started && (
                <PatientInfoCard
                  patient={{
                    name: props.patientInfo.patient.name,
                    age: calculate_age(props.patientInfo.patient.birthdate),
                    gender: show_gender(props.patientInfo.patient.gender),
                    admissionDate: props.patientInfo.admissionDate,
                    diagnosis: props.patientInfo.diagnosis,
                  }}
                />
              )}
            </Grid>
            <Grid
              item
              sm={7}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <PatientQueueTable queue={props.queue} queueNo={props.queueNo} />
            </Grid>
          </Grid>
        </>
      )}
    </React.Fragment>
  )
}

export default ViewQueue
