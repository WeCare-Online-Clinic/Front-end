import React, { useEffect, useState } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import { useSelector } from 'react-redux'
import { Card, CardActions, CardHeader } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Constants from '../../../../../utils/Constants'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import DiagnosisChart from './Charts/DiagnosisChart'
import PatientAgeDataChart from './Charts/PatientAgeDataChart'
import PatientsInClinicChart from './Charts/PatientsInClinicChart'
import ConsultedPatientChart from './Charts/ConsultedPatientChart'
import * as Actions from './store/action'
import { useDispatch } from 'react-redux'
import { getStorageItem } from '../../../../../utils/StorageUtils'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
  selectEmpty: {
    minHeight: '60px',
    marginTop: theme.spacing(10),
  },
}))

const doctor = getStorageItem('doctorInfo', true)
const doctorId = doctor.id
const clinicId = doctor.clinic.id

const Statistics = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [statistic, setStatistic] = useState()
  const reducerData = useSelector(
    ({ statisticsData }) => statisticsData.statistics
  )

  useEffect(() => {
    switch (statistic) {
      case 'Patients Registered In Clinic':
        dispatch(Actions.getPatientCountInClinic(clinicId))
        break
      case 'Patients In Clinic According To Age':
        dispatch(Actions.getPatientAge(clinicId))
        break
      case '# Of Patients According To Diagnosis':
        dispatch(Actions.getDiagnosis(clinicId))
        break
      case '# Of Patients Visited In Clinic Dates':
        dispatch(Actions.getConsultedPatientsData(doctorId))
        break
    }
  }, [statistic])

  // const [fromDate, setFromDate] = useState()
  // const [toDate, setToDate] = useState()

  const handleChange = (event) => {
    setStatistic(event.target.value)
  }

  /* const handleFromDateChange = (date) => {
    setFromDate(date)
  }

  const handleToDateChange = (date) => {
    setToDate(date)
  } */

  return (
    <React.Fragment>
      <Grid container spacing={5}>
        <Grid item sm={12}>
          <Card>
            <CardHeader
              style={{
                textAlign: 'center',
                color: '#fff',
                borderBottom: '1px solid #000',
                backgroundColor: '#3f51b5',
              }}
              title={'Statistics'}
            ></CardHeader>
            <CardActions>
              <FormControl required className={classes.formControl}>
                <InputLabel>Please Select Statistic To Display</InputLabel>
                <Select
                  displayEmpty
                  value={statistic}
                  onChange={handleChange}
                  className={classes.selectEmpty}
                >
                  {Constants.STATISTICS.map((stat) => (
                    <MenuItem value={stat}>{stat}</MenuItem>
                  ))}
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
              {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  format='MM/dd/yyyy'
                  label='From Date'
                  value={fromDate}
                  onChange={handleFromDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  format='MM/dd/yyyy'
                  label='To Date'
                  value={toDate}
                  onChange={handleToDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12}></Grid>
      </Grid>

      {reducerData && statistic == 'Patients Registered In Clinic' && (
        <PatientsInClinicChart />
      )}
      {reducerData && statistic == 'Patients In Clinic According To Age' && (
        <PatientAgeDataChart />
      )}
      {reducerData && statistic == '# Of Patients According To Diagnosis' && (
        <DiagnosisChart />
      )}
      {reducerData && statistic == '# Of Patients Visited In Clinic Dates' && (
        <ConsultedPatientChart />
      )}
    </React.Fragment>
  )
}

export default withReducer('statisticsData', reducer)(Statistics)
