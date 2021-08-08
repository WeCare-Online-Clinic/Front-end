import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  makeStyles,
} from '@material-ui/core'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  card: {
    width: 'inherit',
    minHeight: '500px',
    border: '1px solid #bdc3cb',
  },
  cardHeader: {
    textAlign: 'center',
    color: '#3f51b5',
    borderBottom: '1px solid #000',
    backgroundColor: '#fff',
  },
  cardContent: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '16px',
    margin: '20px',
    backgroundColor: '#3f51b5',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 10px 20px 10px',
    width: '100%',
  },
  formRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  presContent: {
    textAlign: 'center',    
    fontSize: '16px',
    backgroundColor: '#fff',
    color: '#3f51b5',
    paddingTop: '20px',
    margin: '10px',
  },
}))

function PresRow() {
  const classes = useStyles()
  return (
    <div className={classes.formRow}>
      <TextField
        label='Medicine'
        variant='outlined'
        size='small'
        style={{ width: '47%', backgroundColor: '#fff' }}
      />

      <TextField
        type='number'
        label='Morning'
        variant='outlined'
        size='small'
        style={{ width: '15%', backgroundColor: '#fff' }}
      />
      <TextField
        type='number'
        label='Afternoon'
        variant='outlined'
        size='small'
        style={{ width: '15%', backgroundColor: '#fff' }}
      />
      <TextField
        type='number'
        label='Evening'
        variant='outlined'
        size='small'
        style={{ width: '15%', backgroundColor: '#fff' }}
      />
    </div>
  )
}

function ClinicForm() {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader
        title='Patient Details'
        subheader='Form'
        className={classes.cardHeader}
      ></CardHeader>
      <CardContent className={classes.cardContent}>
        <form className={classes.root}>
          <div className={classes.formRow}>
            <TextField
              size='small'
              label='Patient ID'
              multiline
              rows={2}
              variant='outlined'
              fullWidth
              style={{ backgroundColor: '#fff' }}
            />
          </div>
          <div className={classes.formRow}>
            <TextField
              size='small'
              label='Name'
              multiline
              rows={2}
              variant='outlined'
              fullWidth
              style={{ backgroundColor: '#fff' }}
            />
          </div>
          <div className={classes.formRow}>
            <TextField
              size='small'
              label='Age'
              multiline
              rows={2}
              variant='outlined'
              fullWidth
              style={{ backgroundColor: '#fff' }}
            />
          </div>
          <div className={classes.formRow}>
            <TextField
              size='small'
              label='Gender'
              multiline
              rows={2}
              variant='outlined'
              fullWidth
              style={{ backgroundColor: '#fff' }}
            />
          </div>

          
            <div className={classes.cardActions}>
            
              <Button
                variant='contained'
                color='secondary'
                style={{ width: '200px' }}
              >
                Submit
              </Button>
            </div>
          
        </form>
      </CardContent>
    </Card>
  )
}

export default ClinicForm
