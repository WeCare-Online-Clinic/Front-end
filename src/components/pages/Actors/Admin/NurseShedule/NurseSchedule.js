import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import ClinicDetails from '../../../../ClinicCard/ClincDetails'
import NurseProfileCard from '../../../../ProfileCard/NurseProfileCard'
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
function NurseSchedule() {
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
                  label='Nurse Name'
                  variant='outlined'
                  style={{ margin: '10px' }}
                ></TextField>
                <TextField
                  className={classes.search_items}
                  label='Nurse ID'
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
         <NurseProfileCard />
      </Grid>
      <Grid  item sm={6}>
        <ClinicDetails />
      </Grid>
      </Grid>
    )
}

export default NurseSchedule

