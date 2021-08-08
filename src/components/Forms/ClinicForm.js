import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  makeStyles,
} from '@material-ui/core'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

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
    backgroundColor: '#3f51b5',
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
    backgroundColor: '#fff',
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
    padding: '5px',
  },
  presContent: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '16px',
    backgroundColor: '#fff',
    color: '#3f51b5',
    paddingTop: '20px',
  },
}))

function ClinicForm() {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader
        title='Patient Clinic Data'
        subheader='Form'
        className={classes.cardHeader}
      ></CardHeader>
      <CardContent className={classes.cardContent}>
        <div className='card-body'>
          <form>
            <div className='input-group mb-3'>
              <span
                className='input-group-text'
                style={{
                  backgroundColor: '#3f51b5',
                  color: '#fff',
                  width: '100px',
                }}
              >
                Next Clinic
              </span>
              <input
                name='next clinic'
                className='form-control'
                type='date'
              ></input>
            </div>
            <div className='input-group mb-3'>
              <span
                className='input-group-text'
                style={{
                  backgroundColor: '#3f51b5',
                  color: '#fff',
                  width: '100px',
                }}
              >
                Note
              </span>
              <input
                placeholder='Note'
                name='note'
                className='form-control'
                type='text'
              ></input>
            </div>
            <div className='input-group mb-3'>
              <span
                className='input-group-text'
                style={{
                  backgroundColor: '#3f51b5',
                  color: '#fff',
                  width: '100px',
                }}
              >
                Diagnosis
              </span>
              <input
                placeholder='Diagnosis'
                name='diagnosis'
                className='form-control'
                type='text'
              ></input>
            </div>
            <div className='input-group mb-3'>
              <span
                className='input-group-text'
                style={{
                  backgroundColor: '#3f51b5',
                  color: '#fff',
                  width: '100px',
                }}
              >
                Tests
              </span>
              <input
                placeholder='Tests to do'
                name='tests'
                className='form-control'
                type='text'
              ></input>
            </div>
            <p className='text-center' style={{ color: '#3f51b5' }}>
              Prescriptions
            </p>
            <hr></hr>
            <div className='input-group mb-3'>
              <span
                className='input-group-text'
                style={{
                  backgroundColor: '#3f51b5',
                  color: '#fff',
                  width: '100px',
                }}
              >
                Medicine
              </span>
              <input
                placeholder='Medicine'
                name='medicine'
                className='form-control'
              ></input>
              <span
                className='input-group-text'
                style={{
                  backgroundColor: '#3f51b5',
                  color: '#fff',
                  width: '100px',
                }}
              >
                Note
              </span>
              <input
                placeholder='Note'
                name='note'
                className='form-control'
              ></input>
            </div>
            <div className='input-group mb-3'>
              <span
                className='input-group-text'
                style={{
                  backgroundColor: '#3f51b5',
                  color: '#fff',
                  width: '100px',
                }}
              >
                Medicine
              </span>
              <input
                placeholder='Medicine'
                name='medicine'
                className='form-control'
              ></input>
              <span
                className='input-group-text'
                style={{
                  backgroundColor: '#3f51b5',
                  color: '#fff',
                  width: '100px',
                }}
              >
                Note
              </span>
              <input
                placeholder='Note'
                name='note'
                className='form-control'
              ></input>
            </div>
            <div className='input-group mb-3'>
              <span
                className='input-group-text'
                style={{
                  backgroundColor: '#3f51b5',
                  color: '#fff',
                  width: '100px',
                }}
              >
                Medicine
              </span>
              <input
                placeholder='Medicine'
                name='medicine'
                className='form-control'
              ></input>
              <span
                className='input-group-text'
                style={{
                  backgroundColor: '#3f51b5',
                  color: '#fff',
                  width: '100px',
                }}
              >
                Note
              </span>
              <input
                placeholder='Note'
                name='note'
                className='form-control'
              ></input>
            </div>
            <div
              className='input-group mb-3'
              style={{ justifyContent: 'flex-end' }}
            >
              <button
                className='btn btn-primary'
                style={{ width: '10%' }}
                onClick=''
              >
                <AddCircleOutlineIcon />
              </button>
            </div>
            <div className='input-group mb-3'>
              <button className='btn btn-primary' style={{ width: '100%' }}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}

export default ClinicForm
