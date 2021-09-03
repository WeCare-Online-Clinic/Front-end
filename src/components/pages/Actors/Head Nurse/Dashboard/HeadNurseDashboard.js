import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import DataCard from '../../../../DataCard/DataCard'
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
const HeadNurseDataItems = [
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

const HeadNurseDashboard = () => {
    const classes = useStyles()
    return (
        <Grid container style={{ padding: '20px' }} spacing={5}>
            <Grid className={classes.dataCard} item sm={12}>
                <DataCard cardItems={HeadNurseDataItems} />
            </Grid>
            <Grid item sm={12}>
                <Grid container style={{ marginBottom: '10px' }} spacing={5}>
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
        </Grid >

    )
}

export default HeadNurseDashboard