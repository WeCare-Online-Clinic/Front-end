import {
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import React from 'react'
import { useState, useEffect } from 'react'
import SummaryPatientsTable from '../Table/SummaryPatientsTable'
import { Alert, AlertTitle } from '@material-ui/lab'

const useStyles = makeStyles({
  paperContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxHeight: '850px',
    overflowY: 'scroll',
  },
  paper: {
    padding: '20px',
    paddingLeft: '80px',
    paddingRight: '80px',
    minHeight: '830px',
    minWidth: '1123px',
    marginLeft: '20px',
    marginRight: '20px',
  },
  header: {
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#3f51b5',
    color: '#fff',
    marginBottom: '40px',
    marginTop: '40px',
  },
  actionIcon: {
    width: '50px',
    height: '50px',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
})

function Summary(props) {
  console.log(props.summary)
  const classes = useStyles()
  const [summary, setSummary] = useState(null)
  const [page, setPage] = useState(1)
  const [visited, setVisited] = useState(0)
  const [notVisited, setNotVisited] = useState(0)

  useEffect(() => {
    setSummary(props.summary)
    setVisited(props.summary.visitedPatients.length)
    setNotVisited(props.summary.notVisitedPatients.length)
  }, [props])

  return (
    <div className={classes.paperContainer}>
      {page != 1 && (
        <IconButton
          className={classes.actionIcon}
          onClick={() => setPage(page - 1)}
        >
          <ChevronLeftIcon
            fontSize={'large'}
            color={'primary'}
          ></ChevronLeftIcon>
        </IconButton>
      )}
      {page == 1 && (
        <Paper className={classes.paper}>
          <div className={classes.header}>
            <h4>Clinic Summary</h4>
          </div>
          <Grid container>
            <Grid item sm></Grid>
            <Grid item sm={5}>
              <List>
                <ListItem>Clinic Date</ListItem>
                <Divider />
                <ListItem>Scheduled Start Time</ListItem>
                <Divider />
                <ListItem>Started Time</ListItem>
                <Divider />
                <ListItem>Ended Time</ListItem>
                <Divider />
                <ListItem># Patients with Appointments</ListItem>
                <Divider />
                <ListItem># Visited Patients</ListItem>
                <Divider />
                <ListItem># Not Visited Patients</ListItem>
                <Divider />
                <ListItem>Nurse On Duty</ListItem>
                <Divider />
              </List>
            </Grid>
            <Grid item sm={6}>
              {summary && (
                <List>
                  <ListItem>
                    {summary.clinicDate.date +
                      ' (' +
                      summary.clinicDate.clinicSchedule.day +
                      ')'}{' '}
                  </ListItem>
                  <Divider />
                  <ListItem>
                    {summary.clinicDate.clinicSchedule.time.substring(0, 5)}
                  </ListItem>
                  <Divider />
                  <ListItem>
                    {summary.clinicDate.startTime &&
                      summary.clinicDate.startTime.substring(0, 5)}
                  </ListItem>
                  <Divider />
                  <ListItem>
                    {summary.clinicDate.endTime &&
                      summary.clinicDate.endTime.substring(0, 5)}
                  </ListItem>
                  <Divider />
                  <ListItem>{summary.clinicDate.noPatients}</ListItem>
                  <Divider />
                  <ListItem>{summary.clinicDate.visitedPatients}</ListItem>
                  <Divider />
                  <ListItem>
                    {summary.clinicDate.noPatients -
                      summary.clinicDate.visitedPatients}
                  </ListItem>
                  <Divider />
                  <ListItem>{summary.clinicDate.nurse.name}</ListItem>
                  <Divider />
                </List>
              )}
            </Grid>
          </Grid>
        </Paper>
      )}
      {page == 2 && (
        <Paper className={classes.paper}>
          <div className={classes.header}>
            <h4>Visited Patient List</h4>
          </div>
          {visited > 0 && (
            <SummaryPatientsTable
              patientList={summary.visitedPatients}
            ></SummaryPatientsTable>
          )}
          {visited <= 0 && (
            <Alert severity='info'>
              <AlertTitle>visited Patients Unavailable</AlertTitle>
            </Alert>
          )}
        </Paper>
      )}
      {page == 3 && (
        <Paper className={classes.paper}>
          <div className={classes.header}>
            <h4>Not Visited Patient List</h4>
          </div>
          {notVisited > 0 && (
            <SummaryPatientsTable
              patientList={summary.visitedPatients}
            ></SummaryPatientsTable>
          )}
          {notVisited <= 0 && (
            <Alert severity='info'>
              <AlertTitle>Not Visited Patients Unavailabe</AlertTitle>
            </Alert>
          )}
        </Paper>
      )}
      {page < 3 && (
        <IconButton
          className={classes.actionIcon}
          onClick={() => setPage(page + 1)}
        >
          <ChevronRightIcon
            fontSize={'large'}
            color={'primary'}
          ></ChevronRightIcon>
        </IconButton>
      )}
    </div>
  )
}

export default Summary
