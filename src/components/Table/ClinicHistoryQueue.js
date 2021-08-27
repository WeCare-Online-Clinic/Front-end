import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { getStorageItem } from '../../utils/StorageUtils'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Constants from '../../utils/Constants'
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
  AppBar,
  Grid,
  TextField,
} from '@material-ui/core'
import PageviewIcon from '@material-ui/icons/Pageview'

async function get_queue(clinic_date) {
  console.log('clinic history')

  let queue = []

  try {
    await axios
      .get(Constants.API_BASE_URL + '/clinic/queue/' + clinic_date)
      .then((res) => {
        if (res.status == 200) {
          queue = res.data
        }
      })
    return queue
  } catch (error) {
    console.log(error)
  }
}

function calculate_age(dob) {
  var dob = new Date(dob)
  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime()

  //convert the calculated difference in date format
  var age_dt = new Date(month_diff)

  //extract year from date
  var year = age_dt.getUTCFullYear()

  //now calculate the age of the user
  return Math.abs(year - 1970)
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

const ClinicHistoryQueue = (props) => {
  console.log(props)
  const history = useHistory()
  const { className } = props
  const [queue, setQueue] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(8) // set no.of rows per page
  const [page, setPage] = useState(0) // set page no

  useEffect(() => {
    get_queue(props.clinic_did).then((res) => {
      setQueue(res)
      console.log(res)
    })
  }, [])

  console.log(queue)

  const tableHeaders = [
    // add table header names
    { text: 'Queue No' },
    { text: 'Time' },
    { text: 'Name' },
    { text: 'Age' },
    { text: 'Gender' },
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
                  {queue
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // slice patienData array to no.of rows per page
                    .map(
                      (
                        row // add table row of patientData
                      ) => (
                        <TableRow className={classes.tableRow} hover>
                          <TableCell className={classes.cell}>
                            {row.queueNo}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {row.time}
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
            count={queue.length} // size of patientData array
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 8, 15]}
          />
        </CardActions>
      </Card>
    </div>
  )
}

export default ClinicHistoryQueue
