import React,{useEffect,useState} from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import OnlineUserTable from '../../../../Table/OnlineUsersTable'
import LineStatCard from '../../../../StatCard/LineStatCard'
import DataCard from './DataCard';
import {useSelector} from 'react-redux';
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'


const useStyles = makeStyles({
    dataCard: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        margin: '20px',
        marginBottom: '0px',
    },
})


function AdminDashboard(){
    const reducerData = useSelector(({ adminData }) => adminData.adminDashboard);

    const adminDataItems =reducerData.userCounts;
    const classes = useStyles() ;
   
    return (
        <div>
            
            <Grid container spacing={5}>
                <Grid className={classes.dataCard} item sm={12}>
                    <DataCard cardItems={adminDataItems} />
                </Grid>
                <Grid item sm={12}>
                    <Grid container style={{ marginBottom: '10px' }} spacing={5}>
                        <Grid className={classes.dataCard} item sm={4}>
                            <OnlineUserTable />
                        </Grid>
                        <Grid className={classes.dataCard} item sm={7}>
                            <LineStatCard title='Online Users' />
                            <LineStatCard title='Registered Users' />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )

}

export default withReducer('adminData', reducer)(AdminDashboard);
