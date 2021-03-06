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
        marginLeft:'100%',
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

export default function FullBld() {

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      
        <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
       FULL BLOOD COUNT
        </Box>

        <div>
        <Box bgcolor="text.secondary" color="background.paper" p={2}>
          WBC
        </Box>
        <br /> 
        <div> 
            <TextField
            id="outlined-full-width"
            label="WBC Count"
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
            DIFFERENTIAL COUNT
        </Box>
        <br /> 
        <div>
        <Grid container>
        <Grid item xs={3}>
        
        <TextField
          id="outlined-full-width"
          label="Neutrophils "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Lymphocytes "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          id="outlined-full-width"
          label="Eosinophils "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />  
        </Grid>
        <Grid item xs={3}>  
        <TextField
          id="outlined-full-width"
          label="Monocytes "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />   
      
        <TextField
          id="outlined-full-width"
          label="Basophils "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />   
         <TextField
          id="outlined-full-width"
          label="RBC Count "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </Grid>
        <Grid item xs={3}> 

        <TextField
          id="outlined-full-width"
          label="HB "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          id="outlined-full-width"
          label="PCV "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        

        <TextField
          id="outlined-full-width"
          label="MCV "
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </Grid>
        <Grid item xs={3}> 
        <TextField
          id="outlined-full-width"
          label="MCH"
          style={{ margin: 10 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="MCHC "
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
      
        <Box bgcolor="text.secondary" color="background.paper" p={2}>
          PLATELET
        </Box>
        <br /> 
        <Grid container>
        <Grid item xs={6}>
            <TextField
            id="outlined-full-width"
            label="Platetet Count"
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
            label="ESR"
            style={{ margin: 10 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        </Grid>
        <div align="center">
          <Button variant="contained" color="primary" align="center">
            Add Test
          </Button>
        </div>
            </div>
        
       </Card>
  );
}
