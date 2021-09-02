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


const PatientAgeDataChart = () => {
    const reducerData = useSelector(({ patientAge }) => patientAge.doctorDashboard);
    const patientAgeCountData = reducerData.patientAgeCount;
    const materializeUIClasses = useStyles();

    const state = {
        labels: ['under 10', '10-20', '20-30','30-40','40-50','50-60','60-70','70-80','greater than 80'],
        datasets: [
            {
                label: 'Number of Patients',
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

                ],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0.2,
                data: patientAgeCountData
            }
        ]
    }

    {
        return (
            <Card >
                <CardHeader title={"Patients ( Age )"} style={{ backgroundColor: 'rgba(0,0,205,0.5)', margin: '0', opacity: '0.9', textAlign: 'center' }} classes={{ title: materializeUIClasses.headerTitle }}></CardHeader>
                <CardContent>
                    <div style={{ width: "17cm", height: "11cm", marginLeft: '2cm' }}>
                        <Bar
                            data={state}
                            height="190%"

                        />
                    </div>
                </CardContent>
            </Card>
        );
    }
}
export default withReducer('patientAge', reducer)(PatientAgeDataChart);
