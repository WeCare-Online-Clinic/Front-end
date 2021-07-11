import React from 'react';
import {Grid, makeStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(20),
        // marginLeft:320,
        // marginRight:320,
        flexDirection: 'column',
        
      },

      textfeild: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
          minWidth: 800,
        },
      },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Message() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Card className={classes.root}>
       <h3 style={{ color: '#000000' }} align='center'>Message</h3><br />  <br />  <br />  <br />
        <Grid className={classes.dataCard} item sm={12}>
            <Grid container>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="patient-native-simple">Patient</InputLabel>
                            <Select
                                native
                                value={state.patient}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'patient',
                                    id: 'patient-native-simple',
                                }}
                                >
                                <option aria-label="None" value="" />
                                <option value={10}>Mr.Amal</option>
                                <option value={20}>Ms.Silva</option>
                                <option value={30}>Mr.Abdul</option>
                            </Select>
                    </FormControl>
                </Grid><Grid item sm></Grid>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="nurse-native-simple">Nurse</InputLabel>
                            <Select
                                native
                                value={state.nurse}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'nurse',
                                    id: 'nurse-native-simple',
                                }}
                                >
                                <option aria-label="None" value="" />
                                <option value={10}>Ms.Perera</option>
                                <option value={20}>Ms.Jayalath</option>
                                <option value={30}>Ms.Pushpa</option>
                            </Select>
                    </FormControl>
                </Grid><Grid item sm></Grid>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="doctor-native-simple">Doctor</InputLabel>
                            <Select
                                native
                                value={state.doctor}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'doctor',
                                    id: 'doctor-native-simple',
                                }}
                                >
                                <option aria-label="None" value="" />
                                <option value={10}>Dr.Mrs.Chandra Jayasooriya</option>
                                <option value={20}>Dr.Chalukya Gunasekara</option>
                                <option value={30}>Dr. Dulip Perera</option>
                            </Select>
                    </FormControl>
                </Grid><Grid item sm></Grid>
      
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="clinic-native-simple">Clinic</InputLabel>
                            <Select
                                native
                                value={state.clinic}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'clinic',
                                    id: 'clinic-native-simple',
                                }}
                                >
                                <option aria-label="None" value="" />
                                <option value={10}>Dermatology Clinic</option>
                                <option value={20}>Neurology Clinic</option>
                                <option value={30}>Cardiology</option>
                            </Select>
                    </FormControl>  
                </Grid>
            </Grid>
            <br />  <br />  <br />  <br />
                <div align="center">
                    <form className={classes.textfeild} noValidate autoComplete="off">
                        <TextareaAutosize
                            rowsMin={8}
                            placeholder=''
                            defaultValue=''
                            style={{ width: "50%" }}
                            />
                    </form>
                    <Button variant="contained" color="primary" >Send</Button>
                </div>
            </Grid>
        </Card>
  );
}
