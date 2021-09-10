import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import reducer from './store/reducer/'
import withReducer from '../../../../../store/withReducer'
import ChangeRequest from './ChangeRequest'
import { useDispatch } from 'react-redux'
import * as Actions from './store/action/PatientDashboardAction'
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
  const dispatch = useDispatch();
  const classes = useStyles()
  const reducerData = useSelector(({ nextClinic }) => nextClinic.patientDashboard);
  const nextClinicList = reducerData.nextClinicDetails;
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(2);

  console.log("nextClinic Details Array in dashboard:  ",nextClinicList);


  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = nextClinicList.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <Card className={classes.card}>
      <CardHeader
        title='Next Clinic Date'
        className={classes.cardHeader}
        titleTypographyProps='variant: h4'
      />
      <CardContent>
        <Grid container>
          <Grid item sm></Grid>
          {currentPosts.map((nextClinic, i) => {
            return (
              <React.Fragment>
         
                <Grid item sm={12}>
                  <div className={classes.textField}>Clinic : {nextClinic.clinicDate.nurse.clinic.name}</div>
                  <div className={classes.textField}>Clinic Date : {nextClinic.clinicDate.date}</div>
                  <div className={classes.textField}>Time : {nextClinic.time}</div>
                  <div className={classes.textField}>Queue No : {nextClinic.queueNo}</div>
                  <div className={classes.textField}> Doctor : Dr. Asela</div>
                </Grid>
                <CardActions className={classes.cardActions}>
                  <ChangeRequest nextClinic={nextClinic} />
                </CardActions>
              </React.Fragment>
            )
          })}

        </Grid>
          {/* <Pagination postPerPage={postPerPage} totalPosts={currentPosts.length}/> */}
      </CardContent>

    </Card>
  )
}



export default withReducer('nextClinic', reducer)(ClinicInfoCard);
