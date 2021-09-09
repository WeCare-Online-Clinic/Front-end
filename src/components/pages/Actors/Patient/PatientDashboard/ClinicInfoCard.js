import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import reducer from './store/reducer/'
import withReducer from '../../../../../store/withReducer'
import ChangeRequest from './ChangeRequest'
import { useDispatch } from 'react-redux'
import * as Actions from './store/action/PatientDashboardAction'

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

const ClinicInfoCard = (props) => {
   const dispatch = useDispatch();
  const reducerData = useSelector(({ nextClinic }) => nextClinic.patientDashboard);
  const currentClinicDate=reducerData.nextClinicDetails.clinicDate && reducerData.nextClinicDetails.clinicDate.date;
  let reqestDateObject = Object.assign({}, { clinicId: props.patient.clinic.id,currentClinicDate:currentClinicDate }) //requestdate object
  console.log("reqestDateObject :",reqestDateObject);
  useEffect(() => {
    // dispatch(Actions.getRequestDates(reqestDateObject));

  }, [])

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
            <div className={classes.textField}>: {reducerData.nextClinicDetails.clinicDate && reducerData.nextClinicDetails.clinicDate.nurse.clinic.name}</div>
            <div className={classes.textField}>: {reducerData.nextClinicDetails.clinicDate && reducerData.nextClinicDetails.clinicDate.date}</div>
            <div className={classes.textField}>: {reducerData.nextClinicDetails.time}</div>
            <div className={classes.textField}>: {reducerData.nextClinicDetails.queueNo}</div>
            <div className={classes.textField}>: Dr. Asela</div>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <ChangeRequest />
      </CardActions>
    </Card>
  )
}

export default withReducer('nextClinic', reducer)(ClinicInfoCard);
