import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  Grid,
  IconButton,
  Backdrop,
  CircularProgress,
} from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { RemoveCircle } from '@material-ui/icons'
import { toast } from 'react-toastify'
import { getStorageItem, setStorageItem } from '../../utils/StorageUtils'
import Constants from '../../utils/Constants'
import './style.css'
import { useHistory } from 'react-router-dom'
import { Alert, AlertTitle } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  card: {
    width: 'inherit',
    minHeight: '100%',
    border: '1px solid #bdc3cb',
    backgroundColor: '#3f51b5',
  },
  cardHeader: {
    textAlign: 'center',
    color: '#3f51b5',
    backgroundColor: '#fff',
    margin: '2px',
  },
  cardContent: {
    fontSize: '16px',
    margin: '2px',
    backgroundColor: '#fff',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 10px 20px 10px',
    width: '100%',
  },
  formRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '5px',
  },
  presContent: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '16px',
    backgroundColor: '#fff',
    color: '#3f51b5',
    paddingTop: '20px',
  },
}))

const clinic = getStorageItem('nurseInfo', true).clinic
const doctor = getStorageItem('nurseInfo', true)

console.log(clinic)

async function check_patient(nic) {
  let available = null

  try {
    await axios
      .get(
        Constants.API_BASE_URL +
          '/check/patient/available/' +
          nic +
          '/' +
          clinic.id
      )
      .then((res) => {
        console.log(res)
        if (res.status == 200) {
          //console.log(res)

          available = res.data
        }
      })
    return available
  } catch (error) {
    console.log(error)
  }
}

async function send_data(patient, clinicDate) {
  let status = false

  try {
    await axios
      .post(Constants.API_BASE_URL + '/patient/registration/form/', {
        patient: patient,
        clinicDate: clinicDate,
      })
      .then((res) => {
        console.log(res)
        if (res.status == 200) {
          status = res.data
        }
      })
    return status
  } catch (error) {
    console.log(error)
  }
}

function AddPatient(props) {
  const history = useHistory()
  const classes = useStyles()
  const [check, setCheck] = useState(false)
  const [patientExist, setPatientExist] = useState(false)
  const [profileExist, setProfileExist] = useState(false)
  const [submitLock, setSubmitLock] = useState(false)
  const [patient, setPatient] = useState({
    id: '',
    nic: '',
    name: '',
    birthdate: null,
    contact: '',
    email: '',
    address: '',
    gender: '',
    registered_date: new Date(),
    clinic: clinic,
  })
  const [clinicDate, setClinicDate] = useState()

  useEffect(() => {}, [])

  const getPatient = (e) => {
    e.preventDefault()
    console.log(patient)
    if (!patient.nic.match('[0-9]{12}') && !patient.nic.match('[0-9]{9}V')) {
      toast.error('Wrong NIC', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    } else {
      check_patient(patient.nic).then((res) => {
        console.log(res)
        setCheck(true)
        if (res.patient) {
          setPatient(res.patient)
          setPatientExist(true)
          if (res.patientClinicProfile) {
            setProfileExist(true)
          } else {
            setProfileExist(false)
          }
        } else {
          setPatient({
            id: '',
            nic: patient.nic,
            name: '',
            birthdate: null,
            contact: '',
            email: '',
            address: '',
            gender: '',
            registered_date: new Date(),
            clinic: clinic,
          })
          setPatientExist(false)
          setProfileExist(false)
        }
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitLock(true)
    let patientData = patient
    let nextClinic = clinicDate
    let isValid = validation()
    if (isValid) {
      console.log('send data')
      send_data(patientData, nextClinic).then((res) => {
        console.log(res)
        toast.info('Patient Added Successfully', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        })
      })
    } else {
      setSubmitLock(false)
    }
  }

  const search = (value, searchArray) => {
    let inArray = false
    searchArray.map((obj) => {
      if (obj.day == value) {
        console.log(value)
        console.log(obj.day)
        inArray = true
      }
    })

    return inArray
  }

  const validation = () => {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    let specialCharacters = false
    let isValid = true
    const currDate = new Date()
    const nextDate = new Date(clinicDate)
    const birthDate = new Date(patient.birthDate)
    const nextDay = weekday[nextDate.getDay()]

    console.log('in validation')

    if (clinicDate == '') {
      isValid = false
      toast.error('Please Select Next Clinic Date', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    } else if (nextDate < currDate) {
      console.log('next clinic date error')
      isValid = false
      toast.error('Next Clinic Date Is Invalid', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    } else if (!search(nextDay, clinic.clinicSchedules)) {
      isValid = false
      toast.error('No Clinic Schedule On ' + nextDay, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    }

    if (birthDate >= currDate) {
      isValid = false
      toast.error('Wrong BirthDay', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    }

    if (!patient.nic.match('[0-9]{12}') && !patient.nic.match('[0-9]{9}V')) {
      isValid = false
      toast.error('Wrong NIC', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    }

    if (patient.name.match('[^A-Za-z0-9.,\t\n ]')) {
      isValid = false
      specialCharacters = true
    }

    if (patient.address.match('[^A-Za-z0-9.,\t\n ]')) {
      isValid = false
      specialCharacters = true
    }

    if (!patient.contact.match('[0-9]{9}')) {
      isValid = false
      toast.error('Wrong Contact Number', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    }

    if (specialCharacters) {
      toast.error('Special Characters Not Allowed', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    }

    return isValid
  }

  const handleDataChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name == 'clinicDate') {
      setClinicDate(value)
    } else {
      setPatient({ ...patient, [name]: value })
    }
  }
  return (
    <Card className={classes.card}>
      <CardHeader
        title='Patient Registration'
        className={classes.cardHeader}
      ></CardHeader>
      <CardContent className={classes.cardContent}>
        <div className='card-body'>
          <form>
            <Grid container spacing={5}>
              <Grid item sm={6}>
                <div className='form-group mb-3'>
                  <label
                    style={{
                      fontSize: '20px',
                      color: '#3f51b5',
                      paddingLeft: '10px',
                    }}
                  >
                    Patient NIC
                  </label>
                  <Grid container space={5}>
                    <Grid item sm={9}>
                      <input
                        placeholder='Patient NIC'
                        name='nic'
                        className='form-control'
                        type='text'
                        value={patient.nic}
                        onChange={(e) => handleDataChange(e)}
                        disabled={check}
                      ></input>
                    </Grid>
                    <Grid item sm={3}>
                      <button
                        className='btn'
                        style={{ width: '100%', backgroundColor: '#f50057' }}
                        disabled={check}
                        onClick={getPatient}
                      >
                        Check Patient
                      </button>
                    </Grid>
                  </Grid>
                </div>
                {!check && !patientExist && !profileExist && (
                  <Alert severity='info'>
                    <AlertTitle>
                      Please check patient registered in the system
                    </AlertTitle>
                  </Alert>
                )}
                {patientExist && !profileExist && (
                  <Alert severity='info'>
                    <AlertTitle>
                      Patient Registered In the System. Please submit to
                      register patient in the clinic
                    </AlertTitle>
                  </Alert>
                )}
                {profileExist && (
                  <Alert severity='info'>
                    <AlertTitle>
                      Patient Registered In the Clinic. Cannot register same
                      patient twice in clinic
                    </AlertTitle>
                  </Alert>
                )}
                <div className='form-group mb-3'>
                  <label
                    style={{
                      fontSize: '20px',
                      color: '#3f51b5',
                      paddingLeft: '10px',
                    }}
                  >
                    Patient Name
                  </label>
                  <input
                    placeholder='Patient Name'
                    name='name'
                    className='form-control'
                    type='text'
                    value={patient.name}
                    onChange={(e) => handleDataChange(e)}
                    disabled={patientExist || !check}
                  ></input>
                </div>
                <div className='form-group mb-3'>
                  <label
                    style={{
                      fontSize: '20px',
                      color: '#3f51b5',
                      paddingLeft: '10px',
                    }}
                  >
                    Birthday
                  </label>

                  <input
                    name='birthdate'
                    className='form-control'
                    type='date'
                    value={patient.birthdate}
                    onChange={(e) => handleDataChange(e)}
                    disabled={patientExist || !check}
                  ></input>
                </div>
                <div className='form-group mb-3'>
                  <label
                    style={{
                      fontSize: '20px',
                      color: '#3f51b5',
                      paddingLeft: '10px',
                    }}
                  >
                    Gender
                  </label>

                  <select
                    placeholder='Gender'
                    name='gender'
                    className='form-control'
                    type='text'
                    value={patient.gender}
                    onChange={(e) => handleDataChange(e)}
                    disabled={patientExist || !check}
                  >
                    <option value='f'>Female</option>
                    <option value='m'>Male</option>
                  </select>
                </div>
                <div className='form-group mb-3'>
                  <label
                    style={{
                      fontSize: '20px',
                      color: '#3f51b5',
                      paddingLeft: '10px',
                    }}
                  >
                    Contact Number
                  </label>
                  <input
                    placeholder='Contact Number'
                    name='contact'
                    className='form-control'
                    type='number'
                    value={patient.contact}
                    onChange={(e) => handleDataChange(e)}
                    disabled={patientExist || !check}
                  ></input>
                </div>
                <div className='form-group mb-3'>
                  <label
                    style={{
                      fontSize: '20px',
                      color: '#3f51b5',
                      paddingLeft: '10px',
                    }}
                  >
                    Email
                  </label>
                  <input
                    placeholder='Email'
                    name='email'
                    className='form-control'
                    type='text'
                    value={patient.email}
                    onChange={(e) => handleDataChange(e)}
                    disabled={patientExist || !check}
                  ></input>
                </div>
                <div className='form-group mb-3'>
                  <label
                    style={{
                      fontSize: '20px',
                      color: '#3f51b5',
                      paddingLeft: '10px',
                    }}
                  >
                    Address
                  </label>
                  <input
                    placeholder='Address'
                    name='address'
                    className='form-control'
                    type='text'
                    value={patient.address}
                    onChange={(e) => handleDataChange(e)}
                    disabled={patientExist || !check}
                  ></input>
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className='form-group mb-3'>
                  <label
                    style={{
                      fontSize: '20px',
                      color: '#3f51b5',
                      paddingLeft: '10px',
                    }}
                  >
                    Clinic
                  </label>

                  <input
                    className='form-control'
                    type='text'
                    value={clinic.name}
                    disabled={true}
                  ></input>
                </div>
                <div className='form-group mb-3'>
                  <label
                    style={{
                      fontSize: '20px',
                      color: '#3f51b5',
                      paddingLeft: '10px',
                    }}
                  >
                    Clinic Date
                  </label>

                  <input
                    name='clinicDate'
                    className='form-control'
                    type='date'
                    value={clinicDate}
                    onChange={(e) => handleDataChange(e)}
                    disabled={!check}
                    disabled={profileExist || !check}
                  ></input>
                </div>
                <div className='input-group'>
                  <button
                    className='btn btn-primary'
                    style={{ width: 'inherit' }}
                    onClick={handleSubmit}
                    disabled={submitLock || profileExist}
                  >
                    Submit
                  </button>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}

export default AddPatient
