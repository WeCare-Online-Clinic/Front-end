import React from 'react'
import DataCard from '../../../../DataCard/DataCard'
import { Grid, makeStyles } from '@material-ui/core'
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import { useSelector } from 'react-redux';
import DiognosisChart from './Charts/DiognosisChart'
import PatientAgeDataChart from './Charts/PatientAgeDataChart'
import PatientsInClinicChart from './Charts/PatientsInClinicChart'
import ConsultedPatientChart from './Charts/ConsultedPatientChart'

const useStyles = makeStyles({
    dataCard: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        marginBottom: '10px',
        marginTop: '10px',
      },
})
const NurseDataItems = [
    {
        name: 'Lab Tests',
        value: 23,
    },
    {
        name: 'Lab Reports Added (Today)',
        value: 14,
    },
    {
        name: 'Lab Reports Issued (Month)',
        value: 145,
    },
    {
        name: 'Lab Reports To Be Issued',
        value: 45,
    },
]

const NurseDashboard = () => {
    const classes = useStyles()
    return (
        <Grid container style={{ padding: '20px' }} spacing={5}>
            <Grid className={classes.dataCard} item sm={12}>
                <DataCard cardItems={NurseDataItems} />
            </Grid>
            <Grid item sm={12}>
                <Grid container style={{ marginBottom: '10px' }} spacing={3}>
                    <Grid className={classes.dataCard} item sm={6}>
                        <DiognosisChart />
                    </Grid>
                    <Grid className={classes.dataCard} item sm={6}>
                        <PatientAgeDataChart />
                    </Grid>
                    <Grid className={classes.dataCard} item sm={6}>
                        <PatientsInClinicChart />
                    </Grid>
                    <Grid className={classes.dataCard} item sm={6}>
                        <ConsultedPatientChart />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default NurseDashboard
