import React from 'react'
import { Bar } from 'react-chartjs-2'
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

const ConsultedPatientChart = () => {
  const reducerData = useSelector(
    ({ consultedPatients }) => consultedPatients.statistics
  )
  console.log(reducerData)
  const consultedPatients = reducerData.consultedPatientsData
  const arraySize = consultedPatients.length
  const dateArray = []
  const countArray = []

  for (let i = 0; i < arraySize; i++) {
    dateArray[i] = consultedPatients[i].clinicDate
    countArray[i] = consultedPatients[i].count
  }

  const materializeUIClasses = useStyles()
  const state = {
    labels: dateArray,
    datasets: [
      {
        label: `Vistited Patients`,
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
        data: countArray,
      },
    ],
  }
  {
    return (
      <Card>
        <CardHeader
          title={'Visited Patients In Previous Clinics '}
          style={{ backgroundColor: '#3f51b5', textAlign: 'center' }}
          classes={{ title: materializeUIClasses.headerTitle }}
        ></CardHeader>
        <CardContent>
          <div className={materializeUIClasses.chartContainer}>
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
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
export default withReducer('consultedPatients', reducer)(ConsultedPatientChart)
