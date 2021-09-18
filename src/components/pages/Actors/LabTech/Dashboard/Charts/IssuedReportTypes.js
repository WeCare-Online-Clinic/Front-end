import React from 'react'
import { Pie } from 'react-chartjs-2'
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


const IssuedReportTypes = () => {
  const reducerData = useSelector(({ reportTypes }) => reportTypes.LabDashboard)
  if (!reducerData) {
    window.location.reload()
  }
  const reportTypesCount = reducerData.reportTypesCount
  const materializeUIClasses = useStyles()
  let state = []

    
      {
        state = {
          labels: [
            'FBC ',
            'Bio Chemistry',
            'Diagnoscic test',
            'Iron-Deficiency-Anemia Test'
          ],
          datasets: [
            {
              label: 'Number of Isuued Reports',
              backgroundColor: ['#66F1BD', '#28B1D6', '#C1C2AD','#00ff00'],
              hoverBackgroundColor: [
                '#6771BD',
                '#2771D6',
                '#C772AD',
                '#077f00',
              ],
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 0.2,
              data: reportTypesCount,
            },
          ],
        }
      }
   



  {
    return (
      <Card>
        <CardHeader
          title={`Issued Report Types`}
          style={{ backgroundColor: '#145da0', textAlign: 'center' }}
          classes={{ title: materializeUIClasses.headerTitle }}
        ></CardHeader>
        <CardContent>
          <div style={{ width: '17cm', height: '11cm', marginLeft: '2cm' }}>
            <Pie
              data={state}
              height='90%'
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  datalabels: {
                    formatter: (value) => {
                      return value + '%'
                    },
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
export default withReducer('reportTypes', reducer)(IssuedReportTypes)
