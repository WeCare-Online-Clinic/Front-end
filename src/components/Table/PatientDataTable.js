import React, { useState } from 'react'
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

const CLINIC = getStorageItem('doctorInfo', true).clinic.id
console.log(CLINIC)

var PATIENT_LIST = []
var GET_ERROR = false

async function get_patient_details() {
  console.log('patient info')

  await axios
    .get(Constants.API_BASE_URL + '/patient/list/' + CLINIC)
    .then((res) => {
      if (res.status === 200) {
        PATIENT_LIST = res.data
        console.log(PATIENT_LIST)
      }
    })
    .catch((e) => {
      GET_ERROR = true
      console.log(e)
    })
}

get_patient_details()

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

const PatientDataTable = (props) => {
  const history = useHistory()
  const { className } = props
  const [patientList, setPatientList] = useState(PATIENT_LIST)
  const [searchName, setSearchName] = useState('')
  const [searchDiagnosis, setsearchDiagnosis] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(8) // set no.of rows per page
  const [page, setPage] = useState(0) // set page no

  console.log(searchName, searchDiagnosis)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('search')
    let filtered_list = patientList.filter(search)
    setPatientList(filtered_list)
    console.log(patientList)
  }

  function search(row) {
    if (
      row.patient.name.indexOf(searchName) !== -1 ||
      row.diagnosis.indexOf(searchDiagnosis) !== -1
    ) {
      return row
    }
  }

  const tableHeaders = [
    // add table header names
    { text: 'Patient Name' },
    { text: 'Age' },
    { text: 'Gender' },
    { text: 'Diagnosis' },
    { text: 'Admission Date' },
  ]

  const classes = useStyles()

  const handlePageChange = (event, page) => {
    setPage(page)
  }
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value)
  }

  if (GET_ERROR == true) {
    return (
      <React.Fragment>
        <Alert severity='error'>
          Could not retrieve the patient data. Please try again
        </Alert>
      </React.Fragment>
    )
  } else {
    return (
      <div>
        <Card padding={'0'} className={clsx(classes.root, className)}>
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
                <TextField
                  className={classes.search_items}
                  label='Diagnosis'
                  variant='outlined'
                  size='small'
                  value={searchDiagnosis}
                  onChange={(e) => {
                    setsearchDiagnosis(e.target.value)
                  }}
                ></TextField>
                <Button
                  startIcon={<PageviewIcon />}
                  variant='contained'
                  size='large'
                  color='secondary'
                  style={{ margin: '10px' }}
                  onClick={onSubmit}
                >
                  Search
                </Button>
              </form>
            </Grid>
          </Grid>
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
                    {patientList
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
                              {row.patient.name}
                            </TableCell>
                            <TableCell className={classes.cell}>
                              {calculate_age(row.patient.birthdate)}
                            </TableCell>
                            <TableCell className={classes.cell}>
                              {show_gender(row.patient.gender)}
                            </TableCell>
                            <TableCell className={classes.cell}>
                              {row.diagnosis}
                            </TableCell>
                            <TableCell className={classes.cell}>
                              {row.admissionDate}
                            </TableCell>
                            <TableCell>
                              <Button
                                variant='contained'
                                fullWidth='true'
                                color='primary'
                                onClick={() =>
                                  history.push({
                                    pathname: 'patientdata',
                                    state: {
                                      patient: {
                                        id: row.patient.id,
                                        name: row.patient.name,
                                        age: calculate_age(
                                          row.patient.birthdate
                                        ),
                                        gender: show_gender(row.patient.gender),
                                        diagnosis: row.diagnosis,
                                        admissionDate: row.admissionDate,
                                        clinicId: row.clinic.id,
                                        clinicProfileId: row.id,
                                      },
                                    },
                                  })
                                }
                              >
                                View
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
        </Card>
      </div>
    )
  }
}

export default PatientDataTable
