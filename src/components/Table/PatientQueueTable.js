import React, { useState, useEffect } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Grid,
  CardHeader,
  Button,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { getStorageItem } from '../../utils/StorageUtils'
import Constants from '../../utils/Constants'
import axios from 'axios'
import AddAppointment from '../Forms/AddAppointment'
import Modal from '@material-ui/core/Modal'

const CLINIC = getStorageItem('nurseInfo', true).clinic.id
console.log(CLINIC)

async function get_available_dates() {
  let availableDates = []

  try {
    await axios
      .get(Constants.API_BASE_URL + '/clinic/available/dates/' + CLINIC)
      .then((res) => {
        if (res.status == 200) {
          availableDates = res.data
        }
      })
    return availableDates
  } catch (error) {
    console.log(error)
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  content: {
    padding: 0,
  },
  inner: {
    minWidth: '95%',
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'baseline',
  },
  status: {
    marginRight: 15,
  },
  actions: {
    justifyContent: 'flex-end',
  },
  cell: {
    color: '#4e4f50',
    fontSize: '16px',
  },
  highlightCell: {
    backgroundColor: '#e35',
    color: '#fff',
  },
  search_items: {
    maxHeight: '50px',
    margin: '10px',
    backgroundColor: '#fff',
  },
  grid: {
    borderBottom: '2px solid #3f51b5',
    padding: '5px',
  },
}))

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

const PatientQueueTable = (props) => {
  const history = useHistory()
  const [availableDates, setAvailableDates] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState(null)
  const [queue, setQueue] = useState([])
  const [queueNo, setQueueNo] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(8) // set no.of rows per page
  const [page, setPage] = useState(0) // set page no

  const tableHeaders = [
    // add table header names
    { text: 'Number' },
    { text: 'Patient Name' },
    { text: 'Age' },
    { text: 'Gender' },
    { text: 'Consulted/Not' },
  ]

  useEffect(() => {
    setQueue(props.queue)
    setQueueNo(props.queueNo)
  }, [props])

  useEffect(() => {
    get_available_dates().then((res) => {
      setAvailableDates(res)
    })
  }, [props])

  console.log(availableDates)

  const renderForm = (request) => {
    setModalOpen(true)
    setFormData(request)
  }

  const handleClose = () => {
    setModalOpen(false)
  }

  const classes = useStyles()

  const handlePageChange = (event, page) => {
    setPage(page)
  }
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value)
  }

  return (
    <Card className={classes.inner}>
      <CardHeader
        style={{
          textAlign: 'center',
          color: '#fff',
          borderBottom: '1px solid #000',
          backgroundColor: '#3f51b5',
        }}
        title={'Patient Queue'}
      ></CardHeader>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead
                style={{ backgroundColor: '#ebf5f7' }}
                className={classes.head}
              >
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

                  <TableCell
                    style={{ borderBottom: '1px solid #000' }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              {queue.length > 0 && (
                <TableBody>
                  {queue
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // slice patienData array to no.of rows per page
                    .map(
                      (
                        appointment // add table row of QueueData
                      ) => (
                        <TableRow className={classes.tableRow} hover>
                          {appointment.queueNo == queueNo && (
                            <>
                              <TableCell className={classes.highlightCell}>
                                {appointment.queueNo}
                              </TableCell>
                              <TableCell className={classes.highlightCell}>
                                {appointment.patient.name}
                              </TableCell>
                              <TableCell className={classes.highlightCell}>
                                {calculate_age(appointment.patient.birthdate)}
                              </TableCell>
                              <TableCell className={classes.highlightCell}>
                                {show_gender(appointment.patient.gender)}
                              </TableCell>
                              {appointment.visited && (
                                <TableCell
                                  className={classes.highlightCell}
                                  style={{ color: 'white' }}
                                >
                                  Consulted
                                </TableCell>
                              )}
                              {!appointment.visited && (
                                <TableCell
                                  className={classes.highlightCell}
                                  style={{ color: 'white' }}
                                >
                                  Not Consulted
                                </TableCell>
                              )}
                              <TableCell className={classes.highlightCell}>
                                <Button
                                  variant='contained'
                                  fullWidth='true'
                                  color='primary'
                                  disabled={appointment.visited}
                                  onClick={() => {
                                    renderForm(appointment.patient)
                                  }}
                                >
                                  Add Appointment Date
                                </Button>
                              </TableCell>
                            </>
                          )}
                          {appointment.queueNo != queueNo && (
                            <>
                              <TableCell className={classes.cell}>
                                {appointment.queueNo}
                              </TableCell>
                              <TableCell className={classes.cell}>
                                {appointment.patient.name}
                              </TableCell>
                              <TableCell className={classes.cell}>
                                {calculate_age(appointment.patient.birthdate)}
                              </TableCell>
                              <TableCell className={classes.cell}>
                                {show_gender(appointment.patient.gender)}
                              </TableCell>
                              {appointment.visited && (
                                <TableCell
                                  className={classes.cell}
                                  style={{ color: 'green' }}
                                >
                                  Consulted
                                </TableCell>
                              )}
                              {!appointment.visited && (
                                <TableCell
                                  className={classes.cell}
                                  style={{ color: 'red' }}
                                >
                                  Not Consulted
                                </TableCell>
                              )}
                              <TableCell>
                                <Button
                                  variant='contained'
                                  fullWidth='true'
                                  color='primary'
                                  disabled={appointment.visited}
                                  onClick={() => {
                                    renderForm(appointment.patient)
                                  }}
                                >
                                  Add Appointment Date
                                </Button>
                              </TableCell>
                            </>
                          )}
                        </TableRow>
                      )
                    )}
                </TableBody>
              )}
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component='div'
          count={queue.length} // size of QueueData array
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 8, 10, 15]}
        />
      </CardActions>

      <Modal open={modalOpen} onClose={handleClose}>
        <AddAppointment
          availableDates={availableDates}
          requestData={formData}
        />
      </Modal>
    </Card>
  )
}

export default PatientQueueTable
