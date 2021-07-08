import PropTypes from 'prop-types'
import React from 'react'
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Badge,
  Button,
  Link,
} from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import HomeIcon from '@material-ui/icons/Home'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import DashboardIcon from '@material-ui/icons/Dashboard'
import MenuIcon from '@material-ui/icons/Menu'
import { useHistory } from 'react-router'

export default function Header(props) {
  const history = useHistory()
  return (
    <AppBar position='static' style={{ backgroundColor: '#fff' }}>
      <Toolbar>
        <Grid container>
          <Grid item>
            <IconButton
              color='primary'
              style={{ marginRight: '10px' }}
              onClick={() => history.push('/')}
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              color='primary'
              style={{ marginRight: '20px' }}
              onClick={() => history.push('dashboard')}
            >
              <DashboardIcon />
            </IconButton>
            <IconButton
              color='primary'
              style={{ marginRight: '20px' }}
              onClick={() => history.goBack()}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              color='primary'
              style={{ marginRight: '20px' }}
              onClick={() => history.goForward()}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
          <Grid item sm></Grid>
          <Grid
            item
            style={{
              color: '#3f51b5',
              fontSize: '18px',
              padding: '10px',
            }}
          >
            Welcome {props.user}
          </Grid>
          <Grid item>
            <IconButton color='primary' style={{ marginRight: '10px' }}>
              <Badge badgeContent={1} color='secondary'>
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton color='primary' style={{ marginRight: '20px' }}>
              <AccountCircleOutlinedIcon />
            </IconButton>
            <Button
              variant='text'
              startIcon={<ExitToAppIcon />}
              color='primary'
              size='large'
            >
              Log Out
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
