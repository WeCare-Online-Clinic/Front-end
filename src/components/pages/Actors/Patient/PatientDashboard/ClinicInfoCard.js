import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import reducer from './store/reducer/'
import withReducer from '../../../../../store/withReducer'

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'


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

const ClinicInfoCard=(props)=> {
  const reducerData = useSelector(({ nextClinic }) => nextClinic.patientDashboard);
  const nextClinicDetails=reducerData.nextClinicDetails;
  console.log("jdfgdfjdgfjdgdjfdhcbdchdbcdjchvdghc:",nextClinicDetails.id)
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader
        title='Next Clinic Date'
        className={classes.cardHeader}
        titleTypographyProps='variant: h4'
      />
      <CardContent>
        <Grid container>
          <Grid item sm></Grid>
          <Grid item sm={4}>
            <div className={classes.textField}>Clinic</div>
            <div className={classes.textField}>Clinic Date</div>
            <div className={classes.textField}>Time</div>
            <div className={classes.textField}>Queue No</div>
            <div className={classes.textField}>Doctor</div>
          </Grid>
          <Grid item sm={6}>
            <div className={classes.textField}>: {nextClinicDetails.clinicDate.nurse.clinic.name}</div>
            <div className={classes.textField}>: {nextClinicDetails.clinicDate.date}</div>
            <div className={classes.textField}>: {nextClinicDetails.time}</div>
            <div className={classes.textField}>: {nextClinicDetails.queueNo}</div>
            <div className={classes.textField}>: Dr. Asela</div>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          style={{ width: '300px' }}
          variant='contained'
          color='secondary'
        >
          Request Change
        </Button>
      </CardActions>
    </Card>
  )
}

export default withReducer('nextClinic', reducer)(ClinicInfoCard);
