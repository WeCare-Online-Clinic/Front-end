import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  card:{
    width: '400px',
    height: '600px',
  },
  
  typography :{
    textAlign: 'center',
    height: '40px',
    paddingTop: '10px',
  },
  
  header:{
    background: '#3f51b5',
    height: '60px',
    
  },
  
  title : {
    color: 'white',
    textAlign:'right',
    paddingBottom: '12px',
    paddingRight:'30px',
  },
  
  listitem: {
    height: '40px',
  },
  
  primary : {
    width: '100px',
    textAlign: 'center',
  },
  
  secondary : {
    textAlign: 'left',
  },
  
  grid : {
    marginTop: '15px',
    marginBottom: '15px',
  },
  
  cardaction : {
    justifyContent: 'center',
  },
  
  label : {
    backgroundColor: 'orange',
    paddingLeft: '5px',
    paddingRight: '5px',
    color: 'white',
  },
      
      
  }))


export default function PatientProfileCard(props) {

  const patient = props.patient

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography className={classes.typography} color="textSecondary" >
        Patient Profile
      </Typography>
      <div className={classes.header}>
        <CardHeader 
          avatar={
            <Avatar className={classes.avatar} src="/static/images/avatar/1.jpg" />    
          }
          title={
            <Typography className={classes.title} color="textSecondary" >
              {patient.name}
            </Typography> 
          }
        />
      </div>
      <CardContent>
        <Grid container alignItems="center"  className={classes.grid}>
          <List  >
            <ListItem className={classes.listitem} >
              <ListItemText className={classes.primary} primary="Address " />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Phone " />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Email" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Gender" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Birth Date" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="NIC Number" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Registered Date" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Registered Date" />
            </ListItem>
          </List>

          <List>
            <ListItem className={classes.listitem} >
              <ListItemText className={classes.secondary} secondary={patient && patient.address} />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary={patient && patient.contact} />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary={patient && patient.email} />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary={patient && patient.gender == 'f' ? 'Female' : 'Male'} />
            </ListItem>
            <ListItem className={classes.listitem} >
              <ListItemText className={classes.secondary} secondary={patient && patient.birthdate.slice(0, patient.birthdate.indexOf("T"))} />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary={patient && patient.nic} />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary={patient && patient.registeredDate.slice(0, patient.registeredDate.indexOf("T"))} />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary={patient && patient.id} />
            </ListItem>
          </List>
        </Grid>
      </CardContent>
      
      {/* <CardActions className={classes.cardaction}>
        <Button variant="contained" color="primary" className={classes.label}>Update</Button>
      </CardActions> */}

    </Card>
  );
  
}





