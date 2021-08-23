import React, { useState } from 'react'
import clsx from 'clsx'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/styles'
import { useSelector } from 'react-redux'
import withReducer from '../../../../../../store/withReducer'
import reducer from '../store/reducer'
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
}))

const LabReportTable = (props) => {

  const reducerData = useSelector(({ report }) => report.manageReport);
  console.log("report list", reducerData.reportList);
  const reportList = reducerData.reportList;

  const { className } = props
  const [rowsPerPage, setRowsPerPage] = useState(8) // set no.of rows per page
  const [page, setPage] = useState(0) // set page no

  const tableHeaders = [
    // add table header names
    { text: 'Report ID' },
    { text: 'Patient Name' },
    { text: 'Test Name' },
    { text: 'Date Added' },
    { text: 'Date Issued' },
    { text: 'Availability' },
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
            style={{ backgroundColor: '#3f51b5', borderRadius: '5px' }}
          >
            <form clasName={classes.root}>
              <TextField
                className={classes.search_items}
                label='Report ID'
                variant='outlined'
                size='small'
              ></TextField>
              <TextField
                className={classes.search_items}
                label='Patient Name'
                variant='outlined'
                size='small'
              ></TextField>
              <TextField
                className={classes.search_items}
                label='Test Name'
                variant='outlined'
                size='small'
              ></TextField>
              <Button
                startIcon={<PageviewIcon />}
                variant='contained'
                size='large'
                color='secondary'
                style={{ margin: '10px' }}
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

                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // slice patienData array to no.of rows per page
                    .map(
                      (
                        report // add table row of patientData
                      ) => (
                        <TableRow className={classes.tableRow} hover>
                          <TableCell className={classes.cell}>
                            {report.id}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {patient.p_name}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {report.t_name}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {report.a_date}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {report.i_date}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {report.availability}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant='contained'
                              fullWidth='true'
                              color='primary'
                              onClick={() => props.func()}
                            >
                              Issue
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant='contained'
                              fullWidth='true'
                              color='primary'
                              onClick={() => props.func()}
                            >
                              Update
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant='contained'
                              fullWidth='true'
                              color='primary'
                              onClick={() => props.func()}
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
            count={labReportData.length} // size of patientData array
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

export default withReducer('report', reducer)(ReportTable);
