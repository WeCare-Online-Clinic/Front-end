import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { labtechMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import LabProfileCard from '../../../ProfileCard/LabProfileCard'
import ScheduleTable from '../../../Table/ScheduleTable'
import ClinicHistoryTable from '../../../Table/ClinicHistoryTable'
import { getStorageItem } from '../../../../utils/StorageUtils'
 

const labTechDetails= getStorageItem('labTechInfo', true);

const useStyles = makeStyles({
  dataCard: {
    borderRadius: '5px',
  },
})

function Profile() {
  return (
    <Layout
      header={<Header user={labTechDetails.name} />}
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
  const classes = useStyles()
  return (
    <Grid container spacing={5}>
      <Grid item sm={4}>
        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
          <Grid className={classes.dataCard} item sm={12}>
            <LabProfileCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Profile
