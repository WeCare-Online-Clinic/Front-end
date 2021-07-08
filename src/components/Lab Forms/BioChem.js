import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        marginLeft:640,
        marginTop:50,
        '& > * + *': {
          marginTop: theme.spacing(2),
         
        },
      },
   textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
   
  },

}));

export default function BioChem() {

  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
        BIOCHEMICAL ANALYSIS
        </Box>
        <div>
        <Grid container>
          <Grid item xs={6}>
            <Box fontSize="h6.fontSize" m={1}>Patient ID</Box>
                <TextField
                    id="standard-full-width"
                    style={{ margin:10 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
          </Grid>
          <Grid item xs={6}>
            <Box fontSize="h6.fontSize" m={1}>Date</Box>
                <TextField
                    id="date"
                    type="date"
                    defaultValue="2021-07-4"
                    style={{ margin:10 }}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </Grid>
            </Grid>
            </div>
        <div>
        <Box bgcolor="text.secondary" color="background.paper" p={2}>
          FBS
        </Box>
        <br /> 
        <div> 
            <TextField
            id="outlined-full-width"
            label="Fasting Plasma Glucose"
            style={{ margin: 10 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        <br /> 
        <Box bgcolor="text.secondary" color="background.paper" p={2}>
        LIPID PROFILE
        </Box>
        <br /> 
        <div>
        <Grid container>
        <Grid item xs={6}>
        
        <TextField
          id="outlined-full-width"
          label="Total Cholestrol "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Trigiycerides "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          id="outlined-full-width"
          label="HDL-Cholestrol "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />   
        </Grid>
        <Grid item xs={6}> 

         <TextField
          id="outlined-full-width"
          label="LDL-Cholestrol "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="CHO/HDL "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="LDL/HDL "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
  
        </Grid>
        </Grid>
        <br />
         </div>
        <div align="center">
          <Button variant="contained" color="primary" align="center">
            Add Test
          </Button>
        </div>
            </div>
        
       </Card>
  );
}
