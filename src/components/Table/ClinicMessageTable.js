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
  CardHeader,
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

const ClinicMessageTable = (props) => {
  const history = useHistory()
  const [clinicMessage, setClinicMessage] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(8) // set no.of rows per page
  const [page, setPage] = useState(0) // set page no

  console.log(props)

  useEffect(() => {
    setClinicMessage(props.messages)
  }, [props])

  const tableHeaders = [
    // add table header names
    { text: 'Date' },
    { text: 'Time' },
    { text: 'Message' },
    { text: 'Clinic Date' },
    { text: 'Nurse' },
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
        <CardHeader
          style={{
            textAlign: 'center',
            color: '#fff',
            borderBottom: '1px solid #000',
            backgroundColor: '#3f51b5',
          }}
          title={props.name}
        ></CardHeader>
        <CardContent className={classes.content}>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {clinicMessage &&
                clinicMessage
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // slice patienData array to no.of rows per page
                  .map(
                    (
                      row // add table row of patientData
                    ) => (
                      <TableRow className={classes.tableRow} hover>
                        <TableCell className={classes.cell}>
                          {row.date}
                        </TableCell>
                        <TableCell className={classes.cell}>
                          {row.time}
                          {!row.time && '---'}
                        </TableCell>
                        <TableCell className={classes.cell}>
                          {row.message}
                          {!row.message && '---'}
                        </TableCell>
                        <TableCell className={classes.cell}>
                          {row.clinicDate && row.clinicDate.date}
                          {!row.clinicDate && '---'}
                        </TableCell>
                        <TableCell className={classes.cell}>
                          {row.nurse.name}
                          {!row.nurse.name && '---'}
                        </TableCell>
                      </TableRow>
                    )
                  )}
            </TableBody>
          </Table>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component='div'
            count={clinicMessage && clinicMessage.length} // size of patientData array
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

export default ClinicMessageTable
