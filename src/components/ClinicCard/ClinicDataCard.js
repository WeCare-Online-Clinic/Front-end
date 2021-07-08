import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    width: 'inherit',
    minHeight: '100%',
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
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 40px 10px 40px',
    width: '100%',
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
    height: '130px',
    margin: '5px 40px 5px 40px',
    padding: '10px',
    color: '#4c5355',
    fontSize: '14px',
    border: '1px solid #4c5355',
  },
})

function ClinicDataCard(props) {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader
        title='Previous Clinic Date Data'
        className={classes.cardHeader}
      />
      <Grid container style={{ backgroundColor: '#3f51b5', padding: '20px' }}>
        <Grid
          item
          sm={6}
          style={{ backgroundColor: '#fff', borderRight: '1px solid #4c5355' }}
        >
          <div className={classes.textTitle}>Notes</div>
          <div className={classes.textBox}>Clinic Note ...</div>
          <div className={classes.cardActions}>
            <Button
              style={{ width: 'inherit' }}
              variant='contained'
              color='secondary'
            >
              Clinic History
            </Button>
          </div>
        </Grid>
        <Grid item sm={6} style={{ backgroundColor: '#fff' }}>
          <div className={classes.textTitle}> Prescriptions</div>
          <div className={classes.textBox}>Prescription List ...</div>
          <div className={classes.cardActions}>
            <Button
              style={{ width: 'inherit' }}
              variant='contained'
              color='secondary'
            >
              Lab Tests
            </Button>
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ClinicDataCard
