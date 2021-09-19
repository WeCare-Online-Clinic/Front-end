import React, { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Constants from '../../utils/Constants'
import { getStorageItem } from '../../utils/StorageUtils'

const useStyles = makeStyles({
  card: {
    position: 'absolute',
    width: '70%',
    minHeight: '450px',
    border: '2px solid #3f51b5',
  },
  cardHeader: {
    textAlign: 'center',
    color: '#3f51b5',
    borderBottom: '1px solid #000',
    backgroundColor: '#fff',
  },
  cardContent: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '16px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 40px 20px 40px',
    width: '100%',
  },
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
    fontSize: '20px',
  },
  textBox: {
    minHeight: '100px',
    margin: '5px 40px 5px 40px',
    padding: '10px',
    color: '#4c5355',
    fontSize: '14px',
    border: '1px solid #4c5355',
  },
})

const CLINIC = getStorageItem('nurseInfo', true).clinic

async function send_data(patient, date) {
  //console.log('clinic date available')

  let status = false

  try {
    await axios
      .post(Constants.API_BASE_URL + '/add/appointment/', {
        patient: patient,
        clinic: CLINIC,
        date: date,
      })
      .then((res) => {
        console.log(res)
        if (res.status == 200) {
          //console.log(res)

          status = res.data
        }
      })
    return status
  } catch (error) {
    console.log(error)
  }
}

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

function AddAppointment(props) {
  const history = useHistory()
  const [modalStyle] = React.useState(getModalStyle)
  const classes = useStyles()
  const [availableDates, setAvailableDates] = useState([])
  const [submitLock, setSubmitLock] = useState(false)
  const [requestData, setRequestData] = useState()
  const [newDate, setNewDate] = useState()
  console.log(props)

  useEffect(() => {
    setAvailableDates(props.availableDates)
    setRequestData(props.requestData)
  }, [props])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitLock(true)

    let isValid = validation()
    if (isValid) {
      send_data(requestData, newDate).then((res) => {
        console.log(res)
        toast.info('Appointment Added Successfully', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        })
        //window.location.reload()
        // console.log(res)
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
    let isValid = true
    const currDate = new Date()
    const nextDate = new Date(newDate)
    const nextDay = weekday[nextDate.getDay()]

    console.log('in validation')

    if (newDate == null) {
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
    } else if (!search(nextDay, CLINIC.clinicSchedules)) {
      isValid = false
      toast.error('No Clinic Schedule On ' + nextDay, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    }

    return isValid
  }

  const tableHeaders = [
    // add table header names
    { text: 'Clinic Date' },
    { text: '' },
    { text: 'Start Time' },
    { text: '# of Patients' },
  ]

  return (
    <Card style={modalStyle} className={classes.card}>
      <CardHeader
        title='Change Apppointment Date'
        className={classes.cardHeader}
      />
      <Grid container>
        <Grid
          item
          sm={5}
          style={{
            backgroundColor: '#fff',
            paddingRight: '20px',
            paddingLeft: '20px',
          }}
        >
          <div className={classes.textTitle}>Select New Date</div>
          {requestData && (
            <form>
              <div className='form-group mb-3'>
                <label
                  style={{
                    fontSize: '20px',
                    color: '#3f51b5',
                    paddingLeft: '10px',
                  }}
                >
                  Select New Date
                </label>
                <input
                  name='newDate'
                  className='form-control'
                  type='date'
                  value={newDate}
                  onChange={(e) => {
                    setNewDate(e.target.value)
                  }}
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
                  Patient Name
                </label>
                <input
                  name='name'
                  className='form-control'
                  type='text'
                  value={requestData.name}
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
                  Clinic
                </label>
                <input
                  name='clinic'
                  className='form-control'
                  type='text'
                  value={CLINIC.name}
                  disabled={true}
                ></input>
              </div>
              <div className='input-group'>
                <button
                  className='btn btn-primary'
                  style={{ width: 'inherit' }}
                  onClick={handleSubmit}
                  disabled={submitLock}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Grid>

        <Grid
          item
          sm={7}
          style={{
            backgroundColor: '#fff',
            borderLeft: '1px solid #000',
            overflowY: 'scroll',
          }}
        >
          <div className={classes.textTitle}> Available Dates</div>
          <div className={classes.textBox}>
            <Table>
              <TableHead>
                <TableRow>
                  {tableHeaders.map((col) => (
                    <TableCell
                      style={{
                        color: '#3f51b5',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        borderBottom: '1px solid #000',
                      }}
                      className={classes.hoverable}
                    >
                      <span>{col.text}</span>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {availableDates &&
                  availableDates.map((row) => (
                    <TableRow className={classes.tableRow} hover>
                      <TableCell className={classes.cell}>{row.date}</TableCell>
                      <TableCell className={classes.cell}>
                        {row.clinicSchedule.day}
                      </TableCell>
                      <TableCell className={classes.cell}>
                        {row.clinicSchedule.time}
                      </TableCell>
                      <TableCell className={classes.cell}>
                        {row.noPatients}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}

export default AddAppointment
