import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { doctorMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import { Button } from '@material-ui/core'
import QueueBar from '../../../Misc/QueueBar'
import PatientHisCard from '../../../ClinicCard/PatientHisCard'
import { TextField } from '@material-ui/core'
import ClinicForm from '../../../Forms/ClinicForm'
import { getStorageItem } from '../../../../utils/StorageUtils'
import Constants from '../../../../utils/Constants'

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

  let available = false

  try {
    await axios
      .get(Constants.API_BASE_URL + '/consultation/available/' + DoctorId)
      .then((res) => {
        if (res.status == 200) {
          console.log(res)
          available = res.data
        }
      })
    return available
  } catch (error) {
    console.log(error)
  }
}

function Dashboard() {
  const [available, setAvailable] = useState(true)

  useEffect(() => {
    clinic_date_available().then((res) => {
      setAvailable(res)
      console.log(res)
    })
  }, [])

  console.log(available)

  return (
    <Layout
      header={<Header user={getStorageItem('doctorName')} />}
      sidebar={<Sidebar menuItems={doctorMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ backgroundColor: '#ebf5f7' }}>
          <Content />
        </div>
      }
    ></Layout>
  )
}

function Content() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <QueueBar />
      <Grid container style={{ padding: '20px' }}>
        <Grid item sm={12}>
          <Grid container>
            <Grid item sm={6}>
              <ClinicForm />
            </Grid>
            <Grid item sm={6} style={{ backgroundColor: '#fff' }}>
              <Grid container spacing={2}>
                <Grid item sm={12}>
                  <PatientHisCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Dashboard
