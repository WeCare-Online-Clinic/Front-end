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
import { getStorageItem } from '../../../../utils/StorageUtils'
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

const DoctorId = getStorageItem('doctorInfo', true).clinic.id

async function clinic_date_available() {
  console.log('clinic date available')

  let available = null

  try {
    await axios
      .get(Constants.API_BASE_URL + '/consultation/available/' + DoctorId)
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

async function no_clinic() {
  await toast.error('No Clinic Date Available Today', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  })
}

function Dashboard() {
  const history = useHistory()
  const [clinicDate, setClinicDate] = useState(null)
  const [clinicStarted, setClinicStarted] = useState(false)
  const [getData, setGetData] = useState(false)

  useEffect(() => {
    clinic_date_available().then((res) => {
      setClinicDate(res)
      setGetData(true)
      setClinicStarted(res.started)
    })
  }, [])

  console.log(clinicDate)

  if (getData && clinicDate == null) {
    no_clinic().then(
      history.push({
        pathname: '/doctor/dashboard',
      })
    )
  }

  console.log(clinicStarted)

  return (
    <Layout
      header={<Header user={getStorageItem('doctorName')} />}
      sidebar={<Sidebar menuItems={doctorMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ backgroundColor: '#ebf5f7' }}>
          {clinicStarted && <Content />}
          {clinicStarted === false && (
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
  const classes = useStyles()
  return (
    <React.Fragment>
      <QueueBar />
      <Grid container style={{ padding: '20px' }}>
        <Grid item sm={12}>
          <ClinicForm />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Dashboard
