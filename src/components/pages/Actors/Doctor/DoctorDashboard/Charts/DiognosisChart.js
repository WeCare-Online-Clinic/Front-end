import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import withReducer from '../../../../../../store/withReducer'
import reducer from '../store/reducer/index'
import { makeStyles } from '@material-ui/styles'
import { getStorageItem } from '../../../../../../utils/StorageUtils'
import {
  Card,
  CardContent,
  CardHeader

} from '@material-ui/core'

const useStyles = makeStyles({

  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignContent: 'center',
    color: 'black'

  }
});
const doctor = getStorageItem('doctorInfo', true);
const clinicId = doctor.clinic.id;
console.log("clinicId in dig chart ", clinicId);


const DiognosisChart = () => {
  const reducerData = useSelector(({ diognosis }) => diognosis.doctorDashboard);
  const diognosisCount = reducerData.diognosisCount;
  const materializeUIClasses = useStyles();
  let state=[];
  switch (clinicId) {
    case 1:
      {
        state = {
          labels: ['Coronary Heart Disease', 'Peripheral Heart Disease', 'Rheumatic Heart Disease'],
          datasets: [
            {
              label: 'Number of Patients',
              backgroundColor: [
                'rgba(75,192,192,0.5)',
                'rgba(0,0,205,0.5)',
                'rgba(75,192,192,0.5)',

              ],
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 0.2,
              data: diognosisCount
            }
          ]
        }
      }
      break
    case 2:
      {
         state = {
          labels: ['Peptic Ulcer Disease', 'Crohn’s Disease'],
          datasets: [
            {
              label: 'Number of Patients',
              backgroundColor: [
                'rgba(75,192,192,0.5)',
                'rgba(0,0,205,0.5)',

              ],
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 0.2,
              data: diognosisCount
            }
          ]
        }

      }
      break
    default: {
          state=[];
    }
  }

  {
    return (
      <Card >
        <CardHeader title={"Diognosis Count"} style={{ backgroundColor: 'rgba(0,0,205,0.5)', margin: '0', opacity: '0.9', textAlign: 'center' }} classes={{ title: materializeUIClasses.headerTitle }}></CardHeader>
        <CardContent>
          <div style={{ width: "17cm", height: "11cm", marginLeft: '2cm' }}>
            <Bar
              data={state}           
              height="180%"

            //   options = {{
            //     scales: {
            //         // xAxes: [{
            //         //     barThickness : 24
            //         // }]
            //         xAxes: [{ barPercentage: 0.5 }]
            //     }
            // }}

            />
          </div>
        </CardContent>
      </Card>
    );
  }
}
export default withReducer('diognosis', reducer)(DiognosisChart);
