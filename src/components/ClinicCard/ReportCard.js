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
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  card: {
    width: '100%',
    minHeight: 'inherit',
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
    minHeight: 'inherit',
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
    height: '560px',
    margin: '5px 40px 40px 40px',
    padding: '10px',
    color: '#4c5355',
    fontSize: '14px',
    border: '1px solid #4c5355',
  },
})

function ReportCard(props) {
  const history = useHistory()
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader
        title='Lab Report'
        subheader='FBC'
        className={classes.cardHeader}
      />
      <Grid container style={{ backgroundColor: '#3f51b5', padding: '20px' }}>
        <Grid
          item
          sm={12}
          style={{
            backgroundColor: '#fff',
            borderRight: '1px solid #4c5355',
            minHeight: 'inherit',
          }}
        >
          <div className={classes.textTitle}>Report</div>
          <div className={classes.textBox}>
            <div className={classes.textField}>Name : </div>
            <div className={classes.textField}>Date : </div>
            <div className={classes.textField}>Time : </div>
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ReportCard
