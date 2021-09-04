import React, { useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import DataCard from '../../../../DataCard/DataCard'
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import { useSelector } from 'react-redux'
import DiognosisChart from './Charts/DiognosisChart'
import PatientAgeDataChart from './Charts/PatientAgeDataChart'
import PatientsInClinicChart from './Charts/PatientsInClinicChart'
import ConsultedPatientChart from './Charts/ConsultedPatientChart'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
    marginTop: '10px',
  },
})
const DoctorDashboard = (props) => {
  const classes = useStyles()
  const reducerData = useSelector(
    ({ doctorData }) => doctorData.doctorDashboard
  )
  const doctorDataItems = reducerData.dataCardDetails

  console.log('doctor profile in doctor dashboard: ', props.doctorProfile)
  useEffect(() => {}, [])
  return (
    <Grid container style={{ padding: '20px' }} spacing={5}>
      <Grid className={classes.dataCard} item sm={12}>
        <DataCard cardItems={doctorDataItems} />
      </Grid>
      <Grid item sm={12}>
        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
          <Grid className={classes.dataCard} item sm={6}>
            <DiognosisChart />
          </Grid>
          <Grid className={classes.dataCard} item sm={6}>
            <PatientAgeDataChart />
          </Grid>
          <Grid className={classes.dataCard} item sm={6}>
            <PatientsInClinicChart />
          </Grid>
          <Grid className={classes.dataCard} item sm={6}>
            <ConsultedPatientChart />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withReducer('doctorData', reducer)(DoctorDashboard)
