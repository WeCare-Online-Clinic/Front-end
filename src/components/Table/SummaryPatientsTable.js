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

const SummaryPatientsTable = (props) => {
  const history = useHistory()
  const { className } = props
  const [patientList, setPatientList] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(8) // set no.of rows per page
  const [page, setPage] = useState(0) // set page no

  useEffect(() => {
    setPatientList(props.patientList)
  }, [props])

  const tableHeaders = [
    // add table header names
    { text: 'Patient Name' },
    { text: 'Age' },
    { text: 'Gender' },
    { text: 'Queue No' },
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
      <Card padding={'0'} className={clsx(classes.root, className)}>
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
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // slice patienData array to no.of rows per page
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
                            {row.queueNo}
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
            count={patientList.length} // size of patientData array
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 8, 10]}
          />
        </CardActions>
      </Card>
    </div>
  )
}

export default SummaryPatientsTable
