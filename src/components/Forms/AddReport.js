import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 550,
        marginLeft:300,
        marginTop:50,
        '& > * + *': {
          marginTop: theme.spacing(2),
         
        },
      },
   textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
   
  },
  TextareaAutosize: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
   
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

}));

export default function Register() {

  const classes = useStyles();
  const [value, setValue] = React.useState('female');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  const [clinic, setClinic] = React.useState('');
  const [open, setOpen] = React.useState(false);
  
  const handleSelect = (event) => {
    setClinic(event.target.value);
  };

  
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <Card className={classes.root}>
        <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
          New Report
        </Box>
        <div>
            <Box fontSize="h6.fontSize" m={1}>Report Name</Box>
                <TextField
                    id="standard-full-width"
                    style={{ margin:10 }}
                    placeholder="Report Name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />

            <Box fontSize="h6.fontSize" m={1}>Field 1</Box>
                <TextField
                    id="standard-full-width"
                    style={{ margin:10 }}
                    placeholder="Field 1 name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />

            <Box fontSize="h6.fontSize" m={1}>Field 2</Box>
                <TextField
                    id="standard-full-width"
                    style={{ margin:10 }}
                    placeholder="Field 2 name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />

            <Box fontSize="h6.fontSize" m={1}>Field 3</Box>
                <TextField
                    id="standard-full-width"
                    style={{ margin:10 }}
                    placeholder="Field 3 name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
        </div> 

        <div>
            <Box fontSize="h6.fontSize" m={1}>Field 4</Box>
                <TextField
                    id="standard-full-width"
                    style={{ margin:10 }}
                    placeholder="Field 4 name"
                    // helperText="If have!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>

            <div>
            <Box fontSize="h6.fontSize" m={1}>Field 5</Box>
                <TextField
                    id="standard-full-width"
                    style={{ margin:10 }}
                    placeholder="Field 5 name"
                    // helperText="If have!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>

            <div align="center">
                <Button variant="contained" color="primary" >
                    Create
                </Button>
      
            </div>
       </Card>
  );
}