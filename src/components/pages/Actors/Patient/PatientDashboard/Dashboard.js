import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import LineStatCard from '../../../../StatCard/LineStatCard'
import ClinicInfoCard from './ClinicInfoCard'
import ClinicDataCard from '../../../../ClinicCard/ClinicDataCard'
const useStyles = makeStyles({
    dataCard: {
      backgroundColor: '#fff',
      borderRadius: '5px',
      marginBottom: '10px',
      marginTop: '10px',
    },
  })

const Dashboard = (props) => {
    const patient=props.patient;
    const classes = useStyles()
    return (
        <Grid
            container
            style={{ paddingLeft: '20px', paddingRight: '20px' }}
            spacing={5}
        >
            <Grid className={classes.dataCard} item sm={12}>
                <Grid container>
                    <Grid item sm={4}>
                        <ClinicInfoCard />
                    </Grid>
                    <Grid item sm={8}>
                        <ClinicDataCard patient={patient} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={12}>
                <Grid container style={{ marginBottom: '10px' }} spacing={5}>
                    <Grid className={classes.dataCard} item sm={6}>
                        <LineStatCard title='Attribute 1' />
                    </Grid>
                    <Grid className={classes.dataCard} item sm={6}>
                        <LineStatCard title='Attribute 2' />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Dashboard
