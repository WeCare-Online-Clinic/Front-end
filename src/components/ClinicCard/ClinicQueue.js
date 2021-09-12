import React from 'react'
import { Card, CardHeader, Grid, makeStyles } from '@material-ui/core'
import PatientQueueTable from '../../../src/components/Table/PatientQueueTable'

const useStyles = makeStyles({
  card: {
    minHeight: '100%',
    border: '2px solid #3f51b5',
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
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 40px 20px 40px',
    width: '50%',
  },
  textTitle: {
    padding: '5px',
    color: '#4c5355',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textField: {
    padding: '5px',
    color: '#4c5355',
    fontSize: '16px',
  },
  textBox: {
    height: '140px',
    margin: '5px 40px 5px 40px',
    padding: '10px',
    color: '#4c5355',
    fontSize: '14px',
    border: '1px solid #4c5355',
  },
})

function ClinicQueue(props) {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader title='Clinic Details' className={classes.cardHeader} />
      <Grid container style={{ backgroundColor: '#3f51b5', padding: '20px' }}>
        <Grid className={classes.dataCard} item sm={12}>
          <Card>
            <h6 style={{ color: '#3f51b5' }}>Clinic : ENT</h6>
            <h6 style={{ color: '#3f51b5' }}>Schedule Info</h6>
          </Card>
          <div align='center'>
            <PatientQueueTable />
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ClinicQueue
