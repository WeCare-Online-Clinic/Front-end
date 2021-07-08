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


export default function PatientProfileCard() {

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
              Mr. Tharush Silva
            </Typography>
          }
        />
      </div>
      <CardContent>
        <Grid container alignItems="center"  className={classes.grid}>
          <List  >
            <ListItem className={classes.listitem} >
              <ListItemText className={classes.primary} primary="Clinic ID" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Gender" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Age" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="NIC" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Address" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Contact No" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Email" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.primary} primary="Clinic" />
            </ListItem>
          </List>

          <List>
            <ListItem className={classes.listitem} >
              <ListItemText className={classes.secondary} secondary=":769P" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary=":Male" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary=":43" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary=":397465102v" />
            </ListItem>
            <ListItem className={classes.listitem} >
              <ListItemText className={classes.secondary} secondary=":No.2, Flower road, Kandy" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary=":0712325367" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary=":labtec@gmail.com" />
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemText className={classes.secondary} secondary=":cardiology Clinic" />
            </ListItem>
          </List>
        </Grid>
      </CardContent>
      
      <CardActions className={classes.cardaction}>
        <Button variant="contained" color="primary" className={classes.label}>Update</Button>
      </CardActions>

    </Card>
  );
  
}





