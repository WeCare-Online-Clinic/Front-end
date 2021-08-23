import React from 'react'
import { useState, useEffect } from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { labtechMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import withReducer from '../../../../../../store/withReducer';
import reducer from '../store/reducer/index';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from "../store/actions/ReportAction";
import LabReportTable from '../LabReportTable'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
    marginTop: '10px',
  },
})

function ViewLabReport() {

    const reducerData = useSelector(({report}) => report.manageReport);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Actions.getReport());
    
    }, [])

  return (
    <Layout
      header={<Header user='Mr. Mahesh Withanage' />}
      sidebar={<Sidebar menuItems={labtechMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
          <Content />
        </div>
      }
    ></Layout>
  )
}

function Content() {

  return (
    <Grid container style={{ padding: '20px' }} spacing={5}>
      <Grid className={classes.dataCard} item sm={12}>
        <LabReportTable />
      </Grid>
    </Grid>
  )
}

export default withReducer('report', reducer)(ViewLabReport);