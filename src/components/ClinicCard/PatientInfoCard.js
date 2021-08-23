import { Card, CardHeader, CardContent } from '@material-ui/core'
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
    fontSize: '20px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
  },
  textField: {
    padding: '5px',
    color: '#4c5355',
    fontSize: '20px',
  },
})

function PatientInfoCard(props) {
  console.log(props)
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.patient.patient.name}
        className={classes.cardHeader}
        titleTypographyProps='variant: h4'
      />
      <CardContent>
        <Grid container>
          <Grid item sm></Grid>
          <Grid item sm={4}>
            <div></div>
            <div className={classes.textField}>Age</div>
            <div className={classes.textField}>Gender</div>
            <div className={classes.textField}>Diagnosis</div>
            <div className={classes.textField}>Admission Date</div>
          </Grid>
          <Grid item sm={6}>
            <div></div>
            <div className={classes.textField}>
              : {props.patient.patient.age}
            </div>
            <div className={classes.textField}>
              : {props.patient.patient.gender}
            </div>
            <div className={classes.textField}>
              : {props.patient.patient.diagnosis}
            </div>
            <div className={classes.textField}>
              : {props.patient.patient.admissionDate}
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default PatientInfoCard
