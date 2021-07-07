import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import BarChartIcon from '@material-ui/icons/BarChart'
import PersonIcon from '@material-ui/icons/Person'
import ScheduleIcon from '@material-ui/icons/Schedule'
import SendIcon from '@material-ui/icons/Send'

export const doctorMenuItems = [
  {
    icon: <DashboardIcon style={{ color: '#fff' }} />,
    name: 'Dashboard',
    url: '',
  },
  {
    icon: <PeopleIcon style={{ color: '#fff' }} />,
    name: 'Patients',
    url: '',
    children: [
      {
        name: 'View Patients',
      },
    ],
  },
  {
    icon: <AssignmentIndIcon style={{ color: '#fff' }} />,
    name: 'Consultation',
    url: '',
  },
  {
    icon: <BarChartIcon style={{ color: '#fff' }} />,
    name: 'Statistics',
    url: '',
    children: [
      {
        name: 'Yearly',
        url: '',
      },
      {
        name: 'Monthly',
        url: '',
      },
    ],
  },
]

export const adminMenuItems = [
  {
    icon: <PersonIcon style={{ color: '#fff' }} />,
    name: 'Manage Doctors',
    url: '',
    children: [
      {
        name: 'View Doctors',
        url: '',
      },
      {
        name: 'Register Doctors',
        url: '',
      },
    ],
  },
  {
    icon: <PersonIcon style={{ color: '#fff' }} />,
    name: 'Manage Nurses',
    url: '',
    children: [
      {
        name: 'View Nurses',
        url: '',
      },
      {
        name: 'Register Nurse',
        url: '',
      },
    ],
  },
  {
    icon: <ScheduleIcon style={{ color: '#fff' }} />,
    name: 'Doctor Schedule',
    url: '',
  },
  {
    icon: <ScheduleIcon style={{ color: '#fff' }} />,
    name: 'Nurse Schedule',
    url: '',
  },
  {
    icon: <SendIcon style={{ color: '#fff' }} />,
    name: 'Send Notifications',
    url: '',
  },
]
