import React from 'react'
import {Line} from 'react-chartjs-2'
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



const PatientStaticChart = ({stat}) => {
  
  const materializeUIClasses = useStyles();
  let statLabels=[];
  let data1=[];
  let data2=[];
  
  let dataLength=stat.dataList && stat.dataList.length;
  for(var i=0; i<dataLength; i++){
    statLabels[i] = stat.dataList[i].date;    
  }
  for(var j=0; j<dataLength; j++){
    data1[j]=stat.dataList[j].data1;   
  }  
  for(var z=0; z<dataLength; z++){
    data2[z]=stat.dataList[z].data2;
  }  
  const state = {
    labels: statLabels,      
    datasets: [
      {
        label:`${stat.field1}` ,
        backgroundColor:  'rgba(75,192,192,0.5)',        
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 0.2, 
        fill: true, 
        data:data1
      },
      {
        label: `${stat.field2}` ,
        backgroundColor: 'rgba(0,0,205,0.5)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 0.2, 
        fill: true,       
        data:data2
      }
    ],
  }
  {
    return (
      <Card>
        <CardHeader
          title={stat.testName && stat.testName}
          style={{ backgroundColor: '#3f51b5', textAlign: 'center' }}
          classes={{ title: materializeUIClasses.headerTitle }}
        ></CardHeader>
        <CardContent>
          <div style={{ width: '19cm', height: '11cm', marginLeft: '0cm' }}>
            <Line
              data={state}
              // options={{
              //   title: {
              //     display: true,
              //     text: 'Average Rainfall per month',
              //     fontSize: 20,
              //   },
              //   legend: {
              //     display: true,
              //     position: 'right',
              //   },
              //   scales: {
              //     y: {
              //       beginAtZero: true,
              //     },
              //   },
              // }}
            />
          </div>
        </CardContent>
      </Card>
    )
  }
}
export default PatientStaticChart

