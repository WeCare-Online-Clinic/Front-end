import React from 'react'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import withReducer from '../../../../../../store/withReducer'
import reducer from '../store/reducer/index'
import { makeStyles } from '@material-ui/styles'
import { getStorageItem } from '../../../../../../utils/StorageUtils'
import { Card, CardContent, CardHeader } from '@material-ui/core'

const useStyles = makeStyles({
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignContent: 'center',
    color: 'white',
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})

const doctor = getStorageItem('doctorInfo', true)
const clinicName = doctor.clinic.name

const PatientsInClinicChart = () => {
  const reducerData = useSelector(
    ({ patientInClinic }) => patientInClinic.statistics
  )
  const monthlyRegisteredUsers = reducerData.patientCountInClinic
  const materializeUIClasses = useStyles()
  const state = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: `Regstered Patients `,
        backgroundColor: [
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 0.2,
        data: monthlyRegisteredUsers,
      },
    ],
  }
  {
    return (
      <Card>
        <CardHeader
          title={`Registered Patients In ${clinicName} Clinic`}
          style={{ backgroundColor: '#3f51b5', textAlign: 'center' }}
          classes={{ title: materializeUIClasses.headerTitle }}
        ></CardHeader>
        <CardContent>
          <div className={materializeUIClasses.chartContainer}>
            <Line
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Rainfall per month',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </CardContent>
      </Card>
    )
  }
}
export default withReducer('patientInClinic', reducer)(PatientsInClinicChart)
