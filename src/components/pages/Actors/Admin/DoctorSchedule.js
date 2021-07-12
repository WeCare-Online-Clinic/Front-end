import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { adminMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import ClinicDetails from '../../../ClinicCard/ClincDetails'
import DoctorProfileCard from '../../../ProfileCard/DoctorProfileCard'
import PageviewIcon from '@material-ui/icons/Pageview'
import {Button,TextField,
  } from '@material-ui/core'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    margin: '20px',
    marginBottom: '0px',
  },
})

function DoctorSchedule() {
  return (
    <Layout
      header={<Header user='Kasun' />}
      sidebar={<Sidebar menuItems={adminMenuItems} />}
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
        <Grid  container justify='space-around'>
         
          <Grid
            item
            alignContent='center'
            style={{  borderRadius: '5px' }}
          >
            <form clasName={classes.root}>
              <TextField
                className={classes.search_items}
                label='Doctor Name'
                variant='outlined'
                style={{ margin: '10px' }}
              ></TextField>
              <TextField
                className={classes.search_items}
                label='Doctor ID'
                variant='outlined'
                style={{ margin: '10px' }}
              ></TextField>
              <TextField
                className={classes.search_items}
                label='Clinic'
                variant='outlined'
                style={{ margin: '10px' }}
              ></TextField>
              <Button
                startIcon={<PageviewIcon />}
                variant='contained'
                size='large'
                color='secondary'
                style={{ margin: '10px' }}
              >
                Search
              </Button>
            </form>
          </Grid>
        </Grid>
    <Grid  item sm={6}>
       <DoctorProfileCard />
    </Grid>
    <Grid  item sm={6}>
      <ClinicDetails />
    </Grid>
    </Grid>
  )
}

export default DoctorSchedule