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

const useStyles = makeStyles({
  card: {
    position: 'absolute',
    width: '70%',
    minHeight: '550px',
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

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

function ChangeAppointment(props) {
  const history = useHistory()
  const [modalStyle] = React.useState(getModalStyle)
  const classes = useStyles()
  const [availableDates, setAvailableDates] = useState([])
  const [requestData, setRequestData] = useState()
  const [newDate, setNewDate] = useState()
  console.log(props)

  useEffect(() => {
    setAvailableDates(props.availableDates)
    setRequestData(props.requestData)
  }, [props])

  const handleSubmit = (e) => {
    e.preventDefault()
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
          sm={4}
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
                    setNewDate(e.value)
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
                  value={requestData.patient.name}
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
                  value={requestData.clinic.name}
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
                  Current Date
                </label>
                <input
                  name='clinic'
                  className='form-control'
                  type='text'
                  value={requestData.clinicDate.date}
                  disabled={true}
                ></input>
              </div>

              <div className='input-group'>
                <button
                  className='btn btn-primary'
                  style={{ width: 'inherit' }}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Grid>

        <Grid
          item
          sm={8}
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

export default ChangeAppointment
