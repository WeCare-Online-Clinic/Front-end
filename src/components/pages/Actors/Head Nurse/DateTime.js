import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800,
        marginLeft:100,
        marginTop:50,
        '& > * + *': {
          marginTop: theme.spacing(2),
         
        },
      },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateTime() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <Box bgcolor="primary.main" color="primary.contrastText" p={2}>Change Date & Time</Box><br />  
    
     
        <Grid container spacing={1}>
            
            <Grid container item xs={6} spacing={3}>
                    <span className="input-group-text">Clinic</span>
                    <select>
                        <option value="0">Clinic Type</option>
                        <option value="1">Dentistry</option>
                        <option value="2">Dermatology</option>
                        <option value="3">Neurology</option>  
                    </select>
            </Grid>
            <Grid container item xs={6} spacing={3}>
            <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </Grid>
            </Grid>
            <br /><br />
            <div align="center">
            <Button variant="contained" color="primary" a>Send</Button>
            </div>
        <br />
    
    </Card>
  );
}
