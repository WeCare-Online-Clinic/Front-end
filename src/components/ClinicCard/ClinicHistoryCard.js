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
        title={'Clinic History Info ( ' + clinic_history.date + ' )'}
        className={classes.cardHeader}
        titleTypographyProps='variant: h4'
      />
      <CardContent>
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
                : {clinic_history && clinic_history.startTime.substring(0, 5)}
              </ListItem>
              <Divider />
              <ListItem>
                : {clinic_history && clinic_history.endTime.substring(0, 5)}
              </ListItem>
              <Divider />
              <ListItem>: {clinic_history.noPatients}</ListItem>
              <Divider />
              <ListItem>
                : {clinic_history && clinic_history.visitedPatients}
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
