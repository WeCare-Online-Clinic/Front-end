import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
        maxWidth: 450,
        marginLeft:1500,
       

        '& > * + *': {
          marginTop: theme.spacing(2),
         
        },
      },
  '@global': {
    body: {
      backgroundColor: theme.palette.background.paper,
    },
  }, 
}));

export default function Notification() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Card className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" >
              Notification
            </Typography>
          </Toolbar>
        </AppBar>
        <Alert onClose={() => {}}  severity="info" >
          <AlertTitle variant="h6" display="flex">Mr.Rathnayake</AlertTitle>
            This is an info alert — <strong>New   </strong>
              <Button variant="contained" color="primary">
                Accept
              </Button> <tab /><tab />
                <Button variant="contained" color="secondary">
                Reject
              </Button>
          </Alert>

          <Alert onClose={() => {}}  severity="info" >
          <AlertTitle variant="h6" display="flex">Mr.Rathnayake</AlertTitle>
            This is an info alert — <strong>New   </strong>
              <Button variant="contained" color="primary">
                Accept
              </Button> <tab /><tab />
                <Button variant="contained" color="secondary">
                Reject
              </Button>
          </Alert>
   </Card>
 </React.Fragment>
  );
}
