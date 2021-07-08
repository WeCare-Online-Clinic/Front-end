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
        maxWidth: 1000,
        marginLeft:340,
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
          Register
        </Box>
        <div>
            <Box fontSize="h6.fontSize" m={1}>Patient Name</Box>
                <TextField
                    id="standard-full-width"
                    style={{ margin:10 }}
                    placeholder="Patient Name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />

            <Box fontSize="h6.fontSize" m={1}>Address</Box>
                <TextField
                    id="standard-full-width"
                    style={{ margin:10 }}
                    placeholder="Adress"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />

            <Box fontSize="h6.fontSize" m={1}>Contact No:</Box>
                <TextField
                    id="standard-full-width"
                    style={{ margin:10 }}
                    placeholder="Contact No"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />

            <Box fontSize="h6.fontSize" m={1}>Email</Box>
                <TextField
                    id="standard-full-width"
                    style={{ margin:10 }}
                    placeholder="e-mail"
                    helperText="If have!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
        </div> 
     
        <Grid container>
        <Grid item xs={6}> 
        
        <div>
            <Box fontSize="h6.fontSize" m={1}>Date of Birth</Box>
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
        </div>
        <div>
            <Box fontSize="h6.fontSize" m={1}>Gender</Box>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
        </div>
        
        </Grid>
        <Grid item xs={6}> 

        <div>
            <Box fontSize="h6.fontSize" m={1}>Nic</Box>
                <TextField
                    id="standard-full-width"
                    style={{ margin:10 }}
                    placeholder="Nic"
                    // helperText="If have!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
        </div>

        <div>
            <Box fontSize="h6.fontSize" m={1}>Clinic Category</Box>
                <FormControl className={classes.formControl}>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={clinic}
                        onChange={handleSelect}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>ENT Clinic</MenuItem>
                            <MenuItem value={20}>Dermatology Clinic</MenuItem>
                            <MenuItem value={30}>Surgery Clinic</MenuItem>
                            <MenuItem value={40}>Cardiology Clinic</MenuItem>
                            <MenuItem value={50}>Dental Clinic</MenuItem>
                    </Select>
                </FormControl>
            </div>

            </Grid>
            </Grid>
            <div>
            <Box fontSize="h6.fontSize" m={1}>Special Notes</Box>
                <TextField
                    id="standard-full-width"
                    style={{ margin:10 }}
                    placeholder="Special Notes"
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
                    Register
                </Button>
      
            </div>
       </Card>
  );
}