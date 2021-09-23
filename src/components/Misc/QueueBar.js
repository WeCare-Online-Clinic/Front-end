import React from 'react'
import axios from 'axios'
import Constants from '../../utils/Constants'
import { getStorageItem } from '../../utils/StorageUtils'
import { useState, useEffect } from 'react'
import { Card, CardActions, Grid, makeStyles } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { Alert } from '@material-ui/lab'
import Modal from '@material-ui/core/Modal'
import ViewPDF from '../Misc/ViewPDF'
import PerfectScrollbar from 'react-perfect-scrollbar'

const useStyles = makeStyles({
  queueBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px 20px 10px 20px',
  },
  card: {
    width: '100%',
    minHeight: '100%',
    border: '1px solid #bdc3cb',
    backgroundColor: '#3f51b5',
  },
})

const clinicId = getStorageItem('doctorInfo', true).clinic.id

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

function QueueBar(props) {
  const [modalOpen, setModalOpen] = useState(false)
  const [pdf, setPdf] = useState(null)
  const [patientInfo, setPatientInfo] = useState(null)
  const [queueNo, setQueueNo] = useState()
  const [patientsLeft, setPatientLeft] = useState()

  useEffect(() => {
    setQueueNo(props.queueNo)
    setPatientLeft(props.clinicInfo.noPatients - props.queueNo)
    setPatientInfo(props.patientInfo)
    setPdf(props.pdf)

    return function cleanup() {
      setPatientInfo(null)
      setQueueNo(0)
      setPatientLeft(0)
      setPdf(null)
    }
  }, [props])

  console.log('pdf', pdf)

  const renderPdf = () => {
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
  }

  console.log(patientInfo)

  console.log(props)
  const classes = useStyles()
  const history = useHistory()
  return (
    <div style={{ padding: '20px' }}>
      <Grid container>
        <Grid
          item
          sm={12}
          className={classes.queueBar}
          style={{ border: '2px solid #3f51b5' }}
        >
          <Grid item sm={5} className={classes.queueBar}>
            <div>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                onClick={() => {
                  history.push({
                    pathname: 'patientdata',
                    state: {
                      patient: {
                        id: patientInfo.patient.id,
                        name: patientInfo.patient.name,
                        age: calculate_age(patientInfo.patient.birthdate),
                        gender: show_gender(patientInfo.patient.gender),
                        diagnosis: patientInfo.diagnosis,
                        admissionDate: patientInfo.admissionDate,
                        clinicId: patientInfo.clinic.id,
                        clinicProfileId: patientInfo.id,
                      },
                    },
                  })
                }}
              >
                Patient Profile
              </Button>
            </div>
            <div>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                onClick={() => renderPdf()}
              >
                Recent Lab Report
              </Button>
            </div>
          </Grid>
          <Grid
            item
            sm={7}
            className={classes.queueBar}
            style={{ backgroundColor: '#fff', borderLeft: '2px solid #3f51b5' }}
          >
            <div>
              <h5 style={{ color: '#3f51b5' }}>Patient Name: </h5>
              <h5 style={{ color: '#000' }}>
                {patientInfo && patientInfo.patient.name}
              </h5>
            </div>
            <div>
              <h5 style={{ color: '#3f51b5' }}>Current Queue No: </h5>
              <h5 style={{ color: '#000' }}>{queueNo}</h5>
            </div>
            <div>
              <h5 style={{ color: '#3f51b5' }}>Patient Remaining In Queue:</h5>
              <h5 style={{ color: '#000' }}>{patientsLeft}</h5>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Modal open={modalOpen} onClose={handleClose}>
        <Grid container>
          <Grid item sm={12}>
            <Card className={classes.card}>
              <CardActions>
                <Button
                  variant='contained'
                  color='secondary'
                  size='large'
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={12}>
            {pdf && (
              <PerfectScrollbar>
                <ViewPDF reportDetails={pdf} />
              </PerfectScrollbar>
            )}
            {!pdf && <Alert severity='info'>No Reports Available</Alert>}
          </Grid>
        </Grid>
      </Modal>
    </div>
  )
}

export default QueueBar
