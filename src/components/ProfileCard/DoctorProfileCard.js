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
import Avatar from '@material-ui/core/Avatar'
import { red } from '@material-ui/core/colors'
import { getStorageItem } from '../../utils/StorageUtils'

const useStyles = makeStyles({
  card: {
    width: 'inherit',
    height: '100%',
    border: '1px solid #bdc3cb',
  },
  cardHeader: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  cardContent: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '18px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
  },
  textField: {
    padding: '5px',
    color: '#4c5355',
    fontSize: '18px',
    textAlign: 'left',
  },
  avatar: {
    fontSize: '18px',
    backgroundColor: red[500],
  },
})

const doctorInfo = getStorageItem('doctorInfo', true)
console.log(doctorInfo)

function DoctorProfileCard(props) {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader
        title='Profile'
        style={{ color: '#3f51b5', textAlign: 'center' }}
      ></CardHeader>
      <Grid
        container
        justifyContent='center'
        style={{ backgroundColor: '#3f51b5' }}
      >
        <Grid item>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                {doctorInfo.name[0].toUpperCase()}
              </Avatar>
            }
          />
        </Grid>
        <Grid item>
          <CardHeader
            title={getStorageItem('doctorName')}
            className={classes.cardHeader}
          />
        </Grid>
      </Grid>

      <CardContent>
        <Grid container>
          <Grid item sm></Grid>
          <Grid item sm={4}>
            <div className={classes.textField}>ID</div>
            <div className={classes.textField}>Qualification</div>
            <div className={classes.textField}>Conatct No</div>
            <div className={classes.textField}>Email</div>
            <div className={classes.textField}>Clinic</div>
          </Grid>
          <Grid item sm={7}>
            <div className={classes.textField}>: {doctorInfo.doctorId}</div>
            <div className={classes.textField}>
              : {doctorInfo.qualification}
            </div>
            <div className={classes.textField}>: {doctorInfo.contact}</div>
            <div className={classes.textField}>: {doctorInfo.email}</div>
            <div className={classes.textField}>: {doctorInfo.clinic.name}</div>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          style={{ width: '300px' }}
          variant='contained'
          color='secondary'
        >
          Update
        </Button>
      </CardActions>
    </Card>
  )
}

export default DoctorProfileCard
