import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
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
import Modal from '@material-ui/core/Modal'
import ViewPDF from '../Misc/ViewPDF'

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
    maxWidth: 'fit-content',
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
  card: {
    border: '2px solid #3f51b5',
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    textAlign: 'center',
    color: '#3f51b5',
    borderBottom: '1px solid #000',
    backgroundColor: '#fff',
  },
}))

const PatientReportsTable = (props) => {
  const { className } = props
  const [reports, setReports] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(8) // set no.of rows per page
  const [page, setPage] = useState(0) // set page no
  const [modalOpen, setModalOpen] = useState(false)
  const [pdf, setPdf] = useState()

  useEffect(() => {
    setReports(props.reports)
  }, [props])

  const tableHeaders = [
    // add table header names
    { text: 'Test Date' },
    { text: 'Test Time' },
    { text: 'Test Name' },
    { text: 'Data' },
    { text: 'Data' },
    { text: 'Issued Date' },
  ]

  const classes = useStyles()

  const handlePageChange = (event, page) => {
    setPage(page)
  }
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value)
  }

  const renderPdf = (data) => {
    setModalOpen(true)
    setPdf(data)
  }

  const handleClose = () => {
    setModalOpen(false)
  }

  return (
    <div>
      <Card>
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
                {reports && (
                  <TableBody>
                    {reports
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      ) // slice patienData array to no.of rows per page
                      .map(
                        (
                          row // add table row of patientData
                        ) => (
                          <TableRow className={classes.tableRow} hover>
                            <TableCell className={classes.cell}>
                              {row.testDate}
                            </TableCell>
                            <TableCell className={classes.cell}>
                              {row.testTime}
                            </TableCell>
                            <TableCell className={classes.cell}>
                              {row.test.name}
                            </TableCell>
                            <TableCell className={classes.cell}>
                              {row.test.field1 + ': ' + row.data1}
                            </TableCell>
                            <TableCell className={classes.cell}>
                              {row.test.field2 + ': ' + row.data2}
                            </TableCell>
                            <TableCell className={classes.cell}>
                              {row.issuedDate}
                              {!row.issuedDate && 'Not Available'}
                            </TableCell>
                            <TableCell>
                              <Button
                                variant='contained'
                                fullWidth='true'
                                color='primary'
                                onClick={() => renderPdf(row)}
                              >
                                View
                              </Button>
                            </TableCell>
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
            count={reports && reports.length} // size of patientData array
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 8, 15]}
          />
        </CardActions>
      </Card>
      <Modal open={modalOpen} onClose={handleClose}>
        <Grid container>
          <Grid item sm={12}>
            <Card className={classes.card}>
              <CardActions>
                <Button
                  variant='contained'
                  color='secondary'
                  size='large'
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={12}>
            <PerfectScrollbar>
              <ViewPDF reportDetails={pdf} />
            </PerfectScrollbar>
          </Grid>
        </Grid>
      </Modal>
    </div>
  )
}

export default PatientReportsTable
