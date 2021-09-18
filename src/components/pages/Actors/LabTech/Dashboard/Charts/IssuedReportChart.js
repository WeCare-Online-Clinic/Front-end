import React from 'react'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import withReducer from '../../../../../../store/withReducer'
import reducer from '../store/reducer/index'
import { makeStyles } from '@material-ui/styles'
import { Card, CardContent, CardHeader } from '@material-ui/core'

const useStyles = makeStyles({
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignContent: 'center',
    color: 'white',
  },
})


const IssuedReportChart = () => {
  const reducerData = useSelector(({ issuedReports }) => issuedReports.LabDashboard)
  if (!reducerData) {
    window.location.reload()
  }
  const issuedReports = reducerData.monthlyIssuedReports
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
          'rgb(0,255,0,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgb(0,255,0,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgb(0,255,0,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgb(0,255,0,0.5)',
        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 0.2,
        data: issuedReports,
      },
    ],
  }
  {
    return (
      <Card>
        <CardHeader
          title={`Monthly Issued Reports Count`}
          style={{ backgroundColor: '#145da0', textAlign: 'center' }}
          classes={{ title: materializeUIClasses.headerTitle }}
        ></CardHeader>
        <CardContent>
          <div style={{ width: '19cm', height: '11cm', marginLeft: '0cm' }}>
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: '',
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
export default withReducer('issuedReports', reducer)(IssuedReportChart)
