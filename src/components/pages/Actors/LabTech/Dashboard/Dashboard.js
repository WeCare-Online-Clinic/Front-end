import React, { useEffect } from 'react'
import DataCard from '../../../../DataCard/DataCard'
import { Grid, makeStyles } from '@material-ui/core'
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import { useSelector } from 'react-redux'
import IssuedReportChart from './Charts/IssuedReportChart'
import IssuedReportTypes from './Charts/IssuedReportTypes'

const useStyles = makeStyles({
    dataCard: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        marginBottom: '10px',
        marginTop: '10px',
      },
})

const Dashboard = () => {
    const classes = useStyles();
    const reducerData = useSelector(({ labData }) => labData.LabDashboard)
    useEffect(() => {

    }, [])

    return (

        <Grid container style={{ padding: '20px' }} spacing={5}>
            <Grid className={classes.dataCard} item sm={12}>
                <DataCard cardItems={reducerData.dataCardDetails} />
            </Grid>
            <Grid item sm={12}>
                {reducerData && (
                    <>
                        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
                            <Grid className={classes.dataCard} item sm={6}>
                                <IssuedReportTypes />
                            </Grid>
                            <Grid className={classes.dataCard} item sm={6}>
                                <IssuedReportChart />
                            </Grid>

                        </Grid>
                    </>
                )}
            </Grid>
        </Grid>


    )
}
export default withReducer('labData', reducer)(Dashboard)

