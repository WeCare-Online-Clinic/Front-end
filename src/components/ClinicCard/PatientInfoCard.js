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

function PatientInfoCard(props) {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader
        title='Nimal De Silva'
        className={classes.cardHeader}
        titleTypographyProps='variant: h4'
      />
      <CardContent>
        <Grid container>
          <Grid item sm></Grid>
          <Grid item sm={4}>
            <div className={classes.textField}>Age</div>
            <div className={classes.textField}>Gender</div>
            <div className={classes.textField}>Diagnosis</div>
            <div className={classes.textField}>First Clinic Date</div>
            <div className={classes.textField}>Previous Clinic Date</div>
          </Grid>
          <Grid item sm={6}>
            <div className={classes.textField}>: 48</div>
            <div className={classes.textField}>: Male</div>
            <div className={classes.textField}>: Diabetes</div>
            <div className={classes.textField}>: 2019-03-09</div>
            <div className={classes.textField}>: 2020-04-12</div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default PatientInfoCard
