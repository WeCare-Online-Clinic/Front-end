import React,{useEffect,useState} from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import UserTypeChart from './Charts/UserTypeChart'
import DataCard from './DataCard';
import {useSelector} from 'react-redux';
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import RegUsersChart from './Charts/RegUsersChart';
import OnlineUsersTable from './OnlineUsers';


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
    // const onlineUsers =reducerData.onlineUsers;
    // console.log("online users",onlineUsers);
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
                            <OnlineUsersTable />
                        </Grid>
                        <Grid className={classes.dataCard} item sm={7}>
                            <RegUsersChart /> 
                            <hr  className="mt-5" style={{width:'100%',height:'1px'}}/>                          
                            <UserTypeChart  />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )

}

export default withReducer('adminData', reducer)(AdminDashboard);
