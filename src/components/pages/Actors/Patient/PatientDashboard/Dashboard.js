import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import LineStatCard from '../../../../StatCard/LineStatCard'
import ClinicInfoCard from './ClinicInfoCard'
import PatientClinicDataCard from '../PatientClinicDataCard/PatientClinicDataCard'
import PatientStaticChart from './Charts/PatientStaticChart'
import { useSelector } from 'react-redux'
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer'
const useStyles = makeStyles({
    dataCard: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        marginBottom: '10px',
        marginTop: '10px',
    },
})

const Dashboard = (props) => {
    const patient = props.patient; 
    const classes = useStyles()
    const reducerData = useSelector(({ patientStatistics }) => patientStatistics.patientDashboard)
 
    return (
        <Grid
            container
            style={{ paddingLeft: '20px', paddingRight: '20px' }}
            spacing={5}
        >
            <Grid className={classes.dataCard} item sm={12}>
                <Grid container>
                    <Grid item sm={4}>
                        <ClinicInfoCard patient={patient} />
                    </Grid>
                    <Grid item sm={8}>
                        <PatientClinicDataCard patient={patient} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={12}>
                <Grid container style={{ marginBottom: '10px' }} spacing={5}>
                    {reducerData.patientStats && reducerData.patientStats
                        .map((stat, index) => (
                            <React.Fragment>
                                <Grid className={classes.dataCard} item sm={6}>
                                    <PatientStaticChart  stat={stat}/>
                                </Grid>
                            </React.Fragment>
                        )
                        )}


                </Grid>
            </Grid>
        </Grid>
    )
}

export default withReducer('patientStatistics', reducer)(Dashboard)
