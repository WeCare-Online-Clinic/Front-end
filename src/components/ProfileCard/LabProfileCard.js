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

const useStyles = makeStyles({
  card: {
    width: 'inherit',
    height: '100%',
    border: '1px solid #bdc3cb',
  },
  cardHeader: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
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
    textAlign: 'left',
  },
  avatar: {
    backgroundColor: red[500],
  },
})

function LabProfileCard(props) {
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
          <CardHeader avatar={<Avatar className={classes.avatar}>A</Avatar>} />
        </Grid>
        <Grid item>
          <CardHeader
            title='Mr. Mahesh Withanage'
            className={classes.cardHeader}
          />
        </Grid>
      </Grid>

      <CardContent>
        <Grid container>
          <Grid item sm></Grid>
          <Grid item sm={5}>
            <div className={classes.textField}>ID</div>
            <div className={classes.textField}>Qualification</div>
            <div className={classes.textField}>Conatct No</div>
            <div className={classes.textField}>Email</div>
            <div className={classes.textField}>Clinic</div>
          </Grid>
          <Grid item sm={6}>
            <div className={classes.textField}>: 5473920495</div>
            <div className={classes.textField}>: BS-MLT</div>
            <div className={classes.textField}>: 0773618967</div>
            <div className={classes.textField}>: labtec@gmail.com</div>
            <div className={classes.textField}>: cardiology Clinic</div>
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

export default LabProfileCard








