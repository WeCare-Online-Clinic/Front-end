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
    width: '40%',
    minHeight: '400px',
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

const CLINIC = getStorageItem('nurseInfo', true).clinic.id
const NURSE = getStorageItem('nurseInfo', true).id
console.log(CLINIC)

async function get_available_dates() {
  let available_dates = []

  try {
    await axios
      .get(Constants.API_BASE_URL + '/clinic/available/dates/' + CLINIC)
      .then((res) => {
        if (res.status == 200) {
          available_dates = res.data
        }
      })
    return available_dates
  } catch (error) {
    console.log(error)
  }
}

async function send_data(clinicDId, message) {
  //console.log('clinic date available')

  let status = false
  try {
    await axios
      .post(Constants.API_BASE_URL + '/send/clinic/date/message/', {
        id: clinicDId,
        message: message,
        nurseId: NURSE,
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

function ClinicDateMessageForm(props) {
  const history = useHistory()
  const [modalStyle] = useState(getModalStyle)
  const classes = useStyles()
  const [submitLock, setSubmitLock] = useState(false)
  const [message, setMessage] = useState('')
  const [availableDates, setAvailableDates] = useState([])
  const [clinicDate, setClinicDate] = useState()

  useEffect(() => {
    get_available_dates().then((res) => {
      setAvailableDates(res)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitLock(true)

    if (message.match('[A-Za-z0-9.,\t\n ]*')) {
      send_data(clinicDate, message).then((res) => {
        if (res) {
          toast.error('Message Sent Successfully', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          })
        }
      })
    } else {
      toast.error('Special symbols except .,-: not allowed', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      })
    }
  }

  return (
    <Card style={modalStyle} className={classes.card}>
      <CardHeader title='Send Message' className={classes.cardHeader} />
      <Grid container>
        <Grid
          item
          sm={12}
          style={{
            backgroundColor: '#fff',
            paddingRight: '20px',
            paddingLeft: '20px',
            paddingTop: '20px',
          }}
        >
          <form>
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
              <select
                name='clinicDate'
                className='form-control'
                type='text'
                value={clinicDate}
                onChange={(e) => {
                  setClinicDate(e.target.value)
                }}
              >
                {availableDates &&
                  availableDates.map((row) => (
                    <option value={row.id}> {row.date} </option>
                  ))}
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
                Message
              </label>
              <textarea
                name='message'
                className='form-control'
                type='text'
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
              ></textarea>
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
        </Grid>
      </Grid>
    </Card>
  )
}

export default ClinicDateMessageForm
