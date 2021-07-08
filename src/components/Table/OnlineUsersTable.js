import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
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
import { onlineUserData } from './OnlineUserData'
import PageviewIcon from '@material-ui/icons/Pageview'
import PersonIcon from '@material-ui/icons/Person'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
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
    maxWidth: '50px',
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

const OnlineUserTable = (props) => {
  const { className } = props
  const [rowsPerPage, setRowsPerPage] = useState(10) // set no.of rows per page
  const [page, setPage] = useState(0) // set page no

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
            <Table style={{ maxWidth: '50%' }}>
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
                {onlineUserData
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
                          {userRow.user}
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
          count={onlineUserData.length} // size of patientData array
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

export default OnlineUserTable
