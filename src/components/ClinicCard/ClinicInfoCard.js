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
    border: '2px solid #3f51b5',
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

function ClinicInfoCard(props) {
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
            <div className={classes.textField}>: Eye Clinic</div>
            <div className={classes.textField}>: 2021-08-12</div>
            <div className={classes.textField}>: 9.25 AM</div>
            <div className={classes.textField}>: 23</div>
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

export default ClinicInfoCard
