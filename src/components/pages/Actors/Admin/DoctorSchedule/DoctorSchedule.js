import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import ClinicDetails from '../../../../ClinicCard/ClincDetails'
import NurseProfileCard from '../../../../ProfileCard/NurseProfileCard'
import PageviewIcon from '@material-ui/icons/Pageview'
import {
    Button, TextField,
} from '@material-ui/core'
import DoctorProfileCard from '../../../../ProfileCard/DoctorProfileCard'

const useStyles = makeStyles({
    dataCard: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        margin: '20px',
        marginBottom: '0px',
    },
})

function DoctorSchedule() {
    const classes = useStyles()
    return (
        <div className="container">
            <div className="row">
                <Grid className={classes.grid} container justify='space-around'>
                    <Grid item sm></Grid>
                    <Grid
                        item
                        alignContent='center'
                        style={{ backgroundColor: '#3f51b5', borderRadius: '5px' }}
                    >
                        <form clasName={classes.root}>
                            <TextField
                                className={classes.search_items}
                                label='Doctor Name'
                                variant='outlined'
                                size='small'
                            ></TextField>
                            <TextField
                                className={classes.search_items}
                                label='Doctor ID'
                                variant='outlined'
                                size='small'
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
            </div>
            <div className="row">
                <div className="col">
                    <Grid item sm={12}>
                        <DoctorProfileCard />
                    </Grid>
                </div>
                <div className="col">
                    <Grid item sm={12}>
                        <ClinicDetails />
                    </Grid>
                </div>
            </div>




        </div>
    )
}

export default DoctorSchedule
