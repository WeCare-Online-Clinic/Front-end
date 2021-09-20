import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { getStorageItem } from '../../utils/StorageUtils'
import { useHistory } from 'react-router'
import axios from 'axios'
import Constants from '../../utils/Constants'
import { Alert, AlertTitle } from '@material-ui/lab'

const useStyles = makeStyles({
  queueBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px 20px 10px 20px',
  },
})

const nurseId = getStorageItem('nurseInfo', true).id

async function start_session(id) {
  try {
    await axios
      .get(Constants.API_BASE_URL + '/manage/queue/start/' + id + '/' + nurseId)
      .then((res) => {
        if (res.status == 200) {
          console.log(res)
        }
      })
  } catch (error) {
    console.log(error)
  }
}

async function skip_patient(id) {
  try {
    await axios
      .get(Constants.API_BASE_URL + '/manage/queue/skip/' + id)
      .then((res) => {
        if (res.status == 200) {
          console.log(res)
        }
      })
  } catch (error) {
    console.log(error)
  }
}

async function end_clinic(id) {
  try {
    await axios
      .get(Constants.API_BASE_URL + '/manage/queue/end/' + id)
      .then((res) => {
        if (res.status == 200) {
          console.log(res)
        }
      })
  } catch (error) {
    console.log(error)
  }
}

const clinicId = getStorageItem('nurseInfo', true).clinic.id

function ManageQueue(props) {
  const classes = useStyles()
  const history = useHistory()
  const [patientInfo, setPatientInfo] = useState(null)
  const [queueNo, setQueueNo] = useState()
  const [patientsLeft, setPatientLeft] = useState()

  useEffect(() => {
    setQueueNo(props.queueNo)
    setPatientLeft(props.clinicInfo.noPatients - props.queueNo)
    setPatientInfo(props.patientInfo)

    return function cleanup() {
      setPatientInfo(null)
      setQueueNo(0)
      setPatientLeft(0)
    }
  }, [props])

  return (
    <div style={{ padding: '20px' }}>
      <Grid>
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
                size='medium'
                onClick={() => {
                  if (window.confirm('Confirm Start Session')) {
                    start_session(props.clinicInfo.id).then(() => {
                      window.location.reload()
                    })
                  }
                }}
                disabled={props.clinicInfo.started}
              >
                Start Session
              </Button>
            </div>
            <div>
              <Button
                variant='contained'
                color='secondary'
                size='medium'
                onClick={() => {
                  window.location.reload()
                }}
                disabled={!props.clinicInfo.started}
              >
                Next Patient
              </Button>
            </div>
            <div>
              <Button
                variant='contained'
                color='secondary'
                size='medium'
                onClick={() => {
                  if (window.confirm('Confirm Skip Patient')) {
                    skip_patient(props.clinicInfo.id).then(() => {
                      window.location.reload()
                    })
                  }
                }}
                disabled={!props.clinicInfo.started}
              >
                Skip Patient
              </Button>
            </div>
            <div>
              <Button
                variant='contained'
                color='secondary'
                size='medium'
                onClick={() => {
                  if (window.confirm('Confirm End Session')) {
                    end_clinic(props.clinicInfo.id).then(() => {
                      window.location.reload()
                    })
                  }
                }}
                disabled={!props.clinicInfo.started}
              >
                End Session
              </Button>
            </div>
          </Grid>
          <Grid
            item
            sm={7}
            className={classes.queueBar}
            style={{ backgroundColor: '#fff', borderLeft: '2px solid #3f51b5' }}
          >
            {props.clinicInfo.started && (
              <>
                <div>
                  <h5 style={{ color: '#3f51b5' }}>Current Patient Name: </h5>
                  <h5 style={{ color: '#000' }}>
                    {patientInfo && patientInfo.patient.name}
                  </h5>
                </div>
                <div>
                  <h5 style={{ color: '#3f51b5' }}>Current Queue No: </h5>
                  <h5 style={{ color: '#000' }}>{queueNo}</h5>
                </div>
                <div>
                  <h5 style={{ color: '#3f51b5' }}>
                    Patient Remaining in Queue:
                  </h5>
                  <h5 style={{ color: '#000' }}>{patientsLeft}</h5>
                </div>
              </>
            )}
            {!props.clinicInfo.started && (
              <Alert severity='info'>Clinic Not Started Yet</Alert>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ManageQueue
