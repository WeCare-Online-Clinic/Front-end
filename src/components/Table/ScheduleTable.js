import React from 'react'
import clsx from 'clsx'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/styles'

import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { getStorageItem } from '../../utils/StorageUtils'

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

const doctorSchedules = getStorageItem('doctorInfo', true).doctorSchedules
console.log(doctorSchedules)

function ScheduleTable(props) {
  const { className } = props

  const tableHeaders = [
    // add table header names
    { text: 'Weekday' },
    { text: 'Start Time' },
  ]

  const classes = useStyles()

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
                {doctorSchedules.map(
                  (
                    row // add table row of patientData
                  ) => (
                    <TableRow className={classes.tableRow} hover>
                      <TableCell className={classes.cell}>
                        {row.clinicSchedule.day}
                      </TableCell>
                      <TableCell className={classes.cell}>
                        {row.clinicSchedule.time}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  )
}

export default ScheduleTable
