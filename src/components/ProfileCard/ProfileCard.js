import React from 'react'
import './ProfileCard.css';
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


export default function ProfileCard() {
  
  return (
    <Card >
      <Typography  color="textSecondary" >
        Profile
      </Typography>

      <CardHeader
        avatar={
          <Avatar  src="/static/images/avatar/1.jpg" />    
        }
        title="Dr. Asanka perera"
      />
      
      <CardContent>
        <Grid container alignItems="center" >
          <List  >
            <ListItem >
              <ListItemText primary="ID" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Gender" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Age" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Qualifications" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Contact No" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Email" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Clinic" />
            </ListItem>
          </List>

          <List>
            <ListItem >
              <ListItemText secondary=":123456789" />
            </ListItem>
            <ListItem >
              <ListItemText secondary=":Female" />
            </ListItem>
            <ListItem >
              <ListItemText secondary=":22" />
            </ListItem>
            <ListItem >
              <ListItemText secondary=":MBBS" />
            </ListItem>
            <ListItem >
              <ListItemText secondary=":0712325367" />
            </ListItem>
            <ListItem >
              <ListItemText secondary=":doctor@gmail.com" />
            </ListItem>
            <ListItem >
              <ListItemText secondary=":Eye Clinic" />
            </ListItem>
          </List>
        </Grid>
      </CardContent>
      
      <CardActions>
        <Button >Update</Button>
      </CardActions>

    </Card>
  );
  
}





