import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core'
import { Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  card: {
    width: 'inherit',
    minHeight: '100%',
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
    padding: '20px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 40px 20px 40px',
    width: '100%',
  },
}))

function ClinicForm() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        title='Patient Clinic Data Form'
      ></CardHeader>
      <form className={classes.root}>
        <CardContent className={classes.cardContent}>
          <div>
            <TextField
              label='Note'
              fullWidth
              margin='normal'
              multiline
              maxRows={8}
              variant='outlined'
            />
          </div>
          <div>
            <TextField label='Diagnosis' fullWidth variant='outlined' />
          </div>
          <div>
            <TextField
              label='Tests to do '
              select
              fullWidth
              variant='outlined'
            />
          </div>
          <Divider></Divider>
          <div>Prescriptions</div>
          <div>
            <TextField label='Medicine' variant='outlined' />
            <TextField label='Quantity' variant='outlined' select />
          </div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            style={{ width: '300px' }}
            variant='contained'
            color='secondary'
          >
            Submit
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default ClinicForm
