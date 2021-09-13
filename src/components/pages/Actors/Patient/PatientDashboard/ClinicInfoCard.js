import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import reducer from './store/reducer/'
import withReducer from '../../../../../store/withReducer'
import ChangeRequest from './ChangeRequest'
import Pagination from './Pagination'

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'


const useStyles = makeStyles({
  card: {
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

const ClinicInfoCard = (props) => {
  const classes = useStyles()
  const reducerData = useSelector(({ nextClinic }) => nextClinic.patientDashboard);
  const nextClinicList = reducerData.nextClinicDetails;

  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * 1;
  const selectedClinicDetails = nextClinicList.slice(startIndex, startIndex + 1)
  console.log("reducerData.nextClinicDetails : ",reducerData.nextClinicDetails)
  console.log("reducerData.nextClinicDetails. length ..........",reducerData.nextClinicDetails.length)
  const totalPages=reducerData.nextClinicDetails.length/1

  const handleClick = (num) => {
    setPage(num)
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title='Next Clinic Date/s'
        className={classes.cardHeader}
        titleTypographyProps='variant: h4'
      />
      <CardContent>


        {selectedClinicDetails.map((nextClinic, i) => {
          return (
            <React.Fragment>

              <Grid item sm={12}>
                <div className={classes.textField}>Clinic : {nextClinic.clinicDate.nurse.clinic.name && nextClinic.clinicDate.nurse.clinic.name}</div>
                <div className={classes.textField}>Clinic Date : {nextClinic.clinicDate.date && nextClinic.clinicDate.date }</div>
                <div className={classes.textField}>Time : {nextClinic.time && nextClinic.time }</div>
                <div className={classes.textField}>Queue No : {nextClinic.queueNo && nextClinic.queueNo}</div>
                {/* <div className={classes.textField}> Doctor : Dr. Asela</div> */}
              </Grid>
              <CardActions className={classes.cardActions}>
                <ChangeRequest nextClinic={nextClinic} />
              </CardActions>
            </React.Fragment>
          )
        })}
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Pagination totalPages={totalPages} handleClick={handleClick} />
      </CardActions>

    </Card>
  )
}




export default withReducer('nextClinic', reducer)(ClinicInfoCard);
