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
    textAlign:'center',
    fontWeight:'bold',
    alignContent:'center',
    color:'white'
    
  }
});



const ConsultedPatientChart = () => {
  const nurse = getStorageItem('nurseInfo', true);
  const clinicName=nurse.clinic.name
  const reducerData = useSelector(({ hconsultedPatients }) => hconsultedPatients.headNurseDashboard);
  const consultedPatients = reducerData.consultedPatientsData;
  const arraySize=consultedPatients.length;
  const dateArray=[];
  const countArray=[];

  for(let i=0; i<arraySize; i++){
            dateArray[i]=consultedPatients[i].clinicDate;
            countArray[i]=consultedPatients[i].count;
  }
  
  const materializeUIClasses = useStyles();
  const state = {
    labels:dateArray,
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
          'rgba(0,0,205,0.5)'

        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 0.2,
        data:countArray
      }
    ]
  }
  {
    return (
      <Card >
        <CardHeader title={"Visited Patients in Previous Clinics "} style={{ backgroundColor: '#3f51b5',textAlign: 'center' }} classes={{title: materializeUIClasses.headerTitle}}></CardHeader>
        <CardContent>
          <div style={{ width: "19cm", height: "11cm", marginLeft: '0cm', margRight: '1cm' }}>
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Rainfall per month',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'right'
                },
                scales: {
                  y: {
                    beginAtZero: true
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
export default withReducer('hconsultedPatients', reducer)(ConsultedPatientChart);
