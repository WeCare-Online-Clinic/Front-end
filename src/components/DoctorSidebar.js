import { ListItem, ListItemIcon, makeStyles } from '@material-ui/core'
import { Drawer, List } from '@material-ui/core'
import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import BarChartIcon from '@material-ui/icons/BarChart'
import { ListItemText } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles({
  ListItemClass: {
    minHeight: '80px',
    backgroundColor: '#e9eaec',
  },
  ListItemTitleClass: {
    minHeight: '80px',
    backgroundColor: '#333652',
    color: '#fff',
  },
})

function DoctorSidebar(props) {
  const { history } = props
  const itemList = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      onClick: () => history.push('/views/pages/login/login'),
    },
    {
      tag: 'title',
      text: 'Patients',
      icon: <PeopleIcon />,
    },
    {
      text: 'Consultation',
      icon: <AssignmentIndIcon />,
      onClick: () => history.push('/'),
    },
    {
      text: 'Consultation',
      icon: <AssignmentIndIcon />,
      onClick: () => history.push('/'),
    },
    {
      text: 'Statistics',
      icon: <BarChartIcon />,
      onClick: () => history.push('/'),
    },
  ]
  const classes = useStyles()
  return (
    <Drawer variant='permanent' style={{ minWidth: '240px' }}>
      <List style={{ padding: '0', minWidth: '240px' }}>
        <ListItem style={{ minHeight: '64px', backgroundColor: '#3f51b5' }}>
          <ListItemIcon>Icon</ListItemIcon>
        </ListItem>
        {itemList.map((item, index) => {
          const { tag, text, icon } = item
          if (tag == 'title') {
            return (
              <ListItem primary={text} className={classes.ListItemTitleClass}>
                <ListItemIcon color='primary'>{icon}</ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItem>
            )
          } else {
            return (
              <ListItem button primary={text} className={classes.ListItemClass}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItem>
            )
          }
        })}
      </List>
    </Drawer>
  )
}

export default withRouter(DoctorSidebar)
