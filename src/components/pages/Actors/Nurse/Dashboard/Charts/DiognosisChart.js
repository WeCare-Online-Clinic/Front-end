import React from 'react';
import { Pie } from 'react-chartjs-2';
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
    color: 'white'

  }
});
const nurse = getStorageItem('nurseInfo', true);
const clinicId = nurse.clinic.id;
const clinicName=nurse.clinic.name;
console.log("clinicId in dig chart ", clinicId);


const DiognosisChart = () => {
  const reducerData = useSelector(({ ndiognosis }) => ndiognosis.nurseDashboard);
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
                '#66F1BD',
                '#28B1D6',
                '#F6C368',

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
        <CardHeader title={`Diognosis Of Patients In ${clinicName} Clinic`} style={{ backgroundColor: '#3f51b5', textAlign: 'center' }} classes={{ title: materializeUIClasses.headerTitle }}></CardHeader>
        <CardContent>
          <div style={{ width: "17cm", height: "11cm", marginLeft: '2cm' }}>
            <Pie
              data={state}           
              height="90%"  
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  datalabels: {
                    formatter: (value) => {
                      return value + '%';
                    }
                  }
                }

              }}
        

            />
          </div>
        </CardContent>
      </Card>
    );
  }
}
export default withReducer('ndiognosis', reducer)(DiognosisChart);
