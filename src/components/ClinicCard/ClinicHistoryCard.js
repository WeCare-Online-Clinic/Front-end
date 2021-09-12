import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  Divider,
} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    maxHeight: '400px',
    width: 'inherit',
    border: '1px solid #bdc3cb',
    backgroundColor: '#3f51b5',
  },
  cardHeader: {
    textAlign: 'center',
    color: '#3f51b5',
    backgroundColor: '#fff',
    margin: '2px',
  },
  cardContent: {
    textAlign: 'center',
    color: '#000',
    fontSize: '16px',
    margin: '2px',
    backgroundColor: '#fff',
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
        title={'Clinic History Info ( ' + clinic_history.date + ' )'}
        className={classes.cardHeader}
        titleTypographyProps='variant: h4'
      />
      <CardContent className={classes.cardContent}>
        <Grid container>
          <Grid item sm></Grid>
          <Grid item sm={6}>
            <List>
              <ListItem>Scheduled Start Time</ListItem>
              <Divider />
              <ListItem>Start Time</ListItem>
              <Divider />
              <ListItem>End Time</ListItem>
              <Divider />
              <ListItem>No.of Patients</ListItem>
              <Divider />
              <ListItem>Patients Visited</ListItem>
              <Divider />
            </List>
          </Grid>
          <Grid item sm={6}>
            <List>
              <ListItem>
                : {clinic_history.clinicSchedule.time.substring(0, 5)}
              </ListItem>
              <Divider />
              <ListItem>
                :{' '}
                {clinic_history.startTime &&
                  clinic_history.startTime.substring(0, 5)}
              </ListItem>
              <Divider />
              <ListItem>
                :{' '}
                {clinic_history.endTime &&
                  clinic_history.endTime.substring(0, 5)}
              </ListItem>
              <Divider />
              <ListItem>: {clinic_history.noPatients}</ListItem>
              <Divider />
              <ListItem>
                :{' '}
                {clinic_history.visitedPatients &&
                  clinic_history.visitedPatients}
              </ListItem>
              <Divider />
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ClinicHistoryCard
