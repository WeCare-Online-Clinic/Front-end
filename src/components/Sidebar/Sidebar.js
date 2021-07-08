import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import logo from '../assets/img/logo.png'
import { useHistory } from 'react-router-dom'

const sidebarWidth = '240px'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: sidebarWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: sidebarWidth,
  },
  listItem: {
    backgroundColor: '#3f51b5',
    color: '#fff',
    minHeight: '60px',
    '&:hover': {
      backgroundColor: '#4c5355',
    },
  },
  sbListitem: {
    paddingLeft: '70px',
    backgroundColor: '#e3e8e9',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
}))

const Sidebar = (props) => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor='left'
    >
      <div className={classes.toolbar} />
      <Divider />
      <List style={{ minWidth: 'inherit' }}>
        <ListItem style={{ height: '100px' }}>
          <div
            style={{
              display: 'flex',
              paddingLeft: '60px',
            }}
          >
            <img src={logo} style={{ width: '80px' }} />
          </div>
        </ListItem>
        <Divider />
        {props.menuItems.map((item) => {
          return item.children ? (
            <React.Fragment>
              <ListItem className={classes.listItem} key={item.name}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItem>
              {item.children.map((child) => (
                <ListItem
                  button
                  key={child.name}
                  className={classes.sbListitem}
                  onClick={() => history.push(child.url)}
                >
                  <ListItemText>{child.name}</ListItemText>
                </ListItem>
              ))}
              <Divider />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <ListItem
                button
                key={item.name}
                className={classes.listItem}
                onClick={() => history.push(item.url)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          )
        })}
      </List>
    </Drawer>
  )
}

export default Sidebar
