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
import DashboardIcon from '@material-ui/icons/Dashboard'
import MenuIcon from '@material-ui/icons/Menu'

export default function Header() {
  return (
    <AppBar position='static' style={{ backgroundColor: '#fff' }}>
      <Toolbar>
        <Grid container>
          <Grid item>
            <IconButton color='primary' style={{ marginRight: '10px' }}>
              <HomeIcon />
            </IconButton>
            <IconButton color='primary' style={{ marginRight: '20px' }}>
              <DashboardIcon />
            </IconButton>
          </Grid>
          <Grid item sm></Grid>
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
