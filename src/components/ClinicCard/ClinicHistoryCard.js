import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    width: 'inherit',
    height: '100%',
    border: '1px solid #bdc3cb',
  },
  cardHeader: {
    textAlign: 'center',
    color: '#fff',
    borderBottom: '1px solid #000',
    backgroundColor: '#3f51b5',
  },
  cardContent: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '16px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
  },
  textField: {
    padding: '5px',
    color: '#4c5355',
    fontSize: '16px',
  },
})

function ClinicHistoryCard(props) {
  const clinic_history = props.clinic_history
  const classes = useStyles()
  console.log(props)
  return (
    <Card className={classes.card}>
      <CardHeader
        title={'Clinic History Info ( ' + clinic_history.clinicDate + ' )'}
        className={classes.cardHeader}
        titleTypographyProps='variant: h4'
      />
      <CardContent>
        <Grid container>
          <Grid item sm></Grid>
          <Grid item sm={5}>
            <div className={classes.textField}>Scheduled Start Time</div>
            <div className={classes.textField}>Start Time</div>
            <div className={classes.textField}>End Time</div>
            <div className={classes.textField}>No.of Patients</div>
            <div className={classes.textField}>Nurse Assigned</div>
            <div className={classes.textField}>Summary</div>
          </Grid>
          <Grid item sm={6}>
            <div className={classes.textField}>
              : {clinic_history.clinicSchedule.time}
            </div>
            <div className={classes.textField}>
              : {clinic_history.startTime}
            </div>
            <div className={classes.textField}>: {clinic_history.endTime}</div>
            <div className={classes.textField}>
              : {clinic_history.noPatients}
            </div>
            <div className={classes.textField}>
              : {clinic_history.nurse.name}
            </div>
            <div className={classes.textField}>: {clinic_history.summary}</div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ClinicHistoryCard
