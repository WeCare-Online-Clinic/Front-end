import React, { useState } from 'react'
import clsx from 'clsx'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/styles'
import { useSelector } from 'react-redux'
import withReducer from '../../../../../../store/withReducer'
import reducer from '../store/reducer'
import SearchBar from './SearchBar'


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
  TextField

} from '@material-ui/core'
import { DoctorData } from './DoctorData'
import PageviewIcon from '@material-ui/icons/Pageview'
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
    display: 'inline',
    alignItems: 'baseline',
  },
  status: {
    marginRight: 15,
  },
  actions: {
    justifyContent: '',
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

const DoctorDataTable = (props) => {
  const reducerData = useSelector(({ doctors }) => doctors.doctorAddEdit)

  const doctorList=reducerData.doctorList;



  const history = useHistory()
  const { className } = props
  const [rowsPerPage, setRowsPerPage] = useState(10) // set no.of rows per page
  const [page, setPage] = useState(0) // set page no

  const tableHeaders = [
    // add table header names
    { text: 'Doctor ID' },
    { text: 'Doctor Name' },
    { text: 'Email' },
    { text: 'Contact No' },
    { text: 'Clinic' },
  ]

  const classes = useStyles()

  const handlePageChange = (event, page) => {
    setPage(page)
  }
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value)
  }

  return (
    <div className="">
      <Card padding={'0'} className={clsx(classes.root, className)}>

        <Grid
          item
          style={{ backgroundColor: '#3f51b5', borderRadius: '5px', alignItems: 'flex-end' }}
        >

          <nav className="navbar navbar-expand " style={{ float:'right' }}>
            <div className="collapse navbar-collapse"   >
              <SearchBar />
            </div>
          </nav>

          
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
                  {doctorList
                    .map(
                      (
                        doctor, index// add table rowDoctor
                      ) => (

                        <TableRow className={classes.tableRow} hover key={index}>
                          <TableCell className={classes.cell}>
                            {doctor.id}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {doctor.name}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {doctor.email}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {doctor.contact}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {doctor.clinic && doctor.clinic.name}
                          </TableCell>

                          <TableCell>
                            <Button
                              variant='contained'
                              fullWidth='true'
                              color='primary'
                              onClick={() =>
                                history.push({
                                  pathname: 'doctorschedule',
                                  state: doctor.id,
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
            count={DoctorData.length} // size of DoctorData array
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

export default withReducer('doctors', reducer)(DoctorDataTable)
