import { size } from 'lodash';
import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import withReducer from '../../../../../../store/withReducer'
import reducer from '../store/reducer/index'
import { makeStyles } from '@material-ui/styles'
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

const UserTypeChart = () => {
  const reducerData = useSelector(({ userType }) => userType.adminDashboard);
  const adminDataItems = reducerData.userCounts;
  console.log("admin data items in usertype:", adminDataItems);
  const materializeUIClasses = useStyles();
  let usersData = [];
  adminDataItems && adminDataItems.map((users) => {
    usersData.push(users.value);
  })
  const state = {
    labels: ['Patients', 'Doctors', 'Nurses', 'Lab Technicans'],
    datasets: [
      {
        // label: 'Rainfall',
        backgroundColor: [
          '#28B1D6',
          '#66F1BD',
          '#00ff00',
          '#C1C2AD',

        ],
        hoverBackgroundColor: [
          '#2771D6',
          '#6771BD',
          '#077f00',
          '#C772AD',
        ],
        data: usersData
      }
    ]
  }
  {
    return (
      <Card>
        <CardHeader title={"Registered User Types"} style={{ backgroundColor: 'rgba(0,0,205,0.5)', opacity: '0.9', textAlign: 'center' }} classes={{ title: materializeUIClasses.headerTitle }} ></CardHeader>
        <CardContent>

          <div className="mt-3 mb-3 " style={{ width: "10cm", height: "10cm", marginLeft: '6cm' }}>

            <Pie
              data={state}
              options={{
                responsive: true,
                maintainAspectRatio: false,

              }}
            />

          </div>
        </CardContent>
      </Card>
    );
  }
}
export default withReducer('userType', reducer)(UserTypeChart);