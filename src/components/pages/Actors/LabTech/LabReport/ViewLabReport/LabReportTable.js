import React, { useState } from 'react'
import clsx from 'clsx'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/styles'
import { useSelector } from 'react-redux'
import withReducer from '../../../../../../store/withReducer'
import reducer from '../store/reducer'
//import SearchBar from './SearchBar'
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

} from '@material-ui/core'

import { useHistory } from 'react-router-dom'

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

const ReportDataTable = (props) => {
  const reducerData = useSelector(({ report }) => report.manageReport);
  console.log("report list", reducerData.reportList);
  const reportList = reducerData.reportList;

  const history = useHistory()
  const { className } = props
  const [rowsPerPage, setRowsPerPage] = useState(10) // set no.of rows per page
  const [page, setPage] = useState(0) // set page no

  const tableHeaders = [
    // add table header names
    { text: 'Report ID' },
    { text: 'Patient Name' },
    { text: 'Test Name' },
    { text: 'Date Added' },
    { text: 'Test Time' },
    { text: 'Issued Date' },
    // { text: 'Availability' },
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
        <Grid className={classes.grid} container justify='space-around'>
          <Grid item sm></Grid>
          <Grid
            item
            alignContent='center'
            style={{ backgroundColor: '', borderRadius: '5px' }}
          >
            <nav className="navbar navbar-expand " style={{ float: 'right' }}>
              <div className="collapse navbar-collapse"   >

              </div>
            </nav>
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
                    <TableCell
                      style={{ borderBottom: '1px solid #000' }}
                    ></TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>

                  {reportList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // slice patienList array to no.of rows per page
                    .map(
                      (
                        report // add table row of patientData
                      ) => (
                        <TableRow className={classes.tableRow} hover>
                          <TableCell className={classes.cell}>
                            {report.id}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {report.patient && report.patient.name}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {report.test && report.test.name}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {report.testDate}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {report.testTime}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {report.issuedDate == null ? "not issued yet" : report.issuedDate}
                          </TableCell>
                          {/* <TableCell className={classes.cell}>
                            {report.availability == false ? "false" : "true"}
                          </TableCell> */}

                          <TableCell>
                            <Button
                              variant='contained'
                              fullWidth='true'
                              color={report.issuedDate == null ? "primary" : "#f44336"}
                              onClick={()=>
                                history.push({
                                  pathname: 'addlabreport',
                                  state: report
                                })}
                            >
                              {report.issuedDate == null ? "issue" : "issued"}
                            </Button>
                          </TableCell>

                          <TableCell>
                            <Button
                              variant='contained'
                              fullWidth='true'
                              color='primary'
                              onClick={() =>
                                history.push({
                                  pathname: 'reportprofile',
                                  state: report.id,
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
            count={reportList.length} // size of patientList array
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

export default withReducer('report', reducer)(ReportDataTable);