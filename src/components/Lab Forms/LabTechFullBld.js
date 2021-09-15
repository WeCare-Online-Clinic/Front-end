import React from 'react';
import TextField from '@material-ui/core/TextField';

import Box from '@material-ui/core/Box';
import {
  Card,
  CardHeader,
  CardContent,
  makeStyles
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginLeft: 10,
    '& > * + *': {
      marginTop: theme.spacing(2),

    },
  },
  cardHeader: {
    textAlign: 'center',
    color: '#fff',
    borderBottom: '1px solid #000',
    backgroundColor: '#3f51b5',
  },

}));

export default function FullBld() {

  const classes = useStyles();
  return (
    <Card className={classes.root}>

      <CardHeader
        title='Report Form'
        // subheader='Form'
        className={classes.cardHeader}
      ></CardHeader>



      <div align="center">
        <Button variant="contained" color="primary" align="center">
          Add Test
        </Button>
      </div>


    </Card>
  );
}
