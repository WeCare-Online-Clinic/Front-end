import React, { useState ,useRef} from 'react'
import clsx from 'clsx'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/styles'
import { useSelector } from 'react-redux'
import withReducer from '../../../../../../store/withReducer'
import reducer from '../store/reducer'
import SearchBar from './SearchBar'
import { useReactToPrint } from 'react-to-print'



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
import { DoctorData } from './DoctorData'
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

const NurseDataTable = (props) => {

  const componentRef = useRef();
  const handePrint = useReactToPrint({
    content: () => componentRef.current
  });
  const reducerData = useSelector(({ nurses }) => nurses.manageNurse); 
  const nurseList = reducerData.nurseList;


  const history = useHistory()
  const { className } = props
  const [rowsPerPage, setRowsPerPage] = useState(10) // set no.of rows per page
  const [page, setPage] = useState(0) // set page no

  const tableHeaders = [
    // add table header names
    { text: 'Nurse ID' },
    { text: 'Nurse Name' },
    { text: 'Email' },
    { text: 'Gender' },
    { text: 'Contact No' },
    { text: 'Type' },
    { text: 'Clinic' },

  ]

  const classes = useStyles()

  const handlePageChange = (event, page) => {
    setPage(page)
  }
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value)
  }
  const generatePDF = () => {
    handePrint();

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
              <div>
                <button style={{ marginRight: '22cm', color: 'balck', width: '100px', height: '40px' }} onClick={generatePDF}>Print List</button>

              </div>
              <div className="collapse navbar-collapse"   >
                <SearchBar />
              </div>
            </nav>
          </Grid>
        </Grid>
        <CardContent className={classes.content} ref={componentRef}>
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

                  {nurseList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // slice patienData array to no.of rows per page
                    .map(
                      (
                        nurse // add table rowDoctor
                      ) => (
                        <TableRow className={classes.tableRow} hover>
                          <TableCell className={classes.cell}>
                            {nurse.nurseId}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {nurse.name}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {nurse.email}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {nurse.gender == 'f' ? 'female' : 'male'}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {nurse.contact}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {nurse.isHead == true ? 'head' : 'regular'}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {nurse.clinic && nurse.clinic.name}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant='contained'
                              fullWidth='true'
                              color='primary'
                              onClick={() => history.push({ pathname: 'nurseschedule', state: nurse.id })}

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

export default withReducer('nurses', reducer)(NurseDataTable);
