import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import LineStatCard from '../../../../StatCard/LineStatCard'
import PieStatCard from '../../../../StatCard/PieStatCard'
import BarStatCard from '../../../../StatCard/BarStatCard'
import DataCard from '../../../../DataCard/DataCard'
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import {useSelector} from 'react-redux';

const useStyles = makeStyles({
    dataCard: {
      backgroundColor: '#fff',
      borderRadius: '5px',
      marginBottom: '10px',
      marginTop: '10px',
    },
  })
//  const doctorDataItems = [
//     {
//       name: 'Total Registered Patients In Clinic',
//       value: 2123,
//     },
//     {
//       name: 'Patients Registered In Last Week',
//       value: 145,
//     },
//     {
//       name: 'Next clinic Date',
//       value: '2021/07/12',
//     },
//     {
//       name: 'Patients in Next Clinic Date',
//       value: 55,
//     },
//   ]
const  DoctorDashboard=(props)=> {
    const classes = useStyles();
    const reducerData = useSelector(({ doctorData }) => doctorData.doctorDashboard);
    const doctorDataItems=reducerData.dataCardDetails;

    console.log("doctor profile in doctor dashboard: ",props.doctorProfile)
    return (
      <Grid container style={{ padding: '20px' }} spacing={5}>
        <Grid className={classes.dataCard} item sm={12}>
          <DataCard cardItems={doctorDataItems} />
        </Grid>
        <Grid item sm={12}>
          <Grid container style={{ marginBottom: '10px' }} spacing={5}>
            <Grid className={classes.dataCard} item sm={6}>
              <PieStatCard title='Diagnosis' />
            </Grid>
            <Grid className={classes.dataCard} item sm={6}>
              <LineStatCard title='Consulted Patients' />
            </Grid>
            <Grid className={classes.dataCard} item sm={6}>
              <LineStatCard title='Patients in Clinic' />
            </Grid>
            <Grid className={classes.dataCard} item sm={6}>
              <BarStatCard title='Patients ( Age )' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
}

export default withReducer('doctorData', reducer)(DoctorDashboard);