import React, { useState, useEffect } from 'react'
import { Alert } from '@material-ui/lab'
import clsx from 'clsx'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/styles'
import Constants from '../../utils/Constants'
import axios from 'axios'
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
  Button,
  Grid,
  TextField,
} from '@material-ui/core'
import { patientData } from './patientData'
import PageviewIcon from '@material-ui/icons/Pageview'
import { useHistory } from 'react-router-dom'
import { getStorageItem } from '../../utils/StorageUtils'
import Modal from '@material-ui/core/Modal'
import ChangeAppointment from '../Forms/ChangeAppointment'

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

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 'inherit',
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

const PatientRequestTable = (props) => {
  const history = useHistory()

  const [requestList, setRequestList] = useState([])
  const [availableDates, setAvailableDates] = useState([])
  const [searchName, setSearchName] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState(null)
  const [rowsPerPage, setRowsPerPage] = useState(8) // set no.of rows per page
  const [page, setPage] = useState(0) // set page no

  useEffect(() => {
    setRequestList(props.requestList)
    setAvailableDates(props.availableDates)
  }, [props])

  const renderForm = (request) => {
    setModalOpen(true)
    setFormData(request)
  }

  const handleClose = () => {
    setModalOpen(false)
  }

  const onSearch = (e) => {
    e.preventDefault()
    console.log('search')
    let filtered_list = requestList.filter(search)
    setRequestList(filtered_list)
    console.log(requestList)
  }

  function search(row) {
    if (row.patient.name.indexOf(searchName) !== -1) {
      return row
    }
  }

  const tableHeaders = [
    // add table header names
    { text: 'Request ID' },
    { text: 'Patient Name' },
    { text: 'Age' },
    { text: 'Gender' },
    { text: 'Clinic Date' },
    { text: '# Of Patients' },
  ]

  const classes = useStyles()

  const handlePageChange = (event, page) => {
    setPage(page)
  }
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value)
  }

  return (
    <div>
      <Card>
        <Grid className={classes.grid} container justify='space-around'>
          <Grid item sm></Grid>
          <Grid
            item
            alignContent='center'
            style={{ backgroundColor: '#3f51b5', borderRadius: '5px' }}
          >
            <form clasName={classes.root}>
              <TextField
                className={classes.search_items}
                label='Patient Name'
                variant='outlined'
                size='small'
                value={searchName}
                onChange={(e) => {
                  setSearchName(e.target.value)
                }}
              ></TextField>
              <Button
                startIcon={<PageviewIcon />}
                variant='contained'
                size='large'
                color='secondary'
                style={{ margin: '10px' }}
                onClick={onSearch}
              >
                Search
              </Button>
            </form>
          </Grid>
        </Grid>
        {requestList && (
          <React.Fragment>
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
                    <TableBody>
                      {requestList
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        ) // slice patienData array to no.of rows per page
                        .map(
                          (
                            row // add table row of rowData
                          ) => (
                            <TableRow className={classes.tableRow} hover>
                              <TableCell className={classes.cell}>
                                {row.requestId}
                              </TableCell>
                              <TableCell className={classes.cell}>
                                {row.patient.name}
                              </TableCell>
                              <TableCell className={classes.cell}>
                                {calculate_age(row.patient.birthdate)}
                              </TableCell>
                              <TableCell className={classes.cell}>
                                {show_gender(row.patient.gender)}
                              </TableCell>
                              <TableCell className={classes.cell}>
                                {row.clinicDate.date}
                              </TableCell>
                              <TableCell className={classes.cell}>
                                {row.clinicDate.noPatients}
                              </TableCell>
                              <TableCell>
                                <Button
                                  variant='contained'
                                  fullWidth='true'
                                  color='primary'
                                  onClick={() => {
                                    renderForm(row)
                                  }}
                                >
                                  Change Appointment Date
                                </Button>
                              </TableCell>
                            </TableRow>
                          )
                        )}
                    </TableBody>
                  </Table>
                </div>
              </PerfectScrollbar>
            </CardContent>
            <CardActions className={classes.actions}>
              <TablePagination
                component='div'
                count={patientData.length} // size of patientData array
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleRowsPerPageChange}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 8, 10, 15]}
              />
            </CardActions>
          </React.Fragment>
        )}
      </Card>

      <Modal open={modalOpen} onClose={handleClose}>
        <ChangeAppointment
          availableDates={availableDates}
          requestData={formData}
        />
      </Modal>
    </div>
  )
}

export default PatientRequestTable
