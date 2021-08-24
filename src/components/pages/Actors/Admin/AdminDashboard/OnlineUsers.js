import React, { useState } from 'react'
import clsx from 'clsx'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/styles'
import {useSelector} from 'react-redux';
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
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
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'

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
  },
  grid: {
    borderBottom: '2px solid #3f51b5',
    padding: '5px',
  },
}))

const OnlineUsers = (props) => {
  const { className } = props
  const [rowsPerPage, setRowsPerPage] = useState(10) // set no.of rows per page
  const [page, setPage] = useState(0) // set page no
  const reducerData = useSelector(({ onlineUser }) => onlineUser.adminDashboard);
  const onlineUsersList=reducerData.onlineUsers;

  const tableHeaders = [
    // add table header names
    { text: 'User' },
    { text: 'Role' },
  ]

  const classes = useStyles()

  const handlePageChange = (event, page) => {
    setPage(page)
  }
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value)
  }

  return (
    <Card padding={'0'} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead
                style={{
                  backgroundColor: '#ebf5f7',
                }}
                className={classes.head}
              >
                <TableRow>
                  <TableCell
                    style={{
                      maxWidth: '20px',
                      borderBottom: '1px solid #000',
                    }}
                  ></TableCell>
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
                {onlineUsersList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // slice patienData array to no.of rows per page
                  .map(
                    (
                      userRow // add table row of patientData
                    ) => (
                      <TableRow className={classes.tableRow} hover>
                        <TableCell
                          style={{ maxWidth: '20px' }}
                          className={classes.cell}
                        >
                          <PersonIcon />
                        </TableCell>
                        <TableCell className={classes.cell}>
                          {userRow.name}
                        </TableCell>
                        <TableCell className={classes.cell}>
                          {userRow.role}
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
          count={onlineUsersList.length} // size of patientData array
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 8, 10, 15]}
        />
      </CardActions>
    </Card>
  )
}

export default withReducer('onlineUser', reducer)(OnlineUsers);
